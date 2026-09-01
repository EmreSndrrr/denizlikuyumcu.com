import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "DenizliKuyumcu.com ile iletişime geçin — sorularınız, reklam talepleriniz ve geri bildirimleriniz için.",
};

export default function IletisimPage() {
  return (
    <LegalPage title="İletişim">
      <p>
        Sorularınız, reklam vermek istediğiniz veya sitede bir hata/eksik
        gördüğünüzde bize aşağıdaki kanaldan ulaşabilirsiniz.
      </p>
      <ul>
        <li>
          E-posta:{" "}
          <a href="mailto:info@denizlikuyumcu.com">info@denizlikuyumcu.com</a>
        </li>
        <li>Telefon: yakında eklenecek</li>
      </ul>
      <p>
        Kuyumcunuzu sitede tanıtmak veya reklam alanı satın almak
        isterseniz <a href="/reklam-ver">Reklam Ver</a> sayfasındaki
        paketlere göz atabilirsiniz.
      </p>
      <p className="text-sm text-muted">
        Not: Site henüz yeni kurulduğu için iletişim kanallarımız
        genişlemektedir; telefon hattı ve fiziksel adres bilgisi
        netleştiğinde bu sayfa güncellenecektir.
      </p>
    </LegalPage>
  );
}
