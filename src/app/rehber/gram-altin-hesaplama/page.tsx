import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Gram Altın Fiyatı Nasıl Hesaplanır?",
  description:
    "Gram altın fiyatının dolar kuru ve ons altınla ilişkisi, alış-satış farkı (spread) nereden gelir, işçilik fiyata nasıl eklenir — basit formülle anlatıyoruz.",
  alternates: { canonical: "/rehber/gram-altin-hesaplama" },
};

export default function Page() {
  return (
    <GuideArticle
      title="Gram Altın Fiyatı Nasıl Hesaplanır?"
      intro="Gram altın fiyatı, dünya piyasalarındaki ons altın fiyatı ile dolar/TL kurunun birleşiminden oluşur. İşte bu hesaplamanın basit mantığı."
      updated="Eylül 2026"
    >
      <h2>Temel formül</h2>
      <p>
        Uluslararası piyasalarda altın, ons (yaklaşık 31,1 gram) üzerinden
        dolar cinsinden fiyatlanır. Türkiye&apos;deki gram altın fiyatı
        kabaca şu şekilde oluşur:
      </p>
      <p>
        <strong>
          Gram Altın (TL) = (Ons Altın Fiyatı [USD] ÷ 31,1) × Dolar/TL Kuru
        </strong>
      </p>
      <p>
        Bu nedenle gram altın fiyatı iki ana etkenle hareket eder: dünya
        piyasasında ons altının dolar cinsinden değeri ve dolar/TL kurunun
        seviyesi. Ons altın sabit kalsa bile dolar TL karşısında değer
        kazanırsa gram altın fiyatı da yükselir. Güncel{" "}
        <a href="/altin/gram-altin">gram altın fiyatını</a> ve{" "}
        <a href="/altin/ons-altin">ons altın fiyatını</a> canlı olarak takip
        edebilirsiniz.
      </p>

      <h2>Alış-satış farkı (spread) nereden geliyor?</h2>
      <p>
        Kuyumcuların ilan ettiği alış ve satış fiyatları arasında küçük bir
        fark bulunur. Bu fark; kuyumcunun işletme maliyetini, kur riskini ve
        kâr marjını yansıtır. Piyasa oynaklığı arttığında bu makas genellikle
        genişler.
      </p>

      <h2>İşlenmiş takıda işçilik neden eklenir?</h2>
      <p>
        Bilezik, yüzük veya kolye gibi işlenmiş bir ürün alırken ödediğiniz
        fiyat, sadece o üründeki altının has değerinden ibaret değildir.
        Tasarım, işçilik ve kuyumcunun kâr marjı da fiyata eklenir. Bu yüzden
        aynı gramajdaki farklı iki ürün, farklı fiyatlara satılabilir.
      </p>
    </GuideArticle>
  );
}
