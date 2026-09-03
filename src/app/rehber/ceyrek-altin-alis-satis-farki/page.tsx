import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Çeyrek Altında Alış ve Satış Farkı (Makas)",
  description:
    "Çeyrek altın alış ve satış fiyatı neden farklı? Makas (spread) nasıl oluşur, neden gram altından geniştir ve alım-satımda bu farkı nasıl azaltırsınız — Denizli için pratik rehber.",
  alternates: { canonical: "/rehber/ceyrek-altin-alis-satis-farki" },
};

export default function Page() {
  return (
    <GuideArticle
      title="Çeyrek Altında Alış ve Satış Farkı"
      intro="Kuyumcunun çeyrek altını aldığı fiyatla sattığı fiyat aynı değildir. Aradaki farka 'makas' (spread) denir ve bu fark, alım-satımdan ne kadar kâr/zarar edeceğinizi doğrudan belirler."
      updated="Eylül 2026"
      slug="ceyrek-altin-alis-satis-farki"
      faq={[
        {
          question: "Çeyrek altında alış-satış farkı ne kadardır?",
          answer:
            "Piyasa koşullarına göre değişir; sakin dönemlerde dar, oynak dönemlerde belirgin şekilde açılır. Güncel alış ve satış fiyatını yan yana anasayfadaki tablodan görebilirsiniz.",
        },
        {
          question: "Neden çeyrek altının makası gram altından geniş?",
          answer:
            "Çeyrek, basılı (darphane ürünü) bir üründür; basım/işleme payı ve talep dalgalanması makası genişletir. Gram altın ise hammaddeye en yakın üründür, makası daha dardır.",
        },
        {
          question: "Makastan nasıl daha az etkilenirim?",
          answer:
            "Sık sık alıp satmak yerine uzun vadeli tutmak, makas maliyetini zamana yayar. Ayrıca birkaç kuyumcunun fiyatını karşılaştırmak küçük de olsa fark yaratır.",
        },
      ]}
      related={[
        { href: "/rehber/eski-yeni-tarihli-ceyrek-altin-farki", title: "Eski ve yeni tarihli çeyrek altın farkı" },
        { href: "/rehber/gram-altin-bugun-ne-kadar", title: "Gram altın bugün ne kadar?" },
        { href: "/rehber/kuyumcuda-altin-bozdururken-dikkat", title: "Altın bozdururken nelere dikkat edilmeli?" },
      ]}
    >
      <h2>Makas (spread) nedir?</h2>
      <p>
        Her kuyumcu bir ürün için iki fiyat ilan eder: <strong>alış</strong>{" "}
        (sizden alırken ödediği) ve <strong>satış</strong> (size satarken
        istediği). Satış her zaman alıştan yüksektir. Bu fark:
      </p>
      <ul>
        <li>Kuyumcunun işletme gideri ve kâr marjı,</li>
        <li>Fiyat, siz kapıdan çıkana kadar değişirse diye kur/piyasa riski,</li>
        <li>Çeyrek için ayrıca basım ve stok maliyeti</li>
      </ul>
      <p>
        kalemlerini karşılar. Güncel{" "}
        <a href="/altin/ceyrek-altin">çeyrek altın alış ve satış fiyatını</a>{" "}
        yan yana görebilirsiniz.
      </p>

      <h2>Bir örnekle</h2>
      <p>
        Diyelim çeyrek altının alışı 6.500 TL, satışı 6.800 TL. Bugün çeyrek
        alıp yarın hiç fiyat değişmeden satarsanız: 6.800 TL verir, 6.500 TL
        geri alırsınız — yani <strong>300 TL</strong> makasa ödersiniz. Kâr
        edebilmeniz için altın fiyatının en az makas kadar yükselmesi gerekir.
      </p>

      <h2>Çeyrek altın mı, gram altın mı?</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Çeyrek altın</th>
            <th>Gram altın</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Makas</td>
            <td>Daha geniş</td>
            <td>Daha dar</td>
          </tr>
          <tr>
            <td>Bölünebilirlik</td>
            <td>Sabit (bir çeyrek)</td>
            <td>1 gram, 2,5 gram… esnek</td>
          </tr>
          <tr>
            <td>Hediye/takı değeri</td>
            <td>Yüksek (düğün geleneği)</td>
            <td>Düşük</td>
          </tr>
          <tr>
            <td>Yatırım verimliliği</td>
            <td>Makas nedeniyle daha düşük</td>
            <td>Daha yüksek</td>
          </tr>
        </tbody>
      </table>
      <p>
        Kısa-orta vadeli birikim için gram altının makası avantajlıdır;
        düğün/hediye amacıyla çeyrek altın tercih edilir.
      </p>
    </GuideArticle>
  );
}
