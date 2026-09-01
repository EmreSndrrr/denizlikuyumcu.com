"use client";

// Tema tercihi <html> üzerindeki "dark" sınıfıyla yönetiliyor (bkz.
// globals.css @custom-variant dark) ve localStorage'da saklanıyor.
// İlk boyamadan önceki senkron uygulama layout.tsx'teki THEME_INIT_SCRIPT
// ile yapılıyor — bu bileşen sadece kullanıcı tıkladığında değiştiriyor.

import { useEffect, useState } from "react";
import { Sun, Moon } from "@phosphor-icons/react/dist/ssr";

export default function ThemeToggle({
  variant = "icon",
}: {
  // "icon": header'daki kompakt yuvarlak buton (yalnızca lg+ masaüstünde
  // gösteriliyor — bkz. Header.tsx). "row": mobil menü panelindeki tam
  // genişlikte, etiketli satır — brief'in "tema seçimini mobil menü
  // alanına taşı, ikonlar header'da yarışmasın" isteğine karşılık geliyor.
  variant?: "icon" | "row";
}) {
  // Sunucu ile istemcinin ilk render'da aynı şeyi çizmesi için başlangıçta
  // bilinmiyor kabul ediyoruz; gerçek değeri mount olduktan sonra DOM'dan
  // okuyoruz (THEME_INIT_SCRIPT zaten class'ı hydrate'ten önce ayarlamıştı).
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // localStorage kapalıysa (gizli sekme vb.) sessizce yoksay.
    }
    setIsDark(next);
  }

  const label = isDark ? "Açık temaya geç" : "Koyu temaya geç";
  // Mount öncesi (isDark === null) sabit bir ikon gösteriyoruz ki sunucu
  // ve istemci ilk render'da aynı HTML'i üretsin (hydration uyuşmazlığı
  // olmasın); gerçek durum bir sonraki tick'te belirir.
  const icon = isDark ? (
    <Sun aria-hidden="true" size={variant === "row" ? 18 : 16} weight="bold" />
  ) : (
    <Moon aria-hidden="true" size={variant === "row" ? 18 : 16} weight="bold" />
  );

  if (variant === "row") {
    return (
      <button
        type="button"
        onClick={toggle}
        className="flex w-full min-h-11 items-center justify-between rounded-sm py-3 text-base font-medium text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        <span className="flex items-center gap-2">
          {icon}
          Görünüm
        </span>
        <span className="text-sm text-muted">{isDark ? "Koyu" : "Açık"}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      // 44x44 dokunma alanı (brief): görsel daire 36px kalsa da tıklanabilir
      // kutu en az 44px olsun diye h-11 w-11 kullanılıyor.
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-brand hover:text-brand active:scale-[0.92] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      {icon}
    </button>
  );
}
