import type { Metadata } from "next";
import Link from "next/link";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "24 Ayar Gram Altın: 995 ve 999,9 Farkı Nedir?",
  description:
    "24 ayar gram altın ne kadar saftır, 995 ile 999,9 milyem farkı nedir? 22 ayarla karşılaştırma, has altın hesabı ve alırken dikkat edilecekler.",
  alternates: { canonical: "/rehber/24-ayar-gram-altin" },
};

export default function Page() {
  return (
    <GuideArticle
      title="24 Ayar Gram Altın: 995 ve 999,9 Ne Demek?"
      intro="24 ayar, altının en yüksek saflık derecesidir. Pratikte '24 ayar gram altın' denince en az binde 995 saflıkta üretilmiş külçe altın kastedilir; '999,9' ya da 'dört dokuz' olarak anılan ürünler ise binde 999,9 saflıktadır. Takılarda kullanılan 22 ayar altın ise binde 916 saflıktadır."
      updated="Ekim 2026"
      datePublished="2026-10-01"
      slug="24-ayar-gram-altin"
      faq={[
        {
          question: "24 ayar altın tamamen saf mıdır?",
          answer:
            "Teorik olarak 24 ayar, tamamen saf altın anlamına gelir; ama hiçbir üretim süreci yüzde yüz saflık sağlayamaz. Bu yüzden piyasada binde 995 ve binde 999,9 saflıktaki külçeler 24 ayar olarak kabul edilir. 999,9, pratikte ulaşılabilen en yüksek saflık sınıfıdır.",
        },
        {
          question: "999,9 altın 995'ten daha mı pahalı?",
          answer:
            "İçindeki saf altın oranı yaklaşık binde 5 daha fazla olduğu için teorik değeri de o kadar yüksektir. Bu fark 1 gramda çok küçüktür; büyük gramajlarda belirginleşir. Kuyumcular iki ürünü ayrı fiyatlandırabilir, bu yüzden alırken hangi saflıkta olduğunu sorun.",
        },
        {
          question: "24 ayar bilezik veya yüzük olur mu?",
          answer:
            "Nadiren. 24 ayar altın çok yumuşak olduğu için kolayca çizilir, ezilir ve şekli bozulur. Bu yüzden günlük kullanılan takılarda dayanıklılığı artırmak için başka metallerle karıştırılmış 22, 18 veya 14 ayar altın kullanılır.",
        },
      ]}
      related={[
        { href: "/rehber/altin-ayari-nedir", title: "Altın ayarı nedir? 24, 22, 18, 14 ayar" },
        { href: "/rehber/gram-altin-nedir", title: "Gram altın nedir?" },
        { href: "/rehber/22-ayar-bilezik-hesaplama", title: "22 ayar bilezik hesaplama" },
      ]}
    >
      <h2>Ayar ve milyem ne demek?</h2>
      <p>
        Altının saflığı iki farklı ölçekle ifade edilir. <strong>Ayar</strong>,
        altını 24 parçaya bölüp kaçının saf altın olduğunu söyler.{" "}
        <strong>Milyem</strong> ise aynı oranı binde olarak gösterir ve ürün
        damgalarında çoğunlukla bu sayı yazar.
      </p>
      <table>
        <thead>
          <tr>
            <th>Ayar</th>
            <th>Milyem (damga)</th>
            <th>Saf altın oranı</th>
            <th>Tipik kullanım</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>24</td><td>995 / 999,9</td><td>%99,5 – %99,99</td><td>Gram altın, külçe</td></tr>
          <tr><td>22</td><td>916</td><td>%91,6</td><td>Bilezik, ziynet altınlar</td></tr>
          <tr><td>18</td><td>750</td><td>%75</td><td>Pırlanta ve tasarım takılar</td></tr>
          <tr><td>14</td><td>585</td><td>%58,5</td><td>Günlük takılar</td></tr>
        </tbody>
      </table>
      <p>
        Ayarın mantığını ve takılarda hangisinin neden tercih edildiğini{" "}
        <Link href="/rehber/altin-ayari-nedir">altın ayarı rehberinde</Link>{" "}
        daha geniş anlattık. Bu yazıda yalnızca 24 ayar gram altına
        odaklanıyoruz.
      </p>

      <h2>995 mi, 999,9 mu?</h2>
      <p>
        İkisi de 24 ayar kabul edilir. Fark, saf altın oranındaki küçük
        ayrımdır:
      </p>
      <ul>
        <li>
          <strong>995:</strong> Binde 995 saf altın. Türkiye&apos;de gram altın
          ve külçelerde çok yaygın bir standarttır; uluslararası piyasada büyük
          külçeler için de kabul gören bir saflık sınıfıdır.
        </li>
        <li>
          <strong>999,9 (&quot;dört dokuz&quot;):</strong> Binde 999,9 saf altın.
          Pratikte ulaşılabilen en yüksek saflık sınıfıdır; bazı rafinerilerin
          gram altınları ve yatırım külçeleri bu saflıkta üretilir.
        </li>
      </ul>
      <p>
        Aradaki fark binde 4,9, yani yaklaşık <strong>%0,49</strong>dur. Somut
        bir örnekle:
      </p>
      <table>
        <thead>
          <tr>
            <th>10 gram külçe</th>
            <th>İçindeki saf altın</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>995 milyem</td><td>9,95 g</td></tr>
          <tr><td>999,9 milyem</td><td>9,999 g</td></tr>
          <tr><td><strong>Fark</strong></td><td><strong>yaklaşık 0,05 g</strong></td></tr>
        </tbody>
      </table>
      <p>
        1 gramlık bir üründe bu fark ihmal edilecek kadar küçüktür. Büyük
        gramajlı külçelerde ise toplam tutara yansıyabilir. Kuyumcular iki ürünü
        ayrı fiyatlandırabileceği için, büyük alımlarda hangi saflıkta ürün
        aldığınızı sormak ve faturaya yazdırmak iyi bir alışkanlıktır.
      </p>

      <h2>24 ayar neden takıda kullanılmaz?</h2>
      <p>
        Saf altın çok yumuşak bir metaldir. 24 ayar bir yüzük ya da bilezik
        günlük kullanımda kolayca çizilir, ezilir ve şeklini kaybeder. Bu yüzden
        takı yapımında altın; bakır ve gümüş gibi metallerle karıştırılarak
        sertleştirilir. Karışımdaki altın oranı azaldıkça ayar düşer, dayanıklılık
        artar.
      </p>
      <p>
        Türkiye&apos;de bilezik ve ziynet altınlarda en yaygın tercih{" "}
        <strong>22 ayar</strong>dır: hâlâ yüksek oranda altın içerir ama 24
        ayardan çok daha dayanıklıdır. Pırlanta ve tasarım takılarda ise
        taşları sağlam tutabilmek için daha sert olan 18 ve 14 ayar kullanılır.
      </p>

      <h2>24 ayar ile 22 ayar arasındaki fiyat farkı</h2>
      <p>
        22 ayar altın binde 916 saf olduğu için, aynı ağırlıktaki 24 ayar altının
        yaklaşık yüzde 91,6&apos;sı kadar altın içerir. Piyasa fiyatları da bu oranı
        yansıtır: 1 Ekim 2026 verisinde 22 ayar bilezik için ilan edilen gram
        fiyatı, 24 ayar gram altın satış fiyatının yaklaşık{" "}
        <strong>0,91 katıydı</strong>.
      </p>
      <p>
        Ancak bu, yalnızca altının değeridir. 22 ayar bir bilezik alırken bu
        değerin üzerine <strong>işçilik</strong> eklenir; gram altında ise işçilik
        çok düşüktür. Bu yüzden &quot;22 ayar daha ucuz&quot; demek, aldığınız
        ürüne göre yanıltıcı olabilir. Bilezik fiyatının nasıl hesaplandığını{" "}
        <Link href="/rehber/22-ayar-bilezik-hesaplama">22 ayar bilezik hesaplama</Link>{" "}
        rehberinde adım adım gösterdik.
      </p>

      <h2>Has altın hesabı</h2>
      <p>
        Bir ürünün içinde ne kadar saf altın olduğunu bulmak için ağırlığı
        milyem oranıyla çarpmak yeterlidir:
      </p>
      <p>
        <strong>Has altın (gram) = Ağırlık (gram) × Milyem ÷ 1.000</strong>
      </p>
      <table>
        <thead>
          <tr>
            <th>Ürün</th>
            <th>Hesap</th>
            <th>Has altın</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>10 g, 24 ayar (995)</td><td>10 × 995 ÷ 1.000</td><td>9,95 g</td></tr>
          <tr><td>10 g, 22 ayar (916)</td><td>10 × 916 ÷ 1.000</td><td>9,16 g</td></tr>
          <tr><td>10 g, 18 ayar (750)</td><td>10 × 750 ÷ 1.000</td><td>7,50 g</td></tr>
          <tr><td>10 g, 14 ayar (585)</td><td>10 × 585 ÷ 1.000</td><td>5,85 g</td></tr>
        </tbody>
      </table>
      <p>
        Bu hesap özellikle altın bozdururken işe yarar: kuyumcu, ürünün has
        değerini bu mantıkla hesaplar. Düşük ayarlı ürünlerde bozdurma hesabını{" "}
        <Link href="/rehber/14-ayar-altin-bozdurma-hesabi">
          14 ayar altın bozdurma
        </Link>{" "}
        rehberinde örnekledik.
      </p>

      <h2>24 ayar gram altın nasıl tanınır?</h2>
      <ul>
        <li>Kartelada veya külçenin üzerinde <strong>995</strong> ya da <strong>999,9</strong> damgası bulunur.</li>
        <li>Üretici rafinerinin adı ve çoğunlukla bir seri numarası yazar.</li>
        <li>Ambalaj mühürlü ve sağlamdır.</li>
        <li>Rengi, alaşımlı altınlara göre daha koyu ve sarıdır.</li>
      </ul>
      <p>
        Renk tek başına güvenilir bir ölçüt değildir. Şüpheli bir üründe neye
        bakmanız gerektiğini{" "}
        <Link href="/rehber/sahte-altin-nasil-anlasilir">sahte altın rehberinde</Link>{" "}
        anlattık. Güncel 24 ayar gram altın fiyatını{" "}
        <Link href="/altin/gram-altin">gram altın fiyat sayfasında</Link>{" "}
        görebilirsiniz.
      </p>
    </GuideArticle>
  );
}
