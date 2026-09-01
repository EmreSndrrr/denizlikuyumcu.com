// Küçük, eksensiz alan+çizgi grafiği — hero kartında ve "Tüm Altın
// Çeşitleri" tablosunun satır detayında kullanılan paylaşılan bileşen.
// Sunucu component'i olarak da çalışır (state/etkileşim yok).

import type { GoldHistoryPoint } from "@/lib/prices";

export default function Sparkline({
  points,
  width = 280,
  height = 64,
  color = "#d6a641",
  id,
}: {
  points: GoldHistoryPoint[];
  width?: number;
  height?: number;
  color?: string;
  // Aynı renkte birden fazla sparkline aynı anda render olabileceğinden
  // (tabloda birden çok satır açıksa) gradient id'si çakışmasın diye.
  id?: string;
}) {
  if (points.length < 2) return null;
  const values = points.map((p) => p.sell);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const coords = points.map((p, i) => {
    const x = (i / (points.length - 1)) * width;
    const y = height - ((p.sell - min) / range) * height;
    return [x, y] as const;
  });
  const path = coords
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ");
  const areaPath =
    `M${coords[0][0].toFixed(1)},${height} ` +
    coords.map(([x, y]) => `L${x.toFixed(1)},${y.toFixed(1)}`).join(" ") +
    ` L${coords[coords.length - 1][0].toFixed(1)},${height} Z`;

  const gradientId = `spark-fill-${id ?? color.replace("#", "")}`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#${gradientId})`} stroke="none" />
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
