import type { Metadata } from "next";
import Link from "next/link";
import GuideArticle from "@/components/GuideArticle";
import kuyumcuImg from "@/images/rehber/kuyumcu.jpg";

export const metadata: Metadata = {
  title: "Denizli Altın Borsası: Serbest Piyasa Rehberi",
  description:
    "Denizli'de resmî bir altın borsası var mı? Serbest piyasa nasıl işler, ekran fiyatı ile kuyumcu vitrin fiyatı neden farklı olur?",
  alternates: { canonical: "/rehber/denizli-altin-borsasi" },
  openGraph: { images: [{ url: kuyumcuImg.src, width: 1600, height: 900 }] },
};

export default function Page() {
  return (
    <GuideArticle
      title="Denizli Altın Borsası Var mı?"
      intro="Denizli'de resmî bir altın borsası yoktur. Halk arasında 'Denizli altın borsası' denince kastedilen, şehirdeki kuyumcu ve sarrafların İstanbul'daki serbest piyasa fiyatını referans alarak yaptığı fiziki altın alım-satımıdır. Bu rehber, o piyasanın nasıl işlediğini ve ekrandaki fiyatla tezgâh fiyatının neden farklı olabildiğini anlatır."
      updated="Ekim 2026"
      datePublished="2026-10-19"
      slug="denizli-altin-borsasi"
      image={{ src: kuyumcuImg, alt: "Kuyumcuda tezgâha altın bilezikler yerleştiren eller", credit: "Fotoğraf: Pexels" }}
      faq={[
        {
          question: "Denizli'de resmî bir altın borsası var mı?",
          answer:
            "Hayır. Türkiye'de kurumsal kıymetli maden alım-satımı Borsa İstanbul'da yapılır. Denizli'deki 'altın borsası' ifadesi, yerel kuyumcu ve sarrafların serbest piyasa fiyatına göre yaptığı fiziki alım-satımı anlatan gündelik bir kullanımdır.",
        },
        {
          question: "Kuyumcular kaçta açılıp kaçta kapanır?",
          answer:
            "Çalışma saatleri işletmeden işletmeye değişir ve ortak bir borsa mesaisi yoktur. Önemli bir işlem yapacaksanız gitmeden önce ilgili kuyumcuyu arayıp çalışma saatini sorun.",
        },
        {
          question: "Hafta sonu altın fiyatı değişir mi?",
          answer:
            "Uluslararası altın piyasaları hafta sonu kapalıdır; yeni fiyat oluşmaz. Hafta sonu işlem yapan bir kuyumcu, fiyatı genellikle son kapanışa göre verir ve belirsizlik için kendi payını ekleyebilir. Bu pay işletmeye göre değiştiğinden pazartesi fiyatıyla karşılaştırma yapmak faydalıdır.",
        },
        {
          question: "Serbest piyasada pazarlık yapılır mı?",
          answer:
            "Gram altın ve çeyrek gibi standart ürünlerde alış-satış fiyatı çoğunlukla belirlidir; pazarlık payı sınırlıdır. Yüksek gramajlı alımlarda ve işçilik payının ayrıca belirlendiği takılarda indirim konuşulabilir.",
        },
      ]}
      related={[
        { href: "/rehber/kapalicarsi-altin-fiyatlari", title: "Kapalıçarşı altın fiyatları nedir?" },
        { href: "/rehber/altin-kuru-nedir", title: "Altın kuru nedir?" },
        { href: "/rehber/altin-fiyatlari-neden-degisir", title: "Altın fiyatları neden değişir?" },
      ]}
    >
      <h2>&quot;Denizli altın borsası&quot; ne demek?</h2>
      <p>
        Borsa, alıcı ve satıcıların düzenlenmiş bir platformda belirli kurallarla
        işlem yaptığı yerdir. Türkiye&apos;de kıymetli madenlerin kurumsal
        işlem gördüğü piyasa Borsa İstanbul bünyesindedir. Denizli&apos;de bu
        anlamda bir borsa yoktur.
      </p>
      <p>
        Gündelik dilde &quot;altın borsası&quot; ise bireylerin altın alıp sattığı
        serbest piyasayı anlatır. Denizli&apos;de bu piyasa, şehir merkezindeki
        — özellikle Bayramyeri çevresindeki — kuyumcu ve sarrafların
        tezgâhlarında işler. Bu işletmeler fiyatlarını kendileri
        belirlemez; İstanbul&apos;daki serbest piyasa fiyatını referans alır ve
        üzerine kendi maliyetlerini ekler.
      </p>

      <h2>Fiyat Denizli&apos;ye nasıl ulaşır?</h2>
      <ol>
        <li>
          Uluslararası piyasada <Link href="/altin/ons-altin">ons altın</Link>{" "}
          fiyatı oluşur.
        </li>
        <li>
          Bu fiyat <Link href="/doviz/dolar">dolar/TL kuruyla</Link> çarpılıp
          gram başına çevrilir; yurt içi arz-talep dengesiyle serbest piyasa
          fiyatı oluşur. İstanbul&apos;daki bu referans için{" "}
          <Link href="/rehber/kapalicarsi-altin-fiyatlari">
            Kapalıçarşı rehberine
          </Link>{" "}
          bakabilirsiniz.
        </li>
        <li>
          Denizli&apos;deki kuyumcu bu referansa işçilik, taşıma, stok maliyeti
          ve kâr payını ekleyerek tezgâh fiyatını verir.
        </li>
      </ol>
      <p>
        Sitemizdeki fiyatlar da bu zincirin sonunda, finans veri
        sağlayıcılarından alınır. Veriler kaynağında piyasa açıkken yaklaşık 15
        dakikada bir güncellenir, yani anlık işlem fiyatı değildir; kesin
        alım-satım fiyatı için kuyumcunuza sormalısınız.
      </p>

      <h2>Ekran fiyatı ile vitrin fiyatı neden farklı?</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Finans sitesi / ekran fiyatı</th>
            <th>Kuyumcu tezgâh fiyatı</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Ne gösterir?</td><td>Referans (gösterge) fiyat</td><td>Fiilen işlem yapılan fiyat</td></tr>
          <tr><td>Teslimat</td><td>Yok, sadece bilgi</td><td>Fiziki ürün teslimi</td></tr>
          <tr><td>Alış ve satış farkı</td><td>Genellikle dar gösterilir</td><td>İşletmeye göre değişen makas</td></tr>
          <tr><td>Ek kalemler</td><td>Yok</td><td>İşçilik, basım primi, taşıma, kâr payı</td></tr>
          <tr><td>Gecikme</td><td>Kaynağa göre değişebilir</td><td>Kuyumcu kendi güncel kaynağına bakar</td></tr>
        </tbody>
      </table>
      <p>
        Bu fark çoğu zaman küçüktür ve gram altında en dardır. Altın kuru
        kavramını ve kuyumcu ile banka fiyatı arasındaki farkı{" "}
        <Link href="/rehber/altin-kuru-nedir">altın kuru nedir</Link>{" "}
        rehberinde ayrıntılı anlattık.
      </p>

      <h2>Serbest piyasada hangi altınlar işlem görür?</h2>
      <ul>
        <li>
          <strong>Külçe ve gram altın:</strong> İşçiliği en düşük, en çok
          birikim amacıyla tercih edilen ürün. Ayrıntı:{" "}
          <Link href="/rehber/gram-altin-nedir">gram altın nedir</Link>.
        </li>
        <li>
          <strong>Ziynet altınlar:</strong>{" "}
          <Link href="/altin/ceyrek-altin">Çeyrek</Link>,{" "}
          <Link href="/altin/yarim-altin">yarım</Link> ve{" "}
          <Link href="/altin/tam-altin">tam altın</Link> ile Cumhuriyet altını;
          düğün ve hediyelerde yaygındır.
        </li>
        <li>
          <strong>Bilezik ve takılar:</strong> Çoğunlukla 22 ayar bilezikler;
          fiyatın bir bölümü işçilikten oluşur.
        </li>
        <li>
          <strong>Hurda (ikinci el) altın:</strong> Bozdurulan takılar; kuyumcu
          bunları takı olarak değil, içindeki altının değeri üzerinden alır.
        </li>
      </ul>

      <h2>Yerel talep fiyatı etkiler mi?</h2>
      <p>
        Fiyatın ana belirleyicisi küresel piyasadır; Denizli&apos;ye özgü bir
        fiyat oluşmaz. Buna rağmen düğün sezonu gibi dönemlerde ziynet altın ve
        bilezik talebi artabilir, bu da kuyumcuların stok maliyetini ve
        verdikleri fiyatı küçük ölçüde etkileyebilir. Etkenlerin tamamı için{" "}
        <Link href="/rehber/altin-fiyatlari-neden-degisir">
          altın fiyatları neden değişir
        </Link>{" "}
        rehberine bakın.
      </p>

      <h2>Denizli&apos;de alım-satım yaparken</h2>
      <ul>
        <li>
          Gitmeden önce{" "}
          <Link href="/altin/gram-altin">güncel gram altın fiyatını</Link> not
          edin; tezgâh fiyatını bununla kıyaslayın.
        </li>
        <li>Alış ve satış fiyatını ayrı ayrı sorun; fark makastır.</li>
        <li>Mümkünse birden fazla kuyumcudan fiyat alın.</li>
        <li>
          Faturalı alışveriş yapın;{" "}
          <Link href="/rehber/altin-alirken-fatura">neden önemli olduğunu</Link>{" "}
          ayrıca anlattık.
        </li>
        <li>
          Şehirdeki işletmelere{" "}
          <Link href="/kuyumcular">Denizli kuyumcuları</Link> sayfasından
          ulaşabilirsiniz.
        </li>
      </ul>
    </GuideArticle>
  );
}
