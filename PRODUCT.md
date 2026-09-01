# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: Denizli halkından, altın veya döviz alıp satmadan önce güncel
fiyatı kontrol etmek isteyen ziyaretçiler. Bu ziyaretçi genelde tekrar
gelen (fiyat takibi alışkanlığı olan), mobil ağırlıklı bir kullanıcıdır.

Secondary: Denizli'deki kuyumcular — sitede reklam alanı satın alıp kendi
işletmelerini bu ziyaretçi trafiğine tanıtmak isteyen taraf. Reklam Ver
sayfası ve Kuyumcular dizini doğrudan bu kullanıcı için var.

Pamukkale turistleri ve çok dilli içerik şu an kapsam dışı bırakıldı;
ileride değerlendirilebilecek açık bir olasılık olarak not edildi, ürün
gerçeği olarak varsayılmadı.

## Product Purpose

Denizli'ye özel, bilgi/vitrin amaçlı bir portal sitesi: güncel altın ve
döviz fiyatlarını, altın/kuyumculuk konulu SEO rehber içeriklerini ve bir
Denizli kuyumcu dizinini bir arada sunar. Sitenin kendisi bir kuyumcu
değildir, ürün satmaz; e-ticaret veya online satış yoktur. Site, düzenli
ziyaretçi trafiği biriktirerek bu trafiği yerel kuyumculara reklam alanı
olarak satmayı hedefler.

## Positioning

Bigpara, Altınkaynak gibi ulusal genel finans/altın siteleri Denizli'ye
özel bir değer sunmaz; bireysel kuyumcu siteleri ise trafik toplayan bir
dizin/portal işlevi görmez. DenizliKuyumcu.com bu ikisinin arasında,
yerel arama niyetine (ör. "Denizli kuyumcu", "Denizli alyans") hizmet eden
ve bunu bir kuyumcu dizini + reklam envanterine çeviren tek yerel oyuncu
olmayı hedefler.

## Operating Context

Türkçe içerik, Türkiye altın/döviz piyasası bağlamı. Kullanıcı fiyat
kontrolü için günlük/haftalık geri dönebilir; bu yüzden sayfa hızı ve
güncel hissettiren fiyat gösterimi önemlidir.

## Capabilities and Constraints

- E-ticaret yok: sepet, ödeme, kargo, stok yönetimi kapsam dışı.
- Canlı fiyat verisi şu an **mock/sahte veri** (`src/lib/prices.ts`);
  gerçek bir veri sağlayıcısı henüz seçilmedi — açık/karara bağlanmamış.
- Next.js (App Router) + TypeScript + Tailwind CSS üzerine kurulu; bu
  kod tabanı zaten mevcut, stack kararı geri açılmayacak.
- Reklam sistemi (`src/lib/ads.ts`) şu an kod içi config; DB veya admin
  paneli yok. Kuyumcu dizini (`src/lib/jewelers.ts`) de aynı şekilde.
- Boş reklam alanları, "reklamınız burada olabilir" satış çağrısına
  dönüşecek şekilde tasarlanmalı (zaten uygulanmış bir prensip).
- Fiyatların "bilgilendirme amaçlıdır, yatırım tavsiyesi değildir"
  uyarısıyla sunulması gerekiyor — hukuki/güven gerekliliği.
- Kuyumcu haritası (interaktif/embed) **bilinçli olarak yapılmadı**:
  `lib/jewelers.ts`'deki kayıtlarda adres/koordinat yok, hepsi demo veri.
  Gerçek kuyumcu kayıtları (gerçek adres/koordinatlarla) eklendiğinde
  tekrar gündeme gelecek bir açık madde — kullanıcı onayladı (bkz. konuşma
  geçmişi).

## Brand Commitments

İsim sabit: **DenizliKuyumcu.com**. Logo, marka rengi veya görsel kimlik
henüz belirlenmedi.

## Evidence on Hand

Şu an elde gerçek/somut hiçbir varlık yok: anlaşmalı kuyumcu yok, logo
yok, marka rengi tercihi yok. `src/lib/jewelers.ts` içindeki kuyumcu
kayıtları ve `reklam-ver` sayfasındaki iletişim bilgileri **açıkça
işaretlenmiş demo/placeholder** verilerdir — gerçek işletme olarak
sunulmamalı, gelecekteki çalışmalar bunları gerçekmiş gibi
genişletmemeli veya yeni sahte kayıtlar uydurmamalı.

## Product Principles

1. Güven önce gelir — fiyatların bilgi amaçlı olduğu her zaman açık
   olmalı; kesin alım-satım fiyatı için kuyumcuyla iletişime yönlendirme
   korunmalı.
2. Yerel odak — ulusal/genel içerikle rekabet etmek yerine Denizli'ye
   özgü değer (yerel dizin, yerel arama niyeti) önceliklendirilir.
3. Boş envanter asla boş görünmemeli — her reklam alanı ya bir reklamı
   ya da bir satış çağrısını göstermeli.
4. Trafik önce, monetizasyon sonra — reklam satışı için önce gerçek,
   tekrar eden ziyaretçi trafiği kurulmalı.
