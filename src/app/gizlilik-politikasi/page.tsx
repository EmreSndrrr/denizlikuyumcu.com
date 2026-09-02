import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "DenizliKuyumcu.com gizlilik politikası — hangi veriler, nasıl işlenir? Tarayıcı depolama (localStorage) kullanımı hakkında bilgi.",
  alternates: { canonical: "/gizlilik-politikasi" },
};

export default function GizlilikPolitikasiPage() {
  return (
    <LegalPage title="Gizlilik Politikası" updated="Eylül 2026">
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
        <li>Çerez tercihi bildirimine verdiğiniz yanıt</li>
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
        üçüncü taraf servis aktif değildir. Altın/döviz fiyatları
        finans.truncgil.com üzerinden çekilir; bu istek yalnızca sunucumuz
        ile Truncgil arasında gerçekleşir, ziyaretçinin herhangi bir kişisel
        verisi bu isteğe dahil edilmez (bkz.{" "}
        <a href="/veri-kaynaklari">Veri Kaynakları</a>). İleride reklam ağı
        veya analitik araç gibi bir servis eklenirse bu sayfa güncellenerek
        hangi verinin, hangi amaçla paylaşıldığı açıkça belirtilecektir.
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
