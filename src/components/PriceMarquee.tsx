"use client";

// Sitenin en üstünde, Goodreturns.in'deki gibi sürekli kayan bir fiyat
// şeridi. Marka kimliği için her zaman koyu (site açık/koyu temada olsa
// fark etmez) — finans şeritlerinde alışılmış bir yaklaşım.
//
// Erişilebilirlik: otomatik kayan içerik WCAG 2.2 gereği durdurulabilir
// olmalı (bkz. ui-ux-pro-max --domain ux "auto rotation marquee pause").
// Üç yol var: fareyle üzerine gelmek, klavyeyle bir öğeye odaklanmak,
// veya soldaki duraklat düğmesine basmak. `prefers-reduced-motion`
// tercihi varsa animasyon globals.css'te zaten tamamen kapatılıyor ve
// şerit yatayda elle kaydırılabilir hale geliyor.

import { useEffect, useState, Fragment } from "react";
import { Play, Pause, TrendUp, TrendDown } from "@phosphor-icons/react/dist/ssr";
import { filterSnapshot, MAIN_PRICE_TYPES, type PriceSnapshot, type PriceItem } from "@/lib/prices";
import { formatTL } from "@/lib/format";

const POLL_INTERVAL_MS = 60_000;

function MarqueeItem({ item, duplicate }: { item: PriceItem; duplicate?: boolean }) {
  const isUp = item.changePercent >= 0;
  return (
    <div
      className="flex shrink-0 items-center gap-2 px-5 py-2 text-xs"
      // İçerik iki kez basılıyor (kusursuz döngü için); ikinci kopya ekran
      // okuyucu için tekrar okunmasın diye gizleniyor.
      aria-hidden={duplicate ? "true" : undefined}
    >
      <span className="font-medium text-stone-300">{item.label}</span>
      <span className="tabular-nums font-semibold text-white">
        {formatTL(item.sell)} <span className="text-stone-400">TL</span>
      </span>
      <span
        className={
          "flex items-center gap-0.5 tabular-nums font-medium " +
          (isUp ? "text-emerald-400" : "text-red-400")
        }
      >
        {isUp ? (
          <TrendUp aria-hidden="true" size={12} weight="bold" />
        ) : (
          <TrendDown aria-hidden="true" size={12} weight="bold" />
        )}
        {Math.abs(item.changePercent).toFixed(2)}%
      </span>
    </div>
  );
}

export default function PriceMarquee({
  initialData,
}: {
  initialData: PriceSnapshot;
}) {
  // Şerit de ana 8 kalemle (6 altın + Dolar + Euro) sınırlı — yurtdışı
  // para birimleri (Sterlin vb.) buraya değil, ayrı bölüme gidiyor.
  const [data, setData] = useState(() => filterSnapshot(initialData, MAIN_PRICE_TYPES));
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const id = setInterval(async () => {
      try {
        const res = await fetch("/api/prices", { cache: "no-store" });
        if (!res.ok) return;
        const fresh: PriceSnapshot = await res.json();
        setData(filterSnapshot(fresh, MAIN_PRICE_TYPES));
      } catch {
        // Sessizce eski veriyi göstermeye devam et.
      }
    }, POLL_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="marquee-row flex items-stretch overflow-hidden border-b border-stone-800 bg-stone-950"
      data-paused={paused}
    >
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        aria-label={
          paused ? "Fiyat şeridini kaydırmayı başlat" : "Fiyat şeridini duraklat"
        }
        className="z-10 flex shrink-0 items-center justify-center border-r border-stone-800 bg-stone-950 px-3 text-stone-400 transition-colors hover:text-amber-400 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-amber-500"
      >
        {paused ? (
          <Play aria-hidden="true" size={12} weight="fill" />
        ) : (
          <Pause aria-hidden="true" size={12} weight="fill" />
        )}
      </button>
      <div className="overflow-hidden">
        <div className="flex w-max animate-price-marquee">
          {/* Aynı liste iki kez: track %50 kaydığında ikinci kopya tam
              olarak ilkinin başladığı yerde olur, döngü kesintisiz görünür. */}
          {[0, 1].map((pass) => (
            <Fragment key={pass}>
              {data.items.map((item) => (
                <MarqueeItem
                  key={`${pass}-${item.key}`}
                  item={item}
                  duplicate={pass === 1}
                />
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
