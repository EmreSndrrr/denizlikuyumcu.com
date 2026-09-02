"use client";

// İlk ziyarette ekranın altında beliren çerez tercihi bildirimi. Site şu an
// izleme/reklam amaçlı çerez KULLANMIYOR (bkz. /cerez-politikasi) — bu
// yüzden "Kabul Et"/"Reddet" bugün işlevsel olarak aynı sonucu verir
// (banner kapanır). Tercihi ileride eklenebilecek analitik/reklam
// çerezleri için şimdiden localStorage'da saklıyoruz ki o zaman kullanıcıya
// tekrar sormamıza gerek kalmasın.

import { useEffect, useState } from "react";
import { X } from "@phosphor-icons/react/dist/ssr";

const STORAGE_KEY = "cookie-consent";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      // localStorage kapalıysa (gizli sekme vb.) banner'ı hiç gösterme.
    }
  }, []);

  function respond(choice: "accepted" | "rejected") {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // Sessizce yoksay — en kötü ihtimalle banner bir sonraki ziyarette
      // tekrar görünür.
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface px-4 py-4 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex max-w-[1240px] flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="pr-6 text-sm text-muted">
          Bu site şu an ziyaretçi takibi için çerez kullanmıyor; yalnızca
          tema ve favori tercihiniz tarayıcınızda saklanıyor. Tercihinizi
          kaydetmemiz, ileride eklenebilecek isteğe bağlı çerezler için
          size tekrar sormamamızı sağlar. Ayrıntı:{" "}
          <a href="/cerez-politikasi" className="text-brand hover:underline">
            Çerez Politikası
          </a>
        </p>
        <div className="flex w-full shrink-0 items-center gap-2 sm:w-auto">
          <button
            type="button"
            onClick={() => respond("rejected")}
            className="min-h-11 flex-1 rounded-full border border-border px-4 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand sm:flex-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Reddet
          </button>
          <button
            type="button"
            onClick={() => respond("accepted")}
            className="min-h-11 flex-1 rounded-full bg-ink px-4 text-sm font-semibold text-surface transition-colors hover:bg-brand sm:flex-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Kabul Ediyorum
          </button>
          <button
            type="button"
            onClick={() => respond("rejected")}
            aria-label="Kapat"
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:text-ink sm:flex"
          >
            <X aria-hidden="true" size={16} weight="bold" />
          </button>
        </div>
      </div>
    </div>
  );
}
