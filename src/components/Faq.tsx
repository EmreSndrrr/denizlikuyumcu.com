import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { faqItems } from "@/lib/faq";
import SectionHeading from "@/components/SectionHeading";

// Native <details>/<summary> kullanıyoruz: JS gerekmeden klavye ve ekran
// okuyucuyla tam çalışan, tarayıcının kendi erişilebilirlik desteğine
// sahip bir açılır/kapanır liste. FAQPage şeması, Google'da "Sıkça
// Sorulanlar" zengin sonucu için SEO değeri katıyor.
export default function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SectionHeading
        title="Sıkça Sorulan Sorular"
        subtitle="Şimdilik temel sorularla başlıyoruz; zamanla genişleteceğiz."
      />
      <div className="mt-6 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-surface">
        {faqItems.map((item) => (
          <details key={item.question} className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
              {item.question}
              <CaretDown
                aria-hidden="true"
                size={16}
                className="shrink-0 text-muted transition-transform group-open:rotate-180"
              />
            </summary>
            <p className="mt-3 text-sm text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
