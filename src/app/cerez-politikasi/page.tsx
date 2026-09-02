import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "DenizliKuyumcu.com çerez (cookie) kullanımı hakkında bilgilendirme.",
  alternates: { canonical: "/cerez-politikasi" },
};

export default function CerezPolitikasiPage() {
  return (
    <LegalPage title="Çerez Politikası" updated="Eylül 2026">
      <p>
        DenizliKuyumcu.com şu an ziyaretçi takibi veya reklam hedeflemesi
        amacıyla çerez (cookie) kullanmamaktadır.
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
        belirir. Bugün itibarıyla onaylayacağınız veya reddedeceğiniz
        gerçek bir izleme çerezi bulunmuyor; bu tercih, yalnızca
        localStorage&apos;da saklanır ve ileride bir analitik/reklam servisi
        eklenirse sizi önceden bilgilendirmemizi sağlar.
      </p>
      <h2>İleride değişirse?</h2>
      <p>
        Site büyüdükçe reklam gösterimi veya ziyaretçi analitiği için çerez
        kullanan bir servis eklemeyi değerlendirebiliriz. Böyle bir değişiklik
        olması durumunda bu sayfa güncellenecek ve tercih bildirimi buna göre
        yeniden gösterilecektir.
      </p>
    </LegalPage>
  );
}
