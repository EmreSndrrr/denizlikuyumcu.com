import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "DenizliKuyumcu.com çerez (cookie) kullanımı hakkında bilgilendirme: hangi veriler localStorage'da tutulur, tercih bildirimi nasıl çalışır?",
  alternates: { canonical: "/cerez-politikasi" },
};

export default function CerezPolitikasiPage() {
  return (
    <LegalPage title="Çerez Politikası" updated="Eylül 2026">
      <p>
        DenizliKuyumcu.com <strong>reklam hedefleme çerezi kullanmaz</strong>.
        Ziyaretçi istatistiği için iki araç kullanıyoruz: biri çerezsiz
        çalışır ve her zaman açıktır, diğeri çerez yazar ve{" "}
        <strong>yalnızca siz onay verirseniz</strong> çalışır. İkisi de
        aşağıda ayrı ayrı açıklanıyor.
      </p>
      <h2>Google Analytics (çerezli — onayınıza bağlı)</h2>
      <p>
        Sayfalarımızın nasıl kullanıldığını daha ayrıntılı ölçmek için{" "}
        <strong>Google Analytics 4</strong> kullanıyoruz. Bu araç
        tarayıcınıza <code>_ga</code> ve <code>_ga_&lt;ölçüm-kimliği&gt;</code>{" "}
        adlı çerezleri yazar; bu çerezler cihazınıza rastgele bir tanımlayıcı
        atayarak aynı ziyaretçinin farklı sayfa görüntülemelerini
        ilişkilendirir. Varsayılan saklama süresi iki yıldır.
      </p>
      <p>
        <strong>Bu çerezler ancak siz açıkça &quot;Kabul Ediyorum&quot;
        derseniz yazılır.</strong> Reddederseniz veya hiçbir seçim
        yapmazsanız Google Analytics betiği tarayıcınıza hiç indirilmez —
        yalnızca &quot;engellenmiş&quot; olmaz, hiç yüklenmez. Verileri
        Google Ireland Limited işler; bu kapsamda verileriniz yurt dışına
        aktarılmış olur.
      </p>
      <p>
        Onayınızı istediğiniz zaman geri alabilirsiniz: sayfanın en altındaki{" "}
        <strong>Çerez Tercihleri</strong> bağlantısına tıklamanız yeterli.
        Tercih bildirimi yeniden açılır, Analytics bir daha yüklenmez ve
        daha önce yazılmış <code>_ga</code> çerezleri{" "}
        <strong>tarafımızca silinir</strong> — ayrıca bir şey yapmanız
        gerekmez.
      </p>
      <h2>Vercel Web Analytics (çerezsiz)</h2>
      <p>
        Hangi sayfaların ne kadar ziyaret edildiğini görmek için ayrıca{" "}
        <strong>Vercel Web Analytics</strong> kullanıyoruz. Bu araç çerez
        kullanmaz, kalıcı bir tanımlayıcı oluşturmaz ve IP adresinizi ham
        haliyle saklamaz; yalnızca toplu/anonim sayımlar (sayfa görüntüleme,
        ülke, cihaz türü) üretir. Çerez yazmadığı için onaydan bağımsız
        çalışır. Ayrıntı için{" "}
        <a href="/gizlilik-politikasi">Gizlilik Politikası</a>&apos;na
        bakabilirsiniz.
      </p>
      <h2>Peki tema tercihim nasıl hatırlanıyor?</h2>
      <p>
        Açık/koyu tema tercihiniz ve altın tablosunda işaretlediğiniz favori
        ürünler, çerez yerine tarayıcınızın{" "}
        <strong>localStorage</strong> adı verilen yerel depolama alanında
        tutulur. Teknik olarak çerezden farklıdır: sunucumuza otomatik olarak
        gönderilmez, yalnızca sizin cihazınızda kalır ve tarayıcı verilerinizi
        temizlediğinizde silinir. Ayrıntı için{" "}
        <a href="/gizlilik-politikasi">Gizlilik Politikası</a> sayfasına
        bakabilirsiniz.
      </p>
      <h2>Neden bir çerez tercihi bildirimi görüyorum?</h2>
      <p>
        Sitede ilk ziyaretinizde ekranın altında bir tercih bildirimi
        belirir. Bu bildirim yukarıda anlatılan Google Analytics çerezleri
        içindir: seçiminiz alınana kadar hiçbir izleme çerezi yazılmaz ve
        varsayılan davranış <strong>reddetmektir</strong>. Bildirimi
        kapatmanız da reddetmek sayılır. Seçiminiz tarayıcınızın yerel
        depolama alanında saklanır ki her ziyarette tekrar sorulmasın.
      </p>
      <p>
        Daha önce bu siteye çerez tercihi bildirmiş olsanız bile bildirimi
        yeniden görmüş olabilirsiniz. Bunun sebebi, eski tercihin Google
        Analytics eklenmeden önce — yani ortada onaylanacak gerçek bir
        izleme çerezi yokken — alınmış olmasıdır. O tercihi yeni durum için
        geçerli bir onay saymadık ve herkese yeniden sorduk.
      </p>
      <h2>İleride değişirse?</h2>
      <p>
        Çerez kullanan yeni bir servis eklersek bu sayfa güncellenecek ve
        tercih bildirimi buna göre yeniden gösterilecektir.
      </p>
    </LegalPage>
  );
}
