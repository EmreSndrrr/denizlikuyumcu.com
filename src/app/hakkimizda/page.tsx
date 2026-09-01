import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "DenizliKuyumcu.com kimdir, ne sunar? Amacımız ve çalışma şeklimiz hakkında bilgi alın.",
};

export default function HakkimizdaPage() {
  return (
    <LegalPage title="Hakkımızda">
      <p>
        DenizliKuyumcu.com, Denizli&apos;de altın ve döviz fiyatlarını takip
        etmek isteyen ziyaretçiler için hazırlanmış bir bilgilendirme ve
        vitrin sitesidir. Amacımız; güncel gram altın, çeyrek altın, dolar ve
        euro gibi fiyatları tek bir sayfada, sade ve anlaşılır şekilde
        sunmak; altın ve kuyumculukla ilgili temel soruları yanıtlayan rehber
        içerikleri hazırlamak; ve Denizli&apos;deki kuyumcuları bir araya
        getiren bir dizin oluşturmaktır.
      </p>
      <p>
        Önemli bir noktayı baştan netleştirmek isteriz:{" "}
        <strong>DenizliKuyumcu.com bir kuyumcu değildir</strong>, ürün
        satmaz ve alım-satım işlemi gerçekleştirmez. Sitede gördüğünüz
        fiyatlar bilgilendirme amaçlıdır; kesin alım-satım için her zaman
        ilgili kuyumcuyla doğrudan iletişime geçmenizi öneririz.
      </p>
      <h2>Nasıl gelir elde ediyoruz?</h2>
      <p>
        Site tamamen ücretsiz kullanılabilir. Gelir modelimiz, Denizli&apos;deki
        kuyumcuların sitemizde reklam alanı satın alarak işletmelerini
        ziyaretçilerimize tanıtmasına dayanır. Reklam veren bir işletme
        olmadığında bile bu alanlarda &quot;bu alan sizin olabilir&quot;
        şeklinde örnek bir görünüm sunuyoruz; bu, gerçek bir reklam değildir.
      </p>
      <h2>Şeffaflık</h2>
      <p>
        Site henüz yeni ve büyümekte olan bir projedir. Fiyat verisi
        periyodik olarak tazelenir ve bağlantı kesildiğinde bu durum açıkça
        belirtilir (bkz. sayfa altındaki güncelleme zamanları). Sorularınız
        veya geri bildirimleriniz için{" "}
        <a href="/iletisim">İletişim</a> sayfasından bize ulaşabilirsiniz.
      </p>
    </LegalPage>
  );
}
