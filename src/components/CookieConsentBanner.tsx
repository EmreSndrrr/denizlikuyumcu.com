"use client";

// İlk ziyarette ekranın altında beliren çerez tercihi bildirimi.
//
// Artık gerçek bir tercih: "Kabul Ediyorum" Google Analytics 4'ü (ve
// yazdığı `_ga` çerezlerini) etkinleştirir, "Reddet" hiçbir izleme
// yüklenmemesini sağlar. Seçim yapılmadan da hiçbir şey yüklenmez —
// varsayılan reddetmektir.
//
// Tercih lib/consent.ts üzerinden okunup yazılıyor; GoogleAnalytics
// bileşeni aynı kaynağı dinlediği için seçim sayfa yenilenmeden anında
// geçerli oluyor.

import { X } from "@phosphor-icons/react/dist/ssr";
import { useConsent, setConsent } from "@/lib/consent";

export default function CookieConsentBanner() {
  const consent = useConsent();

  // "unknown": sunucu render'ı ve hidrasyon. Çubuğu burada göstermemek,
  // daha önce seçim yapmış ziyaretçilerde bir an görünüp kaybolmasını
  // önlüyor.
  if (consent !== "none") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface px-4 py-4 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex max-w-[1240px] flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="pr-6 text-sm text-muted">
          Ziyaretçi istatistiği için <strong className="font-medium text-ink">Google
          Analytics</strong> kullanmak istiyoruz; bu araç tarayıcınıza çerez
          yazar. Yalnızca siz kabul ederseniz yüklenir — reddederseniz veya
          seçim yapmazsanız hiçbir izleme çalışmaz. Tema ve favori
          tercihleriniz her hâlükârda yalnızca cihazınızda saklanır.
          Ayrıntı:{" "}
          <a href="/cerez-politikasi" className="text-brand hover:underline">
            Çerez Politikası
          </a>
        </p>
        <div className="flex w-full shrink-0 items-center gap-2 sm:w-auto">
          <button
            type="button"
            onClick={() => setConsent("rejected")}
            className="min-h-11 flex-1 rounded-full border border-border px-4 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand sm:flex-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Reddet
          </button>
          <button
            type="button"
            onClick={() => setConsent("accepted")}
            className="min-h-11 flex-1 rounded-full bg-ink px-4 text-sm font-semibold text-surface transition-colors hover:bg-brand sm:flex-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Kabul Ediyorum
          </button>
          {/* Kapatmak = reddetmek. Sessiz kapanış onay sayılmaz. */}
          <button
            type="button"
            onClick={() => setConsent("rejected")}
            aria-label="Kapat ve reddet"
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:text-ink sm:flex"
          >
            <X aria-hidden="true" size={16} weight="bold" />
          </button>
        </div>
      </div>
    </div>
  );
}
