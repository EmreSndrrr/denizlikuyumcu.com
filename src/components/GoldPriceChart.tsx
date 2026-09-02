"use client";

// Altın Fiyatları Grafiği. Midas'ın telefon ekranındaki koyu, tek renkli
// grafik paneline gönderme yapan bilinçli bir tasarım kararı: kart her
// zaman koyu (site açık/koyu temada olsa fark etmez) — bu hem "premium
// fintech" hissi veriyor hem de kontrastı tek yüzeyde garantiliyor.
//
// dataviz skill'ine göre: form = zaman içinde değişim -> çizgi/alan grafik;
// tek seri -> ayrı bir legend gerekmiyor (başlık zaten seriyi adlandırıyor);
// ince (2px) çizgi, taban çizgisine dayalı degrade dolgu; hover'da
// crosshair + tooltip varsayılan olsun; ekran okuyucu için görünmez bir
// metin özeti (başlangıç/bitiş/değişim) sağlanmalı.

import { useMemo, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import type { GoldHistoryPoint } from "@/lib/prices";
import { formatTL } from "@/lib/format";

type Period = 7 | 30 | 90 | 365;
type PriceSide = "sell" | "buy";

const PERIODS: { value: Period; label: string }[] = [
  { value: 7, label: "7G" },
  { value: 30, label: "30G" },
  { value: 90, label: "3A" },
  { value: 365, label: "1Y" },
];

const WIDTH = 800;
const HEIGHT = 260;
const TOP_PAD = 24;
const BOTTOM_PAD = 28;
// Panel her zaman koyu (temadan bağımsız) olduğu için --color-gold'un
// KOYU tema değeriyle eşleşen sabit bir hex kullanıyoruz — bu ikisinin
// (bileşendeki sabit değer + globals.css'teki dark token) birbirinden
// kaymamasına dikkat edilmeli.
const GOLD = "#e3bd6e";

function formatShortDate(iso: string, period: Period) {
  // timeZone SABİT: bkz. lib/format.ts formatTime() üzerindeki not — aynı
  // hydration uyuşmazlığı riski burada da geçerli.
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "short",
    year: period === 365 ? "2-digit" : undefined,
    timeZone: "Europe/Istanbul",
  });
}

export default function GoldPriceChart({
  history,
}: {
  history: GoldHistoryPoint[];
}) {
  const [period, setPeriod] = useState<Period>(30);
  const [side, setSide] = useState<PriceSide>("sell");
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const reduceMotion = useReducedMotion();
  // Çizgi sadece bileşenin İLK açılışında 600ms'de "çizilsin"; aralık/
  // alış-satış değişimlerinde yalnızca 180ms crossfade oynasın (brief'te
  // bu ikisi ayrı davranışlar olarak isteniyor). AnimatePresence key'i
  // değiştikçe bu <path> yeniden mount oluyor, o yüzden "ilk kez mi"
  // bilgisini bileşen kökünde, remount'tan etkilenmeyecek şekilde tutuyoruz.
  const [hasDrawnOnce, setHasDrawnOnce] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHasDrawnOnce(true), 650);
    return () => clearTimeout(t);
  }, []);

  const points = useMemo(() => history.slice(-period), [history, period]);

  const {
    path,
    areaPath,
    scaleX,
    scaleY,
    yMin,
    yMax,
    highIndex,
    lowIndex,
  } = useMemo(() => {
    const values = points.map((p) => p[side]);
    const rawMin = Math.min(...values);
    const rawMax = Math.max(...values);
    const range = rawMax - rawMin || rawMax * 0.02 || 1;
    const yMin = rawMin - range * 0.12;
    const yMax = rawMax + range * 0.12;

    const scaleX = (i: number) =>
      points.length > 1 ? (i / (points.length - 1)) * WIDTH : WIDTH / 2;
    const scaleY = (value: number) =>
      TOP_PAD + (1 - (value - yMin) / (yMax - yMin)) * (HEIGHT - TOP_PAD - BOTTOM_PAD);

    const coords = points.map((p, i) => [scaleX(i), scaleY(p[side])] as const);
    const path = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
    const baseline = HEIGHT - BOTTOM_PAD;
    const areaPath =
      `M${coords[0][0].toFixed(1)},${baseline} ` +
      coords.map(([x, y]) => `L${x.toFixed(1)},${y.toFixed(1)}`).join(" ") +
      ` L${coords[coords.length - 1][0].toFixed(1)},${baseline} Z`;

    let highIndex = 0;
    let lowIndex = 0;
    values.forEach((v, i) => {
      if (v > values[highIndex]) highIndex = i;
      if (v < values[lowIndex]) lowIndex = i;
    });

    return { path, areaPath, scaleX, scaleY, yMin, yMax, highIndex, lowIndex };
  }, [points, side]);

  const first = points[0];
  const last = points[points.length - 1];
  const periodChangePct = first ? ((last[side] - first[side]) / first[side]) * 100 : 0;
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
  const tooltipLeftPct = hoverLeftPct === null ? null : Math.min(92, Math.max(8, hoverLeftPct));

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface-dark shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4 px-4 pt-4">
        <div>
          <h3 className="text-sm font-semibold text-white/70">
            Gram Altın Fiyat Grafiği
          </h3>
          <p className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-extrabold tabular-nums text-white">
              {formatTL(last?.[side] ?? 0)} TL
            </span>
            <span
              className={
                "text-sm font-semibold tabular-nums " +
                (isUp ? "text-positive" : "text-negative")
              }
            >
              {isUp ? "+" : ""}
              {periodChangePct.toFixed(2)}%
            </span>
          </p>
          <p className="mt-0.5 text-xs text-white/40">
            Başlangıç: {formatTL(first?.[side] ?? 0)} TL → Güncel: {formatTL(last?.[side] ?? 0)} TL
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div
            role="tablist"
            aria-label="Grafik zaman aralığı"
            className="inline-flex rounded-full border border-white/15 p-1"
          >
            {PERIODS.map((p) => (
              <button
                key={p.value}
                type="button"
                role="tab"
                aria-selected={period === p.value}
                onClick={() => {
                  setPeriod(p.value);
                  setHoverIndex(null);
                }}
                className={
                  "rounded-full px-3 py-1 text-xs font-medium transition-all active:scale-[0.94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold " +
                  (period === p.value ? "bg-brand text-white" : "text-white/50 hover:text-white")
                }
              >
                {p.label}
              </button>
            ))}
          </div>
          <div
            role="tablist"
            aria-label="Alış / satış fiyatı"
            className="inline-flex rounded-full border border-white/15 p-1"
          >
            {(["sell", "buy"] as PriceSide[]).map((s) => (
              <button
                key={s}
                type="button"
                role="tab"
                aria-selected={side === s}
                onClick={() => setSide(s)}
                className={
                  "rounded-full px-3 py-1 text-xs font-medium transition-all active:scale-[0.94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold " +
                  (side === s ? "bg-white/15 text-white" : "text-white/50 hover:text-white")
                }
              >
                {s === "sell" ? "Satış" : "Alış"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Ekran okuyucular için görsel grafiğin yerini tutan metin özeti. */}
      <p className="sr-only">
        Son {period} günde gram altın {side === "sell" ? "satış" : "alış"} fiyatı{" "}
        {formatTL(first?.[side] ?? 0)} TL&apos;den {formatTL(last?.[side] ?? 0)} TL&apos;ye,{" "}
        {isUp ? "yükseldi" : "düştü"} ({periodChangePct.toFixed(2)}% değişim). Dönem
        içi en düşük {formatTL(yMin)} TL, en yüksek {formatTL(yMax)} TL.
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${period}-${side}`}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.18 }}
          className="relative mt-2 h-[290px] px-1 sm:h-[320px]"
        >
          <svg
            ref={svgRef}
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            preserveAspectRatio="none"
            className="h-full w-full touch-none"
            aria-hidden="true"
            onMouseMove={(e) => handlePointer(e.clientX)}
            onMouseLeave={() => setHoverIndex(null)}
            onTouchMove={(e) => handlePointer(e.touches[0].clientX)}
            onTouchEnd={() => setHoverIndex(null)}
          >
            <defs>
              <linearGradient id="gold-area-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={GOLD} stopOpacity="0.35" />
                <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
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
                vectorEffect="non-scaling-stroke"
              />
            ))}

            <path d={areaPath} fill="url(#gold-area-fill)" stroke="none" />
            <motion.path
              d={path}
              fill="none"
              stroke={GOLD}
              strokeWidth={2}
              strokeLinejoin="round"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              initial={!hasDrawnOnce && !reduceMotion ? { pathLength: 0 } : false}
              animate={{ pathLength: 1 }}
              transition={{ duration: hasDrawnOnce ? 0 : 0.6, ease: "easeOut" }}
            />

            {/* En yüksek / en düşük değer işaretleri */}
            {points[highIndex] && (
              <g>
                <circle
                  cx={scaleX(highIndex)}
                  cy={scaleY(points[highIndex][side])}
                  r={3.5}
                  fill="#10b981"
                  vectorEffect="non-scaling-stroke"
                />
                {/* Brief: "mobilde etiketlerin üst üste gelmesini
                    engelle" — dar ekranda sadece nokta işaretleri
                    kalıyor, sayısal etiketler sm+ genişlikte görünüyor. */}
                <text
                  x={scaleX(highIndex)}
                  y={scaleY(points[highIndex][side]) - 8}
                  textAnchor="middle"
                  fontSize={11}
                  fill="#10b981"
                  className="hidden sm:inline"
                >
                  {formatTL(points[highIndex][side])}
                </text>
              </g>
            )}
            {points[lowIndex] && lowIndex !== highIndex && (
              <g>
                <circle
                  cx={scaleX(lowIndex)}
                  cy={scaleY(points[lowIndex][side])}
                  r={3.5}
                  fill="#f87171"
                  vectorEffect="non-scaling-stroke"
                />
                <text
                  x={scaleX(lowIndex)}
                  y={scaleY(points[lowIndex][side]) + 16}
                  textAnchor="middle"
                  fontSize={11}
                  fill="#f87171"
                  className="hidden sm:inline"
                >
                  {formatTL(points[lowIndex][side])}
                </text>
              </g>
            )}

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
                  vectorEffect="non-scaling-stroke"
                />
                <circle
                  cx={scaleX(hoverIndex)}
                  cy={scaleY(hovered[side])}
                  r={4}
                  fill={GOLD}
                  stroke="#0c0a09"
                  strokeWidth={2}
                  vectorEffect="non-scaling-stroke"
                />
              </>
            )}
          </svg>

          {hovered && tooltipLeftPct !== null && (
            <div
              className="pointer-events-none absolute top-2 -translate-x-1/2 rounded-[10px] border border-white/15 bg-black/80 px-3 py-2 text-xs shadow-lg backdrop-blur"
              style={{ left: `${tooltipLeftPct}%` }}
            >
              <p className="font-medium text-white/60">
                {formatShortDate(hovered.date, period)}
              </p>
              <p className="tabular-nums font-semibold text-white">
                {formatTL(hovered[side])} TL
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between px-2 pb-3 text-[11px] text-white/40">
        <span>{first && formatShortDate(first.date, period)}</span>
        <span>{last && formatShortDate(last.date, period)}</span>
      </div>

      <p className="border-t border-white/10 px-4 py-3 text-[11px] text-white/30">
        Geçmiş fiyat verisi bilgilendirme amaçlıdır; gerçek piyasa
        geçmişini birebir yansıtmayabilir.
      </p>
    </div>
  );
}
