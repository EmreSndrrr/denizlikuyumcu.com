"use client";

// "use client" direktifi bu dosyayı bir CLIENT component yapar — yani kod
// tarayıcıda çalışır ve useState/useEffect gibi interaktif React hook'ları
// kullanabilir. Sunucu component'leri (varsayılan) bunu yapamaz ama daha
// hızlıdır ve tarayıcıya kod göndermez. Kuralımız: veri en başta sunucuda
// çekilir (page.tsx -> getPrices), bu bileşene "initialData" olarak prop
// geçilir; sayfa ilk açıldığında boş/yükleniyor durumu görünmez. Sonrasında
// bu bileşen kendi başına /api/prices'ı periyodik olarak yoklayıp (polling)
// "canlı" hissi verir (useLivePrices hook'u, bkz. lib/useLivePrices.ts).
//
// Aynı bileşen hem "Altın Fiyatları" hem "Döviz Kurları" tablosu için
// kullanılıyor — `filterType` prop'u hangi kalemlerin gösterileceğini
// belirliyor, `title` ise başlığı.

import { useCallback } from "react";
import Link from "next/link";
import { TrendUp, TrendDown } from "@phosphor-icons/react/dist/ssr";
import {
  filterSnapshot,
  MAIN_PRICE_TYPES,
  type PriceItem,
  type PriceSnapshot,
} from "@/lib/prices";
import { formatTL, formatTime } from "@/lib/format";
import { useLivePrices } from "@/lib/useLivePrices";
import { usePriceFlash } from "@/lib/usePriceFlash";
import { getPriceHref } from "@/lib/priceContent";
import StaleBadge from "@/components/StaleBadge";
import AnimatedNumber from "@/components/AnimatedNumber";

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
  const select = useCallback(
    (s: PriceSnapshot) => filterSnapshot(s, filterType),
    [filterType]
  );
  const { data, stale } = useLivePrices(initialData, select);
  const flashKeys = usePriceFlash(data.items);

  // Izgara sütun sayısı öğe sayısına göre: sabit sütun sayısı kalanlı
  // bölünürse (ör. 8 öğeyi 3'e bölmek) son satırda gerçek bir hücre
  // olmayan, sadece konteynerin bg-border zeminini gösteren "hayalet" bir
  // boş kutu kalıyor — brief'in yasakladığı türden işlevsiz bir boşluk.
  // Bu yüzden tablet için ara 3'lü adım SADECE öğe sayısı 3'e tam
  // bölünüyorsa kullanılıyor; aksi halde (ör. ana 8'li tablo) doğrudan
  // 2 -> 4'e geçiliyor. Tailwind JIT'in sınıfı üretebilmesi için olası
  // değerler burada literal olarak yazılmalı (dinamik string
  // interpolasyonu taranamaz).
  const itemCount = data.items.length;
  const gridClass =
    itemCount === 3
      ? "grid-cols-3"
      : itemCount === 2
        ? "grid-cols-2"
        : itemCount === 1
          ? "grid-cols-1"
          : itemCount % 3 === 0
            ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            : "grid-cols-2 sm:grid-cols-4";

  return (
    <div className="rounded-2xl border border-border bg-surface shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
        <h2 className="text-sm font-semibold text-ink">{title}</h2>
        {/* Görsel olarak dekoratif bir zaman damgası; her 60 saniyede bir
            değiştiği için aria-live yapmıyoruz — aksi halde ekran okuyucu
            kullanıcıları dakikada bir gereksiz yere kesintiye uğrardı. */}
        <span className="flex items-center gap-2 text-xs text-muted">
          {stale && <StaleBadge />}
          <span className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-positive animate-pulse motion-reduce:animate-none"
            />
            {formatTime(data.updatedAt)} itibarıyla
          </span>
        </span>
      </div>
      <div className={"grid gap-px overflow-hidden rounded-b-2xl bg-border " + gridClass}>
        {data.items.map((item) => {
          const isUp = item.changePercent >= 0;
          const flash = flashKeys[item.key];
          const href = getPriceHref(item.key);
          const cellClassName =
            "bg-surface px-4 py-3 " +
            (href ? "block transition-colors hover:bg-bg " : "") +
            (flash === "up" ? "price-flash-up" : flash === "down" ? "price-flash-down" : "");
          const content = (
            <>
              <p className="text-xs text-muted">{item.label}</p>
              <p className="mt-1 text-base font-bold tabular-nums text-ink">
                <AnimatedNumber value={item.sell} format={formatTL} />
                <span className="ml-1 text-xs font-normal text-muted">{item.unit}</span>
              </p>
              <p
                className={
                  "mt-0.5 flex items-center gap-1 text-xs font-medium tabular-nums " +
                  (isUp ? "text-positive" : "text-negative")
                }
              >
                {isUp ? (
                  <TrendUp aria-hidden="true" size={14} weight="bold" />
                ) : (
                  <TrendDown aria-hidden="true" size={14} weight="bold" />
                )}
                {Math.abs(item.changePercent).toFixed(2)}%
              </p>
            </>
          );
          // Kalemin ayrı bir detay sayfası varsa (bkz. lib/priceContent.ts)
          // hücrenin tamamı o sayfaya bağlanıyor; yoksa düz <div> kalıyor.
          return href ? (
            <Link key={item.key} href={href} className={cellClassName}>
              {content}
            </Link>
          ) : (
            <div key={item.key} className={cellClassName}>
              {content}
            </div>
          );
        })}
      </div>
      <p className="px-4 py-2 text-[11px] text-muted/70">
        Fiyatlar bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
      </p>
    </div>
  );
}
