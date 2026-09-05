import Link from "next/link";
import { ArrowRight, CheckCircle, Storefront } from "@phosphor-icons/react/dist/ssr";
import { adPackages } from "@/lib/adPackages";
import WhatsAppCta from "@/components/WhatsAppCta";
import TrackedLink from "@/components/TrackedLink";

// Kuyumculara yönelik satış çağrısı — anasayfada ve /kuyumcular sayfasında
// kullanılan TEK ortak bileşen.
//
// Bu sayfadaki listeleme ÜCRETLİ ve ONAYLIDIR (bkz. PRODUCT.md ürün
// kararı): "bilgilerinizi gönderin ücretsiz ekleyelim" çağrısı bilinçli
// olarak YOK; sahte müşteri/istatistik de gösterilmiyor.
//
// variant:
//  - "prominent": anasayfa için — daha büyük başlık, daha geniş iç boşluk
//    ve paketlerin tek satırlık faydası da görünür.
//  - "compact": /kuyumcular sayfasının altı için — sayfanın kendi
//    içeriğiyle rekabet etmeyen, daha sakin bir blok.
export default function JewelerSalesCta({
  variant = "compact",
  context,
  headingLevel: Heading = "h2",
}: {
  variant?: "prominent" | "compact";
  // Ölçüm bağlamı (bkz. lib/analytics.ts) — hangi yüzeydeki CTA tıklandı.
  context: string;
  headingLevel?: "h2" | "h3";
}) {
  const prominent = variant === "prominent";

  return (
    <section
      className={
        "rounded-[24px] border border-border bg-gold-surface/50 " +
        (prominent ? "p-6 sm:p-10" : "max-w-3xl p-6")
      }
    >
      {prominent && (
        <span className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-brand">
          <Storefront aria-hidden="true" size={13} weight="bold" />
          Kuyumculara özel
        </span>
      )}

      <Heading
        className={
          "font-bold tracking-tight text-ink " +
          (prominent ? "mt-4 text-2xl sm:text-3xl" : "text-lg")
        }
      >
        Kuyumcu musunuz? İşletmenizi Denizli&apos;de öne çıkarın
      </Heading>

      <p className={"text-muted " + (prominent ? "mt-3 max-w-2xl text-base" : "mt-2 text-sm")}>
        Sitedeki listeleme <strong className="text-ink">ücretli ve onaylıdır</strong> — sayfa
        dolu görünsün diye rastgele işletme eklenmez. DenizliKuyumcu.com, güncel altın fiyatı
        ve kuyumculuk rehberi arayan yerel ziyaretçileri ağırlar; işletmeniz onay sonrası
        anasayfada ve kuyumcular sayfasında &quot;Sponsorlu&quot; etiketiyle görünür.
      </p>

      <ul className={"grid gap-2 sm:grid-cols-3 " + (prominent ? "mt-6" : "mt-4")}>
        {adPackages.map((pkg) => (
          <li
            key={pkg.name}
            className={
              "rounded-[10px] border border-border bg-surface " +
              (prominent ? "px-4 py-3" : "px-3 py-2.5")
            }
          >
            <p className="flex items-start gap-2 text-sm font-medium text-ink">
              <CheckCircle
                aria-hidden="true"
                weight="fill"
                size={16}
                className="mt-0.5 shrink-0 text-brand"
              />
              {pkg.name}
            </p>
            {/* Anasayfada paketin ne olduğu tek satırda anlaşılsın — tam
                özellik listesi /reklam-ver'de. */}
            {prominent && (
              <p className="mt-1.5 pl-6 text-xs text-muted">{pkg.features[0]}</p>
            )}
          </li>
        ))}
      </ul>

      <div className={"flex flex-wrap items-center gap-3 " + (prominent ? "mt-6" : "mt-4")}>
        <TrackedLink
          href="/reklam-ver"
          event="ad_cta_click"
          eventProps={{ context }}
          className={
            "inline-flex items-center gap-2 rounded-full bg-ink text-sm font-semibold text-surface transition-all hover:bg-brand active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand " +
            (prominent ? "px-5 py-3" : "px-4 py-2.5")
          }
        >
          Paketleri ve fiyatlandırmayı gör
          <ArrowRight aria-hidden="true" size={15} />
        </TrackedLink>
        <WhatsAppCta
          variant={prominent ? "button" : "link"}
          label={prominent ? "WhatsApp'tan sorun" : "veya WhatsApp'tan hızlıca sorun"}
          context={context}
        />
      </div>

      {prominent && (
        <p className="mt-4 text-xs text-muted">
          Sorularınız için{" "}
          <Link href="/reklam-ver#iletisim" className="font-medium text-brand hover:underline">
            teklif formu
          </Link>{" "}
          · Reklam ve organik içerik sitede her zaman açıkça ayrılır.
        </p>
      )}
    </section>
  );
}
