"use client";

// Fiyat çeken tüm client component'lerin (PriceTicker, PriceMarquee,
// GoldCalculator, GoldVarietiesTable, DailyChangeTable, OnsAltinCard)
// ortak deseni: sunucudan gelen ilk veriyle başla, sonra periyodik olarak
// /api/prices'ı yokla. Bu hook o tekrar eden mantığı tek yerde topluyor
// ve "veri gecikmeli" durumunu izliyor — her bileşen bunu ayrı ayrı
// yeniden yazmak zorunda kalmıyor.

import { useEffect, useRef, useState } from "react";
import type { PriceSnapshot } from "@/lib/prices";

const POLL_INTERVAL_MS = 60_000;

// Kaynağın (Truncgil) KENDİ bildirdiği güncelleme zamanı ile şimdi
// arasındaki fark bunu aşarsa "Veri gecikmeli" gösterilir.
//
// ÖNEMLİ (canlıda ölçüldü): Truncgil kendi verisini ~15 DAKİKADA BİR
// güncelliyor (Update_Date hep çeyrek saat sınırında: 11:45:02, 12:00:02…).
// Eşik 15 dakika olduğunda her döngünün sonunda, her şey normal
// çalışırken rozet yanlışlıkla görünüyordu. 45 dakika = üç kaçırılmış
// kaynak döngüsü: normal ritimde ASLA tetiklenmez, ama gerçek bir
// kesintiyi (zamanlanmış görev durmuş, kaynak API çökmüş) yakalar.
const STALE_THRESHOLD_MS = 45 * 60 * 1000;

function isSourceStale(sourceUpdatedAt: string): boolean {
  const t = new Date(sourceUpdatedAt).getTime();
  return Number.isFinite(t) && Date.now() - t > STALE_THRESHOLD_MS;
}

export function useLivePrices<T = PriceSnapshot>(
  initialData: PriceSnapshot,
  select: (snapshot: PriceSnapshot) => T = (s) => s as unknown as T
) {
  const [data, setData] = useState<T>(() => select(initialData));
  // Sunucudan gelen ilk zaman damgası — yoklama başarısız olmaya devam
  // ederse kullanıcıya "en son ne zaman doğrulandı" bilgisini vermek için.
  const [lastSuccessAt, setLastSuccessAt] = useState(initialData.updatedAt);
  // Kaynağın kendi zaman damgası — "veri gecikmeli" eşiği buna göre
  // hesaplanır (data'nın select() sonrası şeklinden bağımsız tutuyoruz ki
  // hook her select fonksiyonuyla çalışsın).
  const [sourceUpdatedAt, setSourceUpdatedAt] = useState(initialData.sourceUpdatedAt);
  const [pollFailed, setPollFailed] = useState(false);
  const selectRef = useRef(select);
  // Render sırasında ref'e YAZMIYORUZ (React'in eşzamanlı render
  // modelinde güvenli değil) — bunun yerine her render sonrasında çalışan,
  // bağımlılık dizisi olmayan bir effect'te güncelliyoruz. Amaç: aşağıdaki
  // setInterval kapanışı her zaman EN GÜNCEL select fonksiyonunu
  // çağırsın, ama interval'ı select referansı değiştikçe yeniden
  // kurmayalım (60 saniyelik döngü kesintisiz devam etsin).
  useEffect(() => {
    selectRef.current = select;
  });

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
        setSourceUpdatedAt(fresh.sourceUpdatedAt);
        setPollFailed(false);
      } catch {
        // Ağ hatasında eski veriyi göstermeye devam ediyoruz ama kullanıcıyı
        // "bu artık en güncel olmayabilir" diye bilgilendiriyoruz.
        if (!cancelled) setPollFailed(true);
      }
    }, POLL_INTERVAL_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  // "Veri gecikmeli": ya yoklama başarısız oluyor, ya da kaynağın KENDİ
  // güncelleme zamanı eşiği aşmış — ikincisi, yoklama teknik olarak
  // başarılı olsa bile yakalanır (ör. zamanlanmış görev durmuş ama
  // veritabanı eskiyen kaydı sorunsuzca döndürmeye devam ediyor).
  const stale = pollFailed || isSourceStale(sourceUpdatedAt);

  return { data, stale, lastSuccessAt, sourceUpdatedAt };
}
