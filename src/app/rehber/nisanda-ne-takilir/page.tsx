import type { Metadata } from "next";
import Link from "next/link";
import GuideArticle from "@/components/GuideArticle";
import alyansImg from "@/images/rehber/alyans.jpg";

export const metadata: Metadata = {
  title: "Nişanda Ne Takılır? Kim Ne Takar?",
  description:
    "Nişanda gelin ve damada hangi takılar takılır? Alyans, nişan seti, bilezik ve davetlilerin yaygın tercihleri; nişan bozulursa hediyelerin durumu.",
  alternates: { canonical: "/rehber/nisanda-ne-takilir" },
  openGraph: { images: [{ url: alyansImg.src, width: 1600, height: 900 }] },
};

export default function Page() {
  return (
    <GuideArticle
      title="Nişanda Ne Takılır?"
      intro="Nişanda takı geleneği bölgeye ve aileye göre değişir; en yaygın uygulamada çift alyans takar, damat tarafı geline bir nişan seti veya bilezik hediye eder, kız tarafı damada saat veya altın takar, davetliler ise çeyrek altın ya da gram altın takar. Bu rehber, yaygın tercihleri ve nişan bozulursa hediyelerin durumunu özetler."
      updated="Ekim 2026"
      datePublished="2026-10-19"
      slug="nisanda-ne-takilir"
      image={{ src: alyansImg, alt: "Mermer yüzey üzerinde iki altın alyans", credit: "Fotoğraf: Pexels" }}
      faq={[
        {
          question: "Nişanda takı takmak düğündeki kadar zorunlu mu?",
          answer:
            "Hayır. Nişanda takı geleneği düğüne göre daha esnektir. Nişanda takı takmayan uzak davetliler çoğunlukla düğünde takar; bunun kuralı aileden aileye değişir.",
        },
        {
          question: "Nişan bozulursa takılan hediyeler geri istenebilir mi?",
          answer:
            "Türk Medeni Kanunu'na göre nişan bozulduğunda, mutat (olağan) hediyeler dışındaki hediyeler genel olarak geri istenebilir; aynen verilmesi mümkün değilse zenginleşme kuralları uygulanır. Nişanı kimin bozduğu ve kusur durumu sonucu değiştirebilir. Somut bir uyuşmazlıkta bir avukata danışmalısınız; bu içerik hukuki danışmanlık değildir.",
        },
        {
          question: "Evde yapılan sade nişanda da takı takılır mı?",
          answer:
            "Evet. Sade nişanlarda da çoğunlukla alyans takılır; ailelerin tercihine göre bir bilezik veya set de eklenebilir. Takı miktarı törenin büyüklüğünden çok ailelerin anlaşmasına bağlıdır.",
        },
        {
          question: "Nişan takıları düğünde tekrar takılır mı?",
          answer:
            "Nişanda geline takılan takılar gelinde kalır; düğünde bunları yeniden takmak mümkündür. Ayrıca düğünde yeni hediyeler takılır. Kombinasyonu düğün setiyle uyumlu seçmek, çiftin işini kolaylaştırır.",
        },
      ]}
      related={[
        { href: "/rehber/dugunde-hangi-altinlar-takilir", title: "Düğünde hangi altınlar takılır?" },
        { href: "/rehber/alyans-rehberi", title: "Alyans alırken nelere dikkat edilmeli?" },
        { href: "/rehber/alyans-olcusu-nasil-belirlenir", title: "Alyans ölçüsü nasıl belirlenir?" },
        { href: "/rehber/dugun-taki-seti-secimi", title: "Düğün takı seti nasıl seçilir?" },
      ]}
    >
      <h2>Nişan töreni ve takı geleneği</h2>
      <p>
        Nişan, söz kesilmesinin ardından ailelerin resmî olarak bir araya geldiği
        törendir. Genellikle kız tarafının evinde veya salonunda yapılır; ancak
        bu da ailelerin anlaşmasına göre değişebilir. Takı konusunda tek bir
        kural yoktur — aşağıdakiler yaygın uygulamalardır, zorunluluk değildir.
      </p>

      <h2>Nişanda yaygın takı dağılımı</h2>
      <table>
        <thead>
          <tr>
            <th>Kim</th>
            <th>Kime</th>
            <th>Yaygın tercih</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Çift</td><td>Birbirine</td><td>Alyans</td></tr>
          <tr><td>Damat tarafı</td><td>Gelin</td><td>Nişan seti veya mini set, bilezik, yüzük (örn. tektaş)</td></tr>
          <tr><td>Kız tarafı</td><td>Damat</td><td>Kol saati, altın zincir veya yakalık altın</td></tr>
          <tr><td>Yakın akraba</td><td>Çift</td><td>Çeyrek altın, bazen yarım altın veya bilezik</td></tr>
          <tr><td>Arkadaş, komşu</td><td>Çift</td><td>Gram altın veya hediye çeki / para</td></tr>
        </tbody>
      </table>

      <h2>Alyans ve nişan seti</h2>
      <p>
        Alyans çiftin ortak takısıdır ve ölçüsü, ayarı ve genişliği önceden
        planlanmalıdır. Seçerken{" "}
        <Link href="/rehber/alyans-rehberi">alyans rehberine</Link> ve{" "}
        <Link href="/rehber/alyans-olcusu-nasil-belirlenir">
          alyans ölçüsü rehberine
        </Link>{" "}
        bakabilirsiniz. Konfor için iç yüzeyi hafif bombeli modeller sık
        tercih edilir; parmağa uygunluğunu takarak denemek en doğrusudur.
      </p>
      <p>
        Nişan setinde 14 ayar zarif bir takım ile düğündeki büyük takıları
        ayrı tutmak çiftlerin sık başvurduğu bir yöntemdir. Düğün seti seçimi
        için{" "}
        <Link href="/rehber/dugun-taki-seti-secimi">
          düğün takı seti rehberimize
        </Link>{" "}
        göz atın.
      </p>

      <h2>Davetliler ne takar?</h2>
      <p>
        Yakın akrabalar çoğunlukla çeyrek altın takar; arkadaşlar ve komşular
        gram altın veya eşdeğer tutarda hediye tercih eder. Hangi altının hangi
        tutara karşılık geldiğini{" "}
        <Link href="/altin/ceyrek-altin">çeyrek altın</Link> ve{" "}
        <Link href="/altin/gram-altin">gram altın</Link> fiyat sayfalarından
        görebilirsiniz. Uzak davetliler için nişanda takı takmak, düğündeki
        kadar katı bir beklenti değildir.
      </p>

      <h2>Nişan bozulursa takılar ne olur?</h2>
      <p>
        Nişan bozulduğunda hediyelerin akıbeti Türk Medeni Kanunu&apos;nda
        düzenlenmiştir. Genel kural olarak, mutat (olağan) hediyeler dışında
        kalan ve ekonomik değeri yüksek hediyeler geri istenebilir. Hediyeler
        aynen verilemiyorsa zenginleşme ölçüsünde bedel ödenir. Nişanı kimin
        bozduğu ve kusurlu olup olmadığı sonucu etkileyebilir. Bu konuda bir
        uyuşmazlık yaşıyorsanız bir avukata danışın.
      </p>

      <h2>Nişan alışverişinde dikkat edilecekler</h2>
      <ul>
        <li>Takıların ayar damgasını (örn. 916/22K, 585/14K) ve gramajını kontrol edin.</li>
        <li>Gram fiyatı ile işçiliği ayrı ayrı sorun, faturayı alın.</li>
        <li>Nişan ve düğün takılarının renk ve model uyumunu baştan düşünün.</li>
        <li>
          Bütçenin tamamını nişanda tüketmek yerine düğün için de pay ayırın;
          toplam maliyeti <Link href="/#hesaplama">hesaplama aracıyla</Link>{" "}
          güncel fiyatlarla görebilirsiniz.
        </li>
      </ul>
    </GuideArticle>
  );
}
