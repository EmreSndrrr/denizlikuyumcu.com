import type { Metadata } from "next";
import Link from "next/link";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Gümüş Nedir? 925 Ayar Gümüş, Takı ve Yatırım Rehberi",
  description:
    "925 ayar gümüş ne demek, saf gümüşten farkı ne? Gümüş takı nasıl anlaşılır ve temizlenir, gümüş fiyatını ne belirler, altın/gümüş oranı nedir?",
  alternates: { canonical: "/rehber/gumus-rehberi" },
};

export default function Page() {
  return (
    <GuideArticle
      title="Gümüş Rehberi: 925 Ayar Gümüş, Takı ve Yatırım"
      intro="Gümüş, altından sonra en çok bilinen kıymetli madendir. Takıda en yaygın kullanılan 925 ayar gümüş, binde 925 saf gümüş ile dayanıklılık için eklenen başka metallerden (çoğunlukla bakır) oluşur. Gümüş altına göre çok daha ucuzdur: 1 Ekim 2026 verisinde 1 gram altının fiyatı, yaklaşık 69 gram gümüşün fiyatına denk geliyordu."
      updated="Ekim 2026"
      datePublished="2026-10-01"
      slug="gumus-rehberi"
      faq={[
        {
          question: "925 ayar gümüş kararır mı?",
          answer:
            "Evet, zamanla kararabilir. Gümüş havadaki kükürt bileşikleriyle tepkimeye girerek yüzeyinde koyu bir gümüş sülfür tabakası oluşturur. Bu bir kalite sorunu değil, metalin doğal özelliğidir; ılık su, hafif sabun ve yumuşak bir bezle çoğunlukla giderilebilir.",
        },
        {
          question: "Gümüş mıknatıs tutar mı?",
          answer:
            "Hayır, gümüş mıknatısa yapışmaz. Bir takı mıknatısa yapışıyorsa içinde başka bir metal vardır. Ancak yapışmaması tek başına gümüş olduğunu kanıtlamaz; birçok başka metal de mıknatısa yapışmaz. Kesin sonuç için damgaya bakın ve gerekirse kuyumcuya test ettirin.",
        },
        {
          question: "DenizliKuyumcu.com'da gümüş fiyatı var mı?",
          answer:
            "Şu anda yok. Sitede canlı olarak altın ve döviz fiyatları yayımlanıyor. Gümüş fiyatını bankanızın ya da kuyumcunuzun güncel alış ve satış fiyatından takip edebilirsiniz.",
        },
      ]}
      related={[
        { href: "/rehber/altin-ayari-nedir", title: "Altın ayarı nedir?" },
        { href: "/rehber/sahte-altin-nasil-anlasilir", title: "Sahte altın nasıl anlaşılır?" },
        { href: "/rehber/altin-nasil-saklanir", title: "Takı nasıl saklanır ve temizlenir?" },
      ]}
    >
      <h2>925 ayar gümüş ne demek?</h2>
      <p>
        Gümüşün saflığı, altında olduğu gibi binde (milyem) olarak ifade edilir
        ve takıların üzerine damga olarak basılır. Türkiye&apos;de bu sayı halk
        arasında çoğu zaman &quot;ayar&quot; diye anılır.
      </p>
      <table>
        <thead>
          <tr>
            <th>Damga</th>
            <th>Saf gümüş oranı</th>
            <th>Tipik kullanım</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>999</td><td>%99,9</td><td>Yatırım külçesi, sikke</td></tr>
          <tr><td>925</td><td>%92,5</td><td>Takı, aksesuar (en yaygın)</td></tr>
          <tr><td>900 ve altı</td><td>%90 ve altı</td><td>Bazı eski eşya ve objeler</td></tr>
        </tbody>
      </table>
      <p>
        Saf gümüş (999) takı için fazla yumuşaktır; kolayca çizilir ve şekli
        bozulur. Bu yüzden takılarda <strong>925 ayar</strong> kullanılır:
        binde 925 gümüşe, sertlik kazandırmak için çoğunlukla bakır eklenir.
        Uluslararası piyasada bu alaşım &quot;sterling gümüş&quot; olarak da
        bilinir. Altın takılarda aynı mantığın nasıl işlediğini{" "}
        <Link href="/rehber/altin-ayari-nedir">altın ayarı rehberinde</Link>{" "}
        anlattık.
      </p>

      <h2>Gümüş ile altın arasındaki farklar</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Gümüş</th>
            <th>Altın</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Fiyat</td><td>Gram başına çok daha düşük</td><td>Yüksek</td></tr>
          <tr><td>Kararma</td><td>Zamanla kararabilir</td><td>Kararmaz</td></tr>
          <tr><td>Fiyat oynaklığı</td><td>Genellikle daha yüksek</td><td>Daha düşük</td></tr>
          <tr><td>Sanayi kullanımı</td><td>Yaygın (elektronik, güneş paneli)</td><td>Sınırlı</td></tr>
          <tr><td>Takıda yaygın ayar</td><td>925</td><td>22, 18, 14 ayar</td></tr>
        </tbody>
      </table>

      <h2>Altın/gümüş oranı nedir?</h2>
      <p>
        Altın/gümüş oranı, bir birim altının kaç birim gümüş ettiğini gösterir.
        Hesabı basittir: aynı birimdeki altın fiyatı, gümüş fiyatına bölünür.
        1 Ekim 2026 verisinde gram altın satış fiyatı, gram gümüş satış
        fiyatının yaklaşık <strong>69 katıydı</strong>; yani 1 gram altınla
        yaklaşık 69 gram gümüş alınabiliyordu.
      </p>
      <p>
        Bu oran zamanla değişir ve bazı yatırımcılar tarafından iki metalin
        birbirine göre pahalı ya da ucuz olduğuna dair bir gösterge olarak
        izlenir. Ancak oranın &quot;doğru&quot; bir seviyesi yoktur; geçmişte
        çok farklı aralıklarda seyretmiştir. Bu bilgi yatırım tavsiyesi
        değildir.
      </p>

      <h2>Gümüş fiyatını ne belirler?</h2>
      <ul>
        <li>
          <strong>Uluslararası (ons) gümüş fiyatı:</strong> Altın gibi gümüş de
          dünya piyasalarında dolar cinsinden ons üzerinden fiyatlanır.
        </li>
        <li>
          <strong>Dolar/TL kuru:</strong> Türkiye&apos;deki gümüş fiyatı, ons
          fiyatının Türk lirasına çevrilmiş hâlidir. Güncel kuru{" "}
          <Link href="/doviz/dolar">dolar kuru sayfasında</Link> görebilirsiniz.
        </li>
        <li>
          <strong>Sanayi talebi:</strong> Gümüş; elektronik, güneş panelleri ve
          tıp gibi alanlarda yoğun kullanılır. Ekonomik büyüme dönemlerinde bu
          talep fiyatı destekler, durgunlukta zayıflatabilir.
        </li>
        <li>
          <strong>Yatırım talebi:</strong> Belirsizlik dönemlerinde gümüş de
          altınla birlikte talep görebilir; ama piyasası daha küçük olduğu için
          fiyatı daha sert hareket eder.
        </li>
      </ul>
      <p>
        Bu etkenlerin altın tarafındaki karşılıklarını{" "}
        <Link href="/rehber/altin-fiyatlari-neden-degisir">
          altın fiyatları neden değişir
        </Link>{" "}
        rehberinde ele aldık.
      </p>

      <h2>Gümüş takı nasıl anlaşılır?</h2>
      <ol>
        <li>
          <strong>Damgaya bakın:</strong> Gerçek gümüş takıların üzerinde
          genellikle 925 (bazen &quot;S925&quot; veya &quot;Sterling&quot;) yazar.
        </li>
        <li>
          <strong>Mıknatıs denemesi:</strong> Gümüş mıknatısa yapışmaz. Yapışıyorsa
          takı gümüş değildir; yapışmaması ise tek başına kanıt sayılmaz.
        </li>
        <li>
          <strong>Kaplamaya dikkat:</strong> Ucuz metal üzerine ince gümüş
          kaplama yapılmış ürünlerde kaplama zamanla aşınır ve alttaki farklı
          renkli metal görünür.
        </li>
        <li>
          <strong>Kuyumcuya test ettirin:</strong> Değerli bir parçada en
          güvenilir yol budur.
        </li>
      </ol>

      <h2>Gümüş neden kararır, nasıl temizlenir?</h2>
      <p>
        Gümüş, havadaki kükürt bileşikleriyle tepkimeye girerek yüzeyinde koyu
        bir tabaka oluşturur. Nem, parfüm, kozmetik ürünler ve bazı kauçuk
        malzemeler bu süreci hızlandırabilir. Kararma metalin kendisine zarar
        vermez ve çoğunlukla temizlenebilir:
      </p>
      <ul>
        <li>Ilık su ve hafif bir sabunla yıkayıp yumuşak bir bezle kurulayın.</li>
        <li>Aşındırıcı macunlardan ve sert fırçalardan kaçının; yüzeyi çizebilirler.</li>
        <li>Taşlı, kaplamalı veya oksitli (bilerek karartılmış) desenli parçalarda daha dikkatli olun.</li>
        <li>Takıları kullanmadığınızda kapalı, kuru bir kutuda ve ayrı ayrı saklayın.</li>
      </ul>
      <p>
        Genel takı saklama ve bakım önerilerini{" "}
        <Link href="/rehber/altin-nasil-saklanir">bu rehberde</Link> topladık.
      </p>

      <h2>Türkiye&apos;de gümüş işçiliği</h2>
      <p>
        Türkiye&apos;nin köklü bir gümüş işçiliği geleneği vardır. İnce gümüş
        tellerin örülmesiyle yapılan Trabzon hasırı ve ince tellerle desen
        oluşturulan Midyat telkarisi bu geleneğin en bilinen örnekleri
        arasındadır. Bu tür el işi parçalarda fiyatın önemli bir kısmı gümüşün
        değerinden değil, işçilikten gelir.
      </p>

      <h2>Gümüş yatırım için uygun mu?</h2>
      <p>
        Gümüş, daha küçük tutarlarla kıymetli maden birikimi yapmak isteyenler
        için bir seçenek olarak görülür. Ancak bazı noktaları bilmek gerekir:
      </p>
      <ul>
        <li>Fiyatı altına göre genellikle daha oynaktır; kısa vadede sert düşüşler yaşanabilir.</li>
        <li>Alış-satış farkı, fiyatına oranla altından geniş olabilir.</li>
        <li>Takı olarak alınan gümüşte işçilik payı bozdururken geri dönmez.</li>
        <li>Aynı değerde gümüş, altına göre çok daha fazla yer kaplar.</li>
      </ul>
      <p>
        Bu sayfadaki bilgiler genel bilgilendirme amaçlıdır, yatırım tavsiyesi
        değildir. DenizliKuyumcu.com&apos;da şu anda gümüş fiyatı yayımlanmıyor;
        canlı altın fiyatlarını{" "}
        <Link href="/#altin-fiyatlari">anasayfadaki tabloda</Link>{" "}
        görebilirsiniz.
      </p>
    </GuideArticle>
  );
}
