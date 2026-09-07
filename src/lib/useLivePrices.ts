"use client";

// Fiyat çeken tüm client component'lerin (PriceTicker, PriceMarquee,
// GoldCalculator, GoldVarietiesTable, DailyChangeTable, OnsAltinCard)
// ortak deseni: sunucudan gelen ilk veriyle başla, sonra periyodik olarak
// /api/prices'ı yokla. Bu hook o tekrar eden mantığı tek yerde topluyor
// ve "veri gecikmeli" durumunu izliyor — her bileşen bunu ayrı ayrı
// yeniden yazmak zorunda kalmıyor.

import { useEffect, useRef, useState } from "react";
import { STALE_THRESHOLD_MS, type PriceSnapshot } from "@/lib/prices";

const POLL_INTERVAL_MS = 60_000;

function isSourceStale(sourceUpdatedAt: string): boolean {
  const t = new Date(sourceUpdatedAt).getTime();
  return Number.isFinite(t) && Date.now() - t > STALE_THRESHOLD_MS;
}

// --- Yoklamaların modül düzeyinde birleştirilmesi -------------------------
//
// Anasayfada bu hook'u kullanan 18 bileşen var ve her biri KENDİ
// setInterval'ını kuruyordu: ziyaretçi başına dakikada 18 ayrı /api/prices
// isteği. Hepsi aynı anda mount olduğu için istekler de aynı ana yığılıyor,
// yani 18'i de tek bir yanıtın taşıyabileceği veriyi ayrı ayrı çekiyor.
//
// Aşağıdaki iki kapı bunu tek isteğe indiriyor: uçuştaki bir istek varsa
// yenisi açılmıyor (hepsi aynı Promise'i paylaşıyor), yeni tamamlanmış bir
// yanıt varsa kısa bir pencere boyunca o tekrar kullanılıyor. Bileşenlerin
// kendi interval'ları duruyor — davranış aynı, ağ trafiği 18'de 1.
const COALESCE_WINDOW_MS = 5_000;
let inFlight: Promise<PriceSnapshot> | null = null;
let sonYanit: PriceSnapshot | null = null;
let sonYanitZamani = 0;

function fiyatlariCek(): Promise<PriceSnapshot> {
  if (inFlight) return inFlight;
  if (sonYanit && Date.now() - sonYanitZamani < COALESCE_WINDOW_MS) {
    return Promise.resolve(sonYanit);
  }
  inFlight = (async () => {
    const res = await fetch("/api/prices", { cache: "no-store" });
    if (!res.ok) throw new Error(`status ${res.status}`);
    const fresh: PriceSnapshot = await res.json();
    sonYanit = fresh;
    sonYanitZamani = Date.now();
    return fresh;
  })().finally(() => {
    inFlight = null;
  });
  return inFlight;
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

    const yokla = async () => {
      try {
        const fresh = await fiyatlariCek();
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
    };

    // ÖNEMLİ: ilk yoklama HEMEN yapılıyor, 60 sn beklenmeden.
    // Sayfa HTML'i Vercel CDN'inde tutuluyor (bkz. page.tsx revalidate),
    // dolayısıyla ziyaretçiye gelen ilk boyama sunucu tarafında ÜRETİLDİĞİ
    // ANDAKİ veriyi taşıyor. Yalnızca setInterval kurulduğunda bu eski
    // değer tam bir dakika ekranda kalıyor ve yeterince eskiyse yanında
    // "Veri gecikmeli" rozeti de görünüyordu — veri aslında tazeyken.
    // Anında yoklama hem ekranı düzeltiyor hem de sunucudaki anlık görüntü
    // yakalamasını tetikliyor (bkz. api/prices/route.ts).
    void yokla();

    const id = setInterval(yokla, POLL_INTERVAL_MS);
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
