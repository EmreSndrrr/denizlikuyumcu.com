import type { Metadata } from "next";
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
      <p>
        Altın/döviz fiyatları veya kuyumcu seçimi hakkında bir sorunuz varsa{" "}
        <a href="/bilgi-talebi">Bilgi Talebi formunu</a> doldurarak da bize
        iletebilirsiniz; en kısa sürede dönüş yaparız.
      </p>
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
