import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { faqItems } from "@/lib/faq";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description:
    "Gram altın fiyatı, çeyrek altın makası, bilezik ve işçilik hesabı, altın bozdurma, sahte altın, fatura, düğün altınları ve alyans ölçüsü hakkında en çok sorulan sorular ve kısa cevapları.",
  alternates: { canonical: "/sikca-sorulan-sorular" },
};

export default function SssPage() {
  // Tam FAQPage şeması burada — anasayfa yalnızca öne çıkan birkaç soruyu
  // taşıyor (bkz. components/Faq.tsx).
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://denizlikuyumcu.com/sikca-sorulan-sorular#faq",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ana Sayfa",
            item: "https://denizlikuyumcu.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Sıkça Sorulan Sorular",
            item: "https://denizlikuyumcu.com/sikca-sorulan-sorular",
          },
        ],
      },
    ],
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Sayfa yolu" className="mb-4 text-xs text-muted">
        <Link href="/" className="hover:text-brand">
          Ana Sayfa
        </Link>
        <span className="mx-1.5" aria-hidden="true">
          /
        </span>
        <span>Sıkça Sorulan Sorular</span>
      </nav>

      <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Sıkça Sorulan Sorular
      </h1>
      <p className="mt-3 text-muted">
        Altın alırken, satarken ve bozdururken en çok merak edilen sorular ve
        kısa cevapları. Bir konunun ayrıntısı için soru altındaki{" "}
        <span className="font-medium text-ink">Detaylı rehber</span>{" "}
        bağlantısını izleyin.
      </p>

      <FaqAccordion items={faqItems} />

      <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-border bg-gold-surface/50 p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          Sorunuzu burada bulamadınız mı? Bize iletin, size dönüş yapalım.
        </p>
        <Link
          href="/bilgi-talebi"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-surface transition-all hover:bg-brand active:scale-[0.98]"
        >
          Bilgi talep et
          <ArrowRight aria-hidden="true" size={15} />
        </Link>
      </div>

      <p className="mt-8 text-sm text-muted">
        Daha fazla ayrıntı için{" "}
        <Link href="/rehber" className="font-medium text-brand hover:underline">
          altın ve kuyumculuk rehberimize
        </Link>{" "}
        göz atabilir, güncel fiyatlar için{" "}
        <Link href="/" className="font-medium text-brand hover:underline">
          anasayfaya
        </Link>{" "}
        dönebilirsiniz.
      </p>
    </div>
  );
}
