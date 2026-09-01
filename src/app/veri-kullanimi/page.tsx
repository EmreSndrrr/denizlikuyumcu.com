import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Veri Kullanımı",
  description:
    "DenizliKuyumcu.com hangi verileri, nasıl kullanır? Tarayıcı depolama (localStorage) kullanımı hakkında bilgi.",
};

export default function VeriKullanimiPage() {
  return (
    <LegalPage title="Veri Kullanımı" updated="Eylül 2026">
      <p>
        Bu sayfa, DenizliKuyumcu.com&apos;u kullanırken hangi verilerin nasıl
        işlendiğini basit bir dille açıklar. Site şu an bir kullanıcı hesabı
        sistemi veya form üzerinden kişisel veri toplama içermez.
      </p>
      <h2>Sunucuya gönderilen veri</h2>
      <p>
        Sitede fiyat verilerini görüntülemek ve arama yapmak gibi temel
        işlevler için sunucumuza herhangi bir kişisel bilginizi (ad, e-posta,
        telefon vb.) göndermeniz gerekmez. Standart web sunucu günlükleri
        (ör. istek zamanı, hatalı sayfa istekleri) barındırma altyapımız
        tarafından teknik amaçlarla tutulabilir.
      </p>
      <h2>Tarayıcınızda saklanan veri</h2>
      <p>
        Bazı tercihleriniz, daha iyi bir deneyim için yalnızca{" "}
        <strong>kendi tarayıcınızda</strong> (localStorage) saklanır ve bize
        hiçbir zaman gönderilmez:
      </p>
      <ul>
        <li>Açık/koyu tema tercihiniz</li>
        <li>
          Altın çeşitleri tablosunda işaretlediğiniz favori ürünler
        </li>
      </ul>
      <p>
        Bu veriler tamamen cihazınızda kalır; tarayıcı geçmişinizi
        temizlediğinizde veya farklı bir cihaz/tarayıcı kullandığınızda
        sıfırlanır. İstediğiniz zaman tarayıcı ayarlarınızdan bu verileri
        silebilirsiniz.
      </p>
      <h2>Üçüncü taraf servisler</h2>
      <p>
        Şu an sitede reklam gösterimi veya ziyaretçi analitiği yapan bir
        üçüncü taraf servis aktif değildir. İleride bu tür bir servis (ör.
        reklam ağı veya analitik araç) eklenirse bu sayfa güncellenerek hangi
        verinin, hangi amaçla paylaşıldığı açıkça belirtilecektir.
      </p>
      <p>
        Kişisel verilerin işlenmesine ilişkin yasal çerçeve için{" "}
        <a href="/kvkk">KVKK Aydınlatma Metni</a>&apos;ni, çerezler için{" "}
        <a href="/cerez-politikasi">Çerez Politikası</a>&apos;nı
        inceleyebilirsiniz.
      </p>
    </LegalPage>
  );
}
