import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Bilezikte İşçilik Nasıl Hesaplanır?",
  description:
    "Bilezik işçiliği yüzde mi, gram başına sabit tutar mı? El işi ve makine işi modellerde işçilik farkı, işçiliğin fiyata etkisi ve kuyumcuda işçilik pazarlığı ipuçları.",
  alternates: { canonical: "/rehber/bilezikte-iscilik-hesaplama" },
};

export default function Page() {
  return (
    <GuideArticle
      title="Bilezikte İşçilik Nasıl Hesaplanır?"
      intro="İşçilik, bir bileziğin fiyatını iki aynı gramajlı üründe bile farklı kılan kalemdir. Nasıl hesaplandığını bilmek, kuyumcuda daha net konuşmanızı sağlar."
      updated="Eylül 2026"
      slug="bilezikte-iscilik-hesaplama"
      faq={[
        {
          question: "Bilezik işçiliği ne kadardır?",
          answer:
            "Modele göre değişir: makine işi burma/klasik modellerde genelde düşüktür, el işi, kalem işi ve taşlı modellerde belirgin şekilde yükselir. Çoğu kuyumcu işçiliği has altın değerinin yüzdesi olarak alır.",
        },
        {
          question: "İşçilik gram altın fiyatının mı, has değerin mi yüzdesi?",
          answer:
            "Yaygın uygulama, ürünün içindeki has altın değerinin yüzdesidir. Bazı kuyumcular ise gram başına sabit TL tutarı uygular. Alırken hangisi olduğunu netleştirin.",
        },
        {
          question: "İşçilikte pazarlık olur mu?",
          answer:
            "Genelde olur, özellikle yüksek gramajlı alımlarda. Aynı modeli birkaç kuyumcuda sorup işçilik oranını karşılaştırmak en etkili yöntemdir.",
        },
      ]}
      related={[
        { href: "/rehber/22-ayar-bilezik-hesaplama", title: "22 ayar bilezik hesaplama" },
        { href: "/rehber/altin-alirken-fatura", title: "Altın alırken fatura alınmalı mı?" },
        { href: "/rehber/dugunde-hangi-altinlar-takilir", title: "Düğünde hangi altınlar takılır?" },
      ]}
    >
      <h2>İşçilik iki yöntemle hesaplanır</h2>
      <h3>1. Has değerin yüzdesi olarak</h3>
      <p>
        En yaygın yöntem. Önce bileziğin içindeki saf altının değeri bulunur
        (<a href="/altin/gram-altin">gram altın fiyatı</a> × ayar katsayısı ×
        gram), sonra bunun üzerine bir yüzde eklenir:
      </p>
      <p>
        <strong>İşçilik tutarı = Has altın değeri × İşçilik oranı</strong>
      </p>
      <h3>2. Gram başına sabit tutar olarak</h3>
      <p>
        Bazı kuyumcular &quot;gramı şu kadar işçilik&quot; der:
      </p>
      <p>
        <strong>İşçilik tutarı = Bilezik gramı × Gram başı işçilik (TL)</strong>
      </p>

      <h2>Model, işçiliği belirler</h2>
      <table>
        <thead>
          <tr>
            <th>Model tipi</th>
            <th>İşçilik seviyesi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Makine burma, düz klasik</td>
            <td>Düşük</td>
          </tr>
          <tr>
            <td>Ajur, hasır (Trabzon), örgü</td>
            <td>Orta</td>
          </tr>
          <tr>
            <td>El işi, kalem işi, mineli</td>
            <td>Yüksek</td>
          </tr>
          <tr>
            <td>Taşlı, pırlantalı</td>
            <td>Çok yüksek (+ taş bedeli)</td>
          </tr>
        </tbody>
      </table>

      <h2>Örnek</h2>
      <p>
        22 ayar, 15 gram, gram altın 4.000 TL, işçilik %8:
      </p>
      <p>
        Has değer = 4.000 × 0,916 × 15 = 54.960 TL
        <br />
        İşçilik = 54.960 × 0,08 = <strong>4.397 TL</strong>
        <br />
        Toplam ≈ <strong>59.357 TL</strong>
      </p>
      <p>
        Tam hesap yöntemi için{" "}
        <a href="/rehber/22-ayar-bilezik-hesaplama">
          22 ayar bilezik hesaplama
        </a>{" "}
        rehberine bakın.
      </p>

      <h2>Alırken sorulacak sorular</h2>
      <ul>
        <li>İşçilik yüzde mi, gram başı sabit tutar mı?</li>
        <li>İşçilik hangi değerin üzerinden hesaplanıyor?</li>
        <li>Taş varsa taş bedeli işçiliğe dahil mi?</li>
        <li>Faturaya işçilik ayrı kalem olarak yazılır mı?</li>
      </ul>
    </GuideArticle>
  );
}
