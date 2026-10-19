import type { Metadata } from "next";
import Link from "next/link";
import GuideArticle from "@/components/GuideArticle";
import alyansImg from "@/images/rehber/alyans.jpg";

export const metadata: Metadata = {
  title: "Düğün Takı Seti Seçimi: 14 mü 22 Ayar mı?",
  description:
    "Düğün takı seti nasıl seçilir? 14 ayar ve 22 ayar set farkı, bütçe planı, bozdurma kaybı ve set alırken kuyumcuya sorulacak sorular.",
  alternates: { canonical: "/rehber/dugun-taki-seti-secimi" },
  openGraph: { images: [{ url: alyansImg.src, width: 1600, height: 900 }] },
};

export default function Page() {
  return (
    <GuideArticle
      title="Düğün Takı Seti Nasıl Seçilir?"
      intro="Düğün takı seti seçiminde asıl soru, setin 'görünüm için mi' yoksa 'birikim için mi' alındığıdır. 22 ayar setler geleneksel ve altın değeri yüksek, 14 ayar taşlı setler ise modern ve daha uygun fiyatlıdır; ama bozdururken işçilik ve taş bedeli geri dönmez. Bu rehber, bütçeyi bu fark üzerinden planlamanıza yardımcı olur."
      updated="Ekim 2026"
      datePublished="2026-10-19"
      slug="dugun-taki-seti-secimi"
      image={{ src: alyansImg, alt: "Mermer yüzey üzerinde iki altın alyans", credit: "Fotoğraf: Pexels" }}
      faq={[
        {
          question: "Düğün setinin 22 ayar olması şart mı?",
          answer:
            "Hayır. Tamamen bütçeye ve ailelerin tercihine bağlıdır. Birçok çift görünümü ön planda tutup seti 14 ayar seçer, birikim amacıyla da ayrıca 22 ayar bilezik veya gram altın alır.",
        },
        {
          question: "Taşlı seti bozdurursam taşların bedeli geri gelir mi?",
          answer:
            "Genellikle gelmez. Kuyumcu bozdurmada yalnızca altının değerini öder; zirkon gibi taşların ağırlığı gramajdan düşülür, taş ve işçilik bedeli geri dönmez. Pırlanta gibi değerli taşlar için ayrı bir değerleme gerekir.",
        },
        {
          question: "Setin değeri zamanla korunur mu?",
          answer:
            "Setin içindeki altının değeri altın fiyatıyla birlikte değişir; fiyat yükselebileceği gibi düşebilir de. Değerin korunacağı garanti edilemez. Yalnızca işçilik ve taş bedelinin bozdururken geri dönmeyeceği kesindir.",
        },
        {
          question: "Set almak için ne zaman gitmeliyim?",
          answer:
            "Düğün tarihine yakın bir döneme sıkışmamak için birkaç hafta önceden fiyat takibi yapıp farklı kuyumculardan teklif almak faydalıdır. Modeller siparişle hazırlanıyorsa teslim süresini ve ölçü değişikliği koşullarını da sorun.",
        },
      ]}
      related={[
        { href: "/rehber/14-ayar-22-ayar-altin-farki", title: "14 ayar mı 22 ayar mı?" },
        { href: "/rehber/dugunde-hangi-altinlar-takilir", title: "Düğünde hangi altınlar takılır?" },
        { href: "/rehber/ajda-bilezik", title: "Ajda bilezik nedir?" },
        { href: "/rehber/nisanda-ne-takilir", title: "Nişanda ne takılır?" },
      ]}
    >
      <h2>Takı seti neleri kapsar?</h2>
      <p>
        Düğün takı seti genellikle bir gerdanlık (kolye), küpe, bileklik veya
        bilezik ve yüzükten oluşur. Kuyumcular setleri hazır parçalar olarak
        sunabilir ya da isteğe göre parça parça birleştirebilir. Alyans genellikle
        ayrı alınır; seçimi için{" "}
        <Link href="/rehber/alyans-rehberi">alyans rehberine</Link> bakabilirsiniz.
      </p>

      <h2>22 ayar mı 14 ayar mı?</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>22 ayar set</th>
            <th>14 ayar taşlı set</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Görünüm</td><td>Koyu sarı, klasik, dolgun</td><td>Sarı, beyaz veya rose; taşlı, parlak</td></tr>
          <tr><td>Altın oranı</td><td>%91,6</td><td>%58,5</td></tr>
          <tr><td>Fiyat</td><td>Aynı gramajda daha yüksek</td><td>Aynı gramajda daha uygun</td></tr>
          <tr><td>Dayanıklılık</td><td>Daha yumuşak</td><td>Daha sert, taşı iyi tutar</td></tr>
          <tr><td>Bozdururken</td><td>Altın değeri geri döner</td><td>Altın oranı düşük; taş ve işçilik geri dönmez</td></tr>
          <tr><td>Daha çok tercih edilen</td><td>Geleneksel, birikim odaklı</td><td>Modern, görünüm odaklı</td></tr>
        </tbody>
      </table>
      <p>
        İki ayarın farkını, saf altın oranlarıyla birlikte{" "}
        <Link href="/rehber/14-ayar-22-ayar-altin-farki">
          14 ayar mı 22 ayar mı
        </Link>{" "}
        rehberinde ayrıntılı açıkladık.
      </p>

      <h2>Bütçeyi nasıl dağıtabilirsiniz?</h2>
      <p>
        Birçok aile, harcamayı iki amaca ayırır: düğün günü iyi görünen bir
        parça ve uzun vadede altın değerini taşıyan parçalar.
      </p>
      <ol>
        <li>
          <strong>Görünüm için:</strong> Gelinlikle uyum sağlayan, taşlı ve
          modern bir 14 ayar gerdanlık-küpe takımı.
        </li>
        <li>
          <strong>Birikim için:</strong> 22 ayar bilezikler — örneğin{" "}
          <Link href="/rehber/ajda-bilezik">ajda</Link> veya{" "}
          <Link href="/rehber/burma-bilezik">burma</Link> modelleri — ya da
          <Link href="/rehber/gram-altin-nedir"> gram altın</Link>.
        </li>
      </ol>
      <p>
        Bu yalnızca bir yaklaşımdır, kural değildir. Hangi kalemin görünüm,
        hangisinin birikim olduğunu ve her birinde ne kadar işçilik ödediğinizi
        baştan bilirseniz bozdurmada sürpriz yaşamazsınız. Toplam maliyeti güncel
        fiyatlarla{" "}
        <Link href="/#hesaplama">hesaplama aracımızdan</Link> önceden
        görebilirsiniz.
      </p>

      <h2>Set alırken kuyumcuya sorulacaklar</h2>
      <ul>
        <li>Setin ayarı ve her parçanın gramajı nedir?</li>
        <li>Gram fiyatı ve işçilik ayrı ayrı ne kadar?</li>
        <li>Taşlar nedir (zirkon, pırlanta vb.) ve düşmesi halinde ne yapılıyor?</li>
        <li>Ölçü değişikliği veya değişim/iade koşulları nelerdir (yazılı olarak)?</li>
        <li>Fatura gramaj, ayar ve taş bilgisini içeriyor mu?</li>
      </ul>
      <p>
        Faturanın neden önemli olduğunu{" "}
        <Link href="/rehber/altin-alirken-fatura">ayrı bir rehberde</Link>{" "}
        anlattık. Düğünde hangi yakınlık derecesinin neler taktığı için{" "}
        <Link href="/rehber/dugunde-hangi-altinlar-takilir">
          düğünde hangi altınlar takılır
        </Link>{" "}
        rehberine, şehirdeki işletmeler için{" "}
        <Link href="/kuyumcular">Denizli kuyumcuları</Link> sayfasına bakın.
      </p>
    </GuideArticle>
  );
}
