import type { Metadata } from "next";
import Link from "next/link";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Çeyrek Altın Ne Kadar? Fiyatı Nasıl Oluşur?",
  description:
    "Çeyrek altın bugün ne kadar, fiyatı gram altına göre nasıl hesaplanır? Alış-satış farkı, kuyumcular arası fiyat farkı ve güncel çeyrek altın fiyatını takip etme rehberi.",
  alternates: { canonical: "/rehber/ceyrek-altin-ne-kadar" },
};

export default function Page() {
  return (
    <GuideArticle
      title="Çeyrek Altın Ne Kadar?"
      intro="Çeyrek altının güncel alış ve satış fiyatını çeyrek altın fiyat sayfamızdan canlı olarak görebilirsiniz. Fiyat, içindeki yaklaşık 1,60 gram saf altının değerine küçük bir basım primi eklenerek oluşur. 1 Ekim 2026 verisinde çeyrek altın satış fiyatı, gram altın satış fiyatının yaklaşık 1,64 katıydı."
      updated="Ekim 2026"
      datePublished="2026-10-01"
      slug="ceyrek-altin-ne-kadar"
      faq={[
        {
          question: "Çeyrek altın fiyatı her yerde aynı mı?",
          answer:
            "Hayır. Piyasadaki referans fiyat her yerde aynıdır ama kuyumcuların tezgâh fiyatı; makas, stok maliyeti ve rekabete göre küçük farklar gösterir. Bu yüzden aynı gün iki kuyumcunun çeyrek fiyatı birkaç on lira farklı olabilir. Karşılaştırırken alış ve satış fiyatını birlikte sorun.",
        },
        {
          question: "Çeyrek altın bozdururken ne kadar alırlar?",
          answer:
            "Kuyumcu, çeyreğin o anki alış fiyatını öder; satış fiyatını değil. Sikke sağlamsa genellikle ilan edilen alış fiyatına yakın bir tutar alırsınız. Delik, lehimli veya aşınmış çeyreklerde bu tutar düşebilir.",
        },
        {
          question: "Çeyrek altın fiyatı hafta sonu neden değişmiyor?",
          answer:
            "Uluslararası altın piyasası hafta sonu kapalı olduğu için kaynak, cuma kapanışındaki fiyatı göstermeye devam eder. Bazı kuyumcular pazartesi açılışındaki olası fiyat hareketine karşı hafta sonu makası biraz geniş tutabilir.",
        },
      ]}
      related={[
        { href: "/rehber/ceyrek-altin-nedir", title: "Çeyrek altın nedir? Gramajı ve ayarı" },
        { href: "/rehber/ceyrek-altin-alis-satis-farki", title: "Çeyrek altında alış ve satış farkı" },
        { href: "/rehber/kuyumcuda-altin-bozdururken-dikkat", title: "Altın bozdururken nelere dikkat edilmeli?" },
      ]}
    >
      <h2>Güncel çeyrek altın fiyatı</h2>
      <p>
        Çeyrek altının alış ve satış fiyatını{" "}
        <Link href="/altin/ceyrek-altin">çeyrek altın fiyat sayfamızda</Link>{" "}
        canlı olarak, son güncelleme saatiyle birlikte görebilirsiniz. Veriler
        finans.truncgil.com kaynağından alınır ve kaynağında piyasa açıkken
        yaklaşık 15 dakikada bir güncellenir. Bu fiyat bir piyasa referansıdır;
        Denizli&apos;deki kuyumcular buna kendi kâr paylarını ekleyebilir.
      </p>
      <p>
        Rakamın kendisi gün içinde değişir. Bu yüzden bu yazıda sabit bir fiyat
        vermek yerine, fiyatın <strong>nasıl oluştuğunu</strong> ve kendiniz
        nasıl tahmin edebileceğinizi anlatıyoruz.
      </p>

      <h2>Çeyrek altın fiyatı nasıl hesaplanır?</h2>
      <p>
        Çeyrek altın yaklaşık 1,75 gram ağırlığında ve 22 ayardır; yani içinde
        yaklaşık <strong>1,60 gram saf altın</strong> bulunur (1,75 × 0,916).
        Fiyatı bu altının değeri ile üzerine eklenen küçük bir basım priminden
        oluşur. Kabaca:
      </p>
      <p>
        <strong>Çeyrek altın ≈ Gram altın fiyatı × 1,60 + basım primi</strong>
      </p>
      <p>
        Prim genellikle küçüktür. Pratikte çeyrek fiyatını tahmin etmenin en
        kolay yolu gram altın fiyatını yaklaşık <strong>1,64</strong> ile
        çarpmaktır. Örneğin gram altının satış fiyatı 6.500 TL ise:
      </p>
      <p>
        6.500 × 1,64 ≈ <strong>10.660 TL</strong>
      </p>
      <p>
        Bu bir tahmindir; gerçek fiyat o anki prime göre biraz farklı olabilir.
        Çeyreğin neden 1,75 değil 1,60 gram altın içerdiğini{" "}
        <Link href="/rehber/ceyrek-altin-nedir">çeyrek altın nedir</Link>{" "}
        rehberinde açıkladık.
      </p>

      <h2>Diğer ziynet altınlar için aynı mantık</h2>
      <p>
        Yarım, tam ve gremse altın da aynı şekilde fiyatlanır. Aşağıdaki
        tablo, 1 Ekim 2026&apos;daki satış fiyatlarının gram altın satış fiyatına
        oranını gösterir. Oranlar, ürünlerin içindeki saf altın miktarıyla
        uyumludur; aradaki küçük fark basım primidir.
      </p>
      <table>
        <thead>
          <tr>
            <th>Ürün</th>
            <th>İçindeki saf altın</th>
            <th>Gram altına oranı (1 Ekim 2026)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Çeyrek altın</td><td>~1,60 g</td><td>1,64</td></tr>
          <tr><td>Yarım altın</td><td>~3,21 g</td><td>3,27</td></tr>
          <tr><td>Tam altın</td><td>~6,42 g</td><td>6,52</td></tr>
          <tr><td>Cumhuriyet altını</td><td>~6,61 g</td><td>6,68</td></tr>
        </tbody>
      </table>
      <p>
        Oranlar zamanla küçük değişiklikler gösterebilir; güncel değerleri{" "}
        <Link href="/altin/yarim-altin">yarım altın</Link>,{" "}
        <Link href="/altin/tam-altin">tam altın</Link> ve{" "}
        <Link href="/altin/cumhuriyet-altini">Cumhuriyet altını</Link>{" "}
        sayfalarından görebilirsiniz.
      </p>

      <h2>Alış ve satış fiyatı neden farklı?</h2>
      <p>
        Kuyumcu, çeyreği size sattığı fiyattan (satış) daha düşük bir fiyata
        sizden alır (alış). Aradaki fark <strong>makas</strong>tır ve çeyrekte
        gram altına göre daha geniştir: basılı bir ürün olduğu için stok ve
        basım maliyeti taşır, talebi de düğün sezonu gibi dönemlerde dalgalanır.
      </p>
      <p>
        Bu fark, kısa sürede alıp satarsanız ne kadar kayıp yaşayacağınızı
        belirler. Örnekli anlatımını{" "}
        <Link href="/rehber/ceyrek-altin-alis-satis-farki">
          çeyrek altında alış ve satış farkı
        </Link>{" "}
        rehberinde bulabilirsiniz.
      </p>

      <h2>Kuyumcudan kuyumcuya neden fark var?</h2>
      <ul>
        <li><strong>Stok maliyeti:</strong> Kuyumcu, vitrindeki çeyreği aldığı günün fiyatından finanse etmiştir.</li>
        <li><strong>Makas politikası:</strong> Her işletme fiyat riskine karşı farklı genişlikte makas tutar.</li>
        <li><strong>Rekabet:</strong> Kuyumcuların yoğun olduğu bölgelerde fiyatlar referansa daha yakın seyredebilir.</li>
        <li><strong>Ürün türü:</strong> Ziynet çeyrek ile Ata çeyreğin ağırlığı ve fiyatı farklıdır; hangisinin söylendiğinden emin olun.</li>
      </ul>
      <p>
        Denizli&apos;de kuyumcuların yoğunlaştığı bölgeleri{" "}
        <Link href="/kuyumcular">Denizli kuyumcuları</Link> sayfasında
        bulabilirsiniz. Referans fiyat ile yerel fiyatlar arasındaki ilişkiyi
        de{" "}
        <Link href="/rehber/kapalicarsi-altin-fiyatlari">
          Kapalıçarşı altın fiyatları
        </Link>{" "}
        rehberinde anlattık.
      </p>

      <h2>Çeyrek mi, gram altın mı?</h2>
      <table>
        <thead>
          <tr>
            <th>Amacınız</th>
            <th>Genellikle daha uygun</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Düğün, nişan, doğum hediyesi</td><td>Çeyrek altın</td></tr>
          <tr><td>Düzenli küçük birikim</td><td>Gram altın</td></tr>
          <tr><td>Kısa vadede alıp satmak</td><td>Gram altın (makas daha dar)</td></tr>
          <tr><td>Kolay bozdurulabilir hediye</td><td>Çeyrek altın</td></tr>
        </tbody>
      </table>
      <p>
        Gram altının özelliklerini{" "}
        <Link href="/rehber/gram-altin-nedir">gram altın nedir</Link>{" "}
        rehberinde ele aldık. Birden fazla çeyrek ya da karışık bir takı
        listesinin toplam tutarını anasayfadaki hesaplama aracıyla güncel
        fiyatlardan hesaplayabilirsiniz.
      </p>
    </GuideArticle>
  );
}
