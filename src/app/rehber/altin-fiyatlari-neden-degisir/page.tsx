import type { Metadata } from "next";
import Link from "next/link";
import GuideArticle from "@/components/GuideArticle";
import gramAltinImg from "@/images/rehber/gram-altin.jpg";

export const metadata: Metadata = {
  title: "Altın Fiyatları Neden Değişir? Belirleyen 7 Etken",
  description:
    "Altın fiyatları neden yükselir, neden düşer? Ons altın, dolar/TL kuru, faiz, enflasyon, jeopolitik risk ve fiziki talebin altın fiyatına etkisi.",
  alternates: { canonical: "/rehber/altin-fiyatlari-neden-degisir" },
  openGraph: { images: [{ url: gramAltinImg.src, width: 1600, height: 900 }] },
};

export default function Page() {
  return (
    <GuideArticle
      title="Altın Fiyatları Neden Değişir?"
      intro="Türkiye'de altın fiyatı iki ana değişkene bağlıdır: uluslararası piyasada dolar cinsinden işlem gören ons altın fiyatı ve dolar/TL kuru. Bu ikisinden biri hareket ettiğinde gram, çeyrek ve bilezik fiyatları da aynı yönde hareket eder. Ons altının fiyatını ise faizler, enflasyon beklentisi, jeopolitik riskler ve merkez bankalarının alımları belirler."
      updated="Ekim 2026"
      datePublished="2026-10-01"
      slug="altin-fiyatlari-neden-degisir"
      image={{ src: gramAltinImg, alt: "İstiflenmiş külçe altın çubukları", credit: "Fotoğraf: Pexels" }}
      faq={[
        {
          question: "Altın fiyatları neden hafta sonu değişmiyor?",
          answer:
            "Uluslararası altın piyasası hafta sonu kapalıdır. Kaynak, cuma kapanışındaki fiyatı bildirmeye devam eder; bu yüzden cumartesi ve pazar günü ekrandaki fiyat genellikle sabit kalır. Kuyumcular ise pazartesi açılışındaki olası hareket riskine karşı hafta sonu makası biraz geniş tutabilir.",
        },
        {
          question: "Dolar düşerken altın neden yükselebilir?",
          answer:
            "Türkiye'deki altın fiyatı, ons altın fiyatı ile dolar/TL kurunun birlikte etkisiyle oluşur. Dolar/TL hafif düşerken ons altın daha güçlü yükselirse, gram altın fiyatı yine de artar. İki etkenden hangisinin daha büyük hareket ettiği sonucu belirler.",
        },
        {
          question: "Altın fiyatı ne zaman düşer?",
          answer:
            "Bunu kimse kesin olarak bilemez. Genel olarak ons altının gerilediği, TL'nin dolar karşısında güçlendiği ya da faizlerin yükselip belirsizliğin azaldığı dönemlerde altın fiyatı baskı altına girebilir. Bu sayfadaki bilgiler yatırım tavsiyesi değildir.",
        },
      ]}
      related={[
        { href: "/rehber/gram-altin-hesaplama", title: "Gram altın fiyatı nasıl hesaplanır?" },
        { href: "/rehber/altin-kuru-nedir", title: "Altın kuru nedir?" },
        { href: "/rehber/kapalicarsi-altin-fiyatlari", title: "Kapalıçarşı altın fiyatları nedir?" },
      ]}
    >
      <h2>Altın fiyatı nasıl oluşur?</h2>
      <p>
        Altın dünya genelinde <strong>ons</strong> cinsinden ve{" "}
        <strong>ABD doları</strong> ile fiyatlanır. Bir ons (troy ons) yaklaşık{" "}
        <strong>31,1 gram</strong>dır. Türkiye&apos;de gördüğümüz gram altın fiyatı
        bu küresel fiyatın Türk lirasına çevrilmiş hâlidir:
      </p>
      <p>
        <strong>Gram altın ≈ Ons altın (dolar) × Dolar/TL kuru ÷ 31,1</strong>
      </p>
      <p>
        Örneğin ons altın 4.200 dolar, dolar/TL kuru 48,5 olsun: 4.200 × 48,5 ÷
        31,1 ≈ <strong>6.550 TL</strong>. Bu, bir gram saf altının teorik değeridir;
        kuyumcudaki fiyata alış-satış farkı (makas) ve üründe işçilik eklenir.
        Formülün ayrıntıları için{" "}
        <Link href="/rehber/gram-altin-hesaplama">gram altın hesaplama rehberine</Link>{" "}
        bakabilirsiniz.
      </p>
      <p>
        Formül, altın fiyatındaki hareketlerin neden iki ayrı yerden
        gelebildiğini de gösteriyor: biri ons fiyatı, diğeri döviz kuru. Aşağıdaki
        yedi etkenin ilk ikisi bu iki değişkenin kendisi; geri kalanları ise ons
        fiyatını ya da yurt içi fiyatı etkileyen nedenler.
      </p>

      <h2>1. Ons altın fiyatı</h2>
      <p>
        Fiyatın küresel ayağıdır. Londra, New York ve Şanghay gibi büyük
        piyasalarda belirlenen ons fiyatı yükseldiğinde, kur sabit kalsa bile
        Türkiye&apos;deki bütün altın ürünleri pahalanır. Güncel değeri{" "}
        <Link href="/altin/ons-altin">ons altın fiyat sayfasından</Link> takip
        edebilirsiniz.
      </p>
      <p>
        Ons fiyatı, aşağıda sayılan küresel etkenlerin (faiz, enflasyon, risk
        algısı, merkez bankası talebi) ortak sonucudur. Bu yüzden &quot;altın
        neden yükseldi?&quot; sorusunun cevabı çoğu zaman önce ons fiyatında
        aranır.
      </p>

      <h2>2. Dolar/TL kuru</h2>
      <p>
        Fiyatın yerel ayağıdır. Ons altın hiç değişmese bile dolar/TL kuru
        yükseldiğinde gram altın da yükselir; çünkü aynı miktarda altın için
        artık daha fazla Türk lirası gerekir. Türkiye&apos;de altının uzun vadede
        TL karşısında değer kazanmasının önemli bir nedeni budur.
      </p>
      <table>
        <thead>
          <tr>
            <th>Ons altın</th>
            <th>Dolar/TL</th>
            <th>Gram altına etkisi</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Yükseliyor</td><td>Yükseliyor</td><td>Güçlü yükseliş</td></tr>
          <tr><td>Yükseliyor</td><td>Sabit</td><td>Yükseliş</td></tr>
          <tr><td>Sabit</td><td>Yükseliyor</td><td>Yükseliş</td></tr>
          <tr><td>Düşüyor</td><td>Yükseliyor</td><td>Hangisi daha büyükse o yöne</td></tr>
          <tr><td>Düşüyor</td><td>Düşüyor</td><td>Belirgin düşüş</td></tr>
        </tbody>
      </table>
      <p>
        Güncel kuru <Link href="/doviz/dolar">dolar kuru sayfasında</Link>{" "}
        görebilirsiniz.
      </p>

      <h2>3. Faiz kararları</h2>
      <p>
        Altın faiz ya da temettü getirmez. Faizler yüksekken parayı mevduatta
        veya tahvilde tutmak cazip hâle gelir ve altını elde tutmanın
        &quot;fırsat maliyeti&quot; artar. Bu nedenle ABD Merkez Bankası&apos;nın
        (Fed) faiz artırması genellikle ons altın üzerinde baskı yaratırken,
        faiz indirimi beklentisi altını destekler. Türkiye Cumhuriyet Merkez
        Bankası&apos;nın kararları ise daha çok dolar/TL kuru üzerinden etki eder.
      </p>

      <h2>4. Enflasyon beklentisi</h2>
      <p>
        Altın yüzyıllardır değer saklama aracı olarak görülür. Paranın satın
        alma gücünün hızla eridiği dönemlerde hem bireyler hem kurumlar
        birikimlerinin bir kısmını altına yönlendirir. Yüksek enflasyon
        beklentisi bu yüzden altına olan talebi artırma eğilimindedir. Türkiye
        gibi enflasyonun yüksek seyrettiği ülkelerde bu etki daha belirgindir.
      </p>

      <h2>5. Jeopolitik risk ve belirsizlik</h2>
      <p>
        Savaşlar, bölgesel gerilimler, finansal krizler ya da büyük seçim
        belirsizlikleri gibi dönemlerde yatırımcılar riskli varlıklardan
        kaçarak &quot;güvenli liman&quot; olarak görülen altına yönelir. Bu tür
        haber akışları kısa sürede ons fiyatında sert hareketlere yol açabilir.
        Belirsizlik azaldığında ise bu ek talep geri çekilebilir.
      </p>

      <h2>6. Merkez bankalarının altın alımları</h2>
      <p>
        Merkez bankaları rezervlerinin bir kısmını altında tutar. Dünya Altın
        Konseyi (World Gold Council) verilerine göre merkez bankalarının yıllık
        altın alımları 2022&apos;den bu yana tarihsel ortalamaların belirgin
        biçimde üzerinde seyretti. Bu büyük ve istikrarlı talep, ons fiyatını
        destekleyen yapısal etkenlerden biri olarak değerlendiriliyor.
      </p>

      <h2>7. Yurt içi fiziki talep</h2>
      <p>
        Türkiye&apos;de altın aynı zamanda kültürel bir hediye ve düğün
        geleneğidir. Düğün sezonu, bayramlar ve belirsizlik dönemlerinde fiziki
        altına (özellikle çeyrek ve bilezik) talep artar. Bu talep ons fiyatını
        doğrudan değiştirmez ama yurt içinde ürünlerin primini ve kuyumcuların
        alış-satış farkını etkileyebilir. Çeyrek altında makasın neden açıldığını{" "}
        <Link href="/rehber/ceyrek-altin-alis-satis-farki">bu rehberde</Link>{" "}
        anlattık.
      </p>

      <h2>Etkenlerin özeti</h2>
      <table>
        <thead>
          <tr>
            <th>Etken</th>
            <th>Altın fiyatına genel etkisi</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Ons altın yükselir</td><td>Artırır</td></tr>
          <tr><td>Dolar/TL yükselir</td><td>Artırır</td></tr>
          <tr><td>Faizler yükselir</td><td>Baskılayabilir</td></tr>
          <tr><td>Enflasyon beklentisi artar</td><td>Destekleyebilir</td></tr>
          <tr><td>Jeopolitik risk artar</td><td>Destekleyebilir</td></tr>
          <tr><td>Merkez bankaları alım yapar</td><td>Destekleyebilir</td></tr>
          <tr><td>Fiziki talep artar</td><td>Ürün primini ve makası artırabilir</td></tr>
        </tbody>
      </table>
      <p>
        Bu ilişkiler &quot;genellikle&quot; böyle işler, her zaman değil. Birden
        fazla etken aynı anda ve farklı yönlere hareket edebilir; sonuç hangisinin
        o an daha baskın olduğuna bağlıdır.
      </p>

      <h2>Neden her kuyumcuda fiyat biraz farklı?</h2>
      <p>
        Yukarıdaki etkenler piyasanın <em>referans</em> fiyatını belirler. Tek
        tek kuyumcuların fiyatı ise bu referansın üzerine eklenen işçilik,
        stok ve taşıma maliyeti ile kâr payını da içerir. İki kuyumcu arasındaki
        küçük farklar bu yüzden normaldir. İstanbul&apos;daki referans piyasa ile
        yerel fiyatlar arasındaki ilişkiyi{" "}
        <Link href="/rehber/kapalicarsi-altin-fiyatlari">
          Kapalıçarşı altın fiyatları rehberinde
        </Link>{" "}
        ayrıntılı ele aldık.
      </p>

      <h2>Altın fiyatlarını nasıl takip etmeli?</h2>
      <p>
        Gram, çeyrek, yarım, tam altın ve bilezik fiyatlarını{" "}
        <Link href="/#altin-fiyatlari">anasayfadaki fiyat tablosunda</Link>{" "}
        alış ve satış olarak birlikte görebilirsiniz. Veriler kaynağında piyasa
        açıkken yaklaşık 15 dakikada bir güncellenir; her bölümde son güncelleme
        saati yazar. Fiyatın son günlerdeki seyrini anasayfadaki grafikten
        izleyebilirsiniz.
      </p>
      <p>
        Kısa vadeli dalgalanmalar sık ve tahmin edilmesi zordur. Alım-satım
        kararı vermeden önce makası hesaba katmak ve birkaç kuyumcunun fiyatını
        karşılaştırmak, çoğu zaman günlük fiyat hareketinden daha büyük bir
        fark yaratır.
      </p>
    </GuideArticle>
  );
}
