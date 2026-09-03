import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import alyansImg from "@/images/rehber/alyans.jpg";

export const metadata: Metadata = {
  title: "Düğünde Hangi Altınlar Takılır? (Denizli)",
  description:
    "Düğün ve nişanda geline, damada ve çocuklara hangi altınlar takılır? Çeyrek, yarım, tam altın, gram altın, bilezik ve set seçenekleri, yakınlık derecesine göre öneriler ve bütçe ipuçları.",
  alternates: { canonical: "/rehber/dugunde-hangi-altinlar-takilir" },
  openGraph: { images: [{ url: alyansImg.src, width: 1600, height: 900 }] },
};

export default function Page() {
  return (
    <GuideArticle
      title="Düğünde Hangi Altınlar Takılır?"
      intro="Düğün altını seçimi hem geleneğe hem bütçeye bağlıdır. Bu rehber, yakınlık derecesine göre yaygın tercihleri ve Denizli'deki adetleri özetler."
      updated="Eylül 2026"
      slug="dugunde-hangi-altinlar-takilir"
      image={{ src: alyansImg, alt: "Mermer yüzey üzerinde iki altın alyans", credit: "Fotoğraf: Pexels" }}
      faq={[
        {
          question: "Düğünde en çok hangi altın takılıyor?",
          answer:
            "Çeyrek altın en yaygın tercihtir; yakın aile bilezik, tam veya yarım altın takar. Gram altın da esnek tutarı nedeniyle giderek yaygınlaşmıştır.",
        },
        {
          question: "Uzak akraba/arkadaş ne takar?",
          answer:
            "Genellikle bir veya birkaç çeyrek altın ya da eşdeğer tutarda gram altın. Bütçeye göre yarım altın da tercih edilebilir.",
        },
        {
          question: "Takı yerine para takmak uygun mu?",
          answer:
            "Bölgeye ve aileye göre değişir. Birçok düğünde altın ve para birlikte takılır; emin değilseniz çeyrek altın güvenli bir seçimdir.",
        },
      ]}
      related={[
        { href: "/rehber/alyans-rehberi", title: "Alyans alırken nelere dikkat edilmeli?" },
        { href: "/rehber/alyans-olcusu-nasil-belirlenir", title: "Alyans ölçüsü nasıl belirlenir?" },
        { href: "/rehber/ceyrek-altin-alis-satis-farki", title: "Çeyrek altında alış-satış farkı" },
      ]}
    >
      <h2>Yakınlık derecesine göre yaygın tercihler</h2>
      <table>
        <thead>
          <tr>
            <th>Kim takıyor</th>
            <th>Yaygın seçim</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Anne-baba, kayınvalide-kayınpeder</td>
            <td>Bilezik, set, tam veya yarım altın</td>
          </tr>
          <tr>
            <td>Kardeş, amca, dayı, hala, teyze</td>
            <td>Yarım altın, birkaç çeyrek altın veya bilezik</td>
          </tr>
          <tr>
            <td>Uzak akraba, arkadaş, komşu</td>
            <td>Çeyrek altın veya eşdeğer gram altın</td>
          </tr>
          <tr>
            <td>Çift (birbirine)</td>
            <td>Alyans, bilezik, gram altın</td>
          </tr>
        </tbody>
      </table>

      <h2>Altın türleri ve kullanım amacı</h2>
      <ul>
        <li>
          <strong><a href="/altin/ceyrek-altin">Çeyrek altın</a>:</strong> En
          pratik hediye; küçük tutarlı, kolay bozdurulur, geleneksel.
        </li>
        <li>
          <strong><a href="/altin/yarim-altin">Yarım</a> ve{" "}
          <a href="/altin/tam-altin">tam altın</a>:</strong> Daha yüksek
          tutarlı; yakın aile tercih eder.
        </li>
        <li>
          <strong><a href="/altin/gram-altin">Gram altın</a>:</strong>{" "}
          İstediğiniz tutara göre (1 g, 2,5 g, 5 g) alınabilir; esnek.
        </li>
        <li>
          <strong><a href="/altin/22-ayar-bilezik">22 ayar bilezik</a> ve
          set:</strong> Denizli&apos;de güçlü bir gelenek; hem takı hem
          birikim değeri taşır.
        </li>
        <li>
          <strong>Cumhuriyet altını / ata lira:</strong> Simgesel değeri
          yüksek, klasik bir hediye.
        </li>
      </ul>

      <h2>Bütçe planlaması</h2>
      <p>
        Takı listesini çıkarıp güncel fiyatlarla toplam maliyeti{" "}
        <a href="/#hesaplama">anasayfadaki hesaplama aracıyla</a> önceden
        görebilirsiniz. Çeyrek altında{" "}
        <a href="/rehber/ceyrek-altin-alis-satis-farki">alış-satış makası</a>{" "}
        olduğunu, yani takılan altını hemen bozdurursanız bir miktar kayıp
        oluşacağını unutmayın.
      </p>

      <h2>Denizli&apos;de alışveriş</h2>
      <p>
        Şehir merkezinde, özellikle Bayramyeri çevresinde çok sayıda kuyumcu
        bir arada bulunur; bu da model ve fiyat karşılaştırması yapmayı
        kolaylaştırır.{" "}
        <a href="/kuyumcular">Denizli kuyumcuları listesine</a> göz atabilir,
        ayar damgası net ve faturalı satış yapan işletmeleri tercih
        edebilirsiniz.
      </p>
    </GuideArticle>
  );
}
