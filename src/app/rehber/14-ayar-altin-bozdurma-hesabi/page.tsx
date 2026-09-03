import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import kuyumcuImg from "@/images/rehber/kuyumcu.jpg";

export const metadata: Metadata = {
  title: "14 Ayar Altın Bozdurma Hesabı Nasıl Yapılır?",
  description:
    "14 ayar altın bozdurunca ne kadar para alınır? Has oran (0,585), bozdurma formülü, fire/işlem kesintisi ve 14 ayar ile 22 ayar bozdurma farkı — örnek hesapla.",
  alternates: { canonical: "/rehber/14-ayar-altin-bozdurma-hesabi" },
  openGraph: { images: [{ url: kuyumcuImg.src, width: 1600, height: 900 }] },
};

export default function Page() {
  return (
    <GuideArticle
      title="14 Ayar Altın Bozdurma Hesabı"
      intro="14 ayar altını bozdururken kuyumcu, ürünün içindeki saf altın miktarını baz alır. İşçilik geri ödenmez. Bu rehber, alacağınız yaklaşık tutarı kendiniz hesaplamanızı sağlar."
      updated="Eylül 2026"
      slug="14-ayar-altin-bozdurma-hesabi"
      image={{ src: kuyumcuImg, alt: "Kuyumcuda tezgâha altın bilezikler yerleştiren eller", credit: "Fotoğraf: Pexels" }}
      faq={[
        {
          question: "14 ayar altının saflık oranı nedir?",
          answer:
            "14 ayar altın 585/1000 saftır, yani katsayısı 0,585'tir. 10 gram 14 ayar üründe yaklaşık 5,85 gram saf altın vardır.",
        },
        {
          question: "14 ayar altın bozdurma formülü nedir?",
          answer:
            "Yaklaşık: bozdurulan gram × 0,585 × has altın alış fiyatı, üzerinden küçük bir fire/işlem kesintisi. Net rakam kuyumcuya göre değişir.",
        },
        {
          question: "14 ayar bilezik bozdurmak mantıklı mı?",
          answer:
            "Acil nakit ihtiyacı yoksa, altın fiyatı düşükken bozdurmak genelde dezavantajlıdır. Ayrıca alırken ödediğiniz işçiliği geri alamazsınız.",
        },
      ]}
      related={[
        { href: "/rehber/kuyumcuda-altin-bozdururken-dikkat", title: "Kuyumcuda altın bozdururken nelere dikkat edilmeli?" },
        { href: "/rehber/22-ayar-bilezik-hesaplama", title: "22 ayar bilezik hesaplama" },
        { href: "/rehber/altin-ayari-nedir", title: "Altın ayarı nedir?" },
      ]}
    >
      <h2>Bozdurma formülü</h2>
      <p>
        <strong>
          Alacağınız tutar ≈ (Gram × 0,585 × Has altın alış fiyatı) − Fire/işlem
          kesintisi
        </strong>
      </p>
      <p>
        Kuyumcu, bozdurmada &quot;has altın <em>alış</em>&quot; fiyatını
        kullanır (satış değil). Güncel{" "}
        <a href="/altin/gram-altin">has (gram) altın alış fiyatını</a> buradan
        takip edebilirsiniz. Fire/işlem kesintisi kuyumcudan kuyumcuya değişir
        ve genelde küçük bir yüzdedir.
      </p>

      <h2>Örnek hesap</h2>
      <p>Varsayalım:</p>
      <ul>
        <li>Elinizdeki 14 ayar ürün: 20 gram</li>
        <li>Has altın alış fiyatı: 3.900 TL</li>
        <li>Kuyumcunun kesintisi: %2</li>
      </ul>
      <p>
        Saf altın karşılığı = 20 × 0,585 = 11,7 gram
        <br />
        Brüt karşılık = 11,7 × 3.900 = <strong>45.630 TL</strong>
        <br />
        Kesinti = 45.630 × 0,02 = 912,60 TL
        <br />
        Elinize geçen ≈ <strong>44.717 TL</strong>
      </p>

      <h2>14 ayar mı 22 ayar mı bozduruyorsunuz?</h2>
      <table>
        <thead>
          <tr>
            <th>Ayar</th>
            <th>Katsayı</th>
            <th>10 gramın saf karşılığı</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>14 ayar</td>
            <td>0,585</td>
            <td>5,85 gram</td>
          </tr>
          <tr>
            <td>18 ayar</td>
            <td>0,750</td>
            <td>7,5 gram</td>
          </tr>
          <tr>
            <td>22 ayar</td>
            <td>0,916</td>
            <td>9,16 gram</td>
          </tr>
        </tbody>
      </table>
      <p>
        Aynı gramajda 22 ayar ürün, 14 ayara göre belirgin şekilde fazla para
        eder — çünkü içinde daha çok saf altın vardır.
      </p>

      <h2>Bozdurmadan önce</h2>
      <ul>
        <li>Birden fazla kuyumcudan net tutar sorun.</li>
        <li>Ayar okumasını ve tartımı izleyin.</li>
        <li>Faturalı aldıysanız faturayı yanınıza alın.</li>
        <li>
          Ayrıntı:{" "}
          <a href="/rehber/kuyumcuda-altin-bozdururken-dikkat">
            altın bozdururken nelere dikkat edilmeli
          </a>
          .
        </li>
      </ul>
    </GuideArticle>
  );
}
