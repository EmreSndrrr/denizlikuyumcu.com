"use client";

// Sayfa paylaşım düğmeleri — rehberler, fiyat sayfaları ve anasayfa.
//
// Bilinçli olarak üçüncü taraf paylaşım WIDGET'ı (Facebook SDK, X
// widgets.js, AddThis vb.) KULLANILMIYOR:
//   - Bu betikler ziyaretçiye çerez yazar ve onu siteler arası izler. Site
//     yalnızca açık onayla Google Analytics yüklüyor (bkz. lib/consent.ts);
//     bir paylaşım widget'ı bu onay mekanizmasını sessizce baypas ederdi.
//   - Her biri ayrı bir ağ isteği ve ağır bir JS paketi getirir.
// Onların yerine yalnızca düz paylaşım adresleri kullanılıyor: kullanıcı
// tıklayana kadar hiçbir üçüncü tarafa istek gitmiyor.
//
// Mobilde tarayıcı Web Share API'sini destekliyorsa tek bir "Paylaş"
// düğmesi cihazın kendi paylaşım menüsünü açar (WhatsApp, Telegram,
// Instagram, SMS…); Türkiye'de fiyat paylaşımının asıl kanalı WhatsApp
// olduğu için o ayrıca her zaman görünür.

import { useState, useSyncExternalStore } from "react";
import {
  WhatsappLogo,
  XLogo,
  FacebookLogo,
  LinkSimple,
  ShareNetwork,
  Check,
} from "@phosphor-icons/react/dist/ssr";
import { trackEvent } from "@/lib/analytics";

const SITE = "https://denizlikuyumcu.com";

// Web Share API desteği yalnızca tarayıcıda bilinebilir. useSyncExternalStore
// ile sunucuda "yok" varsayılıyor; böylece sunucu ve istemcinin ilk render'ı
// aynı oluyor (hidrasyon uyuşmazlığı yok), destek varsa düğme hidrasyondan
// sonra beliriyor.
const bosAbone = () => () => {};
function useNativeShare(): boolean {
  return useSyncExternalStore(
    bosAbone,
    () => typeof navigator !== "undefined" && typeof navigator.share === "function",
    () => false,
  );
}

export default function ShareButtons({
  path,
  title,
  text,
  context,
  label = "Paylaş",
}: {
  // Site içi yol ("/rehber/..."). Tam adres burada kuruluyor ki önizleme
  // ortamlarında bile paylaşılan bağlantı kanonik alan adını göstersin.
  path: string;
  title: string;
  // WhatsApp/X mesajının gövdesi. Verilmezse başlık kullanılır.
  text?: string;
  // Analitikte hangi yüzeyden paylaşıldığı (ör. "rehber", "fiyat-sayfasi").
  context: string;
  label?: string;
}) {
  const native = useNativeShare();
  const [kopyalandi, setKopyalandi] = useState(false);

  const url = `${SITE}${path}`;
  const mesaj = text ?? title;

  const kaydet = (channel: string) => trackEvent("share_click", { channel, context });

  async function yerelPaylas() {
    kaydet("native");
    try {
      await navigator.share({ title, text: mesaj, url });
    } catch {
      // Kullanıcı menüyü kapattıysa (AbortError) veya paylaşım başarısızsa
      // yapılacak bir şey yok — aşağıdaki bağlantılar zaten görünür.
    }
  }

  async function kopyala() {
    kaydet("copy");
    try {
      await navigator.clipboard.writeText(url);
      setKopyalandi(true);
      window.setTimeout(() => setKopyalandi(false), 2000);
    } catch {
      // Pano izni yoksa sessizce geç; bağlantı adres çubuğunda zaten var.
    }
  }

  const bag = encodeURIComponent(url);
  const govde = encodeURIComponent(mesaj);
  const dugme =
    "inline-flex h-9 items-center gap-1.5 rounded-full border border-border px-3 text-xs font-medium text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label={label}>
      <span className="mr-1 text-xs font-medium text-muted">{label}:</span>

      {native && (
        <button type="button" onClick={yerelPaylas} className={dugme}>
          <ShareNetwork aria-hidden="true" size={15} weight="bold" />
          Paylaş
        </button>
      )}

      <a
        href={`https://wa.me/?text=${govde}%20${bag}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => kaydet("whatsapp")}
        className={dugme}
      >
        <WhatsappLogo aria-hidden="true" size={15} weight="fill" />
        WhatsApp
      </a>
      <a
        href={`https://x.com/intent/post?text=${govde}&url=${bag}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => kaydet("x")}
        className={dugme}
        aria-label="X'te paylaş"
      >
        <XLogo aria-hidden="true" size={14} weight="bold" />
        <span aria-hidden="true">X</span>
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${bag}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => kaydet("facebook")}
        className={dugme}
        aria-label="Facebook'ta paylaş"
      >
        <FacebookLogo aria-hidden="true" size={15} weight="fill" />
        <span aria-hidden="true">Facebook</span>
      </a>
      <button type="button" onClick={kopyala} className={dugme}>
        {kopyalandi ? (
          <Check aria-hidden="true" size={15} weight="bold" />
        ) : (
          <LinkSimple aria-hidden="true" size={15} weight="bold" />
        )}
        {/* aria-live: ekran okuyucu kullanıcısı kopyalamanın gerçekleştiğini
            duysun (görsel değişim tek başına yeterli değil). */}
        <span aria-live="polite">{kopyalandi ? "Kopyalandı" : "Bağlantıyı kopyala"}</span>
      </button>
    </div>
  );
}
