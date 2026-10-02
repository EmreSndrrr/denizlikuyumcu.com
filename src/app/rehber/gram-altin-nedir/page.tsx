import type { Metadata } from "next";
import Link from "next/link";
import GuideArticle from "@/components/GuideArticle";
import gramAltinImg from "@/images/rehber/gram-altin.jpg";

export const metadata: Metadata = {
  title: "Gram Altın Nedir? Alırken Bilmeniz Gerekenler",
  description:
    "Gram altın nedir, hangi gramajlarda satılır, çeyrek altından farkı ne? Kartelalı külçe, banka gram altını ve alırken kontrol edilecek 6 nokta.",
  alternates: { canonical: "/rehber/gram-altin-nedir" },
  openGraph: { images: [{ url: gramAltinImg.src, width: 1600, height: 900 }] },
};

export default function Page() {
  return (
    <GuideArticle
      title="Gram Altın Nedir?"
      intro="Gram altın, ağırlığı gram cinsinden belirtilen, 24 ayar (genellikle binde 995 veya 999,9 saflıkta) külçe altındır. İşçilik payı çok düşük olduğu için fiyatı has altın değerine en yakın altın ürünüdür; bu yüzden birikim amacıyla en çok tercih edilen altın türlerinden biridir."
      updated="Ekim 2026"
      datePublished="2026-10-01"
      slug="gram-altin-nedir"
      image={{ src: gramAltinImg, alt: "İstiflenmiş külçe altın çubukları", credit: "Fotoğraf: Pexels" }}
      faq={[
        {
          question: "1 gram altın 24 ayar mıdır?",
          answer:
            "Evet. Piyasada 'gram altın' olarak satılan külçeler 24 ayardır; saflıkları genellikle binde 995 ya da binde 999,9'dur. Takı olarak satılan 22 veya 14 ayar ürünler gram ile tartılsa da 'gram altın' olarak adlandırılmaz.",
        },
        {
          question: "Ambalajı açılmış gram altın değer kaybeder mi?",
          answer:
            "İçindeki altın miktarı değişmez. Ancak ambalaj (kartela) ürünün saflığını ve gramajını belgeleyen kanıttır; açılmış bir külçeyi kuyumcu tartmak ve test etmek isteyebilir, alış fiyatında daha temkinli davranabilir. Bozdurmayı düşünüyorsanız ambalajı açmamak en güvenlisidir.",
        },
        {
          question: "Gram altın bozdururken işçilik kesilir mi?",
          answer:
            "Gram altında işçilik payı zaten çok düşüktür, bu yüzden bozdururken bilezikteki gibi bir işçilik kaybı yaşanmaz. Kuyumcu, gram altının o anki alış fiyatını öder; kaybınız yalnızca aldığınız andaki satış fiyatı ile bozdurduğunuz andaki alış fiyatı arasındaki farktır.",
        },
      ]}
      related={[
        { href: "/rehber/24-ayar-gram-altin", title: "24 ayar gram altın: 995 ve 999,9 farkı" },
        { href: "/rehber/gram-altin-bugun-ne-kadar", title: "Gram altın bugün ne kadar?" },
        { href: "/rehber/10-gram-altin-kac-tl", title: "10 gram altın kaç TL eder?" },
      ]}
    >
      <h2>Gram altın tam olarak nedir?</h2>
      <p>
        Gram altın, rafinerilerde üretilen, üzerinde ağırlığı ve saflığı
        yazan küçük bir <strong>külçe</strong>dir. Takı gibi şekil verilmediği
        için üretim maliyeti çok düşüktür ve fiyatı neredeyse tamamen içindeki
        altının değerinden oluşur. &quot;Gram altın fiyatı&quot; denince bu
        yüzden piyasadaki temel altın fiyatı anlaşılır; diğer altın
        ürünlerinin fiyatı da çoğunlukla gram altın üzerinden hesaplanır.
      </p>
      <p>
        Gram altınlar genellikle <strong>kartela</strong> adı verilen,
        mühürlü bir koruyucu ambalaj içinde satılır. Kartelanın üzerinde
        üretici rafinerinin adı, ürünün ağırlığı, saflığı (milyem) ve çoğu
        zaman bir seri numarası yer alır. Bu bilgiler, ürünün sonradan alınıp
        satılmasında güvence işlevi görür.
      </p>

      <h2>Hangi gramajlarda satılır?</h2>
      <p>
        Gram altın küçük birikimlerden büyük tutarlara kadar farklı ihtiyaçlar
        için çeşitli boyutlarda üretilir. En sık karşılaşılanlar:
      </p>
      <table>
        <thead>
          <tr>
            <th>Gramaj</th>
            <th>Yaygın kullanım</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1 g</td><td>Düzenli küçük birikim, hediye</td></tr>
          <tr><td>2,5 g ve 5 g</td><td>Orta tutarlı hediye ve birikim</td></tr>
          <tr><td>10 g ve 20 g</td><td>Birikim; tek seferde daha büyük tutar</td></tr>
          <tr><td>50 g ve 100 g</td><td>Büyük tutarlı birikim</td></tr>
        </tbody>
      </table>
      <p>
        Daha büyük külçeler de vardır ama bireysel alımlarda nadiren tercih
        edilir. Küçük gramajlarda gram başına maliyet biraz daha yüksek
        olabilir; çünkü sabit üretim ve ambalaj maliyeti daha az altına bölünür.
        Belirli bir gramajın tutarını{" "}
        <Link href="/rehber/10-gram-altin-kac-tl">10 gram altın kaç TL</Link>{" "}
        rehberindeki yöntemle kendiniz hesaplayabilirsiniz.
      </p>

      <h2>Gram altın mı, çeyrek altın mı?</h2>
      <p>
        İkisi de altındır ama farklı amaçlara hizmet eder. Çeyrek altın 22
        ayardır ve içinde yaklaşık 1,60 gram saf altın bulunur; bunun üzerine
        bir basım primi eklenir. 1 Ekim 2026 verisinde çeyrek altın satış fiyatı,
        gram altın satış fiyatının yaklaşık <strong>1,64 katıydı</strong>.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Gram altın</th>
            <th>Çeyrek altın</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Ayar</td><td>24 ayar (995 / 999,9)</td><td>22 ayar (916)</td></tr>
          <tr><td>Alış-satış farkı</td><td>Daha dar</td><td>Daha geniş</td></tr>
          <tr><td>Bölünebilirlik</td><td>Esnek (1 g, 2,5 g, 5 g…)</td><td>Sabit (bir çeyrek)</td></tr>
          <tr><td>Hediye geleneği</td><td>Zayıf</td><td>Güçlü (düğün, doğum)</td></tr>
          <tr><td>Birikim verimliliği</td><td>Daha yüksek</td><td>Makas nedeniyle daha düşük</td></tr>
        </tbody>
      </table>
      <p>
        Kısa ve orta vadeli birikim için dar makası nedeniyle gram altın
        genellikle daha verimlidir; hediye amacıyla ise çeyrek altın
        tercih edilir. Makasın nasıl oluştuğunu{" "}
        <Link href="/rehber/ceyrek-altin-alis-satis-farki">
          çeyrek altın alış-satış farkı
        </Link>{" "}
        rehberinde anlattık.
      </p>

      <h2>Fiziki gram altın mı, banka altın hesabı mı?</h2>
      <p>
        Bankalar da &quot;gram altın&quot; satar; ancak bu çoğunlukla hesabınızda
        tutulan bir bakiyedir, elinize fiziki bir ürün geçmez.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Fiziki gram altın</th>
            <th>Banka altın hesabı</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Elinizde ürün</td><td>Var</td><td>Yok (bakiye)</td></tr>
          <tr><td>Saklama</td><td>Sizin sorumluluğunuzda</td><td>Banka tutar</td></tr>
          <tr><td>Küçük tutarla alım</td><td>En küçük külçe kadar</td><td>Çoğu bankada çok küçük miktarlar mümkün</td></tr>
          <tr><td>Alım-satım hızı</td><td>Kuyumcuya gitmek gerekir</td><td>Mobil uygulamadan anında</td></tr>
          <tr><td>Fiziki teslim</td><td>—</td><td>Çoğunlukla yok veya ücretli</td></tr>
        </tbody>
      </table>
      <p>
        İki yöntemde de makas vardır ve kurumdan kuruma değişir. Banka ile
        kuyumcu fiyatının neden farklı olduğunu{" "}
        <Link href="/rehber/altin-kuru-nedir">altın kuru rehberinde</Link>{" "}
        ayrıntılı karşılaştırdık.
      </p>

      <h2>Gram altın alırken kontrol edilecek 6 nokta</h2>
      <ol>
        <li>
          <strong>Kartela sağlam mı?</strong> Mühür bozulmamış, ambalaj açılmamış
          olmalı.
        </li>
        <li>
          <strong>Rafineri adı okunuyor mu?</strong> Üreticinin adı ve logosu net
          olmalı.
        </li>
        <li>
          <strong>Saflık yazıyor mu?</strong> 995 veya 999,9 ibaresini arayın.
        </li>
        <li>
          <strong>Gramaj doğru mu?</strong> Kartela üzerindeki ağırlıkla
          aldığınız ürün eşleşmeli.
        </li>
        <li>
          <strong>Seri numarası var mı?</strong> Varsa faturaya yazdırmak işinizi
          kolaylaştırır.
        </li>
        <li>
          <strong>Fatura alıyor musunuz?</strong> Faturasız alım, sonradan
          bozdururken sorun yaratabilir; ayrıntısı{" "}
          <Link href="/rehber/altin-alirken-fatura">bu rehberde</Link>.
        </li>
      </ol>
      <p>
        Piyasada az da olsa taklit ürünler bulunabilir. Şüpheli durumlarda neye
        bakmanız gerektiğini{" "}
        <Link href="/rehber/sahte-altin-nasil-anlasilir">
          sahte altın nasıl anlaşılır
        </Link>{" "}
        rehberinde topladık.
      </p>

      <h2>Gram altın nasıl saklanır?</h2>
      <p>
        Gram altını kartelasından çıkarmadan, nemden ve sert darbelerden uzak
        bir yerde saklamak en doğrusudur. Ambalaj, ürünün değerini belgeleyen
        şeydir; açmak altının miktarını değiştirmez ama bozdururken işinizi
        zorlaştırabilir. Ev ya da kiralık kasa gibi saklama seçeneklerini{" "}
        <Link href="/rehber/altin-nasil-saklanir">altın saklama rehberinde</Link>{" "}
        ele aldık.
      </p>

      <h2>Gram altın fiyatı nereden takip edilir?</h2>
      <p>
        Güncel alış ve satış fiyatını{" "}
        <Link href="/altin/gram-altin">gram altın fiyat sayfamızda</Link> canlı
        olarak görebilirsiniz. Veriler kaynağında piyasa açıkken yaklaşık 15
        dakikada bir güncellenir. Fiyatın gün içinde neden değiştiğini{" "}
        <Link href="/rehber/gram-altin-bugun-ne-kadar">gram altın bugün ne kadar</Link>{" "}
        rehberinde, 24 ayarın 995 ve 999,9 türleri arasındaki farkı ise{" "}
        <Link href="/rehber/24-ayar-gram-altin">24 ayar gram altın</Link>{" "}
        rehberinde bulabilirsiniz.
      </p>
    </GuideArticle>
  );
}
