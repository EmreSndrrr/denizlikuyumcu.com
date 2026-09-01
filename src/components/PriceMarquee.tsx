"use client";

// Sitenin en üstünde, Goodreturns.in'deki gibi sürekli kayan bir fiyat
// şeridi. Marka kimliği için her zaman koyu (site açık/koyu temada olsa
// fark etmez) — finans şeritlerinde alışılmış bir yaklaşım; surface-dark
// token'ı kullanıyoruz (hem light hem dark modda koyu bir değere sahip),
// böylece grafik kartı ve hero kartıyla aynı "premium panel" ailesinde
// kalıyor.
//
// Erişilebilirlik: otomatik kayan içerik WCAG 2.2 gereği durdurulabilir
// olmalı (bkz. ui-ux-pro-max --domain ux "auto rotation marquee pause").
// Üç yol var: fareyle üzerine gelmek, klavyeyle bir öğeye odaklanmak,
// veya soldaki duraklat düğmesine basmak. `prefers-reduced-motion`
// tercihi varsa animasyon globals.css'te zaten tamamen kapatılıyor ve
// şerit yatayda elle kaydırılabilir hale geliyor.

import { useState, Fragment } from "react";
import { Play, Pause, TrendUp, TrendDown } from "@phosphor-icons/react/dist/ssr";
import { filterSnapshot, MAIN_PRICE_TYPES, type PriceSnapshot, type PriceItem } from "@/lib/prices";
import { formatTL, formatTime } from "@/lib/format";
import { useLivePrices } from "@/lib/useLivePrices";

function MarqueeItem({ item, duplicate }: { item: PriceItem; duplicate?: boolean }) {
  const isUp = item.changePercent >= 0;
  return (
    <div
      className="flex shrink-0 items-center gap-2 px-4 py-2 text-xs"
      // İçerik iki kez basılıyor (kusursuz döngü için); ikinci kopya ekran
      // okuyucu için tekrar okunmasın diye gizleniyor.
      aria-hidden={duplicate ? "true" : undefined}
    >
      <span className="font-medium text-white/60">{item.label}</span>
      <span className="tabular-nums font-semibold text-white">
        {formatTL(item.sell)} <span className="text-white/40">TL</span>
      </span>
      <span
        className={
          "flex items-center gap-0.5 tabular-nums font-medium " +
          (isUp ? "text-positive" : "text-negative")
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

const selectMain = (s: PriceSnapshot) => filterSnapshot(s, MAIN_PRICE_TYPES);

export default function PriceMarquee({
  initialData,
}: {
  initialData: PriceSnapshot;
}) {
  // Şerit de ana 8 kalemle (6 altın + Dolar + Euro) sınırlı — yurtdışı
  // para birimleri (Sterlin vb.) buraya değil, ayrı bölüme gidiyor.
  // selectMain zaten modül seviyesinde sabit bir referans olduğu için
  // useCallback'e SARMAYA gerek yok — bu sadece gereksiz bir tekrar
  // sarmalamaydı, davranışı değiştirmez.
  const { data } = useLivePrices(initialData, selectMain);
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="marquee-row marquee-fade flex items-stretch overflow-hidden border-b border-white/10 bg-surface-dark"
      data-paused={paused}
    >
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        aria-label={
          paused ? "Fiyat şeridini kaydırmayı başlat" : "Fiyat şeridini duraklat"
        }
        className="z-10 flex shrink-0 items-center justify-center border-r border-white/10 bg-surface-dark px-3 text-white/50 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold"
      >
        {paused ? (
          <Play aria-hidden="true" size={12} weight="fill" />
        ) : (
          <Pause aria-hidden="true" size={12} weight="fill" />
        )}
      </button>
      {/* Güncelleme zamanı — brief'in "erişilebilir biçimde göster"
          isteği. 360-390px mobilde yer sıkıntısı yaratmaması için sadece
          sm+ genişlikte görünür; ekran okuyucular için her zaman
          sr-only bir karşılığı var. */}
      <span className="sr-only">
        Fiyatlar son {formatTime(data.updatedAt)} itibarıyla güncellendi
      </span>
      <span
        aria-hidden="true"
        className="hidden shrink-0 items-center border-r border-white/10 px-3 text-[11px] tabular-nums text-white/40 sm:flex"
      >
        {formatTime(data.updatedAt)}
      </span>
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
