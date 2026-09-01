import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPrices, getGoldItemSparklines } from "@/lib/prices";
import { priceContent, getPriceContentBySlug } from "@/lib/priceContent";
import PriceDetailPage from "@/components/PriceDetailPage";

// Her altın kalemi (gram, çeyrek, yarım, tam, cumhuriyet, bilezik, ata,
// reşat, gremse, ons) için ayrı bir SEO sayfası. Build zamanında tüm
// slug'lar önceden üretiliyor (generateStaticParams); fiyatın kendisi
// hâlâ getPrices() üzerinden anasayzaki tablolarla AYNI kaynaktan gelir.
export const revalidate = 60;

export function generateStaticParams() {
  return priceContent
    .filter((entry) => entry.category === "altin")
    .map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getPriceContentBySlug("altin", slug);
  if (!entry) return {};
  return {
    title: entry.metaTitle,
    description: entry.metaDescription,
  };
}

export default async function AltinSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getPriceContentBySlug("altin", slug);
  if (!entry) notFound();

  const prices = await getPrices();
  // 7 günlük mini grafik yalnızca "gold"/"gold-extra" tipli kalemler için
  // üretiliyor (bkz. lib/prices.ts) — ons altın için geçmiş veri yok.
  const sparklines = await getGoldItemSparklines();
  const history = sparklines[entry.key];

  return <PriceDetailPage entry={entry} initialData={prices} history={history} />;
}
