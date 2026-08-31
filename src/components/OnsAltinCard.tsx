"use client";

// Ons altın uluslararası piyasanın referans fiyatıdır (USD/ons) — TL
// bazlı diğer kalemlerden farklı bir birimde olduğu için ayrı, öne çıkan
// bir "istatistik" kartı olarak gösteriliyor (bir tabloya karıştırılırsa
// birim karışıklığı olur).

import { useEffect, useState } from "react";
import { Globe, TrendUp, TrendDown } from "@phosphor-icons/react/dist/ssr";
import type { PriceSnapshot } from "@/lib/prices";
import { formatTime } from "@/lib/format";

const POLL_INTERVAL_MS = 60_000;

function formatUSD(value: number) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export default function OnsAltinCard({
  initialData,
}: {
  initialData: PriceSnapshot;
}) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const id = setInterval(async () => {
      try {
        const res = await fetch("/api/prices", { cache: "no-store" });
        if (!res.ok) return;
        const fresh: PriceSnapshot = await res.json();
        setData(fresh);
      } catch {
        // Ağ hatasında sessizce eski veriyi göstermeye devam ediyoruz.
      }
    }, POLL_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const ons = data.items.find((i) => i.key === "ons-altin");
  if (!ons) return null;
  const isUp = ons.changePercent >= 0;

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm dark:border-stone-800 dark:bg-stone-900">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400">
          <Globe aria-hidden="true" size={22} weight="bold" />
        </span>
        <div>
          <p className="text-sm font-medium text-stone-500 dark:text-stone-400">
            Ons Altın{" "}
            <span className="text-stone-400 dark:text-stone-600">
              (uluslararası, USD)
            </span>
          </p>
          <p className="mt-0.5 text-2xl font-extrabold tabular-nums text-stone-900 dark:text-stone-50">
            ${formatUSD(ons.sell)}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p
          className={
            "flex items-center justify-end gap-1 text-sm font-semibold tabular-nums " +
            (isUp
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-red-600 dark:text-red-400")
          }
        >
          {isUp ? (
            <TrendUp aria-hidden="true" size={16} weight="bold" />
          ) : (
            <TrendDown aria-hidden="true" size={16} weight="bold" />
          )}
          {Math.abs(ons.changePercent).toFixed(2)}%
        </p>
        <p className="mt-0.5 text-xs text-stone-400">
          {formatTime(data.updatedAt)} itibarıyla
        </p>
      </div>
    </div>
  );
}
