"use client";

// Altın Fiyatları Grafiği. Midas'ın telefon ekranındaki koyu, tek renkli
// grafik paneline gönderme yapan bilinçli bir tasarım kararı: kart her
// zaman koyu (site açık/koyu temada olsa fark etmez) — bu hem "premium
// fintech" hissi veriyor hem de her iki temada da amber çizginin
// kontrastını garantiliyor (tek yüzey = tek kontrast kontrolü).
//
// dataviz skill'ine göre: form = zaman içinde değişim -> çizgi/alan grafik;
// tek seri -> ayrı bir legend gerekmiyor (başlık zaten seriyi adlandırıyor);
// ince (2px) çizgi, taban çizgisine dayalı degrade dolgu; hover'da
// crosshair + tooltip varsayılan olsun; ekran okuyucu için görünmez bir
// metin özeti (başlangıç/bitiş/değişim) sağlanmalı.

import { useMemo, useState, useRef } from "react";
import type { GoldHistoryPoint } from "@/lib/prices";
import { formatTL } from "@/lib/format";

type Period = 7 | 30 | 90;

const WIDTH = 800;
const HEIGHT = 260;
const TOP_PAD = 20;
const BOTTOM_PAD = 28;

function formatShortDate(iso: string) {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "short",
  });
}

export default function GoldPriceChart({
  history,
}: {
  history: GoldHistoryPoint[];
}) {
  const [period, setPeriod] = useState<Period>(30);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const points = useMemo(() => history.slice(-period), [history, period]);

  const { path, areaPath, scaleX, scaleY, yMin, yMax } = useMemo(() => {
    const prices = points.map((p) => p.price);
    const rawMin = Math.min(...prices);
    const rawMax = Math.max(...prices);
    const range = rawMax - rawMin || rawMax * 0.02 || 1;
    const yMin = rawMin - range * 0.12;
    const yMax = rawMax + range * 0.12;

    const scaleX = (i: number) =>
      points.length > 1 ? (i / (points.length - 1)) * WIDTH : WIDTH / 2;
    const scaleY = (price: number) =>
      TOP_PAD +
      (1 - (price - yMin) / (yMax - yMin)) * (HEIGHT - TOP_PAD - BOTTOM_PAD);

    const coords = points.map((p, i) => [scaleX(i), scaleY(p.price)] as const);
    const path = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
    const baseline = HEIGHT - BOTTOM_PAD;
    const areaPath =
      `M${coords[0][0].toFixed(1)},${baseline} ` +
      coords.map(([x, y]) => `L${x.toFixed(1)},${y.toFixed(1)}`).join(" ") +
      ` L${coords[coords.length - 1][0].toFixed(1)},${baseline} Z`;

    return { path, areaPath, scaleX, scaleY, yMin, yMax };
  }, [points]);

  const first = points[0];
  const last = points[points.length - 1];
  const periodChangePct = first ? ((last.price - first.price) / first.price) * 100 : 0;
  const isUp = periodChangePct >= 0;

  function handlePointer(clientX: number) {
    const svg = svgRef.current;
    if (!svg || points.length === 0) return;
    const rect = svg.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const idx = Math.round(ratio * (points.length - 1));
    setHoverIndex(idx);
  }

  const hovered = hoverIndex !== null ? points[hoverIndex] : null;
  const hoverLeftPct = hoverIndex !== null ? (hoverIndex / (points.length - 1)) * 100 : null;
  const tooltipLeftPct =
    hoverLeftPct === null ? null : Math.min(92, Math.max(8, hoverLeftPct));

  return (
    <div className="overflow-hidden rounded-2xl border border-stone-800 bg-stone-950 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4 px-5 pt-5">
        <div>
          <h3 className="text-sm font-semibold text-stone-200">
            Gram Altın Fiyat Grafiği
          </h3>
          <p className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-extrabold tabular-nums text-white">
              {formatTL(last?.price ?? 0)} TL
            </span>
            <span
              className={
                "text-sm font-semibold tabular-nums " +
                (isUp ? "text-emerald-400" : "text-red-400")
              }
            >
              {isUp ? "+" : ""}
              {periodChangePct.toFixed(2)}%
            </span>
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Grafik zaman aralığı"
          className="inline-flex rounded-full border border-stone-700 p-1"
        >
          {([7, 30, 90] as Period[]).map((p) => (
            <button
              key={p}
              type="button"
              role="tab"
              aria-selected={period === p}
              onClick={() => {
                setPeriod(p);
                setHoverIndex(null);
              }}
              className={
                "rounded-full px-3 py-1 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 " +
                (period === p
                  ? "bg-amber-600 text-white"
                  : "text-stone-400 hover:text-stone-100")
              }
            >
              {p}G
            </button>
          ))}
        </div>
      </div>

      {/* Ekran okuyucular için görsel grafiğin yerini tutan metin özeti. */}
      <p className="sr-only">
        Son {period} günde gram altın fiyatı {formatTL(first?.price ?? 0)}{" "}
        TL&apos;den {formatTL(last?.price ?? 0)} TL&apos;ye,{" "}
        {isUp ? "yükseldi" : "düştü"} ({periodChangePct.toFixed(2)}%
        değişim). Dönem içi en düşük {formatTL(yMin)} TL, en yüksek{" "}
        {formatTL(yMax)} TL.
      </p>

      <div className="relative mt-2 px-1">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="w-full touch-none"
          aria-hidden="true"
          onMouseMove={(e) => handlePointer(e.clientX)}
          onMouseLeave={() => setHoverIndex(null)}
          onTouchMove={(e) => handlePointer(e.touches[0].clientX)}
          onTouchEnd={() => setHoverIndex(null)}
        >
          <defs>
            <linearGradient id="gold-area-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Recessive yatay grid çizgileri */}
          {[0.25, 0.5, 0.75].map((t) => (
            <line
              key={t}
              x1={0}
              x2={WIDTH}
              y1={TOP_PAD + t * (HEIGHT - TOP_PAD - BOTTOM_PAD)}
              y2={TOP_PAD + t * (HEIGHT - TOP_PAD - BOTTOM_PAD)}
              stroke="#292524"
              strokeWidth={1}
            />
          ))}

          <path d={areaPath} fill="url(#gold-area-fill)" stroke="none" />
          <path
            d={path}
            fill="none"
            stroke="#fbbf24"
            strokeWidth={2}
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {hoverIndex !== null && hovered && (
            <>
              <line
                x1={scaleX(hoverIndex)}
                x2={scaleX(hoverIndex)}
                y1={TOP_PAD}
                y2={HEIGHT - BOTTOM_PAD}
                stroke="#57534e"
                strokeWidth={1}
                strokeDasharray="3 3"
              />
              <circle
                cx={scaleX(hoverIndex)}
                cy={scaleY(hovered.price)}
                r={4}
                fill="#fbbf24"
                stroke="#0c0a09"
                strokeWidth={2}
              />
            </>
          )}
        </svg>

        {hovered && tooltipLeftPct !== null && (
          <div
            className="pointer-events-none absolute top-2 -translate-x-1/2 rounded-lg border border-stone-700 bg-stone-900 px-3 py-1.5 text-xs shadow-lg"
            style={{ left: `${tooltipLeftPct}%` }}
          >
            <p className="font-medium text-stone-400">
              {formatShortDate(hovered.date)}
            </p>
            <p className="tabular-nums font-semibold text-white">
              {formatTL(hovered.price)} TL
            </p>
          </div>
        )}

        <div className="flex justify-between px-1 pb-3 text-[11px] text-stone-500">
          <span>{first && formatShortDate(first.date)}</span>
          <span>{last && formatShortDate(last.date)}</span>
        </div>
      </div>

      <p className="border-t border-stone-800 px-5 py-3 text-[11px] text-stone-600">
        Geçmiş fiyat verisi bilgilendirme amaçlıdır; gerçek piyasa
        geçmişini birebir yansıtmayabilir.
      </p>
    </div>
  );
}
