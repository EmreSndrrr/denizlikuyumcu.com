import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPrices } from "@/lib/prices";
import { priceContent, getPriceContentBySlug } from "@/lib/priceContent";
import PriceDetailPage from "@/components/PriceDetailPage";

// Her döviz kalemi (dolar, euro, sterlin, isviçre frangı, suudi riyali)
// için ayrı bir SEO sayfası — bkz. src/app/altin/[slug]/page.tsx (aynı
// mantık, döviz kalemleri için).
export const revalidate = 60;

export function generateStaticParams() {
  return priceContent
    .filter((entry) => entry.category === "doviz")
    .map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getPriceContentBySlug("doviz", slug);
  if (!entry) return {};
  return {
    title: entry.metaTitle,
    description: entry.metaDescription,
  };
}

export default async function DovizSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getPriceContentBySlug("doviz", slug);
  if (!entry) notFound();

  const prices = await getPrices();
  // Döviz kalemleri için 7 günlük mini grafik verisi üretilmiyor (bkz.
  // lib/prices.ts'teki getGoldItemSparklines yalnızca altın kalemlerini
  // kapsıyor) — bu sayfalarda Sparkline gösterilmez.
  return <PriceDetailPage entry={entry} initialData={prices} />;
}
