import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import kuyumcuImg from "@/images/rehber/kuyumcu.jpg";

export const metadata: Metadata = {
  title: "Altın Alırken Fatura Alınmalı mı?",
  description:
    "Altın alırken fatura veya fiş neden önemli? Faturada hangi bilgiler bulunmalı, faturasız satışın riskleri ve bozdurma/iade süreçlerinde belgenin rolü.",
  alternates: { canonical: "/rehber/altin-alirken-fatura" },
  openGraph: { images: [{ url: kuyumcuImg.src, width: 1600, height: 900 }] },
};

export default function Page() {
  return (
    <GuideArticle
      title="Altın Alırken Fatura Alınmalı mı?"
      intro="Kısa cevap: evet. Fatura ya da fiş, aldığınız altının ayarını, gramını ve satıcısını belgeleyen tek resmî kanıttır ve ileride birçok durumda işinize yarar."
      updated="Eylül 2026"
      slug="altin-alirken-fatura"
      image={{ src: kuyumcuImg, alt: "Kuyumcuda tezgâha altın bilezikler yerleştiren eller", credit: "Fotoğraf: Pexels" }}
      faq={[
        {
          question: "Altın alırken fatura zorunlu mu?",
          answer:
            "Satıcı için belge düzenlemek yasal bir yükümlülüktür. Alıcı olarak da mutlaka isteyin: faturasız altın, ayar ve gramaj konusunda elinizde hiçbir dayanak bırakmaz.",
        },
        {
          question: "Faturada ne yazmalı?",
          answer:
            "Ürün cinsi, ayar, gram, işçilik (ayrı kalem), toplam tutar, tarih ve satıcının bilgileri. Bilezik/set için gramaj ayrıca belirtilmelidir.",
        },
        {
          question: "Faturasız aldığım altını bozdurabilir miyim?",
          answer:
            "Genelde bozdurabilirsiniz ama kuyumcu ayarı yeniden test eder ve belgesiz üründe daha temkinli fiyat verebilir. İade/değişim ise faturasız çok zorlaşır.",
        },
      ]}
      related={[
        { href: "/rehber/sahte-altin-nasil-anlasilir", title: "Sahte altın nasıl anlaşılır?" },
        { href: "/rehber/kuyumcuda-altin-bozdururken-dikkat", title: "Kuyumcuda altın bozdururken nelere dikkat edilmeli?" },
        { href: "/rehber/bilezikte-iscilik-hesaplama", title: "Bilezikte işçilik nasıl hesaplanır?" },
      ]}
    >
      <h2>Fatura neden önemli?</h2>
      <ul>
        <li>
          <strong>Ayar ve gramaj kanıtı:</strong> &quot;22 ayar 15 gram&quot;
          ifadesi faturada yazılıysa, sonradan ürünün ayarı tartışma konusu
          olduğunda elinizde belge olur.
        </li>
        <li>
          <strong>İşçilik şeffaflığı:</strong> İşçiliğin ayrı kalem yazılması,
          ne kadar altın ne kadar emek ödediğinizi net gösterir. Ayrıntı:{" "}
          <a href="/rehber/bilezikte-iscilik-hesaplama">
            bilezikte işçilik hesaplama
          </a>
          .
        </li>
        <li>
          <strong>İade ve değişim:</strong> Çoğu kuyumcu yalnızca faturalı
          ürünü kısmi iade/değişim kapsamına alır.
        </li>
        <li>
          <strong>Tüketici hakları:</strong> Bir uyuşmazlıkta tüketici hakem
          heyeti veya mahkeme sürecinde fatura temel delildir.
        </li>
      </ul>

      <h2>Faturada bulunması gerekenler</h2>
      <table>
        <thead>
          <tr>
            <th>Alan</th>
            <th>Neden</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ürün cinsi (bilezik, yüzük, çeyrek…)</td>
            <td>Neyi aldığınız net olsun</td>
          </tr>
          <tr>
            <td>Ayar (14/18/22)</td>
            <td>Değerin temel belirleyicisi</td>
          </tr>
          <tr>
            <td>Gram</td>
            <td>Has altın karşılığını hesaplamak için</td>
          </tr>
          <tr>
            <td>İşçilik (ayrı satır)</td>
            <td>Bozdurmada geri alınmaz, bilmeniz gerek</td>
          </tr>
          <tr>
            <td>Tarih ve satıcı bilgisi</td>
            <td>Garanti ve iade süreçleri</td>
          </tr>
        </tbody>
      </table>

      <h2>Faturasız satış bir uyarı işaretidir</h2>
      <p>
        Kuyumcu belge vermekten kaçınıyorsa, alışverişi gözden geçirin. Ayar
        damgası net olan ve faturalı çalışan işletmeleri tercih edin.{" "}
        <a href="/kuyumcular">Denizli kuyumcuları listemize</a> göz
        atabilirsiniz.
      </p>
    </GuideArticle>
  );
}
