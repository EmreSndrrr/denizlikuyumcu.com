import { ShieldCheck } from "@phosphor-icons/react/dist/ssr";
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

      {/* Brief'te istenen "veri güvenilirliği" notu — SSS'nin hemen
          yanında, fiyatların kaynağı/gecikmesi hakkında kısa bir
          şeffaflık bloğu. */}
      <div className="mt-6 flex max-w-3xl gap-3 rounded-2xl border border-border bg-surface p-4">
        <ShieldCheck
          aria-hidden="true"
          size={20}
          weight="bold"
          className="mt-0.5 shrink-0 text-positive"
        />
        <div>
          <p className="text-sm font-semibold text-ink">Veri güvenilirliği</p>
          <p className="mt-1 text-sm text-muted">
            Fiyatlar periyodik olarak (yaklaşık her 60 saniyede bir)
            tazelenir ve her bölümde &quot;… itibarıyla&quot; etiketiyle son
            güncelleme zamanı gösterilir. Bağlantı kesilirse veya bir
            yenileme başarısız olursa bunu &quot;Veri gecikmeli&quot;
            rozetiyle açıkça belirtiriz — eski veriyi güncelmiş gibi
            göstermeyiz.
          </p>
        </div>
      </div>
    </div>
  );
}
