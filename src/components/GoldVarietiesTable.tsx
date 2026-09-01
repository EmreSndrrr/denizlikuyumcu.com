"use client";

// "Tüm Altın Çeşitleri" tablosu: ana 6 altın + ek türler (ata, reşat,
// gremse, 18/14 ayar) tek bir sıralanabilir tabloda. Kart ızgarası yerine
// gerçek bir <table> kullanıyoruz — 15 kalemlik bir listede tablo, kart
// ızgarasından çok daha taranabilir.

import { useEffect, useMemo, useState } from "react";
import {
  CaretUp,
  CaretDown,
  TrendUp,
  TrendDown,
} from "@phosphor-icons/react/dist/ssr";
import {
  filterSnapshot,
  ALL_GOLD_TYPES,
  type PriceItem,
  type PriceSnapshot,
} from "@/lib/prices";
import { formatTL, formatTime } from "@/lib/format";

const POLL_INTERVAL_MS = 60_000;

type SortKey = "label" | "buy" | "sell" | "changePercent";

export default function GoldVarietiesTable({
  initialData,
}: {
  initialData: PriceSnapshot;
}) {
  const [data, setData] = useState(() => filterSnapshot(initialData, ALL_GOLD_TYPES));
  const [sortKey, setSortKey] = useState<SortKey>("sell");
  const [sortDesc, setSortDesc] = useState(true);

  useEffect(() => {
    const id = setInterval(async () => {
      try {
        const res = await fetch("/api/prices", { cache: "no-store" });
        if (!res.ok) return;
        const fresh: PriceSnapshot = await res.json();
        setData(filterSnapshot(fresh, ALL_GOLD_TYPES));
      } catch {
        // Ağ hatasında sessizce eski veriyi göstermeye devam ediyoruz.
      }
    }, POLL_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const sorted = useMemo(() => {
    const rows = [...data.items];
    rows.sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      const cmp =
        typeof av === "string" ? av.localeCompare(bv as string) : (av as number) - (bv as number);
      return sortDesc ? -cmp : cmp;
    });
    return rows;
  }, [data.items, sortKey, sortDesc]);

  function toggleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDesc((d) => !d);
    } else {
      setSortKey(key);
      setSortDesc(true);
    }
  }

  const columns: { key: SortKey; label: string; align: "left" | "right" }[] = [
    { key: "label", label: "Ürün", align: "left" },
    { key: "buy", label: "Alış", align: "right" },
    { key: "sell", label: "Satış", align: "right" },
    { key: "changePercent", label: "Değişim", align: "right" },
  ];

  return (
    <div className="rounded-2xl border border-stone-200 bg-white shadow-sm dark:border-stone-800 dark:bg-stone-900">
      <div className="flex items-center justify-between border-b border-stone-200 px-5 py-3 dark:border-stone-800">
        {/* Sayfa-seviyesi <SectionHeading> zaten bu bölümün h2'si. */}
        <p className="text-sm font-semibold text-stone-900 dark:text-stone-50">
          Tüm Altın Çeşitleri
        </p>
        <span className="text-xs text-stone-400">
          {formatTime(data.updatedAt)} itibarıyla
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] text-sm">
          <thead>
            <tr className="border-b border-stone-200 text-xs text-stone-500 dark:border-stone-800 dark:text-stone-400">
              {columns.map((col) => (
                <th key={col.key} scope="col" className="px-5 py-2 font-medium">
                  <button
                    type="button"
                    onClick={() => toggleSort(col.key)}
                    aria-sort={
                      sortKey === col.key ? (sortDesc ? "descending" : "ascending") : "none"
                    }
                    className={
                      "flex items-center gap-1 rounded-sm py-1 transition-colors hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700 dark:hover:text-stone-100 " +
                      (col.align === "right" ? "ml-auto flex-row-reverse" : "")
                    }
                  >
                    {col.label}
                    {sortKey === col.key &&
                      (sortDesc ? (
                        <CaretDown aria-hidden="true" size={11} weight="bold" />
                      ) : (
                        <CaretUp aria-hidden="true" size={11} weight="bold" />
                      ))}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 dark:divide-stone-800">
            {sorted.map((item) => (
              <GoldRow key={item.key} item={item} />
            ))}
          </tbody>
        </table>
      </div>
      <p className="px-5 py-3 text-[11px] text-stone-400 dark:text-stone-600">
        Fiyatlar bilgilendirme amaçlıdır, yatırım tavsiyesi değildir. Sütun
        başlıklarına tıklayarak sıralayabilirsiniz.
      </p>
    </div>
  );
}

function GoldRow({ item }: { item: PriceItem }) {
  const isUp = item.changePercent >= 0;
  return (
    <tr className="hover:bg-stone-50 dark:hover:bg-stone-800/50">
      <td className="whitespace-nowrap px-5 py-2.5 font-medium text-stone-800 dark:text-stone-200">
        {item.label}
      </td>
      <td className="px-5 py-2.5 text-right tabular-nums text-stone-600 dark:text-stone-400">
        {formatTL(item.buy)}
      </td>
      <td className="px-5 py-2.5 text-right tabular-nums font-semibold text-stone-900 dark:text-stone-50">
        {formatTL(item.sell)}
      </td>
      <td
        className={
          "px-5 py-2.5 text-right tabular-nums font-medium " +
          (isUp
            ? "text-emerald-600 dark:text-emerald-400"
            : "text-red-600 dark:text-red-400")
        }
      >
        <span className="inline-flex items-center gap-1">
          {isUp ? (
            <TrendUp aria-hidden="true" size={12} weight="bold" />
          ) : (
            <TrendDown aria-hidden="true" size={12} weight="bold" />
          )}
          {Math.abs(item.changePercent).toFixed(2)}%
        </span>
      </td>
    </tr>
  );
}
