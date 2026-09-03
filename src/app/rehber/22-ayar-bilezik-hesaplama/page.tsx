import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import bilezikImg from "@/images/rehber/bilezik.jpg";

export const metadata: Metadata = {
  title: "22 Ayar Bilezik Hesaplama: Formül ve Örnek",
  description:
    "22 ayar bilezik fiyatı nasıl hesaplanır? Has altın oranı (0,916), gramaj ve işçilik ile adım adım formül, örnek hesap ve kuyumcuda nelere dikkat edeceğiniz.",
  alternates: { canonical: "/rehber/22-ayar-bilezik-hesaplama" },
  openGraph: { images: [{ url: bilezikImg.src, width: 1600, height: 900 }] },
};

export default function Page() {
  return (
    <GuideArticle
      title="22 Ayar Bilezik Hesaplama"
      intro="22 ayar bir bileziğin fiyatı, içindeki has altının değeri ile işçiliğin toplamıdır. Bu rehberde formülü, katsayıları ve örnek bir hesabı bulacaksınız."
      updated="Eylül 2026"
      slug="22-ayar-bilezik-hesaplama"
      image={{ src: bilezikImg, alt: "Koyu zemin üzerinde işlemeli altın bilezikler", credit: "Fotoğraf: Pexels" }}
      faq={[
        {
          question: "22 ayar altının has oranı nedir?",
          answer:
            "22 ayar altın 916/1000 saflıktadır, yani katsayısı 0,916'dır. 100 gram 22 ayar altında yaklaşık 91,6 gram saf altın bulunur.",
        },
        {
          question: "22 ayar bilezik fiyatı nasıl bulunur?",
          answer:
            "Kaba formül: (gram altın fiyatı × 0,916 × bilezik gramı) + işçilik. İşçilik genellikle has değerin yüzdesi olarak eklenir.",
        },
        {
          question: "Bilezik bozdurursam işçiliği geri alır mıyım?",
          answer:
            "Hayır. Bozdurmada yalnızca has altın karşılığı ödenir; alırken ödediğiniz işçilik geri verilmez.",
        },
      ]}
      related={[
        { href: "/rehber/bilezikte-iscilik-hesaplama", title: "Bilezikte işçilik nasıl hesaplanır?" },
        { href: "/rehber/14-ayar-altin-bozdurma-hesabi", title: "14 ayar altın bozdurma hesabı" },
        { href: "/rehber/altin-ayari-nedir", title: "Altın ayarı nedir? 24, 22, 18, 14 ayar" },
      ]}
    >
      <h2>Adım adım formül</h2>
      <ol>
        <li>
          <strong>Has altın değerini bul:</strong> Güncel{" "}
          <a href="/altin/gram-altin">gram altın (has) alış fiyatı</a> × 0,916
          × bileziğin gramı.
        </li>
        <li>
          <strong>İşçiliği ekle:</strong> Kuyumcunun uyguladığı işçilik oranı
          (ör. %8) × has altın değeri. Bazı kuyumcular gram başına sabit tutar
          da uygular.
        </li>
        <li>
          <strong>Topla:</strong> Has altın değeri + işçilik = satış fiyatı.
        </li>
      </ol>
      <p>
        Not: Kuyumcu satarken genelde &quot;has altın alış&quot; değil,
        &quot;has altın satış&quot; fiyatını baz alır; bu da tutarı biraz
        yükseltir.
      </p>

      <h2>Örnek hesap</h2>
      <p>Varsayalım:</p>
      <ul>
        <li>Gram altın (has): 4.000 TL</li>
        <li>Bilezik gramı: 15 gram</li>
        <li>İşçilik: %10</li>
      </ul>
      <p>
        Has altın değeri = 4.000 × 0,916 × 15 = <strong>54.960 TL</strong>
        <br />
        İşçilik = 54.960 × 0,10 = <strong>5.496 TL</strong>
        <br />
        Yaklaşık satış fiyatı = <strong>60.456 TL</strong>
      </p>
      <p>
        Bu rakamları güncel fiyatlarla otomatik görmek için{" "}
        <a href="/altin/22-ayar-bilezik">22 ayar bilezik fiyat sayfasındaki</a>{" "}
        hesaplama aracını veya{" "}
        <a href="/#hesaplama">anasayfadaki altın hesaplama aracını</a>{" "}
        kullanabilirsiniz.
      </p>

      <h2>Kuyumcuda nelere dikkat edin</h2>
      <ul>
        <li>İşçiliğin yüzde mi, gram başına sabit tutar mı olduğunu sorun.</li>
        <li>Bileziğin gramajını tartıda gözünüzün önünde doğrulatın.</li>
        <li>Ayar damgasını (916) kontrol edin.</li>
        <li>Faturada gram, ayar ve işçilik ayrı ayrı yazsın.</li>
      </ul>
    </GuideArticle>
  );
}
