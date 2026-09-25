"use client";

// Çerez onayının TEK kaynağı: hem bildirim çubuğu (CookieConsentBanner) hem
// de onaya bağlı servisler (GoogleAnalytics) buradan okur.
//
// Neden ayrı bir modül: Google Analytics artık YALNIZCA kullanıcı açıkça
// "Kabul Ediyorum" dediyse yükleniyor. Onay durumunu iki yerde ayrı ayrı
// okumak, ikisinin zamanla birbirinden kayması demek olurdu.

import { useSyncExternalStore } from "react";

export type ConsentState =
  // Kullanıcı açık onay verdi → onaya bağlı servisler yüklenebilir.
  | "accepted"
  // Kullanıcı reddetti → hiçbir izleme servisi yüklenmez.
  | "rejected"
  // Henüz seçim yapılmadı → bildirim çubuğu gösterilir.
  | "none"
  // Sunucuda veya hidrasyon sırasında: tarayıcı deposu okunamaz.
  // Bu durumda ne çubuk gösterilir ne de servis yüklenir; böylece
  // sunucu ve istemcinin ilk render'ı birebir aynı olur.
  | "unknown";

// v2: anahtar bilinçli olarak değiştirildi. Eski "cookie-consent" değeri,
// çerez politikasının "onaylayacağınız gerçek bir izleme çerezi
// bulunmuyor" dediği dönemde toplanmıştı — o onay, Google Analytics için
// geçerli bir rıza sayılamaz. Politikanın kendi taahhüdü de bu yönde:
// "çerez kullanan bir analitik servisi eklenirse tercih bildirimi buna
// göre yeniden gösterilecektir".
const STORAGE_KEY = "cookie-consent-v2";
const CHANGE_EVENT = "cookie-consent-change";

function oku(): ConsentState {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "accepted" || v === "rejected" ? v : "none";
  } catch {
    // localStorage kapalıysa (gizli sekme, katı gizlilik ayarları) onay
    // alınmış sayılmaz — izleme yüklenmez.
    return "none";
  }
}

// useSyncExternalStore getSnapshot'ı her render'da çağırabiliyor; her
// seferinde localStorage'a gitmemek için değeri önbellekliyoruz.
// Önbellek yalnızca gerçek bir değişiklikte (aşağıdaki olaylar) düşüyor.
let onbellek: ConsentState | null = null;

function anlikDurum(): ConsentState {
  if (onbellek === null) onbellek = oku();
  return onbellek;
}

function sunucuDurumu(): ConsentState {
  return "unknown";
}

function abone(cb: () => void): () => void {
  const tetik = () => {
    onbellek = null;
    cb();
  };
  window.addEventListener(CHANGE_EVENT, tetik);
  // Kullanıcı başka bir sekmede tercihini değiştirirse burası da uysun.
  window.addEventListener("storage", tetik);
  return () => {
    window.removeEventListener(CHANGE_EVENT, tetik);
    window.removeEventListener("storage", tetik);
  };
}

export function useConsent(): ConsentState {
  return useSyncExternalStore(abone, anlikDurum, sunucuDurumu);
}

// Onay geri alındığında daha önce yazılmış Google Analytics çerezlerini
// de siliyoruz. Yalnızca "bundan sonra yükleme" demek yetmezdi: kullanıcı
// reddettiği hâlde cihazında GA'nın kimlik çerezi durmaya devam ederdi.
//
// GA4 `_ga` ve `_ga_<ölçüm-kimliği>` çerezlerini kök alan adına (ör.
// ".denizlikuyumcu.com") yazar. Silme isteğinin yazılırkenki alan adı ve
// yol ile eşleşmesi gerektiği için hem tam ana makine adını hem de üst
// alan adlarını deniyoruz.
function gaCerezleriniSil() {
  let adlar: string[] = [];
  try {
    adlar = document.cookie
      .split(";")
      .map((c) => c.trim().split("=")[0])
      .filter((ad) => ad.startsWith("_ga"));
  } catch {
    return;
  }
  if (adlar.length === 0) return;

  const host = location.hostname;
  const parcalar = host.split(".");
  // "denizlikuyumcu.com" ve ".denizlikuyumcu.com" gibi olası tüm kapsamlar.
  const alanlar = new Set<string>(["", host, `.${host}`]);
  for (let i = 1; i < parcalar.length - 1; i++) {
    const ust = parcalar.slice(i).join(".");
    alanlar.add(ust);
    alanlar.add(`.${ust}`);
  }

  for (const ad of adlar) {
    for (const alan of alanlar) {
      const alanKismi = alan ? `; domain=${alan}` : "";
      document.cookie = `${ad}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT${alanKismi}`;
    }
  }
}

export function setConsent(choice: "accepted" | "rejected") {
  try {
    localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Yazamadıysak sessizce geç: en kötü ihtimalle bildirim bir sonraki
    // ziyarette tekrar görünür ve izleme yüklenmez (güvenli taraf).
  }
  if (choice === "rejected") gaCerezleriniSil();
  onbellek = null;
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

// Onayın GERİ ÇEKİLEBİLİR olması gerekiyor (KVKK m. 7). Footer'daki
// "Çerez Tercihleri" bağlantısı bunu çağırıyor: kayıt siliniyor, bildirim
// çubuğu yeniden çıkıyor ve Analytics bir sonraki sayfa yüklemesinde
// yüklenmiyor.
export function resetConsent() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // yoksay
  }
  // Seçim sıfırlandığı an izleme durmalı; mevcut çerezler de gitmeli.
  gaCerezleriniSil();
  onbellek = null;
  window.dispatchEvent(new Event(CHANGE_EVENT));
}
