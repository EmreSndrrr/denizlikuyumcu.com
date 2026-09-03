import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Kuyumcuda Altın Bozdururken Nelere Dikkat Edilmeli?",
  description:
    "Altın bozdururken kayıp yaşamamak için: has altın alış fiyatını sorma, ayar okuması, tartım, fire/işlem kesintisi, fatura ve zamanlama — kuyumcuda adım adım kontrol listesi.",
  alternates: { canonical: "/rehber/kuyumcuda-altin-bozdururken-dikkat" },
};

export default function Page() {
  return (
    <GuideArticle
      title="Kuyumcuda Altın Bozdururken Nelere Dikkat Edilmeli?"
      intro="Bozdurma, alışın tersidir: burada kuyumcunun 'alış' fiyatı ve uyguladığı kesintiler belirleyicidir. Birkaç basit kontrol, elinize geçen tutarı gözle görülür şekilde değiştirebilir."
      updated="Eylül 2026"
      slug="kuyumcuda-altin-bozdururken-dikkat"
      faq={[
        {
          question: "Altın bozdururken hangi fiyat geçerli?",
          answer:
            "Kuyumcunun o anki 'alış' fiyatı. Takı için has altın alış fiyatı × ayar katsayısı × gram üzerinden hesap yapılır, işçilik geri ödenmez.",
        },
        {
          question: "Bozdurmada kesinti yapılır mı?",
          answer:
            "Genelde küçük bir fire/işlem kesintisi uygulanır. Oranını önceden sorun ve birkaç kuyumcuyla karşılaştırın.",
        },
        {
          question: "Ne zaman bozdurmak avantajlı?",
          answer:
            "Altın fiyatının görece yüksek olduğu dönemlerde ve piyasa sakinken. Çok oynak günlerde kuyumcular makası açar, aleyhinize olur.",
        },
      ]}
      related={[
        { href: "/rehber/14-ayar-altin-bozdurma-hesabi", title: "14 ayar altın bozdurma hesabı" },
        { href: "/rehber/altin-alirken-fatura", title: "Altın alırken fatura alınmalı mı?" },
        { href: "/rehber/ceyrek-altin-alis-satis-farki", title: "Çeyrek altında alış-satış farkı" },
      ]}
    >
      <h2>Bozdurmadan önce</h2>
      <ul>
        <li>
          <strong>Güncel fiyatı öğrenin:</strong> O günkü{" "}
          <a href="/altin/gram-altin">has (gram) altın alış fiyatını</a>{" "}
          bilerek gidin; teklifleri bu rakama göre değerlendirin.
        </li>
        <li>
          <strong>Ürünü ve faturayı hazırlayın:</strong> Faturalı aldıysanız
          faturayı yanınıza alın — ayar ve gramaj tartışmasını kısaltır.
        </li>
        <li>
          <strong>Yaklaşık tutarı kendiniz hesaplayın:</strong>{" "}
          <a href="/rehber/14-ayar-altin-bozdurma-hesabi">
            bozdurma hesabı
          </a>{" "}
          yöntemiyle bir aralık çıkarın.
        </li>
      </ul>

      <h2>Kuyumcuda</h2>
      <ol>
        <li>
          <strong>Ayar okumasını izleyin:</strong> Cihaz veya mihenk taşı
          testinin sonucunu birlikte görün. 22 ayar ürün 18 ayar okunursa
          ciddi kayıp doğar.
        </li>
        <li>
          <strong>Tartımı görün:</strong> Terazi sıfırlanmış mı, ürün tam
          oturuyor mu? Gram, faturadakiyle uyumlu mu?
        </li>
        <li>
          <strong>Kesintiyi sorun:</strong> &quot;Fire&quot;, &quot;işlem
          payı&quot; veya &quot;düşük&quot; adıyla ne kadar kesiliyor?
        </li>
        <li>
          <strong>Net tutarı yazılı isteyin:</strong> Ödeme öncesi rakamı
          teyit edin; piyasa oynaksa fiyat dakikalar içinde değişebilir.
        </li>
      </ol>

      <h2>Birden fazla kuyumcu karşılaştırın</h2>
      <p>
        Aynı ürün için 2-3 kuyumcudan net tutar sormak, en pratik korunma
        yöntemidir. Denizli&apos;de kuyumcular çoğunlukla bir arada
        bulunduğundan bu karşılaştırmayı kısa sürede yapabilirsiniz.{" "}
        <a href="/kuyumcular">Kuyumcular listemize</a> göz atabilirsiniz.
      </p>

      <h2>Sık yapılan hatalar</h2>
      <ul>
        <li>İşçiliğin geri alınacağını sanmak (alınmaz).</li>
        <li>Panikle, fiyat çok oynakken bozdurmak.</li>
        <li>Ayar/tartım kontrolünü izlememek.</li>
        <li>Tek kuyumcunun teklifiyle yetinmek.</li>
      </ul>
    </GuideArticle>
  );
}
