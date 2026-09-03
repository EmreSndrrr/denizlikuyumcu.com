import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "DenizliKuyumcu.com çerez (cookie) kullanımı hakkında bilgilendirme: hangi veriler localStorage'da tutulur, tercih bildirimi nasıl çalışır?",
  alternates: { canonical: "/cerez-politikasi" },
};

export default function CerezPolitikasiPage() {
  return (
    <LegalPage title="Çerez Politikası" updated="Eylül 2026">
      <p>
        DenizliKuyumcu.com <strong>izleme veya reklam hedefleme çerezi
        kullanmaz</strong>. Ziyaretçi istatistiği için kullandığımız
        Vercel Web Analytics de <strong>çerezsiz</strong> çalışır: cihazınıza
        çerez yazmaz, sizi siteler arası takip etmez (bkz. aşağıdaki
        &quot;Ziyaretçi istatistiği&quot; başlığı).
      </p>
      <h2>Ziyaretçi istatistiği (çerezsiz)</h2>
      <p>
        Hangi sayfaların ne kadar ziyaret edildiğini görmek için{" "}
        <strong>Vercel Web Analytics</strong> kullanıyoruz. Bu araç çerez
        kullanmaz, kalıcı bir tanımlayıcı oluşturmaz ve IP adresinizi ham
        haliyle saklamaz; yalnızca toplu/anonim sayımlar (sayfa görüntüleme,
        ülke, cihaz türü) üretir. Ayrıntı için{" "}
        <a href="/gizlilik-politikasi">Gizlilik Politikası</a>&apos;na
        bakabilirsiniz.
      </p>
      <h2>Peki tema tercihim nasıl hatırlanıyor?</h2>
      <p>
        Açık/koyu tema tercihiniz ve altın tablosunda işaretlediğiniz favori
        ürünler, çerez yerine tarayıcınızın{" "}
        <strong>localStorage</strong> adı verilen yerel depolama alanında
        tutulur. Teknik olarak çerezden farklıdır: sunucumuza otomatik olarak
        gönderilmez, yalnızca sizin cihazınızda kalır ve tarayıcı verilerinizi
        temizlediğinizde silinir. Ayrıntı için{" "}
        <a href="/gizlilik-politikasi">Gizlilik Politikası</a> sayfasına
        bakabilirsiniz.
      </p>
      <h2>Neden bir çerez tercihi bildirimi görüyorum?</h2>
      <p>
        Sitede ilk ziyaretinizde ekranın altında bir tercih bildirimi
        belirir. Bugün itibarıyla onaylayacağınız veya reddedeceğiniz gerçek
        bir izleme çerezi bulunmuyor; bu tercih yalnızca
        localStorage&apos;da saklanır ve ileride çerez kullanan bir servis
        eklenirse sizi önceden bilgilendirmemizi sağlar.
      </p>
      <h2>İleride değişirse?</h2>
      <p>
        Site büyüdükçe çerez kullanan bir reklam veya analitik servisi
        eklemeyi değerlendirebiliriz. Böyle bir değişiklik olması durumunda
        bu sayfa güncellenecek ve tercih bildirimi buna göre yeniden
        gösterilecektir.
      </p>
    </LegalPage>
  );
}
