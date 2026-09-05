import type { Metadata } from "next";
import Link from "next/link";
import InfoRequestForm from "@/components/InfoRequestForm";
import { resolveKonuSlug } from "@/lib/infoRequestConfig";

export const metadata: Metadata = {
  title: "Bilgi Talebi — Sorunuzu Bize İletin",
  description:
    "Altın ve döviz fiyatları, Denizli'de kuyumcu seçimi veya site hakkında sorularınız için bilgi talep formunu doldurun; en kısa sürede dönüş yapalım.",
  alternates: { canonical: "/bilgi-talebi" },
};

export default async function BilgiTalebiPage({
  searchParams,
}: {
  // Ör. /bilgi-talebi?konu=reklam -> formun "Konu" alanı "Reklam / işletme
  // tanıtımı" ile ön seçili açılır (bkz. lib/infoRequestConfig.ts).
  searchParams: Promise<{ konu?: string }>;
}) {
  const { konu } = await searchParams;
  const defaultKonu = resolveKonuSlug(konu);

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Bilgi Talebi
      </h1>
      <p className="mt-3 text-muted">
        Altın/döviz fiyatları, Denizli&apos;de kuyumcu seçimi, alım-satım
        süreçleri veya site hakkında bir sorunuz mu var? Aşağıdaki formu
        doldurun; en kısa sürede size dönüş yapalım.
      </p>

      <div className="mt-6 rounded-2xl border border-border bg-gold-surface/50 p-4 text-sm text-muted">
        Bu form <strong className="text-ink">yatırım tavsiyesi</strong> veya
        kesin alım-satım fiyatı sağlamaz. Güncel fiyatlar için{" "}
        <Link href="/" className="font-medium text-brand hover:underline">
          anasayfadaki fiyat tablosuna
        </Link>
        , yaygın sorular için{" "}
        <Link href="/rehber" className="font-medium text-brand hover:underline">
          rehber sayfamıza
        </Link>{" "}
        göz atabilirsiniz.
      </div>

      <div className="mt-8">
        <InfoRequestForm defaultKonu={defaultKonu} />
      </div>

      <p className="mt-8 border-t border-border pt-6 text-sm text-muted">
        Acil bir konuysa{" "}
        <Link href="/iletisim" className="font-medium text-brand hover:underline">
          İletişim
        </Link>{" "}
        sayfasındaki telefon numarasından da bize ulaşabilirsiniz. İşletmenizi
        sitede tanıtmak için{" "}
        <Link href="/reklam-ver" className="font-medium text-brand hover:underline">
          Reklam Ver
        </Link>{" "}
        sayfasına bakın.
      </p>
    </div>
  );
}
