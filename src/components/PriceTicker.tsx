"use client";

// "use client" direktifi bu dosyayı bir CLIENT component yapar — yani kod
// tarayıcıda çalışır ve useState/useEffect gibi interaktif React hook'ları
// kullanabilir. Sunucu component'leri (varsayılan) bunu yapamaz ama daha
// hızlıdır ve tarayıcıya kod göndermez. Kuralımız: veri en başta sunucuda
// çekilir (page.tsx -> getPrices), bu bileşene "initialData" olarak prop
// geçilir; sayfa ilk açıldığında boş/yükleniyor durumu görünmez. Sonrasında
// bu bileşen kendi başına /api/prices'ı periyodik olarak yoklayıp (polling)
// "canlı" hissi verir.
//
// Aynı bileşen hem "Altın Fiyatları" hem "Döviz Kurları" tablosu için
// kullanılıyor — `filterType` prop'u hangi kalemlerin gösterileceğini
// belirliyor, `title` ise başlığı.

import { useEffect, useState } from "react";
import { TrendUp, TrendDown } from "@phosphor-icons/react/dist/ssr";
import {
  filterSnapshot,
  MAIN_PRICE_TYPES,
  type PriceItem,
  type PriceSnapshot,
} from "@/lib/prices";
import { formatTL, formatTime } from "@/lib/format";

const POLL_INTERVAL_MS = 60_000;

export default function PriceTicker({
  initialData,
  title = "Güncel Altın ve Döviz Fiyatları",
  // Varsayılan: ana 8 kalem (6 altın + Dolar + Euro). "currency-extra"
  // gibi başka bir tip vermek istersen (örn. Yurtdışı Para Birimleri
  // bölümü) açıkça geçmen yeterli.
  filterType = MAIN_PRICE_TYPES,
}: {
  initialData: PriceSnapshot;
  title?: string;
  filterType?: PriceItem["type"] | PriceItem["type"][];
}) {
  const [data, setData] = useState(() => filterSnapshot(initialData, filterType));

  useEffect(() => {
    const id = setInterval(async () => {
      try {
        const res = await fetch("/api/prices", { cache: "no-store" });
        if (!res.ok) return;
        const fresh: PriceSnapshot = await res.json();
        setData(filterSnapshot(fresh, filterType));
      } catch {
        // Ağ hatasında sessizce eski veriyi göstermeye devam ediyoruz.
      }
    }, POLL_INTERVAL_MS);
    return () => clearInterval(id);
  }, [filterType]);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white shadow-sm dark:border-stone-800 dark:bg-stone-900">
      <div className="flex items-center justify-between border-b border-stone-200 px-5 py-3 dark:border-stone-800">
        <h2 className="text-sm font-semibold text-stone-900 dark:text-stone-50">
          {title}
        </h2>
        {/* Görsel olarak dekoratif bir zaman damgası; her 60 saniyede bir
            değiştiği için aria-live yapmıyoruz — aksi halde ekran okuyucu
            kullanıcıları dakikada bir gereksiz yere kesintiye uğrardı. */}
        <span className="flex items-center gap-1.5 text-xs text-stone-400">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse motion-reduce:animate-none"
          />
          {formatTime(data.updatedAt)} itibarıyla
        </span>
      </div>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-b-2xl bg-stone-100 sm:grid-cols-4 dark:bg-stone-800">
        {data.items.map((item) => {
          const isUp = item.changePercent >= 0;
          return (
            <div key={item.key} className="bg-white px-4 py-3 dark:bg-stone-900">
              <p className="text-xs text-stone-500 dark:text-stone-400">{item.label}</p>
              <p className="mt-1 text-base font-bold tabular-nums text-stone-900 dark:text-stone-50">
                {formatTL(item.sell)}
                <span className="ml-1 text-xs font-normal text-stone-400">
                  {item.unit}
                </span>
              </p>
              <p
                className={
                  "mt-0.5 flex items-center gap-1 text-xs font-medium tabular-nums " +
                  (isUp
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-red-600 dark:text-red-400")
                }
              >
                {isUp ? (
                  <TrendUp aria-hidden="true" size={14} weight="bold" />
                ) : (
                  <TrendDown aria-hidden="true" size={14} weight="bold" />
                )}
                {Math.abs(item.changePercent).toFixed(2)}%
              </p>
            </div>
          );
        })}
      </div>
      <p className="px-5 py-2 text-[11px] text-stone-400 dark:text-stone-600">
        Fiyatlar bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
      </p>
    </div>
  );
}
