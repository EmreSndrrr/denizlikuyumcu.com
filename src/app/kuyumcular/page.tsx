import type { Metadata } from "next";
import Link from "next/link";
import { jewelers } from "@/lib/jewelers";
import Reveal from "@/components/Reveal";
import JewelerProfileCard from "@/components/JewelerProfileCard";

export const metadata: Metadata = {
  title: "Denizli Kuyumcuları — Rehber ve Adresler",
  description:
    "Denizli'deki kuyumcuları keşfedin. Öne çıkan ve güvenilir kuyumcuların listesi.",
  alternates: { canonical: "/kuyumcular" },
};

export default function KuyumcularPage() {
  const sorted = [...jewelers].sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  );

  return (
    <div className="mx-auto max-w-[1240px] px-4 py-12">
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
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {sorted.map((j, i) => (
            <Reveal key={j.id} delay={i * 0.04}>
              {/* Bu sayfada aradaki h2 yok (doğrudan h1 altında) — isim
                  h1 -> h3 atlamasın diye h2 olarak veriliyor. */}
              <JewelerProfileCard
                name={j.name}
                district={j.district}
                description={j.description}
                tag={j.featured ? "Öne Çıkan" : undefined}
                isDemo={j.isDemo}
                phone={j.phone}
                headingLevel="h2"
              />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
