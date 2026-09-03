import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Alyans Ölçüsü Nasıl Belirlenir? Yüzük Ölçü Tablosu",
  description:
    "Alyans (yüzük) ölçüsü nasıl bulunur? Parmak çevresi ölçme yöntemi, milimetre-numara dönüşüm tablosu, evde ölçüm ipuçları ve sık yapılan hatalar.",
  alternates: { canonical: "/rehber/alyans-olcusu-nasil-belirlenir" },
};

export default function Page() {
  return (
    <GuideArticle
      title="Alyans Ölçüsü Nasıl Belirlenir?"
      intro="Alyans ölçüsü, parmağın iç çevresinin milimetre cinsinden uzunluğudur. En doğru sonuç kuyumcuda ölçü halkalarıyla alınır; evde yapılan ölçüm ise iyi bir başlangıç noktasıdır."
      updated="Eylül 2026"
      slug="alyans-olcusu-nasil-belirlenir"
      faq={[
        {
          question: "Yüzük numarası ne anlama geliyor?",
          answer:
            "Türkiye'de yaygın sistemde numara, parmağın iç çevresinin milimetre değerine eşittir. Örneğin 54 numara = 54 mm iç çevre.",
        },
        {
          question: "Evde alyans ölçüsü nasıl alınır?",
          answer:
            "İnce bir ip veya kâğıt şeridi parmağın en kalın yerine sarın, işaretleyip cetvelle mm ölçün. Bu değer yaklaşık numaranızdır. Eklem parmaktan kalınsa eklemi geçebilecek ölçüyü esas alın.",
        },
        {
          question: "Hangi saatte ölçmeliyim?",
          answer:
            "Günün ortasında, oda sıcaklığında. Sabah parmaklar ince, akşam ve sıcakta şiş olur; aşırı uçlarda ölçmeyin.",
        },
      ]}
      related={[
        { href: "/rehber/alyans-rehberi", title: "Alyans alırken nelere dikkat edilmeli?" },
        { href: "/rehber/dugunde-hangi-altinlar-takilir", title: "Düğünde hangi altınlar takılır?" },
        { href: "/rehber/bilezikte-iscilik-hesaplama", title: "Bilezikte işçilik nasıl hesaplanır?" },
      ]}
    >
      <h2>Ölçü ne demek?</h2>
      <p>
        Yüzük/alyans numarası, parmağın <strong>iç çevresini</strong> milimetre
        cinsinden ifade eder. 54 numara bir alyansın iç çevresi 54 mm&apos;dir.
        İç çapı hesaplamak isterseniz: çevre ÷ 3,14.
      </p>

      <h2>Evde ölçüm (3 yöntem)</h2>
      <ol>
        <li>
          <strong>İp / kâğıt şerit:</strong> Parmağın en kalın bölgesine
          gevşemeden sarın, üst üste geldiği noktayı işaretleyin, düz açıp
          cetvelle mm ölçün. Çıkan sayı yaklaşık numaranızdır.
        </li>
        <li>
          <strong>Mevcut bir yüzük:</strong> Parmağa tam oturan bir yüzüğün iç
          çapını cetvelle ölçün, aşağıdaki tablodan numarayı bulun.
        </li>
        <li>
          <strong>Online şablon:</strong> Bazı kuyumcuların bastırılabilir
          ölçü cetveli vardır; yazıcı ölçeğini %100 yapmaya dikkat edin.
        </li>
      </ol>

      <h2>Milimetre – numara dönüşüm tablosu (yaklaşık)</h2>
      <table>
        <thead>
          <tr>
            <th>İç çevre (mm)</th>
            <th>İç çap (mm)</th>
            <th>Numara</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>48</td><td>15,3</td><td>48</td></tr>
          <tr><td>50</td><td>15,9</td><td>50</td></tr>
          <tr><td>52</td><td>16,6</td><td>52</td></tr>
          <tr><td>54</td><td>17,2</td><td>54</td></tr>
          <tr><td>56</td><td>17,8</td><td>56</td></tr>
          <tr><td>58</td><td>18,5</td><td>58</td></tr>
          <tr><td>60</td><td>19,1</td><td>60</td></tr>
          <tr><td>62</td><td>19,7</td><td>62</td></tr>
        </tbody>
      </table>
      <p>
        Tablo yaklaşıktır; kesin numara için kuyumcuda çelik ölçü halkalarıyla
        deneme yapın.
      </p>

      <h2>Sık yapılan hatalar</h2>
      <ul>
        <li>Soğukta veya sabah erken ölçmek (parmak ince olur, alyans bol gelir).</li>
        <li>Eklem parmaktan kalınsa yalnızca parmak dibini ölçmek (alyans geçmez).</li>
        <li>Geniş (enli) alyansların daha sıkı hissettirdiğini hesaba katmamak — enli modelde yarım numara büyük tercih edin.</li>
        <li>Sürpriz alım için partnerin parmağını tahminle belirlemek; mümkünse mevcut bir yüzüğünü ölçün.</li>
      </ul>

      <h2>Ayar ve bütçe</h2>
      <p>
        Ölçüyü belirledikten sonra ayar ve gramaj kararı için{" "}
        <a href="/rehber/alyans-rehberi">alyans alırken nelere dikkat edilmeli</a>{" "}
        rehberine bakabilir, güncel{" "}
        <a href="/altin/14-ayar-altin">14 ayar</a> ve{" "}
        <a href="/altin/18-ayar-altin">18 ayar altın fiyatlarını</a>{" "}
        karşılaştırabilirsiniz.
      </p>
    </GuideArticle>
  );
}
