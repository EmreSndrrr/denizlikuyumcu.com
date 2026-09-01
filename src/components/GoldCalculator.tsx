"use client";

// Canlı altın/döviz hesaplama aracı. İki mod var:
//  - "Ürüne Göre": listedeki bir kalemi (gram altın, çeyrek, dolar vb.)
//    adet/gram ile çarpıp toplam tutarı gösterir.
//  - "Ayara Göre": girilen gramajı seçilen ayara (milyem) göre has altın
//    karşılığına çevirir — /rehber/altin-ayari-nedir makalesindeki
//    kavramın doğrudan uygulaması.
// Fiyatlar diğer bileşenlerle aynı şekilde canlı tutuluyor: sunucudan
// gelen ilk veriyle render edilip sonra periyodik olarak tazeleniyor.

import { useEffect, useMemo, useState } from "react";
import { Calculator } from "@phosphor-icons/react/dist/ssr";
import { KARAT_MILYEM, type PriceSnapshot } from "@/lib/prices";
import { formatTL } from "@/lib/format";

const POLL_INTERVAL_MS = 60_000;

type Mode = "product" | "karat";

export default function GoldCalculator({
  initialData,
}: {
  initialData: PriceSnapshot;
}) {
  const [data, setData] = useState(initialData);
  const [mode, setMode] = useState<Mode>("product");
  const [priceSide, setPriceSide] = useState<"sell" | "buy">("sell");

  // Mod A: ürüne göre
  const [selectedKey, setSelectedKey] = useState(initialData.items[0]?.key ?? "");
  const [quantity, setQuantity] = useState("1");

  // Mod B: ayara göre (gram girilir, has karşılığı hesaplanır)
  const [grams, setGrams] = useState("1");
  const [karat, setKarat] = useState<keyof typeof KARAT_MILYEM>(22);

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

  const selectedItem = data.items.find((i) => i.key === selectedKey) ?? data.items[0];
  const gramAltin = data.items.find((i) => i.key === "gram-altin");

  const productResult = useMemo(() => {
    const qty = Number(quantity.replace(",", "."));
    if (!selectedItem || !Number.isFinite(qty) || qty < 0) return null;
    return qty * selectedItem[priceSide];
  }, [selectedItem, quantity, priceSide]);

  const karatResult = useMemo(() => {
    const g = Number(grams.replace(",", "."));
    if (!gramAltin || !Number.isFinite(g) || g < 0) return null;
    return g * gramAltin[priceSide] * KARAT_MILYEM[karat];
  }, [gramAltin, grams, karat, priceSide]);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white shadow-sm dark:border-stone-800 dark:bg-stone-900">
      <div className="flex items-center gap-2 border-b border-stone-200 px-5 py-4 dark:border-stone-800">
        <Calculator
          aria-hidden="true"
          size={20}
          weight="bold"
          className="text-amber-700 dark:text-amber-500"
        />
        {/* Sayfa-seviyesi <SectionHeading> zaten bu bölümün h2'si — burada
            tekrar bir başlık elementi açmıyoruz (yinelenen heading olmasın). */}
        <p className="text-base font-semibold text-stone-900 dark:text-stone-50">
          Altın Hesaplama Aracı
        </p>
      </div>

      <div className="p-5">
        {/* Mod seçimi */}
        <div
          role="tablist"
          aria-label="Hesaplama modu"
          className="inline-flex rounded-full border border-stone-200 p-1 dark:border-stone-700"
        >
          <button
            type="button"
            role="tab"
            aria-selected={mode === "product"}
            onClick={() => setMode("product")}
            className={
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700 " +
              (mode === "product"
                ? "bg-stone-900 text-white dark:bg-amber-600"
                : "text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100")
            }
          >
            Ürüne Göre
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "karat"}
            onClick={() => setMode("karat")}
            className={
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700 " +
              (mode === "karat"
                ? "bg-stone-900 text-white dark:bg-amber-600"
                : "text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100")
            }
          >
            Ayara Göre (Gram)
          </button>
        </div>

        {/* Alış / Satış seçimi — her iki modda da geçerli */}
        <fieldset className="mt-4">
          <legend className="text-xs font-medium text-stone-500 dark:text-stone-400">
            Fiyat türü
          </legend>
          <div className="mt-1.5 flex gap-4 text-sm">
            {(["sell", "buy"] as const).map((side) => (
              <label key={side} className="flex items-center gap-1.5">
                <input
                  type="radio"
                  name="price-side"
                  checked={priceSide === side}
                  onChange={() => setPriceSide(side)}
                  className="h-4 w-4 accent-amber-700"
                />
                {side === "sell" ? "Satış" : "Alış"}
              </label>
            ))}
          </div>
        </fieldset>

        {mode === "product" ? (
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="calc-product"
                className="text-xs font-medium text-stone-500 dark:text-stone-400"
              >
                Ürün / Kur
              </label>
              <select
                id="calc-product"
                value={selectedKey}
                onChange={(e) => setSelectedKey(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-amber-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
              >
                {data.items.map((item) => (
                  <option key={item.key} value={item.key}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="calc-quantity"
                className="text-xs font-medium text-stone-500 dark:text-stone-400"
              >
                Adet / Gram
              </label>
              <input
                id="calc-quantity"
                type="number"
                inputMode="decimal"
                min={0}
                step="0.01"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm tabular-nums text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-amber-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
              />
            </div>
          </div>
        ) : (
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="calc-grams"
                className="text-xs font-medium text-stone-500 dark:text-stone-400"
              >
                Gram
              </label>
              <input
                id="calc-grams"
                type="number"
                inputMode="decimal"
                min={0}
                step="0.01"
                value={grams}
                onChange={(e) => setGrams(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm tabular-nums text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-amber-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
              />
            </div>
            <div>
              <label
                htmlFor="calc-karat"
                className="text-xs font-medium text-stone-500 dark:text-stone-400"
              >
                Ayar
              </label>
              <select
                id="calc-karat"
                value={karat}
                onChange={(e) =>
                  setKarat(Number(e.target.value) as keyof typeof KARAT_MILYEM)
                }
                className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-amber-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
              >
                <option value={24}>24 Ayar (Has)</option>
                <option value={22}>22 Ayar</option>
                <option value={18}>18 Ayar</option>
                <option value={14}>14 Ayar</option>
              </select>
            </div>
          </div>
        )}

        {/* Sonuç */}
        <div className="mt-5 rounded-xl bg-amber-50 p-4 dark:bg-amber-950/30">
          <p className="text-xs text-stone-500 dark:text-stone-400">Tahmini tutar</p>
          <p className="mt-1 text-2xl font-extrabold tabular-nums text-stone-900 dark:text-stone-50">
            {mode === "product"
              ? productResult !== null
                ? `${formatTL(productResult)} TL`
                : "—"
              : karatResult !== null
                ? `${formatTL(karatResult)} TL`
                : "—"}
          </p>
        </div>

        <p className="mt-3 text-[11px] text-stone-400 dark:text-stone-600">
          Bu hesaplama tahminidir; işçilik ve kuyumcu marjı dahil değildir.
          Kesin fiyat için kuyumcunuzla görüşün.
        </p>
      </div>
    </div>
  );
}
