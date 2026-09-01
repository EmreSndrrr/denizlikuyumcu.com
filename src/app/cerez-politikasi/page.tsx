import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "DenizliKuyumcu.com çerez (cookie) kullanımı hakkında bilgilendirme.",
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
        <a href="/veri-kullanimi">Veri Kullanımı</a> sayfasına bakabilirsiniz.
      </p>
      <h2>İleride değişirse?</h2>
      <p>
        Site büyüdükçe reklam gösterimi veya ziyaretçi analitiği için çerez
        kullanan bir servis eklemeyi değerlendirebiliriz. Böyle bir değişiklik
        olması durumunda bu sayfa güncellenecek ve gerekli görüldüğünde bir
        çerez izin bildirimi eklenecektir.
      </p>
    </LegalPage>
  );
}
