import type { Metadata } from "next";
import Link from "next/link";
import GuideArticle from "@/components/GuideArticle";
import bilezikImg from "@/images/rehber/bilezik.jpg";

export const metadata: Metadata = {
  title: "14 Ayar mı 22 Ayar mı? Farkları ve Seçim",
  description:
    "14 ayar ve 22 ayar altın arasındaki fark nedir? Saflık, fiyat, dayanıklılık, taş tutma ve bozdurma açısından karşılaştırma; hangi amaçla hangisi tercih edilir?",
  alternates: { canonical: "/rehber/14-ayar-22-ayar-altin-farki" },
  openGraph: { images: [{ url: bilezikImg.src, width: 1600, height: 900 }] },
};

export default function Page() {
  return (
    <GuideArticle
      title="14 Ayar mı 22 Ayar mı?"
      intro="22 ayar altının %91,6'sı, 14 ayar altının ise %58,5'i saf altındır. Bu fark hem fiyatı hem dayanıklılığı hem de bozdururken alacağınız tutarı belirler: 22 ayar daha değerli ve daha yumuşaktır, 14 ayar daha ucuz ve daha serttir. Bu rehber hangi amaçla hangisinin mantıklı olduğunu karşılaştırır."
      updated="Ekim 2026"
      datePublished="2026-10-19"
      slug="14-ayar-22-ayar-altin-farki"
      image={{ src: bilezikImg, alt: "Koyu zemin üzerinde işlemeli altın bilezikler", credit: "Fotoğraf: Pexels" }}
      faq={[
        {
          question: "14 ayar altın kararır mı?",
          answer:
            "Saf altın kararmaz, ancak ayarlı altınlardaki bakır ve gümüş gibi alaşım metalleri parfüm, klor ve çeşitli kimyasallarla temas ettiğinde yüzeyde matlaşmaya veya ciltte renk değişimine yol açabilir. Düşük ayarlı altında alaşım oranı yüksek olduğundan bu durumla daha sık karşılaşılır. Kuyumcuda yapılan temizlik genellikle parlaklığı geri getirir.",
        },
        {
          question: "14 ayar altın bozdururken neden çok kayıp olur?",
          answer:
            "Çünkü kuyumcu geri alırken tasarımı ve işçiliği değil, yalnızca içindeki saf altını öder. 14 ayar takıların fiyatında çoğunlukla belirgin bir tasarım ve işçilik payı bulunur; bu pay geri dönmez.",
        },
        {
          question: "Bir takının 14 ayar olduğunu nasıl anlarım?",
          answer:
            "Kilit veya iç yüzeydeki ayar damgasına bakın: 14 ayar için 585 veya 14K, 22 ayar için 916 veya 22K yazar. Damgayı okuyamıyorsanız kuyumcuya ayar testi yaptırabilirsiniz.",
        },
        {
          question: "Gelenekte hangi ayar tercih edilir?",
          answer:
            "Düğün ve birikim amaçlı bilezik ve ziynet altınlarda 22 ayar (ve çeyrek gibi ziynet altınlar) geleneksel olarak daha yaygındır. Taşlı, modern tasarım takılarda ise 14 ve 18 ayar sık kullanılır.",
        },
      ]}
      related={[
        { href: "/rehber/altin-ayari-nedir", title: "Altın ayarı nedir?" },
        { href: "/rehber/14-ayar-altin-bozdurma-hesabi", title: "14 ayar altın bozdurma hesabı" },
        { href: "/rehber/22-ayar-bilezik-hesaplama", title: "22 ayar bilezik hesaplama" },
        { href: "/rehber/dugun-taki-seti-secimi", title: "Düğün takı seti nasıl seçilir?" },
      ]}
    >
      <h2>Ayar ne anlama gelir?</h2>
      <p>
        Ayar, bir altın alaşımının 24 parçasının kaçının saf altın olduğunu
        gösterir. 24 ayar altın saf altındır; 22 ayarda 24 parçanın 22&apos;si,
        14 ayarda 14&apos;ü altındır. Geri kalan kısım bakır, gümüş gibi alaşım
        metalleridir. Temel kavramı{" "}
        <Link href="/rehber/altin-ayari-nedir">altın ayarı nedir</Link>{" "}
        rehberinde anlattık.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>14 ayar</th>
            <th>22 ayar</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Milyem (binde)</td><td>585</td><td>916</td></tr>
          <tr><td>Saf altın oranı</td><td>%58,5</td><td>%91,6</td></tr>
          <tr><td>Katsayı</td><td>0,585</td><td>0,916</td></tr>
          <tr><td>10 gramdaki saf altın</td><td>5,85 g</td><td>9,16 g</td></tr>
          <tr><td>Ayar damgası</td><td>585 / 14K</td><td>916 / 22K</td></tr>
        </tbody>
      </table>

      <h2>Fiyat farkı neden bu kadar büyük?</h2>
      <p>
        Fiyatın temeli içindeki saf altındır. 14 ayar bir takının içindeki saf
        altın miktarı, aynı gramajdaki 22 ayar takının yaklaşık yüzde 64&apos;ü
        kadardır (0,585 ÷ 0,916). Yani altın değeri bakımından 14 ayar
        yaklaşık üçte bir daha düşüktür. Tezgâh fiyatında ise işçilik de
        eklendiği için gerçek fark bu orandan farklı olabilir.
      </p>

      <h2>Dayanıklılık ve kullanım farkı</h2>
      <ul>
        <li>
          <strong>22 ayar:</strong> Altın oranı yüksek olduğundan daha
          yumuşaktır. Çizilmeye ve bükülmeye daha yatkındır; renk koyu ve
          doygun sarıdır. Düz, işçiliği düşük bilezik ve ziynet altınlarda
          yaygındır.
        </li>
        <li>
          <strong>14 ayar:</strong> Alaşım oranı yüksek olduğundan daha serttir.
          Çizilmeye ve eğilmeye daha dayanıklıdır, taşları daha sağlam tutar.
          Sarı, beyaz ve rose tonlarında üretilebilir.
        </li>
      </ul>

      <h2>Hangi amaçla hangisi?</h2>
      <table>
        <thead>
          <tr>
            <th>Amaç</th>
            <th>Genellikle uygun olan</th>
            <th>Neden?</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Birikim, bozdurma değeri</td><td>22 ayar (veya <Link href="/rehber/gram-altin-nedir">gram altın</Link>)</td><td>Altın oranı yüksek, işçilik payı düşük modeller seçilebilir</td></tr>
          <tr><td>Düğün ve geleneksel takı</td><td>22 ayar</td><td>Gelenekte yaygın; ziynet altınlarla uyumlu</td></tr>
          <tr><td>Günlük, her gün takılan takı</td><td>14 ayar</td><td>Daha sert, çizilmeye dayanıklı</td></tr>
          <tr><td>Taşlı, ince işçilikli modern takı</td><td>14 ayar</td><td>Taşı daha iyi tutar, ince tasarıma uygun</td></tr>
          <tr><td>Düşük bütçe</td><td>14 ayar</td><td>Aynı gramajda daha az altın içerdiği için daha uygun fiyatlı</td></tr>
        </tbody>
      </table>
      <p>
        Bu bir yatırım tavsiyesi değil, kullanım amacına göre genel bir
        çerçevedir. Birikim amaçlı alırken hangi ayarın seçildiğinden çok,
        işçilik payının ne kadar olduğuna da bakın.
      </p>

      <h2>Bozdururken ne olur?</h2>
      <p>
        Hangi ayar olursa olsun bozdurmada kuyumcu içindeki saf altını
        <em> alış</em> fiyatı üzerinden öder; işçilik geri dönmez. 14 ayarda
        saf altın oranı düşük olduğu için aynı gramajdan elinize daha az tutar
        geçer. Hesabı{" "}
        <Link href="/rehber/14-ayar-altin-bozdurma-hesabi">
          14 ayar altın bozdurma hesabı
        </Link>{" "}
        rehberinde örnekle gösterdik. Güncel gram fiyatı için{" "}
        <Link href="/altin/gram-altin">gram altın sayfamıza</Link>{" "}
        bakabilirsiniz.
      </p>

      <h2>Satın alırken dikkat edilecekler</h2>
      <ul>
        <li>Takının üzerindeki ayar damgasını okuyun (585/14K, 916/22K).</li>
        <li>Gramajı tartıda görün; faturada gramaj ve ayar yazmalı.</li>
        <li>Gram fiyatı ile işçiliği ayrı ayrı sorun.</li>
        <li>
          Düğün seti arıyorsanız karşılaştırma için{" "}
          <Link href="/rehber/dugun-taki-seti-secimi">
            düğün takı seti rehberine
          </Link>{" "}
          bakın.
        </li>
      </ul>
    </GuideArticle>
  );
}
