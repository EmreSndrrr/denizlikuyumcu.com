import type { Metadata } from "next";
import Link from "next/link";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Tam Altın Nedir? Gramajı ve Cumhuriyet Altını Farkı",
  description:
    "Tam altın kaç gram ve kaç ayar? Tam altın ile Cumhuriyet altını aynı mı, fiyatları neden farklı? Tam altın mı dört çeyrek mi, bozdurma ipuçları.",
  alternates: { canonical: "/rehber/tam-altin-nedir" },
};

export default function Page() {
  return (
    <GuideArticle
      title="Tam Altın Nedir?"
      intro="Tam altın, yaklaşık 7 gram ağırlığında, 22 ayar bir ziynet altındır ve içinde yaklaşık 6,42 gram saf altın bulunur; ağırlık olarak dört çeyrek altına denk gelir. Sık karıştırılan Cumhuriyet altını ise ondan biraz daha ağırdır: yaklaşık 7,2 gram, içindeki saf altın yaklaşık 6,61 gram. Bu yüzden ikisinin fiyatı farklıdır."
      updated="Ekim 2026"
      datePublished="2026-10-01"
      slug="tam-altin-nedir"
      faq={[
        {
          question: "Tam altın kaç çeyrek eder?",
          answer:
            "Ağırlık olarak tam altın dört çeyrek altına eşittir. Fiyat olarak da dört çeyreğin toplamına çok yakındır ama birebir aynı olmayabilir: 1 Ekim 2026 verisinde tam altının satış fiyatı, dört çeyreğin toplam satış fiyatından yaklaşık %0,3 düşüktü.",
        },
        {
          question: "Tam altın ile Cumhuriyet altını aynı fiyat mı?",
          answer:
            "Hayır. Cumhuriyet altını tam altından yaklaşık 0,2 gram daha ağırdır ve daha fazla saf altın içerir. 1 Ekim 2026 verisinde Cumhuriyet altınının satış fiyatı tam altından yaklaşık %2,4 yüksekti. Alırken hangisinin söylendiğini mutlaka teyit edin.",
        },
        {
          question: "Tam altın 22 ayar mı?",
          answer:
            "Evet. Tam altın, çeyrek ve yarım altın gibi 22 ayardır, yani binde 916 saflıktadır. Saf altının yumuşaklığı nedeniyle sikkeler, el değiştirirken aşınmasınlar diye dayanıklı bir alaşımla basılır.",
        },
      ]}
      related={[
        { href: "/rehber/ceyrek-altin-nedir", title: "Çeyrek altın nedir?" },
        { href: "/rehber/ceyrek-altin-ne-kadar", title: "Çeyrek altın ne kadar? Fiyatı nasıl oluşur" },
        { href: "/rehber/dugunde-hangi-altinlar-takilir", title: "Düğünde hangi altınlar takılır?" },
      ]}
    >
      <h2>Tam altın kaç gram, kaç ayar?</h2>
      <p>
        Tam altın, ziynet altın ailesinin en büyük standart üyesidir. Çeyrek ve
        yarım altınla aynı ayardadır; yalnızca ağırlığı farklıdır.
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
          <tr><td><strong>Tam altın</strong></td><td><strong>~7,00 g</strong></td><td><strong>22 (916)</strong></td><td><strong>~6,42 g</strong></td></tr>
          <tr><td>Cumhuriyet altını</td><td>~7,20 g</td><td>22 (916)</td><td>~6,61 g</td></tr>
        </tbody>
      </table>
      <p>
        Yaklaşık 7 gramın tamamı saf altın değildir. 22 ayar binde 916 saflık
        demektir; içindeki saf altın 7,00 × 0,916 ≈ 6,42 gramdır. Fiyat da bu
        saf altın miktarı üzerinden hesaplanır.
      </p>

      <h2>Tam altın ile Cumhuriyet altını aynı mı?</h2>
      <p>
        Gündelik dilde ikisi bazen birbirinin yerine kullanılsa da aynı ürün
        değildir:
      </p>
      <ul>
        <li>
          <strong>Tam altın (ziynet):</strong> Yaklaşık 7,00 gram. Çeyrek ve
          yarım altınla aynı ailenin üyesidir.
        </li>
        <li>
          <strong>Cumhuriyet altını:</strong> Yaklaşık 7,20 gram. Ayrı bir
          sikke ailesidir; kendi çeyrek ve yarım boyları da vardır.
        </li>
      </ul>
      <p>
        Aradaki yaklaşık 0,2 gramlık fark küçük görünse de fiyata yansır. 1
        Ekim 2026 verisinde Cumhuriyet altınının satış fiyatı, tam altınınkinden
        yaklaşık <strong>%2,4 yüksekti</strong>. Benzer ağırlıktaki Ata ve Reşat
        sikkelerinin fiyatı da koleksiyon ilgisi ve talebe göre bunlardan biraz
        farklılaşabilir.
      </p>
      <p>
        Güncel fiyatları ayrı ayrı{" "}
        <Link href="/altin/tam-altin">tam altın</Link>,{" "}
        <Link href="/altin/cumhuriyet-altini">Cumhuriyet altını</Link>,{" "}
        <Link href="/altin/tam-ata-altin">tam Ata altın</Link> ve{" "}
        <Link href="/altin/tam-resat-altin">tam Reşat altın</Link>{" "}
        sayfalarında görebilirsiniz.
      </p>

      <h2>Tam altın fiyatı nasıl oluşur?</h2>
      <p>
        Diğer ziynet altınlar gibi tam altının fiyatı da içindeki saf altının
        değerine küçük bir basım primi eklenerek oluşur. Kabaca:
      </p>
      <p>
        <strong>Tam altın ≈ Gram altın fiyatı × 6,42 + basım primi</strong>
      </p>
      <p>
        1 Ekim 2026 verisinde tam altının satış fiyatı, gram altın satış
        fiyatının yaklaşık <strong>6,52 katıydı</strong>. Gram altın 6.500 TL
        olduğunda bu, yaklaşık 42.400 TL&apos;lik bir tam altın fiyatına karşılık
        gelir. Hesap mantığının çeyrek altın üzerinden ayrıntılı anlatımını{" "}
        <Link href="/rehber/ceyrek-altin-ne-kadar">çeyrek altın ne kadar</Link>{" "}
        rehberinde bulabilirsiniz.
      </p>

      <h2>Tam altın mı, dört çeyrek mi?</h2>
      <p>
        Ağırlık ve altın miktarı olarak tam altın ile dört çeyrek eşittir. Fark,
        kullanım kolaylığında ve bazen fiyatta ortaya çıkar:
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>1 tam altın</th>
            <th>4 çeyrek altın</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Toplam saf altın</td><td>~6,42 g</td><td>~6,42 g</td></tr>
          <tr><td>Bölünebilirlik</td><td>Yok; tek parça</td><td>Var; birer birer bozdurulabilir</td></tr>
          <tr><td>Hediye olarak etkisi</td><td>Tek ve büyük hediye</td><td>Birden çok kişiye dağıtılabilir</td></tr>
          <tr><td>Fiyat (1 Ekim 2026)</td><td>Dört çeyrekten ~%0,3 ucuz</td><td>—</td></tr>
        </tbody>
      </table>
      <p>
        İhtiyaç anında küçük parçalar hâlinde bozdurabilmek istiyorsanız
        çeyrekler daha esnektir. Tek bir yüksek tutarlı hediye için tam altın
        daha yaygın bir tercihtir.
      </p>

      <h2>Tam altın kimler tarafından ve nerede takılır?</h2>
      <p>
        Tam altın, yüksek tutarlı olduğu için genellikle anne-baba, kayınvalide
        ve kayınpeder gibi yakın aile büyükleri tarafından düğün ve nişanlarda
        takılır. Yakınlık derecesine göre yaygın tercihleri{" "}
        <Link href="/rehber/dugunde-hangi-altinlar-takilir">
          düğünde hangi altınlar takılır
        </Link>{" "}
        rehberinde derledik.
      </p>

      <h2>Tam altın bozdururken</h2>
      <ul>
        <li>
          Kuyumcu, tam altının <strong>alış</strong> fiyatını öder; ilan edilen
          satış fiyatını değil.
        </li>
        <li>
          Sağlam, deliksiz ve lehimsiz sikkeler tam değerinden alınır. Delik,
          ezik ya da lehimli olanlar &quot;ziynet&quot; olarak daha düşük
          fiyatlanabilir.
        </li>
        <li>
          Bozdurmadan önce aynı gün iki kuyumcunun alış fiyatını sormak
          küçük de olsa fark yaratabilir.
        </li>
      </ul>
      <p>
        Bozdurma sırasında dikkat edilecek diğer noktaları{" "}
        <Link href="/rehber/kuyumcuda-altin-bozdururken-dikkat">
          altın bozdururken nelere dikkat edilmeli
        </Link>{" "}
        rehberinde topladık.
      </p>
    </GuideArticle>
  );
}
