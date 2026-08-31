import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { getPrices, getGoldHistory } from "@/lib/prices";
import { jewelers } from "@/lib/jewelers";
import PriceTicker from "@/components/PriceTicker";
import GoldCalculator from "@/components/GoldCalculator";
import OnsAltinCard from "@/components/OnsAltinCard";
import GoldVarietiesTable from "@/components/GoldVarietiesTable";
import GoldPriceChart from "@/components/GoldPriceChart";
import DailyChangeTable from "@/components/DailyChangeTable";
import Faq from "@/components/Faq";
import AdSlot from "@/components/AdSlot";
import SectionHeading from "@/components/SectionHeading";

// Bu bir Server Component (dosyanın başında "use client" YOK). Varsayılan
// davranış bu: sunucuda çalışır, doğrudan getPrices() gibi fonksiyonları
// await'leyebilir, sonucu HTML olarak tarayıcıya gönderir. Kullanıcı
// JavaScript indirmeden bile ilk fiyatları görür — SEO ve hız için önemli.
//
// revalidate: 60 -> sayfa build anında donup kalmasın diye (statik export
// aksi halde fiyatları deploy anındaki değerde dondurur), Next.js bu
// sayfayı arka planda en fazla 60 saniyede bir yeniden üretir. Sayfa
// açıldıktan sonraki "canlı" güncellemeyi ise PriceTicker/GoldCalculator'ın
// kendi polling'i sağlıyor.
export const revalidate = 60;

export default async function HomePage() {
  const prices = await getPrices();
  const goldHistory = await getGoldHistory();
  const featuredJewelers = jewelers.filter((j) => j.featured).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DenizliKuyumcu.com",
    url: "https://denizlikuyumcu.com",
    description:
      "Denizli'de güncel altın ve döviz fiyatları, kuyumcu rehberi.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-stone-200 bg-gradient-to-b from-amber-50 to-stone-50 dark:border-stone-800 dark:from-amber-950/20 dark:to-stone-950">
        {/* Gerçek ürün fotoğrafımız henüz yok (bkz. PRODUCT.md); sahte bir
            takı görseli koymak yerine markaya uygun soyut/dekoratif bir
            altın parıltısı kullanıyoruz. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-300/30 blur-3xl dark:bg-amber-500/10"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <h1 className="max-w-2xl text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
            Denizli&apos;de Güncel Altın ve Döviz Fiyatları
          </h1>
          <p className="mt-3 max-w-2xl text-stone-600 dark:text-stone-400">
            Gram altın, çeyrek altın, dolar ve euro kurlarını takip edin;
            Denizli&apos;nin güvenilir kuyumcularını keşfedin.
          </p>

          <div className="mt-8">
            <PriceTicker initialData={prices} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <AdSlot position="hero-banner" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <GoldCalculator initialData={prices} />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <PriceTicker
          initialData={prices}
          title="Yurtdışı Para Birimleri"
          filterType="currency-extra"
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <SectionHeading title="Denizli'de Kuyumculuk" />
        <p className="mx-auto mt-8 max-w-3xl text-center text-stone-600 dark:text-stone-400">
          Denizli, çeyiz kültüründen düğün geleneklerine uzanan köklü bir
          kuyumculuk birikimine sahiptir. Şehir merkezinde, özellikle{" "}
          <strong className="font-semibold text-stone-800 dark:text-stone-200">
            Bayramyeri
          </strong>{" "}
          çevresinde kümelenen çok sayıda kuyumcu işletmesi; gram altından
          tasarım takıya, alyanstan gümüş ürünlere kadar geniş bir yelpazede
          hizmet sunar. Bu yoğun kuyumcu kümelenmesi, alışveriş öncesi fiyat
          ve model karşılaştırması yapmak isteyen müşteriler için de önemli
          bir avantaj sağlar.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <SectionHeading title="Öne Çıkan Kuyumcular" />

        {featuredJewelers.length > 0 ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {featuredJewelers.map((j) => (
              <div
                key={j.id}
                className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm dark:border-stone-800 dark:bg-stone-900"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-400">
                  Öne Çıkan
                </p>
                <p className="mt-1 font-bold text-stone-900 dark:text-stone-50">{j.name}</p>
                <p className="text-sm text-stone-500 dark:text-stone-400">{j.district}</p>
                <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
                  {j.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-xl border border-dashed border-stone-300 bg-white p-6 text-center dark:border-stone-700 dark:bg-stone-900">
            <p className="text-stone-600 dark:text-stone-400">
              Henüz öne çıkan kuyumcu yok.{" "}
              <Link
                href="/reklam-ver"
                className="font-semibold text-amber-700 hover:underline dark:text-amber-400"
              >
                İlk siz olun
              </Link>
              .
            </p>
          </div>
        )}

        <div className="mt-6 text-center">
          <Link
            href="/kuyumcular"
            className="inline-flex items-center gap-1 rounded-sm py-2 text-sm font-medium text-amber-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700 dark:text-amber-400"
          >
            Tümünü gör
            <ArrowRight aria-hidden="true" size={14} />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <AdSlot position="in-content" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <SectionHeading
          title="Rehber"
          subtitle="Altın almadan/satmadan önce bilmeniz gerekenler."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <GuideCard
            href="/rehber/altin-ayari-nedir"
            title="Altın Ayarı Nedir? (24, 22, 18, 14 Ayar)"
            desc="Ayar nedir, hangisi nerede kullanılır, has altınla farkı."
          />
          <GuideCard
            href="/rehber/gram-altin-hesaplama"
            title="Gram Altın Fiyatı Nasıl Hesaplanır?"
            desc="Has altın, işçilik ve kur ilişkisini basitçe anlatıyoruz."
          />
          <GuideCard
            href="/rehber/alyans-rehberi"
            title="Alyans Alırken Nelere Dikkat Edilmeli?"
            desc="Ayar, ölçü, gramaj ve kuyumcu seçimi rehberi."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <Faq />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <AdSlot position="footer-banner" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <SectionHeading
          title="Tüm Altın Çeşitleri"
          subtitle="Gram, çeyrek, yarım, tam, ata, reşat, gremse ve daha fazlası tek tabloda."
        />
        <div className="mt-8 space-y-4">
          <OnsAltinCard initialData={prices} />
          <GoldVarietiesTable initialData={prices} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <SectionHeading title="Altın Fiyatları Grafiği" />
        <div className="mt-8">
          <GoldPriceChart history={goldHistory} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <SectionHeading title="Günlük Değişim" />
        <div className="mt-8">
          <DailyChangeTable initialData={prices} />
        </div>
      </section>
    </>
  );
}

function GuideCard({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-xl border border-stone-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700 dark:border-stone-800 dark:bg-stone-900"
    >
      <p className="font-semibold text-stone-900 dark:text-stone-50">{title}</p>
      <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{desc}</p>
    </Link>
  );
}
