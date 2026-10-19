import type { Metadata } from "next";
import Link from "next/link";
import GuideArticle from "@/components/GuideArticle";
import bilezikImg from "@/images/rehber/bilezik.jpg";

export const metadata: Metadata = {
  title: "Burma Bilezik Nedir? Çeşitleri ve Fiyat Hesabı",
  description:
    "Burma bilezik nedir, ikili ve üçlü burma arasındaki fark ne? Fiyat hesabı, işçilik, bozdurma ve alırken dikkat edilecekler.",
  alternates: { canonical: "/rehber/burma-bilezik" },
  openGraph: { images: [{ url: bilezikImg.src, width: 1600, height: 900 }] },
};

export default function Page() {
  return (
    <GuideArticle
      title="Burma Bilezik Nedir?"
      intro="Burma bilezik, altın tellerin burularak veya örülerek şekillendirildiği klasik bilezik modelidir. Türkiye'de çoğunlukla 22 ayar olarak satılır ve düğün takılarında yaygındır. Fiyatı; bileziğin gramajı, 22 ayar altının gram fiyatı ve kuyumcunun işçilik payıyla belirlenir."
      updated="Ekim 2026"
      datePublished="2026-10-19"
      slug="burma-bilezik"
      image={{ src: bilezikImg, alt: "Koyu zemin üzerinde işlemeli altın bilezikler", credit: "Fotoğraf: Pexels" }}
      faq={[
        {
          question: "Burma bilezik kaç ayardır?",
          answer:
            "Piyasada burma bilezikler çoğunlukla 22 ayar (916) olarak satılır, ancak farklı ayarda üretilenler de bulunabilir. Satın alırken bileziğin üzerindeki ayar damgasını (22 ayar için 916 veya 22K) kontrol edin.",
        },
        {
          question: "İkili burma mı üçlü burma mı tercih edilmeli?",
          answer:
            "Bu bir kullanım ve bütçe tercihidir. Tel sayısı arttıkça bilezik genellikle daha dolgun ve ağır görünür; ancak altın değeri yalnızca gramajla belirlenir. İşçilik payı modele göre değişebileceği için gram fiyatını ve işçiliği ayrı ayrı sorarak karşılaştırın.",
        },
        {
          question: "Burma bileziği parlatmak altın kaybettirir mi?",
          answer:
            "Cila işleminde yüzeyden çok küçük bir miktar altın gidebilir; bu fark genellikle gözle görülmez. Yine de işlemden önce ve sonra bileziğin tartıya vurulmasını isteyebilirsiniz.",
        },
        {
          question: "Burma bilezik bozdururken işçilik geri alınır mı?",
          answer:
            "Hayır. Kuyumcu yalnızca bileziğin içindeki altının değerini, 22 ayar altının o anki alış fiyatı üzerinden öder. Burma modellerde işçilik payı düz bileziklerden yüksek olabileceğinden, bozdurma sırasında fark daha belirgin olabilir.",
        },
      ]}
      related={[
        { href: "/rehber/ajda-bilezik", title: "Ajda bilezik nedir?" },
        { href: "/rehber/isciliksiz-bilezik-modelleri", title: "İşçiliksiz bilezik nedir?" },
        { href: "/rehber/22-ayar-bilezik-hesaplama", title: "22 ayar bilezik hesaplama" },
        { href: "/rehber/dugunde-hangi-altinlar-takilir", title: "Düğünde hangi altınlar takılır?" },
      ]}
    >
      <h2>Burma bilezik nedir?</h2>
      <p>
        Burma bilezik, bir veya birkaç altın telin birbirine sarılması
        (burulması) ya da örülmesiyle elde edilen bilezik modelidir. Üretim
        tekniği gereği yüzeyinde helezon veya örgü benzeri bir doku oluşur.
        Anneden kıza aktarılan ve düğünde takılan bilezikler arasında sık
        rastlanan bir modeldir.
      </p>

      <h2>İkili, üçlü ve diğer burma modelleri</h2>
      <p>
        Burma bilezikler genellikle kaç telin birleştirildiğine göre
        adlandırılır:
      </p>
      <ul>
        <li>
          <strong>İkili burma:</strong> İki telin birbirine sarılmasıyla
          oluşur.
        </li>
        <li>
          <strong>Üçlü burma:</strong> Üç telin örülmesiyle oluşur; genellikle
          daha dolgun bir görünüm verir.
        </li>
      </ul>
      <p>
        Bunların dışında kuyumcular, yassı veya köşeli burma gibi farklı
        formlara bölgeye ve atölyeye göre değişen adlar verebilir. Aynı ad
        farklı kuyumcularda farklı bir modeli anlatabileceğinden, satın almadan
        önce modeli görerek karar verin.
      </p>

      <h2>Fiyat nasıl hesaplanır?</h2>
      <p>
        <strong>
          Burma bilezik fiyatı = Gramaj × (22 ayar gram fiyatı + gram başına
          işçilik)
        </strong>
      </p>
      <p>
        22 ayar gram fiyatını doğrudan bulamıyorsanız, 24 ayar gram altın
        fiyatını 0,916 ile çarparak yaklaşık değeri bulabilirsiniz. Güncel{" "}
        <Link href="/altin/22-ayar-bilezik">22 ayar bilezik fiyatını</Link>{" "}
        sayfamızda canlı olarak görebilirsiniz.
      </p>
      <p>
        Örnek (varsayımsal rakamlarla): 25 gramlık bir burma bileziğin 22 ayar
        gram fiyatı 6.000 TL, gram başına işçilik 200 TL olsun. Altın değeri 25
        × 6.000 = 150.000 TL, işçilik 25 × 200 = 5.000 TL; toplam{" "}
        <strong>155.000 TL</strong> eder. Adım adım hesap için{" "}
        <Link href="/rehber/22-ayar-bilezik-hesaplama">
          22 ayar bilezik hesaplama
        </Link>{" "}
        rehberine bakın.
      </p>

      <h2>Burma bilezik birikim için uygun mu?</h2>
      <p>
        Bozdururken bileziğin altın değeri ödenir, işçilik ödenmez. Burma
        modelde işçilik, sade bir düz bileziğe göre genellikle daha yüksektir;
        bu yüzden saf birikim amacıyla bakıyorsanız işçilik payı daha düşük
        modeller ya da{" "}
        <Link href="/rehber/gram-altin-nedir">gram altın</Link> daha avantajlı
        olabilir. Burma bilezik ise hem takı olarak kullanılan hem de altın
        değerini koruyan bir ürün olarak tercih edilir. İşçilik payı düşük
        modeller için{" "}
        <Link href="/rehber/isciliksiz-bilezik-modelleri">
          işçiliksiz bilezik rehberine
        </Link>{" "}
        bakın.
      </p>

      <h2>Alırken kontrol listesi</h2>
      <ol>
        <li><strong>Ayar damgası:</strong> 916 veya 22K damgasını arayın.</li>
        <li><strong>Tartım:</strong> Gramajı tartıda kendi gözünüzle görün.</li>
        <li><strong>Gram fiyatı ve işçilik ayrı:</strong> İkisini ayrı ayrı sorun, faturaya yazdırın.</li>
        <li><strong>Sağlamlık:</strong> Tellerin birleştiği yerlerde ve kilitte çatlak, açılma veya lehim izi olmamalı.</li>
        <li><strong>İçi dolu mu, boş mu:</strong> Dayanıklılığı ve gramajı etkiler; kuyumcuya sorun.</li>
        <li><strong>Ölçü:</strong> Bileğe rahat oturmalı; burma yapılı bileziklerde ölçü ayarının mümkün olup olmadığını önceden öğrenin.</li>
      </ol>

      <h2>Bakım ve parlatma</h2>
      <p>
        Burma bileziğin dokulu yüzeyi zamanla kir tutabilir ve mat görünebilir.
        Yumuşak bir fırça ve ılık sabunlu suyla temizlenebilir; kuyumcuda
        yapılan cila işlemi parlaklığı geri getirir. Genel bakım önerileri için{" "}
        <Link href="/rehber/altin-nasil-saklanir">altın nasıl saklanır</Link>{" "}
        rehberine göz atabilirsiniz.
      </p>
    </GuideArticle>
  );
}
