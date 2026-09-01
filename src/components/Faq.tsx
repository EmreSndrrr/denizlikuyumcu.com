import { faqItems } from "@/lib/faq";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";

// Bu bileşen Server Component olarak kalıyor (JSON-LD + başlık sunucuda
// render edilir); asıl açılır/kapanır etkileşim <FaqAccordion> içinde,
// ayrı bir client component'te.
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
      <FaqAccordion items={faqItems} />
    </div>
  );
}
