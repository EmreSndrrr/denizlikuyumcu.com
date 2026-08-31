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
      <h1 className="font-serif text-3xl font-bold text-stone-900">
        Denizli Kuyumcuları
      </h1>
      <p className="mt-2 max-w-2xl text-stone-600">
        Denizli&apos;de faaliyet gösteren kuyumcuların listesi. Kendi
        işletmenizi öne çıkan listeye eklemek için{" "}
        <Link href="/reklam-ver" className="font-medium text-amber-700 hover:underline">
          reklam ver
        </Link>{" "}
        sayfasına göz atın.
      </p>

      {sorted.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-stone-300 bg-white p-8 text-center text-stone-500">
          Henüz kayıtlı kuyumcu yok.
        </div>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {sorted.map((j) => (
            <div
              key={j.id}
              className={
                "rounded-xl border bg-white p-5 shadow-sm " +
                (j.featured
                  ? "border-amber-400 ring-1 ring-amber-300"
                  : "border-stone-200")
              }
            >
              {j.featured && (
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                  Öne Çıkan
                </p>
              )}
              {j.isDemo && (
                <p className="text-[10px] uppercase tracking-wide text-stone-400">
                  Örnek kayıt
                </p>
              )}
              <p className="mt-1 font-serif text-lg font-bold text-stone-900">
                {j.name}
              </p>
              <p className="text-sm text-stone-500">{j.district}, Denizli</p>
              <p className="mt-2 text-sm text-stone-600">{j.description}</p>
              {j.phone && (
                <p className="mt-2 text-sm font-medium text-stone-800">
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
