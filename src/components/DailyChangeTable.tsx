"use client";

// Günlük değişim tablosu — "Yükselenler / Düşenler" listesi. Sitedeki tüm
// kalemleri (altın, döviz, ons) günlük yüzde değişime göre sıralayıp en
// çok hareket edenleri öne çıkarıyor. Amaç: kullanıcının "bugün ne oldu?"
// sorusuna tek bakışta cevap bulup sayfada biraz daha vakit geçirmesi.

import { useEffect, useState } from "react";
import { TrendUp, TrendDown } from "@phosphor-icons/react/dist/ssr";
import type { PriceItem, PriceSnapshot } from "@/lib/prices";
import { formatTL, formatTime } from "@/lib/format";

const POLL_INTERVAL_MS = 60_000;
const LIST_SIZE = 5;

export default function DailyChangeTable({
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

  const sorted = [...data.items].sort((a, b) => b.changePercent - a.changePercent);
  const gainers = sorted.slice(0, LIST_SIZE);
  const losers = sorted.slice(-LIST_SIZE).reverse();

  return (
    <div className="rounded-2xl border border-stone-200 bg-white shadow-sm dark:border-stone-800 dark:bg-stone-900">
      <div className="flex items-center justify-between border-b border-stone-200 px-5 py-3 dark:border-stone-800">
        {/* Sayfa-seviyesi <SectionHeading> zaten bu bölümün h2'si. */}
        <p className="text-sm font-semibold text-stone-900 dark:text-stone-50">
          Günlük Değişim
        </p>
        <span className="text-xs text-stone-400">
          {formatTime(data.updatedAt)} itibarıyla
        </span>
      </div>
      <div className="grid divide-y divide-stone-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 dark:divide-stone-800">
        <ChangeList
          title="En Çok Yükselenler"
          items={gainers}
          tone="up"
        />
        <ChangeList
          title="En Çok Düşenler"
          items={losers}
          tone="down"
        />
      </div>
    </div>
  );
}

function ChangeList({
  title,
  items,
  tone,
}: {
  title: string;
  items: PriceItem[];
  tone: "up" | "down";
}) {
  return (
    <div className="p-5">
      <p
        className={
          "flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide " +
          (tone === "up"
            ? "text-emerald-600 dark:text-emerald-400"
            : "text-red-600 dark:text-red-400")
        }
      >
        {tone === "up" ? (
          <TrendUp aria-hidden="true" size={14} weight="bold" />
        ) : (
          <TrendDown aria-hidden="true" size={14} weight="bold" />
        )}
        {title}
      </p>
      <ol className="mt-3 space-y-2.5">
        {items.map((item, i) => (
          <li key={item.key} className="flex items-center justify-between gap-3 text-sm">
            <span className="flex items-center gap-2 min-w-0">
              <span className="w-4 shrink-0 text-xs tabular-nums text-stone-400">
                {i + 1}
              </span>
              <span className="truncate text-stone-700 dark:text-stone-300">
                {item.label}
              </span>
            </span>
            <span className="flex shrink-0 items-baseline gap-2 tabular-nums">
              <span className="text-stone-500 dark:text-stone-400">
                {formatTL(item.sell)}
              </span>
              <span
                className={
                  "font-semibold " +
                  (item.changePercent >= 0
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-red-600 dark:text-red-400")
                }
              >
                {item.changePercent >= 0 ? "+" : ""}
                {item.changePercent.toFixed(2)}%
              </span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
