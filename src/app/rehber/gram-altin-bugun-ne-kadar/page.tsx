import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import gramAltinImg from "@/images/rehber/gram-altin.jpg";

export const metadata: Metadata = {
  title: "Gram Altın Bugün Ne Kadar? Güncel Alış-Satış",
  description:
    "Gram altın bugün ne kadar? Denizli'de güncel gram altın alış ve satış fiyatını canlı görün, fiyatın gün içinde neden değiştiğini ve doğru okumanın yolunu öğrenin.",
  alternates: { canonical: "/rehber/gram-altin-bugun-ne-kadar" },
  openGraph: { images: [{ url: gramAltinImg.src, width: 1600, height: 900 }] },
};

export default function Page() {
  return (
    <GuideArticle
      title="Gram Altın Bugün Ne Kadar?"
      intro="Gram altının bugünkü fiyatı sabit bir rakam değildir; gün içinde dakikalar içinde değişir. Bu rehber, güncel fiyatı nereden takip edeceğinizi ve rakamı doğru yorumlamayı anlatır."
      updated="Eylül 2026"
      slug="gram-altin-bugun-ne-kadar"
      image={{ src: gramAltinImg, alt: "İstiflenmiş külçe altın çubukları", credit: "Fotoğraf: Pexels" }}
      faq={[
        {
          question: "Gram altının bugünkü fiyatını nereden görebilirim?",
          answer:
            "Sayfanın üstündeki canlı fiyat şeridinden ve anasayfadaki fiyat tablosundan; veriler yaklaşık her 60 saniyede bir yenilenir ve son güncelleme saati gösterilir.",
        },
        {
          question: "Alış mı satış fiyatına bakmalıyım?",
          answer:
            "Altın alacaksanız kuyumcunun 'satış' fiyatı sizi ilgilendirir; elinizdekini bozduracaksanız 'alış' fiyatı geçerlidir. İkisi arasındaki farka makas (spread) denir.",
        },
        {
          question: "Hafta sonu gram altın fiyatı değişir mi?",
          answer:
            "Uluslararası piyasalar hafta sonu kapalı olduğundan fiyat büyük ölçüde cuma kapanışında sabit kalır; kuyumcular hafta sonu genelde biraz daha geniş makasla işlem yapar.",
        },
      ]}
      related={[
        { href: "/rehber/gram-altin-hesaplama", title: "Gram altın fiyatı nasıl hesaplanır?" },
        { href: "/rehber/10-gram-altin-kac-tl", title: "10 gram altın kaç TL eder?" },
        { href: "/rehber/ceyrek-altin-alis-satis-farki", title: "Çeyrek altında alış-satış farkı" },
      ]}
    >
      <h2>Güncel gram altın fiyatını canlı takip edin</h2>
      <p>
        Gram altının bugünkü alış ve satış fiyatını{" "}
        <a href="/altin/gram-altin">gram altın fiyat sayfamızdan</a> ve{" "}
        <a href="/#altin-fiyatlari">anasayfadaki fiyat tablosundan</a> canlı
        olarak görebilirsiniz. Rakamlar yaklaşık her 60 saniyede bir yenilenir
        ve her bölümde &quot;… itibarıyla&quot; etiketiyle son güncelleme
        zamanı gösterilir. Bu fiyatlar bilgilendirme amaçlıdır; kesin işlem
        için kuyumcunuzla teyitleşin.
      </p>

      <h2>Gram altın fiyatı gün içinde neden değişiyor?</h2>
      <p>
        Türkiye&apos;deki gram altın fiyatı iki değişkene bağlıdır: dünya
        piyasasındaki <a href="/altin/ons-altin">ons altın</a> fiyatı (dolar
        cinsinden) ve <a href="/doviz/dolar">dolar/TL kuru</a>. Bu ikisi de
        gün boyu hareket ettiği için gram altın da hareket eder. Kaba formül:
      </p>
      <p>
        <strong>
          Gram Altın (TL) ≈ (Ons Altın [USD] ÷ 31,1) × Dolar/TL
        </strong>
      </p>
      <p>
        Ons altın sabit kalsa bile dolar yükselirse gram altın artar; tersi de
        geçerlidir. Detaylı anlatım için{" "}
        <a href="/rehber/gram-altin-hesaplama">
          gram altın fiyatı nasıl hesaplanır
        </a>{" "}
        rehberimize bakabilirsiniz.
      </p>

      <h2>Kuyumcudaki fiyatla ekrandaki fiyat neden farklı?</h2>
      <ul>
        <li>
          <strong>Makas (spread):</strong> Kuyumcu, alış fiyatının biraz
          üzerinden satar; bu fark işletme maliyeti ve kâr marjıdır.
        </li>
        <li>
          <strong>Gecikme:</strong> Ekrandaki veri birkaç dakika gecikmeli
          olabilir; piyasa hızlı hareket ettiğinde fark açılır.
        </li>
        <li>
          <strong>İşçilik:</strong> Bilezik, yüzük gibi işlenmiş üründe gram
          fiyatının üstüne işçilik eklenir — bu, &quot;gram altın&quot;
          fiyatı değildir.
        </li>
      </ul>

      <h2>Ne kadar altın alacağınızı hesaplayın</h2>
      <p>
        Belirli bir bütçeyle kaç gram altın alabileceğinizi veya elinizdeki
        gramajın bugünkü karşılığını{" "}
        <a href="/#hesaplama">anasayfadaki altın hesaplama aracıyla</a> canlı
        fiyatlar üzerinden anında görebilirsiniz.
      </p>
    </GuideArticle>
  );
}
