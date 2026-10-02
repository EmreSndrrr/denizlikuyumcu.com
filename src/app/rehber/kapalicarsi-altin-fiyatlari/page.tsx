import type { Metadata } from "next";
import Link from "next/link";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Kapalıçarşı Altın Fiyatları Nedir? Denizli ile Farkı",
  description:
    "Kapalıçarşı altın fiyatları neden referans kabul edilir, nasıl oluşur? Denizli'deki kuyumcu fiyatlarıyla farkın nedenleri ve dikkat edilecekler.",
  alternates: { canonical: "/rehber/kapalicarsi-altin-fiyatlari" },
};

export default function Page() {
  return (
    <GuideArticle
      title="Kapalıçarşı Altın Fiyatları Nedir?"
      intro="Kapalıçarşı altın fiyatları, İstanbul'daki tarihî Kapalıçarşı ve çevresindeki toptan altın piyasasında oluşan, Türkiye genelinde referans alınan serbest piyasa fiyatlarıdır. Denizli'deki bir kuyumcunun fiyatı bu referansı yakından izler ama birebir aynı olmaz; işçilik, taşıma, stok maliyeti ve kâr payı nedeniyle küçük farklar doğaldır."
      updated="Ekim 2026"
      datePublished="2026-10-01"
      slug="kapalicarsi-altin-fiyatlari"
      faq={[
        {
          question: "Kapalıçarşı altın fiyatları Denizli'de geçerli mi?",
          answer:
            "Doğrudan değil, referans olarak geçerlidir. Denizli'deki kuyumcular fiyatlarını bu serbest piyasa fiyatına göre belirler ama üzerine işçilik, taşıma, stok maliyeti ve kâr payı ekleyebilir. Bu yüzden Denizli'deki fiyatlar Kapalıçarşı fiyatına yakın seyreder, birebir aynı olmaz.",
        },
        {
          question: "Kapalıçarşı'dan altın almak daha mı ucuz?",
          answer:
            "Toptan piyasaya yakınlık ve yoğun rekabet nedeniyle bazı ürünlerde fark küçük de olsa avantaj yaratabilir. Ancak ulaşım, zaman ve güvenlik maliyetleri hesaba katıldığında, yerel bir kuyumcudan faturalı alım çoğu durumda daha pratiktir. Asıl karşılaştırılması gereken, aynı ürün için alış ve satış fiyatlarıdır.",
        },
        {
          question: "Ekranlarda 'Kapalıçarşı fiyatı' diye geçen rakam nereden geliyor?",
          answer:
            "Finans siteleri ve veri sağlayıcılar serbest piyasadaki işlemlerden derledikleri fiyatları yayımlar. Bu fiyatlar kaynaktan kaynağa küçük farklar gösterebilir ve belirli bir işletmenin tezgâh fiyatı değildir. Her zaman fiyatın hangi saate ait olduğuna bakın.",
        },
      ]}
      related={[
        { href: "/rehber/altin-kuru-nedir", title: "Altın kuru nedir?" },
        { href: "/rehber/altin-fiyatlari-neden-degisir", title: "Altın fiyatları neden değişir?" },
        { href: "/rehber/altin-alirken-fatura", title: "Altın alırken fatura alınmalı mı?" },
      ]}
    >
      <h2>Kapalıçarşı neden altın fiyatında referans?</h2>
      <p>
        İstanbul&apos;un Fatih ilçesindeki Kapalıçarşı, 15. yüzyılda Fatih Sultan
        Mehmed döneminde inşasına başlanan ve dünyanın en eski kapalı çarşıları
        arasında sayılan tarihî bir ticaret merkezidir. Yüzyıllar boyunca
        kuyumculuğun ve altın ticaretinin kalbi oldu; bugün de çarşı ve
        çevresinde kuyumcular, toptancılar, altın atölyeleri ve döviz
        büroları bir arada çalışır.
      </p>
      <p>
        Bu yoğunluk, çarşıyı Türkiye&apos;deki fiziki altın ticaretinin en büyük
        merkezlerinden biri yapar. Çok sayıda alıcı ve satıcının aynı anda
        işlem yaptığı bir piyasada oluşan fiyat, ülke genelindeki kuyumcular
        için doğal bir referans hâline gelir. &quot;Kapalıçarşı fiyatı&quot;
        ifadesi de zamanla &quot;serbest piyasa altın fiyatı&quot; ile eş anlamlı
        kullanılmaya başlandı.
      </p>
      <p>
        Bunun yanında Borsa İstanbul bünyesinde de kıymetli madenlerin işlem
        gördüğü kurumsal bir piyasa bulunur. Gündelik dilde ise bireysel altın
        alım-satımında baz alınan fiyat için en yaygın ifade hâlâ
        &quot;Kapalıçarşı fiyatı&quot;dır.
      </p>

      <h2>Kapalıçarşı altın fiyatı nasıl oluşur?</h2>
      <p>
        Serbest piyasa fiyatı, diğer tüm altın fiyatları gibi temelde iki
        değişkene dayanır: uluslararası <Link href="/altin/ons-altin">ons altın fiyatı</Link>{" "}
        ve <Link href="/doviz/dolar">dolar/TL kuru</Link>. Bu ikisinin
        çarpımından türeyen teorik fiyat, piyasadaki arz ve talebe göre küçük
        primlerle ya da iskontolarla işlem görür. Yurt içinde fiziki altına talep
        arttığında (örneğin belirsizlik dönemlerinde) iç piyasa fiyatı
        uluslararası fiyatın bir miktar üzerine çıkabilir.
      </p>
      <p>
        Fiyatı etkileyen etkenlerin tamamını{" "}
        <Link href="/rehber/altin-fiyatlari-neden-degisir">
          altın fiyatları neden değişir
        </Link>{" "}
        rehberinde tek tek ele aldık.
      </p>

      <h2>Denizli&apos;deki fiyatlar neden farklı olabilir?</h2>
      <p>
        Denizli&apos;deki kuyumcular fiyatlarını bu referansa göre belirler. Ama
        tezgâhta gördüğünüz fiyat, referans fiyata şunların eklenmesiyle
        oluşur:
      </p>
      <ul>
        <li>
          <strong>İşçilik:</strong> Bilezik, set, kolye gibi işlenmiş ürünlerde
          üretim maliyeti. Gram altında çok düşük, desenli bileziklerde
          yüksektir.
        </li>
        <li>
          <strong>Basım primi:</strong> Çeyrek, yarım, tam gibi ziynet
          altınlarda has altın değerinin üzerine eklenen küçük pay.
        </li>
        <li>
          <strong>Taşıma ve sigorta:</strong> Ürünün toptan piyasadan şehre
          güvenli şekilde getirilmesinin maliyeti.
        </li>
        <li>
          <strong>Stok maliyeti:</strong> Kuyumcu vitrindeki ürünü bugünkü
          fiyattan değil, aldığı günkü fiyattan finanse etmiştir.
        </li>
        <li>
          <strong>Makas ve kâr payı:</strong> İşletmenin gideri ve fiyat
          değişim riskine karşı tuttuğu fark.
        </li>
      </ul>
      <p>
        Bu kalemlerin her biri genellikle küçüktür; toplamı da ürünün türüne
        göre değişir. Gram altında referansla kuyumcu fiyatı arasındaki fark en
        dar, işlenmiş takılarda en geniştir.
      </p>

      <h2>Bir örnekle</h2>
      <p>
        Rakamlar yalnızca mantığı göstermek içindir. Serbest piyasada 1 gram 22
        ayar altının değeri 6.000 TL olsun ve 15 gramlık bir bilezik almak
        isteyin:
      </p>
      <table>
        <thead>
          <tr>
            <th>Kalem</th>
            <th>Hesap</th>
            <th>Tutar</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Altın değeri</td><td>15 g × 6.000 TL</td><td>90.000 TL</td></tr>
          <tr><td>İşçilik (örnek %4)</td><td>90.000 × 0,04</td><td>3.600 TL</td></tr>
          <tr><td><strong>Toplam</strong></td><td></td><td><strong>93.600 TL</strong></td></tr>
        </tbody>
      </table>
      <p>
        Aynı bilezik başka bir kuyumcuda farklı bir işçilik oranıyla
        fiyatlanabilir. Bu yüzden karşılaştırma yaparken toplam fiyatı değil,{" "}
        <strong>gram fiyatı ile işçiliği ayrı ayrı</strong> sormak daha net
        sonuç verir. İşçiliğin nasıl hesaplandığını{" "}
        <Link href="/rehber/bilezikte-iscilik-hesaplama">bu rehberde</Link>{" "}
        anlattık.
      </p>

      <h2>Denizli&apos;de alışveriş yaparken</h2>
      <ul>
        <li>
          Birkaç kuyumcunun aynı ürün için verdiği <strong>alış ve satış</strong>{" "}
          fiyatını karşılaştırın; yalnızca satış fiyatına bakmak yanıltabilir.
        </li>
        <li>Ayar damgasını (24 ayar için 995 veya 999,9; 22 ayar için 916) kontrol edin.</li>
        <li>Tartımı kendi gözünüzle görün ve gramajı faturaya yazdırın.</li>
        <li>
          Faturasız alım yapmayın; neden önemli olduğunu{" "}
          <Link href="/rehber/altin-alirken-fatura">burada</Link> açıkladık.
        </li>
      </ul>
      <p>
        Denizli&apos;de kuyumcuların yoğunlaştığı bölgeleri{" "}
        <Link href="/kuyumcular">Denizli kuyumcuları</Link> sayfasında
        bulabilirsiniz.
      </p>

      <h2>Bu sitedeki fiyatlar Kapalıçarşı fiyatı mı?</h2>
      <p>
        DenizliKuyumcu.com&apos;daki fiyatlar finans.truncgil.com kaynağından
        alınan <strong>serbest piyasa referans fiyatlarıdır</strong>. Belirli
        bir kuyumcunun ya da Kapalıçarşı&apos;daki tek bir işletmenin tezgâh
        fiyatı değildir. Veriler kaynağında piyasa açıkken yaklaşık 15 dakikada
        bir güncellenir ve her bölümde son güncelleme saati yazar. Güncel
        fiyatların tamamını{" "}
        <Link href="/#altin-fiyatlari">anasayfadaki tabloda</Link>{" "}
        görebilirsiniz.
      </p>
    </GuideArticle>
  );
}
