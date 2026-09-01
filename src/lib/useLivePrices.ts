"use client";

// Fiyat çeken tüm client component'lerin (PriceTicker, PriceMarquee,
// GoldCalculator, GoldVarietiesTable, DailyChangeTable, OnsAltinCard)
// ortak deseni: sunucudan gelen ilk veriyle başla, sonra periyodik olarak
// /api/prices'ı yokla. Bu hook o tekrar eden mantığı tek yerde topluyor
// ve ayrıca "veri gecikmeli" durumunu (ardışık başarısız yoklamalar)
// izliyor — her bileşen bunu ayrı ayrı yeniden yazmak zorunda kalmıyor.

import { useEffect, useRef, useState } from "react";
import type { PriceSnapshot } from "@/lib/prices";

const POLL_INTERVAL_MS = 60_000;

export function useLivePrices<T = PriceSnapshot>(
  initialData: PriceSnapshot,
  select: (snapshot: PriceSnapshot) => T = (s) => s as unknown as T
) {
  const [data, setData] = useState<T>(() => select(initialData));
  // Sunucudan gelen ilk zaman damgası — yoklama başarısız olmaya devam
  // ederse kullanıcıya "en son ne zaman doğrulandı" bilgisini vermek için.
  const [lastSuccessAt, setLastSuccessAt] = useState(initialData.updatedAt);
  const [stale, setStale] = useState(false);
  const selectRef = useRef(select);
  selectRef.current = select;

  useEffect(() => {
    let cancelled = false;
    const id = setInterval(async () => {
      try {
        const res = await fetch("/api/prices", { cache: "no-store" });
        if (!res.ok) throw new Error(`status ${res.status}`);
        const fresh: PriceSnapshot = await res.json();
        if (cancelled) return;
        setData(selectRef.current(fresh));
        setLastSuccessAt(fresh.updatedAt);
        setStale(false);
      } catch {
        // Ağ hatasında eski veriyi göstermeye devam ediyoruz ama kullanıcıyı
        // "bu artık en güncel olmayabilir" diye bilgilendiriyoruz.
        if (!cancelled) setStale(true);
      }
    }, POLL_INTERVAL_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  return { data, stale, lastSuccessAt };
}
