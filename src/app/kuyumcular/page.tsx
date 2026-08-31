import type { Metadata } from "next";
import Link from "next/link";
import { jewelers } from "@/lib/jewelers";

export const metadata: Metadata = {
  title: "Denizli Kuyumcuları — Rehber ve Adresler",
  description:
    "Denizli'deki kuyumcuları keşfedin. Öne çıkan ve güvenilir kuyumcuların listesi.",
};

export default function KuyumcularPage() {
  const sorted = [...jewelers].sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50">
          Denizli Kuyumcuları
        </h1>
        <span
          aria-hidden="true"
          className="mx-auto mt-3 block h-0.5 w-14 rounded-full bg-amber-600 dark:bg-amber-500"
        />
        <p className="mx-auto mt-3 max-w-xl text-stone-600 dark:text-stone-400">
          Denizli&apos;de faaliyet gösteren kuyumcuların listesi. Kendi
          işletmenizi öne çıkan listeye eklemek için{" "}
          <Link href="/reklam-ver" className="font-medium text-amber-700 hover:underline dark:text-amber-400">
            reklam ver
          </Link>{" "}
          sayfasına göz atın.
        </p>
      </div>

      {sorted.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-stone-300 bg-white p-8 text-center text-stone-500 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-400">
          Henüz kayıtlı kuyumcu yok.
        </div>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {sorted.map((j) => (
            <div
              key={j.id}
              className={
                "rounded-xl border bg-white p-5 shadow-sm dark:bg-stone-900 " +
                (j.featured
                  ? "border-amber-400 ring-1 ring-amber-300 dark:border-amber-500 dark:ring-amber-500/30"
                  : "border-stone-200 dark:border-stone-800")
              }
            >
              {j.featured && (
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-400">
                  Öne Çıkan
                </p>
              )}
              {j.isDemo && (
                <p className="text-[10px] uppercase tracking-wide text-stone-400 dark:text-stone-600">
                  Örnek kayıt
                </p>
              )}
              <p className="mt-1 text-lg font-bold text-stone-900 dark:text-stone-50">
                {j.name}
              </p>
              <p className="text-sm text-stone-500 dark:text-stone-400">{j.district}, Denizli</p>
              <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">{j.description}</p>
              {j.phone && (
                <p className="mt-2 text-sm font-medium text-stone-800 dark:text-stone-200">
                  {j.phone}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
