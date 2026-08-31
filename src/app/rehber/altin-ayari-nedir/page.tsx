import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Altın Ayarı Nedir? 24, 22, 18, 14 Ayar Farkları",
  description:
    "Altın ayarı ne demektir, 24, 22, 18 ve 14 ayar altın arasındaki farklar ve hangi ayarın nerede kullanıldığı.",
};

export default function Page() {
  return (
    <GuideArticle
      title="Altın Ayarı Nedir? 24, 22, 18, 14 Ayar Farkları"
      intro="Kuyumcuda duyduğunuz 'ayar' kelimesi, takının içindeki saf altın oranını ifade eder. Bu rehberde ayar kavramını ve yaygın ayarlar arasındaki farkları anlatıyoruz."
    >
      <h2>Ayar ne anlama gelir?</h2>
      <p>
        Saf altın (24 ayar / 999 has) çok yumuşak bir metaldir ve tek başına
        takı yapımına uygun değildir. Bu yüzden altın; gümüş, bakır gibi
        metallerle alaşımlanarak sertleştirilir. &quot;Ayar&quot;, bu
        alaşımın içindeki saf altın oranını gösterir. 24 üzerinden ifade
        edilir: 24 ayar %100 saf altına, 22 ayar ise 24 parçanın 22&apos;sinin
        saf altın olduğu anlamına gelir.
      </p>

      <h2>Yaygın ayarlar ve kullanım alanları</h2>
      <ul>
        <li>
          <strong>24 Ayar (Has Altın):</strong> ~%99,9 saf. Çok yumuşak
          olduğu için günlük kullanım takısından çok külçe, bilezik ve
          yatırımlık ürünlerde tercih edilir.
        </li>
        <li>
          <strong>22 Ayar:</strong> ~%91,6 saf. Türkiye&apos;de bilezik ve
          geleneksel takılarda sık kullanılır; 24 ayara göre daha
          dayanıklıdır.
        </li>
        <li>
          <strong>18 Ayar:</strong> %75 saf. Günlük kullanım yüzük, kolye ve
          küpelerde en yaygın tercihlerden biridir; dayanıklılık ve görünüm
          arasında iyi bir denge sunar.
        </li>
        <li>
          <strong>14 Ayar:</strong> ~%58,5 saf. Daha ekonomik ve daha
          dayanıklıdır; özellikle günlük yoğun kullanılan takılarda tercih
          edilebilir.
        </li>
      </ul>

      <h2>Ayar damgası nasıl kontrol edilir?</h2>
      <p>
        Türkiye&apos;de satılan altın takılarda ayar damgası (örn. 916, 750,
        585) bulunması gerekir. Kuyumcudan alışveriş yaparken damgayı
        görebilir, şüpheniz varsa ayar tespit cihazıyla kontrol talep
        edebilirsiniz.
      </p>
    </GuideArticle>
  );
}
