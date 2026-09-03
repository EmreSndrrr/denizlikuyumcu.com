"use server";

// Bilgi talep formunun sunucu tarafı. Ziyaretçinin doldurduğu form,
// bir Server Action ile buraya gelir; doğrulanır ve Resend üzerinden
// site sahibine e-posta olarak iletilir.
//
// Kişisel veri (ad, telefon, e-posta, mesaj) yalnızca talebi yanıtlamak
// için kullanılır; veritabanına yazılmaz, yalnızca e-posta olarak
// iletilir (bkz. /kvkk ve /gizlilik-politikasi).
//
// Ortam değişkenleri (bkz. .env.example):
//   RESEND_API_KEY   Resend API anahtarı (re_...). Yoksa e-posta
//                    gönderilmez, içerik sunucu loguna yazılır (geliştirme).
//   RESEND_FROM      Gönderen adresi. Varsayılan: "onboarding@resend.dev"
//                    (Resend'in alan adı doğrulaması gerektirmeyen adresi;
//                    yalnızca hesap sahibinin e-postasına teslim eder).
//   INFO_REQUEST_TO  Talebin gönderileceği e-posta. Varsayılan aşağıda.

import { KONULAR } from "@/lib/infoRequestConfig";

export type InfoRequestState = {
  ok: boolean;
  message: string;
  errors?: Partial<Record<"ad" | "telefon" | "eposta" | "mesaj" | "kvkk", string>>;
};

const TO = process.env.INFO_REQUEST_TO || "info@ventiajans.com";
const FROM = process.env.RESEND_FROM || "DenizliKuyumcu.com <onboarding@resend.dev>";

function str(formData: FormData, key: string): string {
  const v = formData.get(key);
  return typeof v === "string" ? v.trim() : "";
}

// Basit e-posta biçim kontrolü — kesin RFC değil, kaba bir elek.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendInfoRequest(
  _prevState: InfoRequestState,
  formData: FormData,
): Promise<InfoRequestState> {
  // Honeypot: gerçek kullanıcıya görünmeyen "website" alanı doluysa bot.
  if (str(formData, "website")) {
    return { ok: true, message: "Talebiniz alındı. En kısa sürede dönüş yapacağız." };
  }

  const ad = str(formData, "ad");
  const telefon = str(formData, "telefon");
  const eposta = str(formData, "eposta");
  const konuRaw = str(formData, "konu");
  const konu = (KONULAR as readonly string[]).includes(konuRaw) ? konuRaw : "Belirtilmedi";
  const mesaj = str(formData, "mesaj");
  const kvkk = formData.get("kvkk") === "on";

  const errors: InfoRequestState["errors"] = {};
  if (ad.length < 2) errors.ad = "Lütfen adınızı yazın.";
  if (ad.length > 100) errors.ad = "Ad çok uzun.";
  // Telefon: rakam, boşluk, +, -, parantez kabul; en az 10 rakam.
  const telDigits = telefon.replace(/\D/g, "");
  if (telDigits.length < 10 || telDigits.length > 15)
    errors.telefon = "Geçerli bir telefon numarası yazın.";
  if (eposta && !EMAIL_RE.test(eposta))
    errors.eposta = "E-posta adresi geçersiz görünüyor.";
  if (mesaj.length < 10) errors.mesaj = "Lütfen talebinizi biraz daha açıklayın (en az 10 karakter).";
  if (mesaj.length > 3000) errors.mesaj = "Mesaj çok uzun (en fazla 3000 karakter).";
  if (!kvkk) errors.kvkk = "Devam etmek için aydınlatma metnini onaylamanız gerekir.";

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: "Lütfen işaretli alanları düzeltin.", errors };
  }

  const subject = `Bilgi talebi: ${konu} — ${ad}`;
  const lines = [
    `Ad: ${ad}`,
    `Telefon: ${telefon}`,
    `E-posta: ${eposta || "(verilmedi)"}`,
    `Konu: ${konu}`,
    "",
    "Mesaj:",
    mesaj,
    "",
    "---",
    "Bu e-posta denizlikuyumcu.com bilgi talep formundan gönderildi.",
  ];
  const text = lines.join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Geliştirme ortamı: anahtar yoksa gerçekten göndermek yerine logla.
    console.warn(
      "[infoRequest] RESEND_API_KEY tanımlı değil — e-posta gönderilmedi. İçerik:\n" +
        text,
    );
    return {
      ok: true,
      message: "Talebiniz alındı. En kısa sürede dönüş yapacağız.",
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        subject,
        text,
        ...(eposta && EMAIL_RE.test(eposta) ? { reply_to: eposta } : {}),
      }),
      cache: "no-store",
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[infoRequest] Resend hatası:", res.status, detail);
      return {
        ok: false,
        message:
          "Talebiniz şu an gönderilemedi. Lütfen daha sonra tekrar deneyin veya iletişim sayfasındaki numaradan bize ulaşın.",
      };
    }

    return {
      ok: true,
      message: "Talebiniz alındı. En kısa sürede dönüş yapacağız.",
    };
  } catch (err) {
    console.error("[infoRequest] gönderim istisnası:", err);
    return {
      ok: false,
      message:
        "Talebiniz şu an gönderilemedi. Lütfen daha sonra tekrar deneyin veya iletişim sayfasındaki numaradan bize ulaşın.",
    };
  }
}
