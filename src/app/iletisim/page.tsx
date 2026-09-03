import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "DenizliKuyumcu.com ile iletişime geçin — sorularınız, reklam talepleriniz, hata bildirimleriniz ve iş birliği önerileriniz için e-posta ve telefon.",
  alternates: { canonical: "/iletisim" },
};

export default function IletisimPage() {
  return (
    <LegalPage title="İletişim">
      <p>
        Sorularınız, reklam vermek istediğiniz veya sitede bir hata/eksik
        gördüğünüzde bize aşağıdaki kanaldan ulaşabilirsiniz.
      </p>

      <div className="not-prose my-6 flex flex-col gap-3 rounded-2xl border border-border bg-gold-surface/50 p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          En hızlı yol: <strong className="text-ink">Bilgi Talebi formu</strong>.
          Doldurun, en kısa sürede size dönüş yapalım.
        </p>
        <Link
          href="/bilgi-talebi"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-surface transition-all hover:bg-brand active:scale-[0.98]"
        >
          Bilgi talep et
          <ArrowRight aria-hidden="true" size={15} />
        </Link>
      </div>

      <ul>
        <li>
          E-posta:{" "}
          <a href="mailto:info@ventiajans.com">info@ventiajans.com</a>
        </li>
        <li>
          Telefon: <a href="tel:05445965622">0544 596 56 22</a>
        </li>
      </ul>
      <p>
        Kuyumcunuzu sitede tanıtmak veya reklam alanı satın almak
        isterseniz <a href="/reklam-ver">Reklam Ver</a> sayfasındaki
        paketlere göz atabilirsiniz.
      </p>
      <p className="text-sm text-muted">
        Not: Site henüz yeni kurulduğu için iletişim kanallarımız
        genişlemektedir; fiziksel adres bilgisi netleştiğinde bu sayfa
        güncellenecektir.
      </p>
    </LegalPage>
  );
}
