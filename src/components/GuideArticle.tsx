import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import AdSlot from "@/components/AdSlot";
import { getAdForPosition } from "@/lib/ads";

const SITE = "https://denizlikuyumcu.com";

// Rehber içeriğinin siteyle birlikte yayına girdiği tarih — kullanıcı
// tarafından onaylandı (bkz. proje planı, Aşama 5 kararı). Tüm makaleler
// bugüne kadar bu tek tarihi taşıyor (`updated="Eylül 2026"` metniyle
// tutarlı); bir makale gerçekten güncellenirse o çağrıya açık
// `dateModified` verilerek override edilebilir.
const CONTENT_LAUNCH_DATE = "2026-09-01";

type GuideImage = {
  src: StaticImageData;
  alt: string;
  // Stok görsel kaynağı (ör. "Fotoğraf: Ad Soyad / Pexels"). Lisans
  // gereği zorunlu olmasa da şeffaflık için gösteriyoruz.
  credit?: string;
};

type GuideFaq = { question: string; answer: string };

export default function GuideArticle({
  title,
  intro,
  updated,
  slug,
  image,
  faq,
  related,
  datePublished = CONTENT_LAUNCH_DATE,
  dateModified = datePublished,
  children,
}: {
  title: string;
  intro: string;
  // E-E-A-T sinyali: yazar/editöryal kimlik + güncelleme tarihi. Tek bir
  // gerçek yazar ismi yerine kurumsal bir ibare kullanıyoruz — site
  // sahibinin altın/kuyumculuk konusunda kişisel bir uzmanlık iddiası
  // yok, bu yüzden kişisel isim yanıltıcı olur.
  updated?: string;
  // Makalenin /rehber altındaki dilim adı — breadcrumb + Article
  // şemasındaki `url`/`mainEntityOfPage` için. Verilmezse breadcrumb'ın
  // son adımı yine başlıkla gösterilir ama url'siz kalır.
  slug?: string;
  image?: GuideImage;
  // Verilirse makale sonunda görünür bir "Sık sorulanlar" bölümü + ayrı
  // bir FAQPage @node olarak yapılandırılmış veri üretir. Anasayfa
  // SSS'sinden farklı, makaleye özel dar sorular için.
  faq?: GuideFaq[];
  // Makale sonundaki "İlgili rehberler" iç bağlantı bloğu.
  related?: { href: string; title: string }[];
  // ISO 8601 tarih. Verilmezse CONTENT_LAUNCH_DATE kullanılır — bkz.
  // yukarıdaki sabit.
  datePublished?: string;
  dateModified?: string;
  children: ReactNode;
}) {
  const url = slug ? `${SITE}/rehber/${slug}` : undefined;

  // Tek bir @graph: Article + BreadcrumbList (+ varsa FAQPage) birbirine
  // bağlı. Arama motoru "bu sayfa neyin nesi" grafiğini tek seferde kurar.
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Article",
      ...(url ? { "@id": `${url}#article`, url, mainEntityOfPage: url } : {}),
      headline: title,
      description: intro,
      inLanguage: "tr-TR",
      isAccessibleForFree: true,
      datePublished,
      dateModified,
      ...(image ? { image: `${SITE}${image.src.src}` } : {}),
      author: {
        "@type": "Organization",
        name: "DenizliKuyumcu.com Editöryal Ekibi",
        url: SITE,
      },
      // Anasayfadaki (page.tsx) Organization @id'sine referans — aynı
      // varlığı tekrar tanımlamak yerine tek bir entity grafiğine bağlıyor.
      publisher: { "@id": `${SITE}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE },
        { "@type": "ListItem", position: 2, name: "Rehber", item: `${SITE}/rehber` },
        {
          "@type": "ListItem",
          position: 3,
          name: title,
          ...(url ? { item: url } : {}),
        },
      ],
    },
  ];

  if (faq && faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      ...(url ? { "@id": `${url}#faq` } : {}),
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  const jsonLd = { "@context": "https://schema.org", "@graph": graph };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Görünür breadcrumb — hem gezinme hem de şema ile tutarlı bir
          sinyal. */}
      <nav aria-label="Sayfa yolu" className="mb-4 text-xs text-muted">
        <Link href="/" className="hover:text-brand">
          Ana Sayfa
        </Link>
        <span className="mx-1.5" aria-hidden="true">
          /
        </span>
        <Link href="/rehber" className="hover:text-brand">
          Rehber
        </Link>
      </nav>

      {/* Serif, brief'in "editoryal rehber başlıkları" için izin verdiği
          SINIRLI kullanım — sadece bu H1'de; makale içi <article>
          prose alt başlıkları (h2/h3) bilinçli olarak sans-serif kalıyor
          (gövde metniyle karışmasın diye). */}
      <h1 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 text-lg text-muted">{intro}</p>
      <p className="mt-2 text-xs text-muted">
        Yazan: DenizliKuyumcu.com Editöryal Ekibi
        {updated && <> · Güncelleme: {updated}</>}
      </p>

      {image && (
        <figure className="mt-6">
          <Image
            src={image.src}
            alt={image.alt}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 768px"
            className="w-full rounded-2xl border border-border object-cover"
            priority
          />
          {image.credit && (
            <figcaption className="mt-2 text-[11px] text-muted">
              {image.credit}
            </figcaption>
          )}
        </figure>
      )}

      {/* Gerçek bir reklam yoksa (bkz. AdSlot.tsx) hiçbir şey render
          edilmiyor — sarmalayıcı boş bir boşluk bırakmasın diye burada
          da koşullu. */}
      {getAdForPosition("in-content") && (
        <div className="mt-8">
          <AdSlot position="in-content" />
        </div>
      )}

      <article className="prose prose-stone dark:prose-invert mt-8 max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-brand">
        {children}
      </article>

      {faq && faq.length > 0 && (
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-ink">
            Sık sorulanlar
          </h2>
          <dl className="mt-4 divide-y divide-border border-y border-border">
            {faq.map((f) => (
              <div key={f.question} className="py-4">
                <dt className="text-sm font-semibold text-ink">{f.question}</dt>
                <dd className="mt-1.5 text-sm text-muted">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {related && related.length > 0 && (
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-ink">
            İlgili rehberler
          </h2>
          <ul className="mt-4 divide-y divide-border border-y border-border">
            {related.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="group flex items-center justify-between gap-4 py-3 text-sm font-medium text-ink transition-colors hover:text-brand"
                >
                  {r.title}
                  <ArrowRight
                    aria-hidden="true"
                    size={16}
                    className="shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-brand"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <p className="mt-8 rounded-2xl border border-border bg-gold-surface/60 p-4 text-sm text-muted">
        Bu içerik genel bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
        Güncel fiyatlar için{" "}
        <Link href="/" className="font-medium text-brand hover:underline">
          anasayfadaki
        </Link>{" "}
        fiyat tablosuna göz atabilirsiniz.
      </p>
    </div>
  );
}
