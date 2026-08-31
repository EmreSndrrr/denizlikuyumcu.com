import Link from "next/link";
import { getPrices } from "@/lib/prices";
import { jewelers } from "@/lib/jewelers";
import PriceTicker from "@/components/PriceTicker";
import AdSlot from "@/components/AdSlot";

// Bu bir Server Component (dosyanın başında "use client" YOK). Varsayılan
// davranış bu: sunucuda çalışır, doğrudan getPrices() gibi fonksiyonları
// await'leyebilir, sonucu HTML olarak tarayıcıya gönderir. Kullanıcı
// JavaScript indirmeden bile ilk fiyatları görür — SEO ve hız için önemli.
//
// revalidate: 60 -> sayfa build anında donup kalmasın diye (statik export
// aksi halde fiyatları deploy anındaki değerde dondurur), Next.js bu
// sayfayı arka planda en fazla 60 saniyede bir yeniden üretir. Sayfa
// açıldıktan sonraki "canlı" güncellemeyi ise PriceTicker'ın kendi
// polling'i sağlıyor.
export const revalidate = 60;

export default async function HomePage() {
  const prices = await getPrices();
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

      <section className="border-b border-amber-900/10 bg-gradient-to-b from-amber-50 to-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Denizli&apos;de Güncel Altın ve Döviz Fiyatları
          </h1>
          <p className="mt-3 max-w-2xl text-neutral-600">
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
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-bold text-neutral-900">
            Öne Çıkan Kuyumcular
          </h2>
          <Link
            href="/kuyumcular"
            className="text-sm font-medium text-amber-800 hover:underline"
          >
            Tümünü gör →
          </Link>
        </div>

        {featuredJewelers.length > 0 ? (
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {featuredJewelers.map((j) => (
              <div
                key={j.id}
                className="rounded-xl border border-amber-900/10 bg-white p-4 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                  Öne Çıkan
                </p>
                <p className="mt-1 font-bold text-neutral-900">{j.name}</p>
                <p className="text-sm text-neutral-500">{j.district}</p>
                <p className="mt-2 text-sm text-neutral-600">
                  {j.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-4 rounded-xl border border-dashed border-neutral-300 bg-white p-6 text-center">
            <p className="text-neutral-600">
              Henüz öne çıkan kuyumcu yok.{" "}
              <Link
                href="/reklam-ver"
                className="font-semibold text-amber-800 hover:underline"
              >
                İlk siz olun
              </Link>
              .
            </p>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <AdSlot position="in-content" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-xl font-bold text-neutral-900">Rehber</h2>
        <p className="mt-1 text-sm text-neutral-500">
          Altın almadan/satmadan önce bilmeniz gerekenler.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
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
        <AdSlot position="footer-banner" />
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
      className="block rounded-xl border border-amber-900/10 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
    >
      <p className="font-semibold text-neutral-900">{title}</p>
      <p className="mt-1 text-sm text-neutral-600">{desc}</p>
    </Link>
  );
}
