"use client";

// Tema tercihi <html> üzerindeki "dark" sınıfıyla yönetiliyor (bkz.
// globals.css @custom-variant dark) ve localStorage'da saklanıyor.
// İlk boyamadan önceki senkron uygulama layout.tsx'teki THEME_INIT_SCRIPT
// ile yapılıyor — bu bileşen sadece kullanıcı tıkladığında değiştiriyor.

import { useEffect, useState } from "react";
import { Sun, Moon } from "@phosphor-icons/react/dist/ssr";

export default function ThemeToggle() {
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

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        isDark ? "Açık temaya geç" : "Koyu temaya geç"
      }
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-stone-200 text-stone-600 transition-colors hover:border-amber-400 hover:text-amber-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700 dark:border-stone-700 dark:text-stone-300 dark:hover:border-amber-500 dark:hover:text-amber-400"
    >
      {/* Mount öncesi (isDark === null) sabit bir ikon göster ki sunucu ve
          istemci ilk render'da aynı HTML'i üretsin (hydration uyuşmazlığı
          olmasın); gerçek durum bir sonraki tick'te belirir. */}
      {isDark ? (
        <Sun aria-hidden="true" size={16} weight="bold" />
      ) : (
        <Moon aria-hidden="true" size={16} weight="bold" />
      )}
    </button>
  );
}
