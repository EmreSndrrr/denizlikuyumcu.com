import type { Metadata } from "next";
import Link from "next/link";
import GuideArticle from "@/components/GuideArticle";
import bilezikImg from "@/images/rehber/bilezik.jpg";

export const metadata: Metadata = {
  title: "İşçiliksiz Bilezik Nedir? Modeller ve Fiyatı",
  description:
    "İşçiliksiz (düşük işçilikli) bilezik nedir, hangi modeller bu gruba girer? Fiyat hesabı, bozdurma kaybı ve alırken dikkat edilecekler.",
  alternates: { canonical: "/rehber/isciliksiz-bilezik-modelleri" },
  openGraph: { images: [{ url: bilezikImg.src, width: 1600, height: 900 }] },
};

export default function Page() {
  return (
    <GuideArticle
      title="İşçiliksiz Bilezik Nedir?"
      intro="İşçiliksiz bilezik, yüzeyi düz veya basit desenli olduğu için gram başına işçilik payının düşük olduğu bileziklere denir. Tamamen sıfır işçilik nadirdir; ancak işçilik payı düştükçe bileziği bozdururken kaybettiğiniz tutar da azalır. Bu rehber hangi modellerin bu gruba girdiğini ve fiyatın nasıl hesaplandığını anlatır."
      updated="Ekim 2026"
      datePublished="2026-10-19"
      slug="isciliksiz-bilezik-modelleri"
      image={{ src: bilezikImg, alt: "Koyu zemin üzerinde işlemeli altın bilezikler", credit: "Fotoğraf: Pexels" }}
      faq={[
        {
          question: "İşçiliksiz bileziği nasıl anlarım?",
          answer:
            "Yüzeyi düz, taşsız ve desensiz modeller genellikle düşük işçiliklidir. Kesin bilgi için kuyumcudan altının gram fiyatını ve işçiliği ayrı ayrı yazmasını isteyin; toplam fiyatın içinde gizlenmiş işçiliği ancak bu şekilde görebilirsiniz.",
        },
        {
          question: "İşçiliksiz bilezik bozdururken değer kaybettirmez mi?",
          answer:
            "İşçilik payı düşük olduğu için kayıp azdır, ama sıfır değildir: alış-satış farkı (makas) ve varsa küçük işçilik payı yine geri dönmez. Kayıp oranı kuyumcuya ve güne göre değişir.",
        },
        {
          question: "İnce ve içi boş bilezikler eğilir mi?",
          answer:
            "Altın yumuşak bir metaldir. Düşük gramajlı, içi boş modeller sert darbede eğilebilir veya ezilebilir. Günlük kullanım için gramajı ve içinin dolu ya da boş olduğunu satın almadan önce sorun.",
        },
        {
          question: "Bilezik bileğime büyük veya küçük gelirse ne olur?",
          answer:
            "Kuyumcular genellikle ölçü ayarı yapabilir; ancak bu işlem için ek işçilik istenebilir. Ölçü değişikliğinin ücretini ve süresini satın almadan önce sorun.",
        },
      ]}
      related={[
        { href: "/rehber/bilezikte-iscilik-hesaplama", title: "Bilezikte işçilik nasıl hesaplanır?" },
        { href: "/rehber/22-ayar-bilezik-hesaplama", title: "22 ayar bilezik hesaplama" },
        { href: "/rehber/ajda-bilezik", title: "Ajda bilezik nedir?" },
        { href: "/rehber/burma-bilezik", title: "Burma bilezik nedir?" },
      ]}
    >
      <h2>İşçilik neden önemli?</h2>
      <p>
        Bir bileziğin fiyatı iki parçadan oluşur: içindeki altının değeri ve
        işçilik. Kuyumcu bileziği bozdururken yalnızca{" "}
        <strong>altının değerini</strong> öder; işçilik geri dönmez. Bu
        yüzden aynı gramajda iki bileziğin satın alma fiyatı çok farklı olsa
        da, bozdururken aldığınız tutar neredeyse aynıdır. İşçilik payı ne
        kadar yüksekse, ilk günden o kadar fazla &quot;kaybetmiş&quot;
        sayılırsınız. İşçiliğin nasıl hesaplandığını{" "}
        <Link href="/rehber/bilezikte-iscilik-hesaplama">
          ayrı bir rehberde
        </Link>{" "}
        anlattık.
      </p>

      <h2>Hangi modeller düşük işçilikli sayılır?</h2>
      <ul>
        <li>
          <strong>Düz (ray) bilezikler:</strong> Üzerinde desen, oyma veya taş
          bulunmayan, pürüzsüz yüzeyli şerit bileziklerdir. İşçilik payı
          genellikle en düşük gruptadır.
        </li>
        <li>
          <strong>Basit yivli veya çizgili modeller:</strong>{" "}
          <Link href="/rehber/ajda-bilezik">Ajda bilezik</Link> gibi sade
          desenli bilezikler, yoğun el işçiliği gerektirenlere göre genellikle
          daha uygun işçilikle satılır.
        </li>
        <li>
          <strong>Sade halka bilezikler:</strong> Üretimi basit olan, ince
          veya orta kalınlıkta düz halkalar.
        </li>
        <li>
          <strong>Burma modeller:</strong> Tellerin burularak yapıldığı
          bileziklerde işçilik, düz modellere göre daha yüksek olabilir;
          ayrıntı için{" "}
          <Link href="/rehber/burma-bilezik">burma bilezik rehberine</Link>{" "}
          bakın.
        </li>
      </ul>
      <p>
        Taşlı, minelli, kazıma veya yoğun desenli modellerde işçilik payı
        belirgin biçimde yüksektir ve bozdururken bu pay geri dönmez.
      </p>

      <h2>Karşılaştırma</h2>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>İşçilik payı</th>
            <th>Bozdururken kayıp</th>
            <th>Daha çok hangi amaçla?</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Düz ray bilezik</td><td>Düşük</td><td>Düşük</td><td>Birikim ve günlük kullanım</td></tr>
          <tr><td>Ajda (sade desenli)</td><td>Düşük – orta</td><td>Düşük – orta</td><td>Takı ve birikim</td></tr>
          <tr><td>Burma</td><td>Orta</td><td>Orta</td><td>Geleneksel takı</td></tr>
          <tr><td>Taşlı / minelli / yoğun desenli</td><td>Yüksek</td><td>Yüksek</td><td>Özel gün takısı</td></tr>
        </tbody>
      </table>
      <p>
        Tablodaki sınıflandırma genel bir çerçevedir; gerçek işçilik payı
        kuyumcuya, modele ve gramaja göre değişir.
      </p>

      <h2>Fiyat nasıl hesaplanır?</h2>
      <p>
        <strong>
          Bilezik fiyatı = Gramaj × (22 ayar gram fiyatı + gram başına işçilik)
        </strong>
      </p>
      <p>
        Örnek (varsayımsal rakamlarla): 20 gramlık bir bileziğin 22 ayar gram
        fiyatı 6.000 TL, gram başına işçilik 150 TL olsun. Altın değeri 20 ×
        6.000 = 120.000 TL, işçilik 20 × 150 = 3.000 TL, toplam{" "}
        <strong>123.000 TL</strong> eder. Aynı gün bozdurursanız kuyumcu 22 ayar
        <em> alış</em> fiyatı üzerinden ödeme yapar; 3.000 TL işçilik ve
        alış-satış farkı geri dönmez. Güncel{" "}
        <Link href="/altin/22-ayar-bilezik">22 ayar bilezik fiyatını</Link>{" "}
        sayfamızdan takip edebilirsiniz. Adım adım hesap için{" "}
        <Link href="/rehber/22-ayar-bilezik-hesaplama">
          22 ayar bilezik hesaplama
        </Link>{" "}
        rehberine bakın.
      </p>

      <h2>Alırken kontrol listesi</h2>
      <ol>
        <li><strong>Ayar damgası:</strong> 22 ayar için 916 veya 22K damgası okunur olmalı.</li>
        <li><strong>Tartım:</strong> Gramajı kendi gözünüzle tartıda görün.</li>
        <li><strong>Gram fiyatı ve işçiliği ayrı sorun:</strong> Tek rakam, karşılaştırmayı zorlaştırır.</li>
        <li><strong>Sağlamlık:</strong> Çatlak, lehim izi veya ezik olmamalı; içi boşsa kuyumcudan söylemesini isteyin.</li>
        <li><strong>Ölçü:</strong> Bileğe rahat girip çıkmalı; ölçü ayarı ücretini önceden öğrenin.</li>
        <li>
          <strong>Fatura:</strong> Gramaj, ayar ve işçilik faturada yazmalı;{" "}
          <Link href="/rehber/altin-alirken-fatura">nedenini burada</Link>{" "}
          açıkladık.
        </li>
      </ol>
      <p>
        Sadece birikim hedefliyorsanız işçiliği en düşük ürün bilezik değil,{" "}
        <Link href="/rehber/gram-altin-nedir">gram altındır</Link>. Bozdururken
        izlenecek yol için{" "}
        <Link href="/rehber/kuyumcuda-altin-bozdururken-dikkat">
          altın bozdururken dikkat edilecekler
        </Link>{" "}
        rehberine göz atın.
      </p>
    </GuideArticle>
  );
}
