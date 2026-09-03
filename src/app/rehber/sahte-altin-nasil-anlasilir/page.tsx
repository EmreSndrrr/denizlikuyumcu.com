import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Sahte Altın Nasıl Anlaşılır? 7 Kontrol",
  description:
    "Sahte altın nasıl anlaşılır? Ayar damgası, mıknatıs testi, renk ve gramaj kontrolü, ses ve asit testi — evde yapılabilecek kontroller ve kuyumcuda kesin test yöntemleri.",
  alternates: { canonical: "/rehber/sahte-altin-nasil-anlasilir" },
};

export default function Page() {
  return (
    <GuideArticle
      title="Sahte Altın Nasıl Anlaşılır?"
      intro="Bazı belirtiler evde fark edilebilir, ama kesin sonuç yalnızca kuyumcuda yapılan testlerle alınır. İşte adım adım bir kontrol listesi."
      updated="Eylül 2026"
      slug="sahte-altin-nasil-anlasilir"
      faq={[
        {
          question: "Altın mıknatısı çeker mi?",
          answer:
            "Hayır. Saf altın manyetik değildir. Bir takı mıknatısa yapışıyorsa içinde ciddi oranda demir/nikel var demektir ve büyük olasılıkla altın değildir veya çok düşük ayarlıdır.",
        },
        {
          question: "Evde sahte altını kesin anlayabilir miyim?",
          answer:
            "Hayır. Ev yöntemleri yalnızca şüphe uyandırır. Kesin sonuç için kuyumcuda mihenk taşı + asit, elektronik ayar cihazı veya XRF spektrometre ölçümü gerekir.",
        },
        {
          question: "Kaplama altını nasıl anlarım?",
          answer:
            "Zamanla köşelerde ve sürtünen bölgelerde renk açılması, terle yeşillenme ve altta farklı bir metal rengi görülür. Kuyumcu, yüzeyi çizerek alt katmana bakabilir.",
        },
      ]}
      related={[
        { href: "/rehber/altin-ayari-nedir", title: "Altın ayarı nedir? 24, 22, 18, 14 ayar" },
        { href: "/rehber/altin-alirken-fatura", title: "Altın alırken fatura alınmalı mı?" },
        { href: "/rehber/kuyumcuda-altin-bozdururken-dikkat", title: "Kuyumcuda altın bozdururken nelere dikkat edilmeli?" },
      ]}
    >
      <h2>Evde yapılabilecek ön kontroller</h2>
      <ol>
        <li>
          <strong>Ayar damgası:</strong> 585 (14 ayar), 750 (18 ayar) veya
          916 (22 ayar) damgası ve genelde bir darphane/marka kaşesi arayın.
          Damga yokluğu tek başına sahtelik kanıtı değildir ama şüphe
          uyandırır.
        </li>
        <li>
          <strong>Mıknatıs testi:</strong> Güçlü bir mıknatısa yaklaştırın.
          Altın çekilmez; yapışma varsa sorun vardır.
        </li>
        <li>
          <strong>Renk ve geçişler:</strong> Köşelerde, kenarlarda farklı bir
          metal rengi (beyazımsı, kırmızımsı alt katman) kaplama işaretidir.
        </li>
        <li>
          <strong>Cilt teması:</strong> Uzun süre takıldığında ciltte
          yeşillenme/kararma, düşük ayar veya kaplama göstergesidir.
        </li>
        <li>
          <strong>Gramaj hissi:</strong> Altın yoğun bir metaldir; aynı
          boyuttaki sahtelere göre belirgin şekilde ağır gelir. Beklenenden
          hafifse şüphelenin.
        </li>
        <li>
          <strong>Ses:</strong> Sert bir yüzeye bırakıldığında altın uzun,
          berrak bir tınç verir; sahteler daha boğuk ses çıkarır (deneyim
          ister, tek başına yeterli değildir).
        </li>
        <li>
          <strong>Fiyat:</strong> Piyasa fiyatının belirgin altında
          &quot;fırsat&quot; teklifleri en büyük uyarı işaretidir.
        </li>
      </ol>

      <h2>Kesin sonuç: kuyumcuda test</h2>
      <table>
        <thead>
          <tr>
            <th>Yöntem</th>
            <th>Ne yapar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mihenk taşı + asit</td>
            <td>Sürtme izine asit damlatarak ayarı tahmin eder (klasik yöntem)</td>
          </tr>
          <tr>
            <td>Elektronik ayar cihazı</td>
            <td>Yüzeyden iletkenlik ölçerek ayar tahmini verir</td>
          </tr>
          <tr>
            <td>XRF spektrometre</td>
            <td>Metal bileşimini tahribatsız, en güvenilir şekilde ölçer</td>
          </tr>
          <tr>
            <td>Yoğunluk (su taşırma)</td>
            <td>Ağırlık/hacim oranından saflığı hesaplar</td>
          </tr>
        </tbody>
      </table>

      <h2>Sahte altına karşı en iyi korunma</h2>
      <p>
        Ayar damgası net, faturalı satış yapan ve testi sizin önünüzde
        yapmaktan çekinmeyen bir kuyumcudan alışveriş yapmak. Faturanın önemi
        için{" "}
        <a href="/rehber/altin-alirken-fatura">altın alırken fatura</a>{" "}
        rehberine,{" "}
        <a href="/kuyumcular">Denizli kuyumcuları listesine</a> göz atın.
      </p>
    </GuideArticle>
  );
}
