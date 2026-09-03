import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import gramAltinImg from "@/images/rehber/gram-altin.jpg";

export const metadata: Metadata = {
  title: "10 Gram Altın Kaç TL Eder? Hesaplama",
  description:
    "10 gram altın kaç TL? Gram altın fiyatı üzerinden 10 gram, 5 gram ve 100 gram altının güncel karşılığını nasıl hesaplayacağınızı ve külçe ile bilezik farkını açıklıyoruz.",
  alternates: { canonical: "/rehber/10-gram-altin-kac-tl" },
  openGraph: { images: [{ url: gramAltinImg.src, width: 1600, height: 900 }] },
};

export default function Page() {
  return (
    <GuideArticle
      title="10 Gram Altın Kaç TL Eder?"
      intro="10 gram altının değeri, o anki gram altın fiyatının 10 katıdır — ama aldığınız ürün külçe mi yoksa işlenmiş takı mı olduğuna göre ödeyeceğiniz tutar değişir."
      updated="Eylül 2026"
      slug="10-gram-altin-kac-tl"
      image={{ src: gramAltinImg, alt: "İstiflenmiş külçe altın çubukları", credit: "Fotoğraf: Pexels" }}
      faq={[
        {
          question: "10 gram altın kaç TL?",
          answer:
            "Güncel gram altın satış fiyatını 10 ile çarpın. Örneğin gram altın 4.000 TL ise 10 gram yaklaşık 40.000 TL eder. Canlı rakam için anasayfadaki fiyat tablosuna bakın.",
        },
        {
          question: "10 gram bilezik ile 10 gram külçe altın aynı fiyat mı?",
          answer:
            "Hayır. Külçe/gram altında işçilik payı çok düşüktür. 10 gram bilezikte gram fiyatının üstüne %3–%20 arası işçilik eklendiği için toplam tutar daha yüksek olur.",
        },
        {
          question: "100 gram altın kaç TL?",
          answer:
            "Gram altın satış fiyatı × 100. Büyük gramajlı külçe altınlarda gram fiyatı bazen küçük bir iskonto ile uygulanabilir.",
        },
      ]}
      related={[
        { href: "/rehber/gram-altin-bugun-ne-kadar", title: "Gram altın bugün ne kadar?" },
        { href: "/rehber/gram-altin-hesaplama", title: "Gram altın fiyatı nasıl hesaplanır?" },
        { href: "/rehber/22-ayar-bilezik-hesaplama", title: "22 ayar bilezik hesaplama" },
      ]}
    >
      <h2>Basit hesap</h2>
      <p>
        Külçe veya 24 ayar gram altın için hesap doğrudandır:
      </p>
      <p>
        <strong>Tutar = Güncel gram altın fiyatı × Gram</strong>
      </p>
      <ul>
        <li>5 gram altın = gram fiyatı × 5</li>
        <li>10 gram altın = gram fiyatı × 10</li>
        <li>50 gram altın = gram fiyatı × 50</li>
        <li>100 gram altın = gram fiyatı × 100</li>
      </ul>
      <p>
        Güncel <a href="/altin/gram-altin">gram altın fiyatını</a> canlı
        görebilir, istediğiniz gramajı{" "}
        <a href="/#hesaplama">anasayfadaki hesaplama aracına</a> girerek anlık
        karşılığını bulabilirsiniz. Aracı, alış ve satış fiyatını ayrı ayrı
        gösterir.
      </p>

      <h2>Ayar, tutarı nasıl değiştirir?</h2>
      <p>
        Yukarıdaki hesap 24 ayar (has) altın içindir. Daha düşük ayarda
        altının gram değeri, saflık oranıyla çarpılır:
      </p>
      <table>
        <thead>
          <tr>
            <th>Ayar</th>
            <th>Saflık</th>
            <th>10 gramın has karşılığı</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>24 ayar</td>
            <td>0,995–0,999</td>
            <td>≈ 10 gram has</td>
          </tr>
          <tr>
            <td>22 ayar</td>
            <td>0,916</td>
            <td>≈ 9,16 gram has</td>
          </tr>
          <tr>
            <td>18 ayar</td>
            <td>0,750</td>
            <td>≈ 7,5 gram has</td>
          </tr>
          <tr>
            <td>14 ayar</td>
            <td>0,585</td>
            <td>≈ 5,85 gram has</td>
          </tr>
        </tbody>
      </table>
      <p>
        Yani &quot;10 gram 14 ayar altın&quot;, 10 gram has altın kadar
        değerli değildir. Ayarlar hakkında ayrıntı için{" "}
        <a href="/rehber/altin-ayari-nedir">altın ayarı nedir</a> rehberine
        bakın.
      </p>

      <h2>İşlenmiş takıda işçilik</h2>
      <p>
        Bir bilezik veya set alıyorsanız fiyat, yalnızca içindeki altının has
        değeri değildir; tasarım ve işçilik de eklenir. 10 gram 22 ayar bir
        bileziğin fiyatını{" "}
        <a href="/rehber/22-ayar-bilezik-hesaplama">
          22 ayar bilezik hesaplama
        </a>{" "}
        rehberindeki yöntemle çıkarabilirsiniz.
      </p>
    </GuideArticle>
  );
}
