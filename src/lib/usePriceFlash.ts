"use client";

// Fiyat listesi/tablosu güncellendiğinde HANGİ kalemlerin değiştiğini
// izleyip 650ms'lik bir "yeşil/kırmızı vurgu" (price-flash-up/down,
// bkz. globals.css) uygulanacak anahtar kümesini döndürür. Böylece bir
// fiyat güncellemesinde tüm tablo değil, sadece değişen hücreler kısaca
// parlar — PriceTicker ve GoldVarietiesTable arasında paylaşılan mantık.

import { useEffect, useRef, useState } from "react";

const FLASH_DURATION_MS = 650;

export function usePriceFlash(items: { key: string; sell: number }[]) {
  const prevRef = useRef<Record<string, number>>({});
  const [flashKeys, setFlashKeys] = useState<Record<string, "up" | "down">>({});

  useEffect(() => {
    const prev = prevRef.current;
    const next: Record<string, "up" | "down"> = {};
    for (const item of items) {
      const prevVal = prev[item.key];
      if (prevVal !== undefined && prevVal !== item.sell) {
        next[item.key] = item.sell > prevVal ? "up" : "down";
      }
    }
    prevRef.current = Object.fromEntries(items.map((i) => [i.key, i.sell]));

    if (Object.keys(next).length > 0) {
      setFlashKeys(next);
      const t = setTimeout(() => setFlashKeys({}), FLASH_DURATION_MS);
      return () => clearTimeout(t);
    }
    // İlk render'da (prev boş) hiçbir şey flaşlamamalı.
  }, [items]);

  return flashKeys;
}
