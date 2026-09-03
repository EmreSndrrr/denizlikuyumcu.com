import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Eski ve Yeni Tarihli Çeyrek Altın Farkı",
  description:
    "Eski tarihli çeyrek altın ile yeni tarihli çeyrek altın arasında değer farkı var mı? Has altın içeriği, yıpranma, darphane dışı (ziynet) baskılar ve primli/iskontolu işlem durumları.",
  alternates: { canonical: "/rehber/eski-yeni-tarihli-ceyrek-altin-farki" },
};

export default function Page() {
  return (
    <GuideArticle
      title="Eski ve Yeni Tarihli Çeyrek Altın Farkı"
      intro="Çeyrek altınların üzerindeki tarih, çoğu zaman değeri değiştirmez — çünkü altın içeriği aynıdır. Ama bazı durumlarda eski çeyrek daha düşük, bazı yıllar ise primli işlem görebilir."
      updated="Eylül 2026"
      slug="eski-yeni-tarihli-ceyrek-altin-farki"
      faq={[
        {
          question: "Eski tarihli çeyrek altın daha mı değersiz?",
          answer:
            "Genelde hayır. Altın içeriği (has değer) aynı olduğu için temel değeri de aynıdır. Fark, yalnızca ürün yıpranmışsa, lehimliyse ya da darphane dışı 'ziynet' baskıysa ortaya çıkar.",
        },
        {
          question: "Hangi çeyrekler primli olur?",
          answer:
            "Bazı özel yıllar veya az bulunan seriler koleksiyon değeri taşıyabilir ve piyasa fiyatının biraz üzerinde alıcı bulur. Bu, kuralın istisnasıdır.",
        },
        {
          question: "Kolye ucu olmuş (delik/askılı) çeyrek ne olur?",
          answer:
            "Delinmiş, lehim yapılmış veya aparat takılmış çeyrekler 'ziynet' sayılır ve normal çeyrekten düşük, hurda/has altına yakın fiyatlanır.",
        },
      ]}
      related={[
        { href: "/rehber/ceyrek-altin-alis-satis-farki", title: "Çeyrek altında alış-satış farkı" },
        { href: "/rehber/sahte-altin-nasil-anlasilir", title: "Sahte altın nasıl anlaşılır?" },
        { href: "/rehber/dugunde-hangi-altinlar-takilir", title: "Düğünde hangi altınlar takılır?" },
      ]}
    >
      <h2>Temel kural: altın içeriği aynı</h2>
      <p>
        Darphane basımı bir çeyrek altının içindeki has altın miktarı,
        basıldığı yıldan bağımsız olarak standarttır. Bu yüzden 1980
        basımı sağlam bir çeyrekle bu yılki bir çeyrek, kuyumcuda çoğunlukla
        aynı <a href="/altin/ceyrek-altin">çeyrek altın</a> fiyatından işlem
        görür.
      </p>

      <h2>Fiyatı düşüren durumlar</h2>
      <ul>
        <li>
          <strong>Yıpranma:</strong> Aşınmış, ezik, kenarları düzleşmiş
          çeyrekler tartıda eksik gelebilir; kuyumcu bu farkı fiyattan düşer.
        </li>
        <li>
          <strong>Lehim / tamir:</strong> Kırılıp yapıştırılmış veya lehimli
          çeyreklerde yabancı metal karışır, ayar düşer.
        </li>
        <li>
          <strong>Aparat izi:</strong> Kolye/bileklik ucu yapılıp sökülen
          çeyreklerde delik veya iz kalır; &quot;ziynet&quot; olarak
          değerlendirilir.
        </li>
        <li>
          <strong>Darphane dışı baskı:</strong> Özel atölye baskısı bazı
          ürünler, ayarı standart olsa bile alışta biraz daha temkinli
          fiyatlanabilir.
        </li>
      </ul>

      <h2>Fiyatı artırabilen durumlar</h2>
      <p>
        Belirli yıllara ait veya az sayıda basılmış çeyrekler, koleksiyoncular
        için ek değer taşıyabilir ve piyasa fiyatının üzerinde alıcı bulabilir.
        Bu istisnai bir durumdur; sıradan bir çeyrek için tarih fiyatı
        değiştirmez.
      </p>

      <h2>Alırken/satarken ne yapmalı?</h2>
      <ul>
        <li>Çeyreğin sağlam, delinmemiş ve lehimsiz olduğundan emin olun.</li>
        <li>Tartımı ve ayar kontrolünü izleyin.</li>
        <li>
          Alış-satış makasının tarih farkından çok daha belirleyici olduğunu
          unutmayın —{" "}
          <a href="/rehber/ceyrek-altin-alis-satis-farki">
            çeyrek altında alış-satış farkı
          </a>
          .
        </li>
      </ul>
    </GuideArticle>
  );
}
