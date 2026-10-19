import type { Metadata } from "next";
import Link from "next/link";
import GuideArticle from "@/components/GuideArticle";
import kuyumcuImg from "@/images/rehber/kuyumcu.jpg";

export const metadata: Metadata = {
  title: "22 Ayar Bilezik Bozdurma Hesabı ve Kesintiler",
  description:
    "22 ayar bilezik bozdururken ne kadar alırsınız? Hurda altın mantığı, bozdurma formülü, dara ve işçilik kesintileri ve örnek hesap.",
  alternates: { canonical: "/rehber/22-ayar-bilezik-bozdurma" },
  openGraph: { images: [{ url: kuyumcuImg.src, width: 1600, height: 900 }] },
};

export default function Page() {
  return (
    <GuideArticle
      title="22 Ayar Bilezik Bozdurma Hesabı"
      intro="22 ayar bileziği bozdururken kuyumcu, bileziği takı olarak değil hurda altın olarak değerlendirir ve net gramajı 22 ayar alış fiyatıyla çarpar. Alırken ödediğiniz işçilik ve alış-satış farkı geri dönmez. Bu rehber, alacağınız tutarı bozdurmadan önce kendiniz hesaplayabilmeniz için yazıldı."
      updated="Ekim 2026"
      datePublished="2026-10-19"
      slug="22-ayar-bilezik-bozdurma"
      image={{ src: kuyumcuImg, alt: "Kuyumcuda tezgâha altın bilezikler yerleştiren eller", credit: "Fotoğraf: Pexels" }}
      faq={[
        {
          question: "Faturası olmayan 22 ayar bilezik bozdurulabilir mi?",
          answer:
            "Evet. Fatura, bileziğin altın değerini değiştirmez; kuyumcu ayar damgasına ve gerekirse yaptığı ayar testine bakarak işlem yapar. Kuyumcu, alım sırasında kimlik bilgisi isteyip belge düzenleyebilir; bu olağan bir uygulamadır.",
        },
        {
          question: "Kırık veya eğilmiş bileziğin bozdurma fiyatı düşer mi?",
          answer:
            "Genellikle düşmez. Bozdurulan bilezik eritileceği için kırık, ezik veya eğilmiş olması altın değerini değiştirmez; önemli olan net gramaj ve ayardır. Taş, mine veya çelik yay gibi altın olmayan parçalar ise gramajdan düşülür.",
        },
        {
          question: "Bozdurma bedeli nakit mi ödenir, bankaya mı yatırılır?",
          answer:
            "Yüksek tutarlı işlemlerde banka veya havale/FAST yoluyla ödeme yapılması istenebilir; nakit ödeme için mevzuatta tutar sınırlamaları bulunabilir ve güncel limitler zamanla değişir. İşlem öncesinde ödeme yöntemini kuyumcuyla netleştirin.",
        },
        {
          question: "Bileziği bozdurmak yerine başka bir ürüne çevirmek mümkün mü?",
          answer:
            "Evet. Birçok kuyumcu eski bileziğin altın değerini yeni ürünün fiyatından düşer (takas). Bu durumda eski bileziğin hangi fiyattan alındığını yazılı olarak netleştirin.",
        },
      ]}
      related={[
        { href: "/rehber/kuyumcuda-altin-bozdururken-dikkat", title: "Kuyumcuda altın bozdururken nelere dikkat edilmeli?" },
        { href: "/rehber/14-ayar-altin-bozdurma-hesabi", title: "14 ayar altın bozdurma hesabı" },
        { href: "/rehber/isciliksiz-bilezik-modelleri", title: "İşçiliksiz bilezik nedir?" },
        { href: "/rehber/altin-alirken-fatura", title: "Altın alırken fatura alınmalı mı?" },
      ]}
    >
      <h2>Bozdurma nasıl hesaplanır?</h2>
      <p>
        Kuyumcu bozdurulan bileziği ikinci el ürün olarak vitrine koymaz;
        genellikle eritilmek üzere &quot;hurda altın&quot; olarak alır. Bu
        yüzden fiyatı belirleyen tek şey bileziğin net gramajı ve ayarıdır.
      </p>
      <p>
        <strong>
          Alacağınız tutar ≈ Net gramaj × 22 ayar alış fiyatı − varsa kesintiler
        </strong>
      </p>
      <p>
        22 ayar alış fiyatını bilmiyorsanız yaklaşık bir değer için 24 ayar
        gram altın <em>alış</em> fiyatını 0,916 ile çarpabilirsiniz. Güncel{" "}
        <Link href="/altin/22-ayar-bilezik">22 ayar bilezik</Link> ve{" "}
        <Link href="/altin/gram-altin">gram altın</Link> fiyatlarını
        sayfalarımızdan takip edebilirsiniz.
      </p>

      <h2>Örnek hesap</h2>
      <p>Varsayımsal rakamlarla:</p>
      <ul>
        <li>Bileziğin tartıdaki ağırlığı: 20 gram</li>
        <li>Bileziğin üzerindeki çelik yay ve küçük taş: toplam 0,5 gram</li>
        <li>22 ayar alış fiyatı: 6.000 TL</li>
      </ul>
      <p>
        Net gramaj = 20 − 0,5 = 19,5 gram
        <br />
        Karşılık = 19,5 × 6.000 = <strong>117.000 TL</strong>
      </p>
      <p>
        Bu bileziği aynı gün 22 ayar satış fiyatı 6.150 TL iken 20 gram
        üzerinden aldıysanız ve işçilik 3.000 TL idiyse, ödediğiniz tutar
        yaklaşık 126.000 TL olurdu. Aradaki yaklaşık 9.000 TL fark, işçilik,
        dara ve alış-satış farkından oluşur. Bu örnek yalnızca hesabı
        göstermek içindir; gerçek rakamlar günün fiyatına ve kuyumcuya göre
        değişir.
      </p>

      <h2>Bozdururken hangi kesintiler olabilir?</h2>
      <ol>
        <li>
          <strong>Dara:</strong> Bileziğin üzerinde taş, mine, kilit yayı veya
          çelik bir parça varsa bunların ağırlığı gramajdan düşülür. Taşsız,
          düz bir bilezikte dara beklememelisiniz.
        </li>
        <li>
          <strong>İşçilik:</strong> Alırken ödediğiniz işçilik geri dönmez.
          Düz modellerde bu pay küçük, yoğun desenli ve taşlı modellerde
          büyüktür. Hangi modelde ne kadar işçilik olduğunu{" "}
          <Link href="/rehber/isciliksiz-bilezik-modelleri">
            işçiliksiz bilezik rehberinde
          </Link>{" "}
          anlattık.
        </li>
        <li>
          <strong>Ayar kontrolü:</strong> Damgası silinmiş veya şüpheli
          bileziklerde kuyumcu ayar testi yapabilir. Sonuç 916&apos;nın
          altındaysa fiyat buna göre belirlenir.
        </li>
        <li>
          <strong>Alış-satış farkı (makas):</strong> Kuyumcu alış fiyatını,
          satış fiyatından düşük tutar. Bu fark işletmeden işletmeye değişir.
        </li>
      </ol>

      <h2>Bozdurmadan önce yapılacaklar</h2>
      <ol>
        <li>
          <strong>Güncel fiyatı not edin:</strong> Gitmeden önce 22 ayar veya
          gram altın <em>alış</em> fiyatına bakın; tezgâhtaki rakamı bununla
          kıyaslayın.
        </li>
        <li>
          <strong>Tartıyı izleyin:</strong> Tartının sıfırlandığını ve
          bileziğin ağırlığını görün.
        </li>
        <li>
          <strong>Birden fazla kuyumcuya sorun:</strong> Aynı bileziğe
          verilen teklifler arasında fark olabilir. Şehirdeki işletmelere{" "}
          <Link href="/kuyumcular">kuyumcular sayfasından</Link> ulaşabilirsiniz.
        </li>
        <li>
          <strong>Net rakamı yazılı isteyin:</strong> Tutar, gramaj ve varsa
          dara bilgisi fişte yazsın.
        </li>
      </ol>
      <p>
        Acil nakit ihtiyacınız yoksa bozdurma zamanlaması da önemlidir; fiyatın
        o gün düşük olması elinize geçen tutarı etkiler. Genel kontrol
        listesi için{" "}
        <Link href="/rehber/kuyumcuda-altin-bozdururken-dikkat">
          altın bozdururken dikkat edilecekler
        </Link>{" "}
        rehberine bakın.
      </p>
    </GuideArticle>
  );
}
