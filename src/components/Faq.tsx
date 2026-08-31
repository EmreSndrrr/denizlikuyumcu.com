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
      <div className="mx-auto mt-8 max-w-3xl divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white dark:divide-stone-800 dark:border-stone-800 dark:bg-stone-900">
        {faqItems.map((item) => (
          <details key={item.question} className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700 dark:text-stone-50">
              {item.question}
              <CaretDown
                aria-hidden="true"
                size={16}
                className="shrink-0 text-stone-400 transition-transform group-open:rotate-180"
              />
            </summary>
            <p className="mt-3 text-sm text-stone-600 dark:text-stone-400">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
