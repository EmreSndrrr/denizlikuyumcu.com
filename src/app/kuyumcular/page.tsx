import type { Metadata } from "next";
import Link from "next/link";
import { jewelers } from "@/lib/jewelers";
import Reveal from "@/components/Reveal";

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
    <div className="mx-auto max-w-[1240px] px-4 py-14">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Denizli Kuyumcuları
      </h1>
      <p className="mt-3 max-w-xl text-muted">
        Denizli&apos;de faaliyet gösteren kuyumcuların listesi. Kendi
        işletmenizi öne çıkan listeye eklemek için{" "}
        <Link href="/reklam-ver" className="font-medium text-brand hover:underline">
          reklam ver
        </Link>{" "}
        sayfasına göz atın.
      </p>

      {sorted.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-border bg-surface p-8 text-center text-muted">
          Henüz kayıtlı kuyumcu yok.
        </div>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {sorted.map((j, i) => (
            <Reveal key={j.id} delay={i * 0.04}>
              <div
                className={
                  "h-full rounded-2xl border bg-surface p-5 shadow-sm " +
                  (j.featured ? "border-brand ring-1 ring-brand/30" : "border-border")
                }
              >
                {j.featured && (
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                    Öne Çıkan
                  </p>
                )}
                {j.isDemo && (
                  <p className="text-[10px] uppercase tracking-wide text-muted/70">
                    Örnek kayıt
                  </p>
                )}
                <p className="mt-1 text-lg font-bold text-ink">{j.name}</p>
                <p className="text-sm text-muted">{j.district}, Denizli</p>
                <p className="mt-2 text-sm text-muted">{j.description}</p>
                {j.phone && (
                  <p className="mt-2 text-sm font-medium text-ink">{j.phone}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
