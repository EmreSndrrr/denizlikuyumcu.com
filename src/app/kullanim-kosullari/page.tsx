import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description:
    "DenizliKuyumcu.com'u kullanırken geçerli olan kullanım koşulları: sitenin amacı, sorumluluk sınırları ve yetkili mahkeme bilgisi.",
  alternates: { canonical: "/kullanim-kosullari" },
};

export default function KullanimKosullariPage() {
  return (
    <LegalPage title="Kullanım Koşulları" updated="Eylül 2026">
      <p>
        DenizliKuyumcu.com&apos;u (&quot;site&quot;) kullanarak aşağıdaki
        koşulları kabul etmiş sayılırsınız. Sorularınız için{" "}
        <a href="/iletisim">İletişim</a> sayfasından bize ulaşabilirsiniz.
      </p>

      <h2>Sitenin Amacı</h2>
      <p>
        Site, Denizli&apos;de güncel altın/döviz fiyatlarını, kuyumculukla
        ilgili rehber içeriklerini ve bir kuyumcu dizinini bilgilendirme
        amacıyla sunar. Site kendisi bir kuyumcu değildir; ürün satmaz,
        sipariş almaz, ödeme tahsil etmez. Sitede alım-satım işlemi
        gerçekleştirilmez.
      </p>

      <h2>Fiyat Bilgisi ve Sorumluluk Sınırı</h2>
      <p>
        Sitede gösterilen altın ve döviz fiyatları bilgilendirme
        amaçlıdır, yatırım tavsiyesi niteliği taşımaz ve gecikmeli
        olabilir. Bu fiyatlara dayanarak alınan alım-satım kararlarından
        doğabilecek zararlardan site sorumlu tutulamaz. Kesin fiyat için
        her zaman ilgili kuyumcuyla doğrudan iletişime geçilmesi
        önerilir. Ayrıntılı bilgi için{" "}
        <a href="/yasal-uyari">Yasal Uyarı</a> sayfasına bakabilirsiniz.
      </p>

      <h2>Kuyumcu Dizini ve Sponsorlu İçerik</h2>
      <p>
        Kuyumcu dizinindeki kayıtlar ve sponsorlu içerikler bilgi amaçlı
        sunulur; sitede &quot;Sponsorlu&quot; olarak etiketlenen kartlar,
        ilgili işletmenin reklam bedeli karşılığında öne çıkarıldığını
        gösterir. Bir kuyumcunun listelenmesi, site tarafından o
        işletmenin onaylandığı veya doğrulandığı anlamına gelmez —
        yalnızca veri kaynağında yer alan bilgiler (varsa telefon, konum,
        açık/kapalı durumu) gösterilir.
      </p>

      <h2>Fikri Mülkiyet</h2>
      <p>
        Sitedeki metin, tasarım ve görsel unsurlar aksi belirtilmedikçe
        DenizliKuyumcu.com&apos;a aittir. İçeriklerin izinsiz kopyalanması
        veya ticari amaçla yeniden yayınlanması talep edilmez.
      </p>

      <h2>Uygulanacak Hukuk ve Yetkili Mahkeme</h2>
      <p>
        Bu koşullar Türkiye Cumhuriyeti kanunlarına tabidir. Bu koşullardan
        veya sitenin kullanımından doğabilecek uyuşmazlıklarda Denizli
        Mahkemeleri ve İcra Daireleri yetkilidir.
      </p>

      <h2>Değişiklikler</h2>
      <p>
        Bu koşullar, site geliştikçe güncellenebilir. Önemli
        değişikliklerde bu sayfadaki &quot;son güncelleme&quot; tarihi
        değişir. İlgili diğer sayfalar için{" "}
        <a href="/gizlilik-politikasi">Gizlilik Politikası</a>,{" "}
        <a href="/kvkk">KVKK Aydınlatma Metni</a>,{" "}
        <a href="/yasal-uyari">Yasal Uyarı</a> ve{" "}
        <a href="/cerez-politikasi">Çerez Politikası</a>&apos;nı
        inceleyebilirsiniz.
      </p>
    </LegalPage>
  );
}
