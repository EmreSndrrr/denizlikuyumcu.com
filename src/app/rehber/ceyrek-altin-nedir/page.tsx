import type { Metadata } from "next";
import Link from "next/link";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Çeyrek Altın Nedir? Gramajı, Ayarı, Has Altın Miktarı",
  description:
    "Çeyrek altın kaç gram, kaç ayar, içinde ne kadar saf altın var? Yarım ve tam altınla farkı, ziynet ve Ata çeyrek ayrımı, alırken dikkat edilecekler.",
  alternates: { canonical: "/rehber/ceyrek-altin-nedir" },
};

export default function Page() {
  return (
    <GuideArticle
      title="Çeyrek Altın Nedir?"
      intro="Çeyrek altın, yaklaşık 1,75 gram ağırlığında, 22 ayar (binde 916 saflıkta) bir ziynet altındır; içindeki saf altın miktarı yaklaşık 1,60 gramdır. Türkiye'de düğün ve hediyelerde en çok tercih edilen altın türüdür. Yarım altın bunun iki katı, tam altın ise dört katı ağırlıktadır."
      updated="Ekim 2026"
      datePublished="2026-10-01"
      slug="ceyrek-altin-nedir"
      faq={[
        {
          question: "Çeyrek altın kaç gram?",
          answer:
            "Ziynet çeyrek altın yaklaşık 1,75 gram ağırlığındadır. Bu brüt ağırlıktır; 22 ayar olduğu için içindeki saf (has) altın yaklaşık 1,60 gramdır. Ata serisindeki çeyrek ise biraz daha ağırdır, yaklaşık 1,80 gram.",
        },
        {
          question: "Çeyrek altın 22 ayar mı, 24 ayar mı?",
          answer:
            "Çeyrek altın 22 ayardır, yani binde 916 saflıktadır. Saf altın çok yumuşak olduğu için, el değiştirirken aşınmasın diye dayanıklı bir alaşımla basılır. 24 ayar olan ürün ise gram altındır.",
        },
        {
          question: "Delinmiş veya lehimli çeyrek altın değer kaybeder mi?",
          answer:
            "Evet, genellikle. Delik, lehim ya da aparat izi olan çeyrekler sağlam çeyrek olarak değil, içindeki altın üzerinden 'ziynet' olarak değerlendirilir ve kuyumcu daha düşük fiyat verebilir. Lehimde yabancı metal karışabileceği için ayar da düşebilir.",
        },
      ]}
      related={[
        { href: "/rehber/ceyrek-altin-ne-kadar", title: "Çeyrek altın ne kadar? Fiyatı nasıl oluşur" },
        { href: "/rehber/eski-yeni-tarihli-ceyrek-altin-farki", title: "Eski ve yeni tarihli çeyrek altın farkı" },
        { href: "/rehber/ceyrek-altin-alis-satis-farki", title: "Çeyrek altında alış ve satış farkı" },
      ]}
    >
      <h2>Çeyrek altın kaç gram, kaç ayar?</h2>
      <p>
        Çeyrek altın, &quot;ziynet altın&quot; adı verilen basılı altın
        ailesinin en küçük üyesidir. Ziynet, Türkçede süs ve takı anlamına gelir;
        bu altınlar da takılmak, hediye edilmek ve birikim yapılmak üzere
        standart ağırlık ve ayarda basılır. Hepsi <strong>22 ayar</strong>dır.
      </p>
      <table>
        <thead>
          <tr>
            <th>Ürün</th>
            <th>Ağırlık (brüt)</th>
            <th>Ayar</th>
            <th>İçindeki saf altın</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Çeyrek altın</td><td>~1,75 g</td><td>22 (916)</td><td>~1,60 g</td></tr>
          <tr><td>Yarım altın</td><td>~3,50 g</td><td>22 (916)</td><td>~3,21 g</td></tr>
          <tr><td>Tam altın</td><td>~7,00 g</td><td>22 (916)</td><td>~6,42 g</td></tr>
        </tbody>
      </table>
      <p>
        Adı da buradan gelir: çeyrek altın, tam altının dörtte biri
        ağırlığındadır. İki çeyrek bir yarıma, dört çeyrek bir tam altına denk
        gelir.
      </p>

      <h2>Neden 1,75 gram değil de 1,60 gram altın?</h2>
      <p>
        Çeyrek altın için sık yapılan bir hata, 1,75 gramın tamamını altın
        sanmaktır. 1,75 gram, sikkenin <strong>toplam (brüt) ağırlığıdır</strong>.
        22 ayar altın binde 916 saf olduğu için, içindeki saf altın:
      </p>
      <p>
        <strong>1,75 g × 0,916 ≈ 1,60 g</strong>
      </p>
      <p>
        Geri kalan yaklaşık 0,15 gram, sikkeyi dayanıklı kılan alaşım
        metalleridir. Bu ayrım fiyat açısından önemlidir: çeyrek altının değeri
        1,75 değil, yaklaşık 1,60 gram saf altın üzerinden hesaplanır. Nitekim 1
        Ekim 2026 verisinde çeyrek altın satış fiyatı, gram altın satış
        fiyatının yaklaşık <strong>1,64 katıydı</strong>: 1,60 gramlık altın
        değeri ile üzerine eklenen küçük bir basım primi. Fiyatın nasıl
        oluştuğunu{" "}
        <Link href="/rehber/ceyrek-altin-ne-kadar">çeyrek altın ne kadar</Link>{" "}
        rehberinde ayrıntılı anlattık.
      </p>

      <h2>Ziynet çeyrek ve Ata çeyrek farkı</h2>
      <p>
        Piyasada iki ayrı çeyrek ailesi vardır ve sık karıştırılır:
      </p>
      <ul>
        <li>
          <strong>Ziynet çeyrek:</strong> Gündelik dilde &quot;çeyrek altın&quot;
          denince kastedilen budur. Yaklaşık 1,75 gramdır.
        </li>
        <li>
          <strong>Ata çeyrek:</strong> Yaklaşık 7,2 gramlık tam Ata sikkesinin
          çeyreğidir; bu yüzden ziynet çeyrekten biraz daha ağırdır, yaklaşık
          1,80 gram (içindeki saf altın ~1,65 g).
        </li>
      </ul>
      <p>
        Ağırlıkları farklı olduğu için fiyatları da farklıdır. Güncel fiyatları{" "}
        <Link href="/altin/ceyrek-altin">çeyrek altın</Link> ve{" "}
        <Link href="/altin/ceyrek-ata-altin">çeyrek Ata altın</Link>{" "}
        sayfalarında ayrı ayrı görebilirsiniz. Tam boyda iki aile arasındaki
        farkı{" "}
        <Link href="/rehber/tam-altin-nedir">tam altın rehberinde</Link>{" "}
        karşılaştırdık.
      </p>

      <h2>Basım yılı fiyatı değiştirir mi?</h2>
      <p>
        Darphane standartlarında basılmış bir çeyreğin içindeki altın miktarı,
        basıldığı yıldan bağımsız olarak aynıdır. Bu yüzden sağlam bir eski
        tarihli çeyrek ile yeni bir çeyrek kuyumcuda çoğunlukla aynı fiyattan
        işlem görür. Fiyatı asıl etkileyen, sikkenin sağlamlığıdır: yıpranma,
        ezik, delik veya lehim. Ayrıntılar için{" "}
        <Link href="/rehber/eski-yeni-tarihli-ceyrek-altin-farki">
          eski ve yeni tarihli çeyrek altın farkı
        </Link>{" "}
        rehberine bakabilirsiniz.
      </p>

      <h2>Çeyrek altın nerelerde kullanılır?</h2>
      <ul>
        <li>
          <strong>Düğün ve nişan:</strong> Türkiye&apos;de en yaygın takı hediyesidir.
          Kimlerin genellikle ne taktığını{" "}
          <Link href="/rehber/dugunde-hangi-altinlar-takilir">
            düğünde hangi altınlar takılır
          </Link>{" "}
          rehberinde anlattık.
        </li>
        <li>
          <strong>Doğum, sünnet ve özel günler:</strong> Tutarı yönetilebilir,
          değeri herkesçe bilinen bir hediye olarak tercih edilir.
        </li>
        <li>
          <strong>Birikim:</strong> Kolay bozdurulur, ama alış-satış farkı gram
          altına göre daha geniş olduğu için saf yatırım amacında gram altın
          genellikle daha verimlidir.
        </li>
      </ul>

      <h2>Çeyrek altın alırken nelere bakmalı?</h2>
      <ol>
        <li>Sikke sağlam olmalı: delik, ezik, lehim veya aparat izi bulunmamalı.</li>
        <li>Kenarları ve yüzeyi aşırı aşınmış olmamalı; aşınma tartıda eksik çıkabilir.</li>
        <li>Tartımı görün; ağırlık yaklaşık 1,75 gram olmalı.</li>
        <li>Alış ve satış fiyatını birlikte sorun; aradaki fark makastır.</li>
        <li>
          Fatura alın; sonradan bozdururken ya da kaybolduğunda işinize yarar.
          Nedenini{" "}
          <Link href="/rehber/altin-alirken-fatura">bu rehberde</Link>{" "}
          açıkladık.
        </li>
      </ol>
      <p>
        Çeyrek altında alış ile satış fiyatı arasındaki farkın neden gram
        altından geniş olduğunu{" "}
        <Link href="/rehber/ceyrek-altin-alis-satis-farki">
          çeyrek altın alış-satış farkı
        </Link>{" "}
        rehberinde örnekle anlattık. Şüpheli bir sikke için de{" "}
        <Link href="/rehber/sahte-altin-nasil-anlasilir">
          sahte altın nasıl anlaşılır
        </Link>{" "}
        rehberine göz atabilirsiniz.
      </p>
    </GuideArticle>
  );
}
