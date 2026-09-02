import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Alyans Alırken Nelere Dikkat Edilmeli?",
  description:
    "Alyans seçerken ayar (14 mi 18 mi?), doğru ölçü, gramaj-bütçe dengesi ve güvenilir kuyumcu seçimi konusunda dikkat edilmesi gereken noktalar.",
  alternates: { canonical: "/rehber/alyans-rehberi" },
};

export default function Page() {
  return (
    <GuideArticle
      title="Alyans Alırken Nelere Dikkat Edilmeli?"
      intro="Alyans, günlük hayatta neredeyse hiç çıkarılmayan bir takı olduğu için dayanıklılık ve konfor, tasarım kadar önemlidir."
      updated="Eylül 2026"
    >
      <h2>1. Ayar seçimi</h2>
      <p>
        Alyanslarda en yaygın tercih 14 ve 18 ayardır. 14 ayar daha
        dayanıklı ve daha ekonomiktir; 18 ayar ise daha parlak bir renk
        tonuna sahiptir ama günlük kullanımda çizilmeye biraz daha
        yatkındır. Güncel{" "}
        <a href="/altin/14-ayar-altin">14 ayar</a> ve{" "}
        <a href="/altin/18-ayar-altin">18 ayar altın fiyatlarını</a> canlı
        olarak karşılaştırabilirsiniz.
      </p>

      <h2>2. Doğru ölçü</h2>
      <p>
        Alyans ölçüsü, parmağın gün içindeki hafif şişme/incelme durumuna
        göre değişebilir. Ölçü alırken günün ortasında, elin ne çok sıcak ne
        çok soğuk olduğu bir zamanda ölçtürmeniz daha sağlıklı sonuç verir.
      </p>

      <h2>3. Gramaj ve bütçe dengesi</h2>
      <p>
        Alyans fiyatı büyük ölçüde gramaja bağlıdır. Bütçenizi belirledikten
        sonra kuyumcunuzla hangi gramaj aralığının size uygun tasarımlar
        sunduğunu konuşmanız faydalı olur.
      </p>

      <h2>4. Güvenilir bir kuyumcu seçin</h2>
      <p>
        Ayar damgası net olan, faturalı satış yapan ve sorularınızı açıkça
        yanıtlayan bir kuyumcuyla çalışmak, hem ürün kalitesi hem de
        ileride yaşanabilecek tadilat/garanti süreçleri için önemlidir.{" "}
        <a href="/kuyumcular">Denizli kuyumcuları listemize</a> göz atarak
        size yakın işletmeleri inceleyebilirsiniz.
      </p>
    </GuideArticle>
  );
}
