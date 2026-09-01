import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import type { GoldHistoryPoint, PriceSnapshot } from "@/lib/prices";
import { priceContent, type PriceContentEntry } from "@/lib/priceContent";
import PriceDetailCard from "@/components/PriceDetailCard";
import PriceItemCalculator from "@/components/PriceItemCalculator";
import AdSlot from "@/components/AdSlot";

// /altin/[slug] ve /doviz/[slug] sayfalarının ORTAK şablonu — Server
// Component (canlı fiyat kartı hariç her şey sunucuda render edilir, SEO
// gövde metni JS olmadan da okunabilir). Breadcrumb, H1, canlı fiyat
// kartı, SEO metni ve aynı kategorideki diğer kalemlere bağlantılardan
// oluşuyor.
export default function PriceDetailPage({
  entry,
  initialData,
  history,
}: {
  entry: PriceContentEntry;
  initialData: PriceSnapshot;
  history?: GoldHistoryPoint[];
}) {
  const parentLabel = entry.category === "altin" ? "Altın Fiyatları" : "Döviz Kurları";
  const parentHref = entry.category === "altin" ? "/#altin-fiyatlari" : "/#doviz";

  const related = priceContent
    .filter((e) => e.category === entry.category && e.key !== entry.key)
    .slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: entry.metaTitle,
    description: entry.metaDescription,
    inLanguage: "tr-TR",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://denizlikuyumcu.com" },
        {
          "@type": "ListItem",
          position: 2,
          name: parentLabel,
          item: `https://denizlikuyumcu.com${parentHref}`,
        },
        { "@type": "ListItem", position: 3, name: entry.h1 },
      ],
    },
  };

  return (
    <div className="mx-auto max-w-[1240px] px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb — hem kullanıcı yönelimi hem de arama motorları için. */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted">
        <Link href="/" className="hover:text-brand">
          Anasayfa
        </Link>
        <CaretRight aria-hidden="true" size={10} />
        <Link href={parentHref} className="hover:text-brand">
          {parentLabel}
        </Link>
        <CaretRight aria-hidden="true" size={10} />
        <span className="text-ink">{entry.h1}</span>
      </nav>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {entry.h1}
          </h1>
          <p className="mt-3 max-w-2xl text-muted">{entry.intro}</p>

          {/* Sadece mobilde/dar ekranda kart, başlığın hemen altında —
              sağ sütun lg'de görünmeye başladığında burada tekrar
              gösterilmiyor (bkz. aşağıdaki lg:hidden). */}
          <div className="mt-6 max-w-md space-y-4 lg:hidden">
            <PriceDetailCard itemKey={entry.key} initialData={initialData} history={history} />
            <AdSlot position="sidebar" />
          </div>

          <article className="prose prose-stone dark:prose-invert mt-8 max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-brand">
            {entry.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </article>

          <div className="mt-8 max-w-md">
            <PriceItemCalculator itemKey={entry.key} initialData={initialData} />
          </div>

          <p className="mt-8 rounded-lg border border-border bg-gold/10 p-4 text-sm text-muted">
            Fiyatlar bilgilendirme amaçlıdır, yatırım tavsiyesi değildir ve
            gecikmeli olabilir. Kesin alım-satım fiyatı için{" "}
            <Link href="/kuyumcular" className="font-medium text-brand hover:underline">
              Denizli&apos;deki kuyumcularla
            </Link>{" "}
            iletişime geçin.
          </p>
        </div>

        {/* Masaüstünde sağ sütunda sabit, sticky bir blok — kullanıcı SEO
            metnini okurken fiyat her zaman görünür kalır. Reklam alanı,
            fiyat sayfalarının hiç kullanmadığı (bkz. lib/ads.ts) "sidebar"
            pozisyonunu kullanıyor; Reklam Ver'deki "fiyat sayfalarında
            görünürlük" vaadiyle tutarlı hale getiriyor. */}
        <div className="hidden space-y-4 lg:sticky lg:top-24 lg:block">
          <PriceDetailCard itemKey={entry.key} initialData={initialData} history={history} />
          <AdSlot position="sidebar" />
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm font-semibold text-ink">
            Diğer {entry.category === "altin" ? "Altın Çeşitleri" : "Döviz Kurları"}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {related.map((r) => (
              <Link
                key={r.key}
                href={`/${r.category}/${r.slug}`}
                className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-ink transition-colors hover:border-brand hover:text-brand"
              >
                {r.h1.replace(/^Denizli /, "").replace(/ Fiyatı.*$/, "").replace(/ Kuru.*$/, "")}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
