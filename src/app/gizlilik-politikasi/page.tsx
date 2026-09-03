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
        işlendiğini basit bir dille açıklar. Sitede bir kullanıcı hesabı
        sistemi veya çerez tabanlı takip yoktur; kişisel veri yalnızca{" "}
        <a href="/bilgi-talebi">Bilgi Talebi formunu</a> doldurursanız ya da
        bize doğrudan yazarsanız işlenir.
      </p>
      <h2>Bilgi Talebi formu</h2>
      <p>
        <a href="/bilgi-talebi">/bilgi-talebi</a> sayfasındaki formu
        gönderdiğinizde ilettiğiniz ad, telefon, (varsa) e-posta, konu ve
        mesaj; yalnızca talebinize dönüş yapmak amacıyla{" "}
        <strong>e-posta olarak</strong> bize ulaşır. Bu bilgiler bir veri
        tabanında saklanmaz. E-posta iletimi <strong>Resend</strong>{" "}
        altyapısıyla yapılır. Ayrıntı ve haklarınız için{" "}
        <a href="/kvkk">KVKK Aydınlatma Metni</a>&apos;ne bakın.
      </p>
      <h2>Sunucuya gönderilen diğer veri</h2>
      <p>
        Fiyat görüntüleme ve site içi arama gibi işlevler için sunucumuza
        herhangi bir kişisel bilginizi göndermeniz gerekmez. Standart web
        sunucu günlükleri (ör. istek zamanı, IP, hatalı sayfa istekleri)
        barındırma altyapımız (<strong>Vercel</strong>) tarafından teknik ve
        güvenlik amaçlarıyla tutulabilir.
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
      <h2>Ziyaretçi istatistiği</h2>
      <p>
        Hangi sayfaların ne kadar ilgi gördüğünü ölçmek için{" "}
        <strong>Vercel Web Analytics</strong> kullanıyoruz. Bu araç{" "}
        <strong>çerez kullanmaz</strong>, ziyaretçilere kalıcı bir kimlik
        atamaz ve IP adresinizi ham haliyle saklamaz; veriyi anonimleştirerek
        yalnızca toplu sayımlar (sayfa görüntüleme sayısı, yaklaşık konum
        olarak ülke, cihaz/tarayıcı türü) üretir. Bu veriler reklam
        alanlarımızın erişimini olası reklamverenlere gösterebilmek için
        kullanılır ve üçüncü kişilere satılmaz.
      </p>
      <h2>Reklam gösterimi</h2>
      <p>
        Sitede yer alan &quot;Sponsorlu&quot; kuyumcu kartları ve reklam
        alanları doğrudan bizim tarafımızdan yönetilir; üçüncü taraf bir
        reklam ağı (ör. Google Ads) veya davranışsal hedefleme{" "}
        <strong>kullanılmamaktadır</strong>. Boş bir reklam alanı, o alanın
        satın alınabileceğini belirten bir bilgilendirme kartı gösterebilir.
      </p>
      <h2>Diğer üçüncü taraf servisler</h2>
      <p>
        Altın/döviz fiyatları finans.truncgil.com üzerinden çekilir; bu
        istek yalnızca sunucumuz ile Truncgil arasında gerçekleşir,
        ziyaretçinin herhangi bir kişisel verisi bu isteğe dahil edilmez
        (bkz. <a href="/veri-kaynaklari">Veri Kaynakları</a>). Bilgi Talebi
        formu gönderimleri e-posta olarak Resend altyapısıyla iletilir. Site{" "}
        <strong>Vercel</strong> üzerinde barındırılır.
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
