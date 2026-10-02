import type { Metadata } from "next";
import Link from "next/link";
import GuideArticle from "@/components/GuideArticle";
import bilezikImg from "@/images/rehber/bilezik.jpg";

export const metadata: Metadata = {
  title: "Ajda Bilezik Nedir? Ayarı, Gramajı ve Fiyatı",
  description:
    "Ajda bilezik nedir, kaç ayar olur, neden birikim için tercih edilir? Gramaja göre ajda bilezik fiyatı hesaplama, işçilik, bozdurma ve alırken dikkat edilecekler.",
  alternates: { canonical: "/rehber/ajda-bilezik" },
  openGraph: { images: [{ url: bilezikImg.src, width: 1600, height: 900 }] },
};

export default function Page() {
  return (
    <GuideArticle
      title="Ajda Bilezik Nedir?"
      intro="Ajda bilezik, Türkiye'de en yaygın 22 ayar bilezik modellerinden biridir. Sade tasarımı, yoğun desenli modellere göre daha az işçilik gerektirdiği için hem takı hem de birikim amacıyla tercih edilir. Fiyatı; bileziğin gramajı, 22 ayar altının gram fiyatı ve kuyumcunun işçilik payıyla hesaplanır."
      updated="Ekim 2026"
      datePublished="2026-10-01"
      slug="ajda-bilezik"
      image={{ src: bilezikImg, alt: "Koyu zemin üzerinde işlemeli altın bilezikler", credit: "Fotoğraf: Pexels" }}
      faq={[
        {
          question: "Ajda bilezik kaç gram olur?",
          answer:
            "Ajda bilezikler farklı kalınlık ve genişliklerde üretildiği için tek bir standart gramajı yoktur. Bileziğin gerçek ağırlığını kuyumcuda tartıda görerek öğrenin ve faturaya yazdırın. Fiyat hesabının temeli bu gramajdır.",
        },
        {
          question: "Ajda bilezik bozdururken işçilik geri alınır mı?",
          answer:
            "Hayır. Bozdururken kuyumcu yalnızca bileziğin içindeki altının değerini, 22 ayar altının o anki alış fiyatı üzerinden öder. Alırken ödediğiniz işçilik geri dönmez. Ajda bileziğin birikim için tercih edilmesinin bir nedeni, bu işçilik payının desenli modellere göre genellikle düşük olmasıdır.",
        },
        {
          question: "Ajda bilezik 14 ayar olur mu?",
          answer:
            "Ajda bilezik piyasada çoğunlukla 22 ayar olarak satılır. Farklı ayarda üretilmiş benzer modeller de bulunabileceği için satın alırken bileziğin üzerindeki ayar damgasını (22 ayar için 916) mutlaka kontrol edin.",
        },
      ]}
      related={[
        { href: "/rehber/22-ayar-bilezik-hesaplama", title: "22 ayar bilezik hesaplama" },
        { href: "/rehber/bilezikte-iscilik-hesaplama", title: "Bilezikte işçilik nasıl hesaplanır?" },
        { href: "/rehber/dugunde-hangi-altinlar-takilir", title: "Düğünde hangi altınlar takılır?" },
      ]}
    >
      <h2>Ajda bilezik nedir?</h2>
      <p>
        Ajda bilezik, Türkiye&apos;deki kuyumcularda en sık karşılaşılan klasik
        bilezik modellerinden biridir. Adının, modeli yıllar önce popüler hâle
        getirdiği anlatılan şarkıcı Ajda Pekkan&apos;dan geldiği yaygın olarak
        söylenir. Düğünlerde takılan, anneden kıza aktarılan ve birikim için
        alınan bileziklerin önemli bir kısmı bu modeldir.
      </p>
      <p>
        Ajda bileziği diğerlerinden ayıran, yoğun desen ve el işçiliği yerine
        sade bir tasarıma sahip olmasıdır. Bu sadelik iki sonuç doğurur: üretimi
        daha az işçilik gerektirir ve bileziğin fiyatının büyük kısmı içindeki
        altının değerinden oluşur.
      </p>

      <h2>Ajda bilezik kaç ayardır?</h2>
      <p>
        Ajda bilezik çoğunlukla <strong>22 ayar</strong> olarak üretilir. 22 ayar
        altın binde 916 saflıktadır, yani bileziğin ağırlığının yaklaşık yüzde
        91,6&apos;sı saf altındır. Geri kalan kısım, bileziğin günlük kullanıma
        dayanması için eklenen alaşım metalleridir; 24 ayar altın bilezik
        yapılamayacak kadar yumuşaktır.
      </p>
      <p>
        Bileziğin iç yüzeyinde ya da kilit kısmında <strong>916</strong> veya{" "}
        <strong>22K</strong> damgası bulunmalıdır. Ayarın ne anlama geldiğini{" "}
        <Link href="/rehber/altin-ayari-nedir">altın ayarı rehberinde</Link>{" "}
        anlattık.
      </p>

      <h2>Neden birikim için tercih edilir?</h2>
      <p>
        Bir bileziği alırken iki şeyin bedelini ödersiniz: içindeki
        altının değeri ve işçilik. Bozdururken ise kuyumcu yalnızca{" "}
        <strong>altının değerini</strong> öder; işçilik geri dönmez. Bu yüzden
        işçiliği yüksek, yoğun desenli bir bilezik birikim için daha pahalıya
        gelir.
      </p>
      <p>
        Ajda bilezikte işçilik payı, el işçiliği yoğun modellere göre
        genellikle düşüktür. Bu da onu &quot;hem takılır hem birikir&quot;
        türünden bir ürün yapar. Yine de işçilik sıfır değildir; saf birikim
        amacıyla bakıyorsanız işçiliği en düşük ürün{" "}
        <Link href="/rehber/gram-altin-nedir">gram altındır</Link>.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Ajda bilezik</th>
            <th>Yoğun desenli bilezik</th>
            <th>Gram altın</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Ayar</td><td>22 (916)</td><td>22 (916)</td><td>24 (995 / 999,9)</td></tr>
          <tr><td>İşçilik</td><td>Genellikle düşük</td><td>Yüksek</td><td>Çok düşük</td></tr>
          <tr><td>Bozdururken kayıp</td><td>Orta</td><td>Yüksek</td><td>Düşük</td></tr>
          <tr><td>Takı olarak kullanım</td><td>Evet</td><td>Evet</td><td>Hayır</td></tr>
        </tbody>
      </table>

      <h2>Ajda bilezik fiyatı nasıl hesaplanır?</h2>
      <p>
        Hesap iki adımdan oluşur: bileziğin altın değeri ve işçilik.
      </p>
      <p>
        <strong>Ajda bilezik fiyatı = (22 ayar gram fiyatı × gramaj) + işçilik</strong>
      </p>
      <p>
        22 ayar gram fiyatını bilmiyorsanız, 24 ayar gram altın fiyatından da
        yola çıkabilirsiniz: <strong>gram altın × 0,916</strong>. Piyasa
        fiyatları da bu oranı yansıtır; 1 Ekim 2026 verisinde 22 ayar bilezik
        için ilan edilen gram fiyatı, 24 ayar gram altın satış fiyatının
        yaklaşık 0,91 katıydı.
      </p>
      <p>
        Aşağıdaki tabloda rakamlar yalnızca mantığı göstermek içindir. 22 ayar
        gram fiyatını 6.000 TL, işçiliği altın değerinin %3&apos;ü olarak
        varsayıyoruz:
      </p>
      <table>
        <thead>
          <tr>
            <th>Gramaj</th>
            <th>Altın değeri</th>
            <th>İşçilik (%3)</th>
            <th>Toplam</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>10 g</td><td>60.000 TL</td><td>1.800 TL</td><td>61.800 TL</td></tr>
          <tr><td>15 g</td><td>90.000 TL</td><td>2.700 TL</td><td>92.700 TL</td></tr>
          <tr><td>20 g</td><td>120.000 TL</td><td>3.600 TL</td><td>123.600 TL</td></tr>
        </tbody>
      </table>
      <p>
        Kuyumcular işçiliği yüzde olarak, gram başına sabit tutar olarak ya da
        bilezik başına alabilir. Hangi yöntemin size ne kadara mal olduğunu{" "}
        <Link href="/rehber/bilezikte-iscilik-hesaplama">
          bilezikte işçilik hesaplama
        </Link>{" "}
        rehberinde karşılaştırdık. Formülün ayrıntılı hâli için de{" "}
        <Link href="/rehber/22-ayar-bilezik-hesaplama">
          22 ayar bilezik hesaplama
        </Link>{" "}
        rehberine bakabilirsiniz.
      </p>

      <h2>Bozdururken ne kadar alırsınız?</h2>
      <p>
        Bozdururken kuyumcu, bileziğin gramajını 22 ayar altının o anki{" "}
        <strong>alış</strong> fiyatıyla çarpar. Yukarıdaki 15 gramlık örneği
        aynı gün bozdurduğunuzu, 22 ayar alış fiyatının da 5.900 TL olduğunu
        düşünün:
      </p>
      <ul>
        <li>Alırken ödediğiniz: 92.700 TL</li>
        <li>Bozdururken aldığınız: 15 × 5.900 = 88.500 TL</li>
        <li>
          Fark: 4.200 TL (2.700 TL işçilik + 1.500 TL alış-satış farkı)
        </li>
      </ul>
      <p>
        Bu fark, bileziğin kâra geçmesi için altın fiyatının ne kadar
        yükselmesi gerektiğini gösterir. Bozdurma sürecinde dikkat edilecekleri{" "}
        <Link href="/rehber/kuyumcuda-altin-bozdururken-dikkat">
          altın bozdururken dikkat edilecekler
        </Link>{" "}
        rehberinde topladık.
      </p>

      <h2>Ajda bilezik alırken kontrol listesi</h2>
      <ol>
        <li><strong>Ayar damgası:</strong> 916 veya 22K damgasını arayın.</li>
        <li><strong>Tartı:</strong> Gramajı kendi gözünüzle görün.</li>
        <li><strong>Gram fiyatı ve işçiliği ayrı sorun:</strong> Toplam fiyat karşılaştırmayı zorlaştırır.</li>
        <li><strong>Sağlamlık:</strong> Çatlak, lehim izi veya ezik olmamalı.</li>
        <li><strong>Ölçü:</strong> Bileğinize rahat girip çıktığından emin olun; ölçü değişikliği ek işçilik gerektirir.</li>
        <li>
          <strong>Fatura:</strong> Gramaj, ayar ve işçilik faturada ayrı ayrı
          yazmalı. Nedenini{" "}
          <Link href="/rehber/altin-alirken-fatura">bu rehberde</Link>{" "}
          açıkladık.
        </li>
      </ol>
      <p>
        Güncel <Link href="/altin/22-ayar-bilezik">22 ayar bilezik fiyatını</Link>{" "}
        sayfamızda canlı olarak görebilirsiniz. Veriler kaynağında piyasa
        açıkken yaklaşık 15 dakikada bir güncellenir; Denizli&apos;deki kuyumcular
        bu referansa işçilik ve kâr paylarını ekler.
      </p>
    </GuideArticle>
  );
}
