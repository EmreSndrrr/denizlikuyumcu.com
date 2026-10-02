import type { Metadata } from "next";
import Link from "next/link";
import GuideArticle from "@/components/GuideArticle";
import kuyumcuImg from "@/images/rehber/kuyumcu.jpg";

export const metadata: Metadata = {
  title: "Altın Kuru Nedir? Banka ve Kuyumcu Fiyatı Farkı",
  description:
    "Altın kuru ne demek, alış ve satış kuru nasıl okunur? Banka altın hesabı kuru, kuyumcu fiyatı ve serbest piyasa fiyatı neden farklıdır — karşılaştırmalı rehber.",
  alternates: { canonical: "/rehber/altin-kuru-nedir" },
  openGraph: { images: [{ url: kuyumcuImg.src, width: 1600, height: 900 }] },
};

export default function Page() {
  return (
    <GuideArticle
      title="Altın Kuru Nedir?"
      intro="Altın kuru, altının Türk lirası karşılığını bir döviz kuru gibi ifade eden gündelik bir terimdir; çoğunlukla 1 gram 24 ayar altının alış ve satış fiyatını anlatır. Ancak bankanın ekranında gördüğünüz kur, kuyumcunun tezgâhtaki fiyatı ve serbest piyasa fiyatı birbirinin aynısı değildir: her birinin makası, kapsadığı ürün ve erişim koşulları farklıdır."
      updated="Ekim 2026"
      datePublished="2026-10-01"
      slug="altin-kuru-nedir"
      image={{ src: kuyumcuImg, alt: "Kuyumcuda altın takıları inceleyen eller", credit: "Fotoğraf: Pexels" }}
      faq={[
        {
          question: "Altın kuru ile altın fiyatı aynı şey mi?",
          answer:
            "Gündelik kullanımda çoğunlukla aynı anlama gelir: 1 gram 24 ayar altının Türk lirası cinsinden alış ve satış fiyatı. 'Kur' kelimesi, altının tıpkı dolar gibi alınıp satılan bir değer olarak görülmesinden gelir. Çeyrek, bilezik gibi ürünlerin fiyatı ise bu kurdan türetilir ama ayrıca prim ve işçilik içerir.",
        },
        {
          question: "Banka altın kuru neden kuyumcudan farklı?",
          answer:
            "Banka altın hesabında fiziki bir ürün el değiştirmez; işlem hesabınızdaki gram bakiyesi üzerinden yapılır. Bankanın makası, kuyumcunun ise ürün, işçilik ve stok maliyeti fiyata yansır. İki fiyat aynı referansı izler ama makas ve kapsam farklı olduğu için birebir aynı olmaz.",
        },
        {
          question: "Altın kuru gece ve hafta sonu neden farklı davranır?",
          answer:
            "Uluslararası piyasanın kapalı olduğu saatlerde referans fiyat güncellenmez ya da çok az işlem görür. Bazı kurumlar bu saatlerde olası fiyat sıçramalarına karşı makası genişletebilir. İşlem yapacaksanız alış ve satış fiyatını birlikte kontrol etmek en sağlıklısıdır.",
        },
      ]}
      related={[
        { href: "/rehber/altin-fiyatlari-neden-degisir", title: "Altın fiyatları neden değişir?" },
        { href: "/rehber/kapalicarsi-altin-fiyatlari", title: "Kapalıçarşı altın fiyatları nedir?" },
        { href: "/rehber/ceyrek-altin-alis-satis-farki", title: "Çeyrek altında alış ve satış farkı" },
      ]}
    >
      <h2>Altın kuru ne demek?</h2>
      <p>
        &quot;Kur&quot; normalde bir para biriminin başka bir para birimi cinsinden
        değeridir; dolar kuru gibi. Türkiye&apos;de altın da uzun süredir bir
        tasarruf ve değer saklama aracı olarak döviz gibi alınıp satıldığı
        için, fiyatı için de &quot;altın kuru&quot; ifadesi yerleşmiştir.
      </p>
      <p>
        Bir kaynakta yalnızca &quot;altın kuru&quot; yazıyorsa, kastedilen
        neredeyse her zaman <strong>1 gram 24 ayar altının</strong> Türk lirası
        fiyatıdır. Bazen uluslararası fiyat için &quot;ons altın kuru&quot;,
        ziynet altınlar için de &quot;çeyrek altın kuru&quot; gibi kullanımlar
        görülür. Hangisinin kastedildiğini birime bakarak anlayabilirsiniz:
        ons fiyatı dolar, gram ve çeyrek fiyatları Türk lirası cinsindendir.
      </p>

      <h2>Alış kuru ve satış kuru nasıl okunur?</h2>
      <p>
        Her altın fiyatı iki rakamla ilan edilir. Bu rakamlar, işlemi yapan{" "}
        <strong>kurumun</strong> bakış açısından adlandırılır:
      </p>
      <table>
        <thead>
          <tr>
            <th>Fiyat</th>
            <th>Anlamı</th>
            <th>Sizin için</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alış</td>
            <td>Kurumun sizden altın alırken ödediği fiyat</td>
            <td>Altın <strong>bozdururken</strong> alacağınız tutar</td>
          </tr>
          <tr>
            <td>Satış</td>
            <td>Kurumun size altın satarken istediği fiyat</td>
            <td>Altın <strong>alırken</strong> ödeyeceğiniz tutar</td>
          </tr>
        </tbody>
      </table>
      <p>
        Satış fiyatı her zaman alıştan yüksektir. Aradaki farka{" "}
        <strong>makas</strong> denir. Bugün aldığınız altını fiyat hiç
        değişmeden yarın satarsanız, makas kadar zarar edersiniz. Bu yüzden
        &quot;altın kuru&quot;na bakarken yalnızca tek bir rakamı değil, alış ile
        satış arasındaki farkı da okumak gerekir.
      </p>

      <h2>Üç farklı &quot;altın kuru&quot;</h2>
      <p>
        Altın fiyatını takip ettiğiniz yere göre karşınıza çıkan rakam farklı
        bir şeyi temsil eder.
      </p>

      <h3>Banka altın kuru</h3>
      <p>
        Bankaların altın hesabı (altın mevduatı) için ilan ettiği fiyattır.
        Hesabınızdaki bakiye gram cinsinden tutulur; altın fiziki olarak elinize
        geçmez. İşçilik yoktur, ama bankanın makası vardır ve bu makas bankadan
        bankaya değişir. Bazı bankalar fiziki teslim imkânı sunar; bu durumda
        genellikle ayrıca bir ücret ve belirli gramaj koşulları uygulanır.
      </p>

      <h3>Kuyumcu fiyatı</h3>
      <p>
        Fiziki bir ürünü (gram altın, çeyrek, bilezik) aldığınızda ödediğiniz
        fiyattır. Referans fiyatın üzerine ürünün basım veya işçilik payı,
        kuyumcunun stok maliyeti ve kâr marjı eklenir. Aynı gün aynı ürün için
        iki kuyumcu arasında küçük farklar görmeniz normaldir.
      </p>

      <h3>Serbest piyasa fiyatı</h3>
      <p>
        Toptan altın piyasasında oluşan ve Türkiye genelinde referans alınan
        fiyattır. Halk arasında çoğu zaman &quot;Kapalıçarşı fiyatı&quot; olarak
        anılır; ayrıntısını{" "}
        <Link href="/rehber/kapalicarsi-altin-fiyatlari">
          Kapalıçarşı altın fiyatları rehberinde
        </Link>{" "}
        anlattık. Kuyumcular ve finans siteleri fiyatlarını bu referansa göre
        şekillendirir.
      </p>

      <h2>Karşılaştırma</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Banka</th>
            <th>Kuyumcu</th>
            <th>Serbest piyasa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ne alırsınız?</td>
            <td>Hesapta gram bakiyesi</td>
            <td>Fiziki ürün</td>
            <td>Referans fiyat (doğrudan bireysel işlem için değil)</td>
          </tr>
          <tr>
            <td>İşçilik</td>
            <td>Yok</td>
            <td>Ürüne göre var</td>
            <td>Yok</td>
          </tr>
          <tr>
            <td>Makas</td>
            <td>Bankaya göre değişir</td>
            <td>Ürüne göre değişir (çeyrekte daha geniş)</td>
            <td>En dar</td>
          </tr>
          <tr>
            <td>Fiziki teslim</td>
            <td>Çoğunlukla yok veya ücretli</td>
            <td>Var</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Takı/hediye olarak kullanım</td>
            <td>Hayır</td>
            <td>Evet</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>

      <h2>Hangi kuru takip etmelisiniz?</h2>
      <ul>
        <li>
          <strong>Birikim için banka hesabı kullanıyorsanız:</strong> kendi
          bankanızın alış ve satış kurunu takip edin; ekrandaki fiyat sizin
          işlem fiyatınızdır.
        </li>
        <li>
          <strong>Fiziki altın alacaksanız:</strong> referans fiyatı takip edip
          kuyumcunun teklifinin ona ne kadar yakın olduğuna bakın. Ürün
          işlenmişse (bilezik gibi) işçiliği ayrıca sorun.
        </li>
        <li>
          <strong>Elinizdeki altını bozduracaksanız:</strong> satış değil{" "}
          <strong>alış</strong> fiyatına bakın; alacağınız tutar odur.
          Ayrıntılar için{" "}
          <Link href="/rehber/kuyumcuda-altin-bozdururken-dikkat">
            altın bozdururken dikkat edilecekler
          </Link>
          .
        </li>
      </ul>

      <h2>Bu sitedeki altın kuru neyi gösteriyor?</h2>
      <p>
        DenizliKuyumcu.com&apos;daki fiyatlar finans.truncgil.com kaynağından
        alınan <strong>piyasa referans fiyatlarıdır</strong>; bir bankanın ya da
        belirli bir kuyumcunun etiket fiyatı değildir. Veriler kaynağında piyasa
        açıkken yaklaşık 15 dakikada bir güncellenir ve her bölümde son
        güncelleme saati gösterilir. Denizli&apos;deki kuyumcular bu referansa
        kendi işçilik ve kâr paylarını ekleyebilir.
      </p>
      <p>
        Güncel <Link href="/altin/gram-altin">gram altın kurunu</Link>,{" "}
        <Link href="/altin/ceyrek-altin">çeyrek altın fiyatını</Link> ve diğer
        ürünleri alış-satış olarak{" "}
        <Link href="/#altin-fiyatlari">anasayfadaki tabloda</Link> yan yana
        görebilirsiniz.
      </p>
    </GuideArticle>
  );
}
