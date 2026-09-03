import Link from "next/link";
import { ArrowRight, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { homeFaqItems } from "@/lib/faq";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";

// Bu bileşen Server Component olarak kalıyor (JSON-LD + başlık sunucuda
// render edilir); asıl açılır/kapanır etkileşim <FaqAccordion> içinde,
// ayrı bir client component'te.
//
// Anasayfa yalnızca en çok aranan ~7 soruyu gösterir (homeFaqItems);
// tam liste + tam FAQPage şeması /sikca-sorulan-sorular sayfasında.
// Şema burada da yalnızca GÖRÜNEN sorularla sınırlı (Google: FAQ
// markup sayfada görünür içerikle birebir örtüşmeli).
export default function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqItems.map((item) => ({
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
        subtitle="Altın alırken, satarken ve bozdururken en çok merak edilenler — kısa cevaplar, ayrıntı için rehber bağlantıları."
      />
      <FaqAccordion items={homeFaqItems} />

      <Link
        href="/sikca-sorulan-sorular"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
      >
        Tüm sorular
        <ArrowRight aria-hidden="true" size={15} />
      </Link>

      {/* Sorusu listede olmayan ziyaretçi için bilgi talep formuna
          yönlendirme. */}
      <div className="mt-6 flex max-w-3xl flex-col gap-3 rounded-2xl border border-border bg-gold-surface/50 p-4 sm:flex-row sm:items-center sm:justify-between">
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
