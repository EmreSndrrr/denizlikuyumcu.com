// Her altın/döviz kalemi için ayrı bir SEO sayfası (/altin/[slug] veya
// /doviz/[slug]) üretiyoruz — bkz. src/app/altin/[slug]/page.tsx ve
// src/app/doviz/[slug]/page.tsx. Bu dosya o sayfaların İÇERİĞİNİ (meta
// başlık, anahtar kelime, tanıtım metni, SEO gövde metni) `lib/prices.ts`
// içindeki `key`lere eşliyor. Fiyatların KENDİSİ hâlâ tek kaynaktan
// (getPrices) geliyor — burada sadece metin/URL bilgisi tutuluyor, mock
// veya gerçek hiçbir sayısal değer burada YOK.
//
// Yeni bir fiyat kalemi (`lib/prices.ts`'e yeni bir `key`) eklendiğinde bu
// dizine de bir girdi eklenmezse, o kalem detay sayfası olmadan (sadece
// tablolarda) görünmeye devam eder — sayfa oluşturmak zorunlu değil ama
// tutarlılık için önerilir.

export type PriceCategory = "altin" | "doviz";

export type PriceContentEntry = {
  key: string;
  slug: string;
  category: PriceCategory;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  keyword: string;
  intro: string;
  // Tek bloklu, ~130-170 kelimelik özet paragraf — makale gövdesinin en
  // başında yer alır. Amaç GEO (AI Overviews/ChatGPT/Perplexity gibi
  // araçların doğrudan alıntılayabileceği, bağlamdan bağımsız okunabilir
  // bir pasaj) ve hem Denizli'ye özgü hem de genel (Denizli geçmeyen)
  // aramalarda doğal anahtar kelime kapsamı sağlamak.
  summary: string;
  sections: { heading: string; body: string }[];
  // İlgili bir rehber makalesine iç bağlantı (yalnızca doğrudan konu
  // örtüşmesi olan kalemlerde dolu — ör. ayar sayfaları <-> altın ayarı
  // rehberi). Çift yönlü: karşı taraftaki rehber sayfası da buraya geri
  // bağlantı verir (bkz. rehber/*/page.tsx).
  relatedGuide?: { href: string; label: string };
};

export const priceContent: PriceContentEntry[] = [
  {
    key: "gram-altin",
    slug: "gram-altin",
    category: "altin",
    metaTitle: "Denizli Gram Altın Fiyatı",
    metaDescription:
      "Denizli gram altın fiyatı canlı olarak güncellenir. Anlık alış/satış fiyatlarını, gram altının ne olduğunu ve fiyatını neyin belirlediğini öğrenin.",
    h1: "Denizli Gram Altın Fiyatı",
    keyword: "denizli gram altın fiyatı",
    intro:
      "Gram altın, has değeri en yüksek ve en kolay nakde çevrilebilen altın türlerinden biridir. Aşağıda Denizli gram altın fiyatını canlı olarak, alış ve satış olmak üzere ayrı ayrı görebilirsiniz.",
    summary:
      "Denizli gram altın fiyatı, güncel piyasa koşullarına göre saniyeler içinde değişebilen, Türkiye'nin en çok takip edilen yatırım araçlarından biridir. Gram altın fiyatı temelde iki değişkene bağlıdır: uluslararası ons altın fiyatı ve dolar/TL kuru; bu ikisinin çarpımı yaklaşık 31,1'e bölünerek gram altın değeri elde edilir. Denizli'de gram altın alıp satan kuyumcular da bu referans fiyatın üzerine kendi işçilik ve kâr marjlarını ekler, bu yüzden kuyumcudan kuyumcuya küçük farklar görmeniz normaldir. Bu sayfada gram altın fiyatını alış ve satış olarak ayrı ayrı, yaklaşık her 60 saniyede bir güncellenen canlı verilerle takip edebilir, aynı zamanda aşağıdaki hesaplama aracıyla elinizdeki gram miktarının güncel karşılığını anında öğrenebilirsiniz. Yatırım kararı vermeden önce güncel fiyatı mutlaka kuyumcunuzla teyit edin.",
    sections: [
      {
        heading: "Gram Altın Nedir?",
        body: "Gram altın, genellikle 995 milyem (yaklaşık %99,5 saflıkta) has altından üretilen, işçilik farkı taşımayan yatırımlık bir altın türüdür. Ziynet altınlarının (çeyrek, yarım, tam) aksine üzerinde bir tasarım veya baskı bulunmaz; bu yüzden alım-satımında işçilik ya da nadir sikke primi gibi ek maliyetler devreye girmez ve fiyatı doğrudan güncel piyasa değerini yansıtır. Bu nedenle küçük veya büyük miktarlarda altın biriktirmek isteyenlerin en sık tercih ettiği türdür.",
      },
      {
        heading: "Gram Altın Fiyatını Ne Belirler?",
        body: "Gram altın fiyatı iki ana bileşenden oluşur: uluslararası piyasada dolar bazında işlem gören ons altın fiyatı ve o anki dolar/TL kuru. Ons altındaki bir yükseliş veya dolar kurundaki bir artış, gram altın fiyatını doğrudan yukarı çeker. Bu yüzden Denizli'de gram altın fiyatını takip ederken yalnızca yerel arz-talebe değil, küresel piyasalara ve kur hareketlerine de bakmak gerekir. Sayfamızdaki fiyat, bu iki bileşenin güncel yansımasıdır ve yaklaşık her 60 saniyede bir tazelenir.",
      },
      {
        heading: "Denizli'de Gram Altın Alırken Nelere Dikkat Edilmeli?",
        body: "Gram altın alırken kuyumcunun ayar damgasını ve faturasını mutlaka isteyin; bu hem ürünün gerçekliğini hem de ileride geri satarken sorun yaşamamanızı garanti eder. Fiyat, kuyumcudan kuyumcuya küçük farklılıklar gösterebilir — bu farkın büyük kısmı işletme kâr marjından gelir. Alım öncesi bu sayfadaki güncel fiyatla kuyumcunun teklifini karşılaştırmak, makul bir aralıkta olup olmadığını görmenize yardımcı olur.",
      },
    ],
    relatedGuide: {
      href: "/rehber/gram-altin-hesaplama",
      label: "Gram Altın Fiyatı Nasıl Hesaplanır?",
    },
  },
  {
    key: "ceyrek-altin",
    slug: "ceyrek-altin",
    category: "altin",
    metaTitle: "Denizli Çeyrek Altın Fiyatı",
    metaDescription:
      "Denizli çeyrek altın fiyatı canlı olarak güncellenir. Çeyrek altının gramajı, kullanım alanları ve güncel alış/satış fiyatları burada.",
    h1: "Denizli Çeyrek Altın Fiyatı",
    keyword: "denizli çeyrek altın fiyatı",
    intro:
      "Çeyrek altın, Türkiye'de düğün, nişan ve doğum gibi özel günlerde en sık hediye edilen ziynet altınıdır. Denizli çeyrek altın fiyatını aşağıda anlık olarak takip edebilirsiniz.",
    summary:
      "Denizli çeyrek altın fiyatı, düğün, nişan ve altın günü gibi geleneksel günlerde en sık hediye edilen ziynet altınının güncel karşılığıdır. Çeyrek altın adını Osmanlı lirasının dörtte biri olmasından alır ve yaklaşık 1,75 gram has altın içerir; bu yüzden fiyatı büyük ölçüde gram altın fiyatının 1,75 katına yakın seyreder, üzerine basım ve nadirlik payı gibi küçük bir prim eklenebilir. Çeyrek altın fiyatı arattığınızda karşınıza çıkan rakamlar genellikle ulusal ortalamayı yansıtır; Denizli'de kuyumcudan kuyumcuya işçilik farkı nedeniyle birkaç TL'lik sapmalar olabilir. Bu sayfada çeyrek altın alış ve satış fiyatını canlı olarak, gram altınla birlikte anlık takip edebilir, kaç adet çeyrek altının güncel karşılığını hesaplama aracıyla saniyeler içinde öğrenebilirsiniz. Kesin fiyat için kuyumcunuzla görüşmenizi öneririz.",
    sections: [
      {
        heading: "Çeyrek Altın Nedir, Kaç Gram?",
        body: "Çeyrek altın, adını 'lira'nın dörtte biri' olmasından alır ve yaklaşık 1,75 gram has altın içerir. Üzerinde basılı yıl ve figürler taşıyan bir sikke formudur; bu yüzden gram altından farklı olarak basım ve nadirlik payı (nadir olan yıllarda birkaç TL'lik bir fark) fiyata küçük bir prim olarak yansıyabilir. Yine de büyük çoğunlukla fiyatı, gram altın fiyatının 1,75 katına yakın seyreder.",
      },
      {
        heading: "Çeyrek Altın Ne Zaman Hediye Edilir?",
        body: "Türkiye'de çeyiz, nişan ve düğün takı setlerinin (kolye, bilezik, küpe) yanında; toplu takılan 'altın günleri'nde ve doğum hediyelerinde çeyrek altın klasik bir tercihtir. Küçük gramajı sayesinde hem hediye etmesi hem de biriktirmesi kolaydır — bu da onu Denizli'deki kuyumcularda en sık sorulan kalemlerden biri yapar.",
      },
      {
        heading: "Fiyatı Gram Altından Nasıl Farklılaşır?",
        body: "Çeyrek altının fiyatı gram altınla aynı has altın değerine dayansa da, basılı sikke olması nedeniyle bazı dönemlerde küçük bir 'darphane farkı' (arz kıtlığı, eski yıl basımı gibi nedenlerle) oluşabilir. Bu fark genelde birkaç TL ile sınırlıdır ve büyük resimde çeyrek altın fiyatı, gram altın fiyatına sıkı sıkıya bağlı kalır.",
      },
    ],
  },
  {
    key: "yarim-altin",
    slug: "yarim-altin",
    category: "altin",
    metaTitle: "Denizli Yarım Altın Fiyatı",
    metaDescription:
      "Denizli yarım altın fiyatı canlı olarak güncellenir. Yarım altının gramajı, çeyrek altınla farkı ve güncel fiyatları burada.",
    h1: "Denizli Yarım Altın Fiyatı",
    keyword: "denizli yarım altın fiyatı",
    intro:
      "Yarım altın, çeyrek altının iki katı ağırlığındaki ziynet altınıdır ve orta büyüklükteki hediye/yatırım ihtiyaçları için tercih edilir. Güncel Denizli yarım altın fiyatını aşağıda bulabilirsiniz.",
    summary:
      "Denizli yarım altın fiyatı, çeyrek altının tam iki katı ağırlığındaki ziynet altınının güncel piyasa karşılığıdır. Yaklaşık 3,5 gram has altın içeren yarım altın, hem hediye hem de orta ölçekli yatırım ihtiyaçları için tercih edilir ve fiyatı gram altın fiyatının yaklaşık 3,5 katına yakın seyreder. Türkiye genelinde yarım altın fiyatı arandığında çıkan rakamlar piyasa ortalamasını yansıtır; Denizli'deki kuyumcularda işçilik ve talebe bağlı küçük farklar görülebilir. Bu sayfada yarım altın alış/satış fiyatını gram altınla birlikte, yaklaşık her dakika yenilenen canlı verilerle takip edebilir, elinizdeki veya almayı düşündüğünüz yarım altın adedinin güncel TL karşılığını hesaplama aracıyla anında görebilirsiniz. Fiyatlar bilgilendirme amaçlıdır; kesin alım-satım için kuyumcuyla iletişime geçilmesi önerilir.",
    sections: [
      {
        heading: "Yarım Altın Kaç Gram?",
        body: "Yarım altın yaklaşık 3,5 gram has altın içerir — yani tam olarak çeyrek altının iki katı. Çeyrek altınla aynı sikke ailesine ait olduğu için fiyatı da benzer mantıkla, gram altın fiyatının yaklaşık 3,5 katına yakın seyreder.",
      },
      {
        heading: "Yarım Altın Ne Zaman Tercih Edilir?",
        body: "Çeyrek altına göre daha yüksek bir değeri tek parçada vermek isteyenler (örneğin düğünde daha büyük bir hediye) yarım altını tercih eder. Aynı zamanda çeyrek ve tam altın arasında esnek bir yatırım büyüklüğü arayanlar için de dengeli bir seçenektir.",
      },
      {
        heading: "Denizli'de Yarım Altın Fiyatı Nasıl Takip Edilir?",
        body: "Yarım altın fiyatı, sayfamızda gram altınla birlikte ve aynı kaynaktan (piyasa fiyatı + kur) türetilerek anlık güncellenir. Kuyumcudan kuyumcuya küçük fiyat farkları normaldir; alım öncesi güncel referans fiyatla karşılaştırma yapmanızı öneririz.",
      },
    ],
  },
  {
    key: "tam-altin",
    slug: "tam-altin",
    category: "altin",
    metaTitle: "Denizli Tam Altın Fiyatı",
    metaDescription:
      "Denizli tam altın fiyatı canlı olarak güncellenir. Tam altının gramajı, kullanım alanları ve anlık alış/satış fiyatları burada.",
    h1: "Denizli Tam Altın Fiyatı",
    keyword: "denizli tam altın fiyatı",
    intro:
      "Tam altın, ziynet altınları arasında en büyük gramajlı ve en yüksek değerli sikke türüdür. Denizli tam altın fiyatını aşağıdan anlık olarak takip edebilirsiniz.",
    summary:
      "Denizli tam altın fiyatı, ziynet altınları arasında en yüksek gramajlı ve en çok tercih edilen sikke türlerinden birinin güncel karşılığıdır. Tam altın yaklaşık 7 gram has altın içerir — çeyrek altının tam dört katı — ve büyük düğün takı setlerinde veya tek seferde yüksek tutarlı yatırım yapmak isteyenlerde öne çıkar. Tam altın fiyatı ülke genelinde piyasa ortalamasına göre şekillenir; Denizli'deki kuyumcularda işçilik farkı nedeniyle küçük sapmalar görülebilir. Bu sayfada tam altın alış ve satış fiyatını gram altınla birlikte canlı olarak takip edebilir, hesaplama aracıyla istediğiniz adetteki tam altının güncel TL karşılığını anında hesaplayabilirsiniz. Yüksek gramajı nedeniyle alım-satımda kuyumcudan fatura ve ayar damgası istemeniz, ileride olası bir geri satışta sorun yaşamamanız için önemlidir.",
    sections: [
      {
        heading: "Tam Altın Kaç Gram?",
        body: "Tam altın yaklaşık 7 gram has altın içerir — çeyrek altının tam 4 katı. Büyük düğün takı setlerinde, önemli hediyelerde veya tek seferde daha yüksek tutarlı bir altın yatırımı yapmak isteyenlerde tercih edilir.",
      },
      {
        heading: "Tam Altın mı, 4 Çeyrek mi?",
        body: "Aynı toplam gramajda olduğu için tam altın ile 4 adet çeyrek altın arasındaki toplam değer birbirine çok yakındır; tercih genelde pratiklik meselesidir — tek parça mı, yoksa bölünebilir küçük parçalar mı istendiğine bağlıdır. Hediye olarak tek parça tam altın vermek daha 'gösterişli' kabul edilirken, çeyrek altınlar paylaştırmaya daha uygundur.",
      },
      {
        heading: "Denizli'de Tam Altın Alım-Satımı",
        body: "Tam altın, yüksek gramajı nedeniyle alım-satımda dikkatli olunması gereken bir kalemdir; kuyumcudan mutlaka fatura ve ayar damgası talep edin. Bu sayfadaki fiyat, gram altın fiyatının güncel piyasa değerine göre türetilir ve yaklaşık dakikada bir yenilenir.",
      },
    ],
  },
  {
    key: "cumhuriyet-altini",
    slug: "cumhuriyet-altini",
    category: "altin",
    metaTitle: "Denizli Cumhuriyet Altını Fiyatı",
    metaDescription:
      "Denizli Cumhuriyet altını fiyatı canlı olarak güncellenir. Cumhuriyet altınının özellikleri, gramajı ve anlık fiyatları burada.",
    h1: "Denizli Cumhuriyet Altını Fiyatı",
    keyword: "denizli cumhuriyet altını fiyatı",
    intro:
      "Cumhuriyet Altını, üzerinde Mustafa Kemal Atatürk portresi bulunan, Türkiye Cumhuriyeti Darphanesi tarafından basılan en bilinen külçe/hatıra sikkedir. Güncel Denizli Cumhuriyet altını fiyatını aşağıda bulabilirsiniz.",
    summary:
      "Denizli Cumhuriyet altını fiyatı, üzerinde Mustafa Kemal Atatürk portresi bulunan ve Türkiye Cumhuriyeti Darphanesi tarafından basılan bu tarihi sikkenin güncel piyasa karşılığıdır. Tam altınla benzer gramaja (yaklaşık 7,2 gram has altın) sahip olan Cumhuriyet altını, hem yatırım hem koleksiyon değeri taşıması nedeniyle Türkiye'de en çok aranan altın türlerinden biridir. Cumhuriyet altını fiyatı genel olarak gram altın ve ons altın hareketleriyle paralel seyreder; basım kalitesi ve tanınırlığı nedeniyle bazı dönemlerde hafif bir prim oluşabilir. Bu sayfada Cumhuriyet altını alış/satış fiyatını canlı olarak takip edebilir, sahip olduğunuz veya almayı planladığınız adet için güncel TL karşılığını hesaplama aracıyla anında öğrenebilirsiniz. Denizli'deki kuyumcularda fiyat farkları normaldir; kesin işlem öncesi teyit almanızı öneririz.",
    sections: [
      {
        heading: "Cumhuriyet Altını Nedir?",
        body: "Cumhuriyet Altını, tam altınla benzer gramaja (yaklaşık 7,2 gram) sahip, ancak Cumhuriyet dönemine özgü tasarımıyla ayrışan bir sikkedir. Hem yatırım hem de hatıra/koleksiyon değeri taşıması, onu Türkiye'de en çok talep edilen altın türlerinden biri yapar.",
      },
      {
        heading: "Cumhuriyet Altını ile Tam Altın Farkı",
        body: "İkisi de yaklaşık aynı gramaja sahip olsa da Cumhuriyet Altını'nın basım kalitesi ve tanınırlığı nedeniyle bazı dönemlerde gram altına göre hafif bir prim taşıyabilir. Yine de günlük fiyat hareketleri büyük ölçüde ortak piyasa dinamiklerini (ons altın + dolar kuru) takip eder.",
      },
      {
        heading: "Denizli'de Cumhuriyet Altını Talebi",
        body: "Cumhuriyet Altını, hem düğün/hediye amaçlı hem de uzun vadeli yatırım amaçlı olarak Denizli'deki kuyumcularda sürekli talep gören bir kalemdir. Güncel fiyatı bu sayfada gram altınla birlikte canlı olarak takip edebilirsiniz.",
      },
    ],
  },
  {
    key: "22-ayar-bilezik",
    slug: "22-ayar-bilezik",
    category: "altin",
    metaTitle: "Denizli 22 Ayar Bilezik Fiyatı",
    metaDescription:
      "Denizli 22 ayar bilezik gram fiyatı canlı olarak güncellenir. 22 ayarın has değeri, işçilik farkı ve anlık fiyatları burada.",
    h1: "Denizli 22 Ayar Bilezik Fiyatı",
    keyword: "denizli 22 ayar bilezik fiyatı",
    intro:
      "22 ayar altın, süs eşyası (bilezik, kolye, set) üretiminde en yaygın kullanılan ayar seviyesidir. Denizli 22 ayar bilezik gram fiyatını aşağıda canlı olarak görebilirsiniz.",
    summary:
      "Denizli 22 ayar bilezik fiyatı, süs eşyası üretiminde en yaygın kullanılan ayar seviyesinin gram başına güncel karşılığıdır. 22 ayar altın yaklaşık 916 milyemdir, yani %91,6 saf altın içerir; geri kalanı dayanıklılığı artırmak için eklenen bakır veya gümüş gibi metallerdir. 22 ayar bilezik fiyatı, hem 916 milyem has değerinden hem de üretim/işçilik maliyetinden etkilendiği için 24 ayar gram altın fiyatından farklıdır — sayfamızdaki rakam işçiliksiz piyasa değerini yansıtır, kuyumcudaki nihai etiket fiyatına tasarım ve işçilik bedeli ayrıca eklenir. 22 ayar bilezik veya set alırken ayar damgasını (916 ya da 22K ibaresi) kontrol etmek ve fatura istemek önemlidir. Bu sayfada güncel 22 ayar gram fiyatını canlı olarak takip edebilir, hesaplama aracıyla kaç gramlık bileziğinizin güncel değerini anında öğrenebilirsiniz.",
    sections: [
      {
        heading: "22 Ayar Ne Demek?",
        body: "Ayar, altının binde kaçının saf (has) altın olduğunu gösterir. 22 ayar altın yaklaşık 916 milyemdir — yani %91,6 saf altın, geri kalanı dayanıklılığı artırmak için eklenen bakır/gümüş gibi metallerdir. 24 ayara (995 milyem) göre biraz daha az saf olsa da, süs eşyası üretimine daha uygun bir sertlik sağlar.",
      },
      {
        heading: "22 Ayar Bilezik Fiyatı Neden Gram Altından Farklı?",
        body: "22 ayar bileziğin gram başına fiyatı, hem daha düşük has değeri (916 milyem) hem de üretim/işçilik maliyeti nedeniyle 24 ayar gram altından farklılık gösterir. Sayfamızdaki fiyat, 22 ayarın piyasa değerini yansıtır; kuyumcudaki nihai etiket fiyatına işçilik ve tasarım farkı ayrıca eklenebilir.",
      },
      {
        heading: "Denizli'de Bilezik Alırken Dikkat Edilmesi Gerekenler",
        body: "Bilezik alırken ayar damgasını (916 veya 22K ibaresi) mutlaka kontrol edin ve fatura isteyin. İşçilik bedeli kuyumcudan kuyumcuya değişebileceğinden, güncel gram fiyatını bilmek pazarlık gücünüzü artırır.",
      },
    ],
    relatedGuide: {
      href: "/rehber/altin-ayari-nedir",
      label: "Altın Ayarı Nedir? 24, 22, 18, 14 Ayar",
    },
  },
  {
    key: "18-ayar-altin",
    slug: "18-ayar-altin",
    category: "altin",
    metaTitle: "Denizli 18 Ayar Altın Fiyatı",
    metaDescription:
      "Denizli 18 ayar altın gram fiyatı canlı olarak güncellenir. 18 ayarın has değeri, kullanım alanları ve güncel TL karşılığını hesaplama aracıyla öğrenin.",
    h1: "Denizli 18 Ayar Altın Fiyatı",
    keyword: "denizli 18 ayar altın fiyatı",
    intro:
      "18 ayar altın, özellikle pırlanta ve taşlı takı üretiminde yaygın olarak kullanılan, uluslararası standartlara da uygun bir ayar seviyesidir. Denizli 18 ayar altın gram fiyatını aşağıda bulabilirsiniz.",
    summary:
      "Denizli 18 ayar altın fiyatı, özellikle pırlanta ve taşlı takı üretiminde tercih edilen, uluslararası standartlara da uygun bir ayar seviyesinin gram başına güncel karşılığıdır. 18 ayar altın 750 milyemdir — yani %75 saf altın — ve bu daha düşük has oran, takıya taş kakılmasına imkân veren sert ve dayanıklı bir alaşım sağlar; bu yüzden birçok Avrupa ülkesinde de standart takı ayarı 18 ayardır. 18 ayar altın fiyatı, 24 ayar has altın fiyatının yaklaşık %75'ine karşılık gelir; kuyumcudaki nihai fiyata bunun üzerine işçilik ve tasarım bedeli eklenir. Farklı ayarların (24, 22, 18, 14) nasıl karşılaştırıldığını merak ediyorsanız altın ayarı rehberimize göz atabilirsiniz. Bu sayfada 18 ayar gram fiyatını canlı olarak takip edebilir, hesaplama aracıyla güncel TL karşılığını anında öğrenebilirsiniz.",
    sections: [
      {
        heading: "18 Ayar Ne Demek?",
        body: "18 ayar altın 750 milyemdir — yani %75 saf altın. 22 ayara göre daha az has altın içerir ama bu sayede daha sert ve dayanıklı bir alaşım elde edilir; bu özellik, üzerine taş/pırlanta kakılan takılarda tercih edilmesinin başlıca nedenidir.",
      },
      {
        heading: "18 Ayar Nerede Kullanılır?",
        body: "Yüzük, küpe, kolye gibi pırlantalı veya renkli taşlı takılarda dünya genelinde en yaygın kullanılan ayardır; birçok Avrupa ülkesinde de standart takı ayarı 18 ayardır. Bu yüzden ithal tasarım takılarda da sıkça karşınıza çıkar.",
      },
      {
        heading: "Fiyatı Nasıl Hesaplanır?",
        body: "18 ayar altının gram fiyatı, 24 ayar (has) altın fiyatının yaklaşık %75'ine karşılık gelir; kuyumcudaki son fiyata bu değerin üzerine işçilik ve tasarım bedeli eklenir. Sayfamızdaki fiyat, işçiliksiz ham piyasa değeridir.",
      },
    ],
    relatedGuide: {
      href: "/rehber/altin-ayari-nedir",
      label: "Altın Ayarı Nedir? 24, 22, 18, 14 Ayar",
    },
  },
  {
    key: "14-ayar-altin",
    slug: "14-ayar-altin",
    category: "altin",
    metaTitle: "Denizli 14 Ayar Altın Fiyatı",
    metaDescription:
      "Denizli 14 ayar altın gram fiyatı canlı olarak güncellenir. 14 ayarın has değeri, avantajları ve güncel TL karşılığını hesaplama aracıyla öğrenin.",
    h1: "Denizli 14 Ayar Altın Fiyatı",
    keyword: "denizli 14 ayar altın fiyatı",
    intro:
      "14 ayar altın, günlük kullanıma en dayanıklı ve bütçe dostu ayar seviyelerinden biridir. Denizli 14 ayar altın gram fiyatını aşağıda canlı olarak görebilirsiniz.",
    summary:
      "Denizli 14 ayar altın fiyatı, günlük kullanıma en dayanıklı ve bütçe dostu ayar seviyelerinden birinin gram başına güncel karşılığıdır. 14 ayar altın 585 milyemdir — yani %58,5 saf altın — düşük has oranı sayesinde çizilmeye ve deformasyona karşı en dirençli ayar seçeneklerinden biri olur; bu nedenle her gün takılan alyans ve günlük takılarda sıkça tercih edilir. 14 ayar altın fiyatı, düşük has değeri nedeniyle 22 ve 18 ayara göre daha uygun seyreder, ancak dayanıklılığı öne çıkan bir avantajdır. Ayar seviyelerinin (24, 22, 18, 14) has değer ve kullanım farklarını karşılaştırmak isterseniz altın ayarı rehberimize bakabilirsiniz. Bu sayfada 14 ayar gram fiyatını canlı olarak takip edebilir, hesaplama aracıyla elinizdeki ürünün güncel TL karşılığını anında öğrenebilirsiniz.",
    sections: [
      {
        heading: "14 Ayar Ne Demek?",
        body: "14 ayar altın 585 milyemdir — yani %58,5 saf altın. Daha düşük has değeri, altını daha sert ve çizilmeye dayanıklı hale getirir; bu nedenle her gün takılan alyans, saat kordonu gibi ürünlerde tercih edilir.",
      },
      {
        heading: "14 Ayarın Avantajı Nedir?",
        body: "Düşük has oranı sayesinde hem daha dayanıklıdır hem de aynı görünümdeki bir 22 ayar ürüne göre daha uygun fiyatlıdır. Günlük kullanımda deformasyona karşı en dirençli ayar seçeneklerinden biridir.",
      },
      {
        heading: "Denizli'de 14 Ayar Talebi",
        body: "Bütçe dostu ve dayanıklı olması nedeniyle özellikle günlük takı ve alyans arayan müşteriler tarafından tercih edilir. Güncel gram fiyatını bu sayfadan takip ederek kuyumcu tekliflerini karşılaştırabilirsiniz.",
      },
    ],
    relatedGuide: {
      href: "/rehber/altin-ayari-nedir",
      label: "Altın Ayarı Nedir? 24, 22, 18, 14 Ayar",
    },
  },
  {
    key: "ceyrek-ata",
    slug: "ceyrek-ata-altin",
    category: "altin",
    metaTitle: "Denizli Çeyrek Ata Altın Fiyatı",
    metaDescription:
      "Denizli çeyrek Ata altın fiyatı canlı olarak güncellenir. Ata Lirası'nın çeyrek boyu, tarihi ve güncel alış/satış fiyatlarını hesaplama aracıyla öğrenin.",
    h1: "Denizli Çeyrek Ata Altın Fiyatı",
    keyword: "denizli çeyrek ata altın fiyatı",
    intro:
      "Ata Lirası, üzerinde Osmanlı dönemi sultan tasvirleri bulunan, koleksiyoner ve yatırımcılar arasında ayrı bir talebi olan tarihi bir sikke ailesidir. Denizli çeyrek Ata altın fiyatını aşağıda bulabilirsiniz.",
    summary:
      "Denizli çeyrek Ata altın fiyatı, Osmanlı dönemi sultan tasvirleri taşıyan ve koleksiyonerler arasında ayrı bir talebi olan Ata Lirası serisinin en küçük gramajlı üyesinin güncel karşılığıdır. Çeyrek Ata, yaklaşık 1,75 gram has altın içerir ve çeyrek Cumhuriyet altınıyla benzer bir kullanım alanına sahiptir; temel has altın değeri açısından diğer çeyrek altın türleriyle aynı mantıkla hareket eder, ancak basım yılı ve nadirlik gibi etkenler zaman zaman küçük fiyat farkları yaratabilir. Ata serisi Cumhuriyet altını kadar her kuyumcuda standart stokta bulunmayabilir; almadan önce kuyumcunuzla stok durumunu teyit etmeniz önerilir. Bu sayfadaki çeyrek Ata fiyatı, kaynağın yalnızca tam boy Ata verisi sağlaması nedeniyle tam fiyattan gramaj oranıyla hesaplanır (bkz. Veri Kaynakları); güncel referans olarak kullanılabilir, kesin fiyat için kuyumcuyla görüşün.",
    sections: [
      {
        heading: "Ata Lirası Nedir?",
        body: "Ata Lirası, Cumhuriyet Altını'ndan farklı bir basım serisidir ve tasarımıyla koleksiyonerler arasında ayrı bir ilgi görür. Çeyrek Ata, bu serinin en küçük gramajlı (yaklaşık 1,75 gram) üyesidir ve çeyrek Cumhuriyet altınıyla benzer bir kullanım alanına sahiptir.",
      },
      {
        heading: "Fiyatı Diğer Çeyrek Altınlardan Farklı mı?",
        body: "Ata serisinin fiyatı, temel has altın değeri açısından diğer çeyrek altın türleriyle (Cumhuriyet, Reşat) aynı mantıkla hareket eder; ancak basım yılı, nadirlik ve koleksiyon değeri gibi etkenler zaman zaman küçük fiyat farkları yaratabilir.",
      },
      {
        heading: "Kimler Tercih Eder?",
        body: "Hem geleneksel hediye alışverişinde hem de tarihi sikke koleksiyonu yapmak isteyenler arasında Ata Lirası popülerdir. Denizli'deki kuyumcularda diğer ziynet altınları kadar sık bulunmasa da talep gördüğünde kolayca temin edilebilir.",
      },
    ],
  },
  {
    key: "yarim-ata",
    slug: "yarim-ata-altin",
    category: "altin",
    metaTitle: "Denizli Yarım Ata Altın Fiyatı",
    metaDescription:
      "Denizli yarım Ata altın fiyatı canlı olarak güncellenir. Ata Lirası'nın yarım boyu, tarihi ve güncel alış/satış fiyatlarını hesaplama aracıyla öğrenin.",
    h1: "Denizli Yarım Ata Altın Fiyatı",
    keyword: "denizli yarım ata altın fiyatı",
    intro:
      "Yarım Ata, Ata Lirası serisinin orta gramajlı üyesidir. Denizli yarım Ata altın fiyatını aşağıda canlı olarak takip edebilirsiniz.",
    summary:
      "Denizli yarım Ata altın fiyatı, Ata Lirası serisinin orta gramajlı üyesinin güncel karşılığıdır. Yaklaşık 3,5 gram has altın içeren yarım Ata, çeyrek Ata'nın iki katı ağırlığındadır ve Osmanlı dönemi tasarımını taşıyan bu sikke hem hediye hem orta ölçekli yatırım amaçlı tercih edilir. Ata Lirası'nın piyasa değeri temelde has altın fiyatına dayanır, ancak basım yılı ve durumuna göre koleksiyoner piyasasında ek bir prim oluşabilir. Ata serisi her kuyumcuda hazır bulunmayabileceğinden, almadan önce stok durumunu teyit etmenizi öneririz. Bu sayfadaki yarım Ata fiyatı, veri kaynağının yalnızca tam boy Ata rakamı sağlaması nedeniyle tam fiyattan gramaj oranıyla (yaklaşık yarısı) hesaplanarak gösterilir — ayrıntı için Veri Kaynakları sayfasına bakabilir, güncel referans olarak kullanabilirsiniz.",
    sections: [
      {
        heading: "Yarım Ata Kaç Gram?",
        body: "Yarım Ata, yaklaşık 3,5 gram has altın içerir — çeyrek Ata'nın iki katı. Osmanlı dönemi tasarımını taşıyan bu sikke, hem hediye hem de orta ölçekli yatırım amaçlı tercih edilir.",
      },
      {
        heading: "Ata Serisinin Değeri Neye Bağlı?",
        body: "Ata Lirası'nın piyasa değeri temelde has altın fiyatına dayanır, ancak basım yılı ve durumuna göre koleksiyoner piyasasında ek bir prim oluşabilir. Günlük alım-satımda bu sayfadaki fiyat, güncel piyasa referansı olarak kullanılabilir.",
      },
      {
        heading: "Denizli'de Yarım Ata Bulmak",
        body: "Ata serisi, Cumhuriyet Altını kadar her kuyumcuda stokta bulunmayabilir; talep etmeden önce kuyumcunuzla stok durumunu teyit etmenizi öneririz.",
      },
    ],
  },
  {
    key: "tam-ata",
    slug: "tam-ata-altin",
    category: "altin",
    metaTitle: "Denizli Tam Ata Altın Fiyatı",
    metaDescription:
      "Denizli tam Ata altın fiyatı canlı olarak güncellenir. Ata Lirası'nın tam boyu, tarihi ve güncel alış/satış fiyatlarını hesaplama aracıyla öğrenin.",
    h1: "Denizli Tam Ata Altın Fiyatı",
    keyword: "denizli tam ata altın fiyatı",
    intro:
      "Tam Ata, Ata Lirası serisinin en büyük gramajlı üyesidir. Denizli tam Ata altın fiyatını aşağıda canlı olarak görebilirsiniz.",
    summary:
      "Denizli tam Ata altın fiyatı, Ata Lirası serisinin en büyük gramajlı üyesinin güncel piyasa karşılığıdır. Yaklaşık 7 gram has altın içeren tam Ata, tam Cumhuriyet altınına yakın bir gramaja sahiptir ve Osmanlı dönemi sultan tasvirleriyle basılan bu seri hem yatırım hem koleksiyon amaçlı yoğun talep görür. Tam Ata ile tam Cumhuriyet altını benzer has değere sahip olsa da tercih genellikle koleksiyon ilgisine veya kuyumcunun elindeki stoğa göre şekillenir. Yüksek gramajı nedeniyle tam Ata, büyük hediyelerde ve toplu yatırımlarda tercih edilir. Bu sayfadaki tam Ata fiyatı, finans.truncgil.com kaynağından doğrudan (türetme olmadan) çekilir ve yaklaşık her 60 saniyede bir güncellenir; alış/satış fiyatını canlı olarak takip edebilir, hesaplama aracıyla güncel TL karşılığını öğrenebilirsiniz.",
    sections: [
      {
        heading: "Tam Ata Kaç Gram?",
        body: "Tam Ata yaklaşık 7 gram has altın içerir — tam Cumhuriyet Altını'na yakın bir gramaj. Osmanlı dönemi sultan tasvirleriyle basılan bu seri, hem yatırım hem koleksiyon amaçlı talep görür.",
      },
      {
        heading: "Tam Ata mı, Tam Cumhuriyet mi?",
        body: "İkisi de benzer gramaja sahiptir ve has altın değeri açısından yakın fiyatlanır; tercih genellikle koleksiyon ilgisine veya kuyumcunun elindeki stoğa göre şekillenir.",
      },
      {
        heading: "Denizli'de Tam Ata Talebi",
        body: "Yüksek gramajı nedeniyle tam Ata, büyük hediyelerde veya toplu yatırımlarda tercih edilir. Güncel fiyatını bu sayfadan takip ederek kuyumcu tekliflerini karşılaştırabilirsiniz.",
      },
    ],
  },
  {
    key: "ceyrek-resat",
    slug: "ceyrek-resat-altin",
    category: "altin",
    metaTitle: "Denizli Çeyrek Reşat Altın Fiyatı",
    metaDescription:
      "Denizli çeyrek Reşat altın fiyatı canlı olarak güncellenir. Reşat Altını'nın tarihi, gramajı ve güncel alış/satış fiyatlarını hesaplama aracıyla öğrenin.",
    h1: "Denizli Çeyrek Reşat Altın Fiyatı",
    keyword: "denizli çeyrek reşat altın fiyatı",
    intro:
      "Reşat Altını, adını Osmanlı padişahı Sultan V. Mehmed Reşad'dan alan, koleksiyonerler arasında özel bir yeri olan tarihi bir sikke serisidir. Denizli çeyrek Reşat altın fiyatını aşağıda bulabilirsiniz.",
    summary:
      "Denizli çeyrek Reşat altın fiyatı, adını Osmanlı padişahı Sultan V. Mehmed Reşad'dan alan ve koleksiyonerler arasında özel bir yeri olan Reşat Altını serisinin en küçük gramajlı üyesinin güncel karşılığıdır. Çeyrek Reşat yaklaşık 1,75 gram has altın içerir; Ata ve Cumhuriyet altınına benzer has değere dayansa da tasarım ve basım dönemi farklılıkları koleksiyon piyasasında küçük fiyat farkları oluşturabilir. Reşat serisi her kuyumcuda standart stokta olmayabilir; almadan önce kuyumcunuzla temin süresini ve fiyatını teyit etmenizi öneririz. Bu sayfadaki çeyrek Reşat fiyatı, veri kaynağının yalnızca tam boy Reşat rakamı sağlaması nedeniyle tam fiyattan gramaj oranıyla hesaplanarak gösterilir — ayrıntı için Veri Kaynakları sayfasına bakabilir, güncel bir referans olarak kullanabilirsiniz.",
    sections: [
      {
        heading: "Reşat Altını Nedir?",
        body: "Reşat Altını, Osmanlı döneminden kalma tasarımıyla basılan, Ata Lirası'na benzer ama ayrı bir seri olarak değerlendirilen bir sikkedir. Çeyrek Reşat, bu serinin en küçük gramajlı (yaklaşık 1,75 gram) üyesidir.",
      },
      {
        heading: "Reşat mı, Ata mı, Cumhuriyet mi?",
        body: "Üçü de benzer has altın değerine dayanır, ancak tasarım ve basım dönemi farklılıkları koleksiyon piyasasında küçük fiyat farkları oluşturabilir. Genel piyasa fiyatı takibinde her üçü de gram altın fiyatına paralel hareket eder.",
      },
      {
        heading: "Denizli'de Çeyrek Reşat Bulmak",
        body: "Reşat serisi de Ata gibi her kuyumcuda standart stokta olmayabilir; almadan önce kuyumcunuzla temin süresini ve fiyatını teyit etmenizi öneririz.",
      },
    ],
  },
  {
    key: "yarim-resat",
    slug: "yarim-resat-altin",
    category: "altin",
    metaTitle: "Denizli Yarım Reşat Altın Fiyatı",
    metaDescription:
      "Denizli yarım Reşat altın fiyatı canlı olarak güncellenir. Reşat Altını'nın yarım boyu ve güncel fiyatları burada.",
    h1: "Denizli Yarım Reşat Altın Fiyatı",
    keyword: "denizli yarım reşat altın fiyatı",
    intro:
      "Yarım Reşat, Reşat Altını serisinin orta gramajlı üyesidir. Denizli yarım Reşat altın fiyatını aşağıda canlı olarak takip edebilirsiniz.",
    summary:
      "Denizli yarım Reşat altın fiyatı, Reşat Altını serisinin orta gramajlı üyesinin güncel piyasa karşılığıdır. Yaklaşık 3,5 gram has altın içeren yarım Reşat, Osmanlı dönemi tasarımını taşıyan bu sikke ailesinin çeyrek ile tam arasındaki dengeli seçeneğidir ve orta ölçekli hediye/yatırım ihtiyaçları için tercih edilir. Reşat serisinin piyasa değeri temelde has altın fiyatına dayanır; koleksiyon ilgisi zaman zaman ek bir prim oluştursa da günlük fiyat hareketleri büyük ölçüde gram altınla paralel seyreder. Diğer Reşat ürünleri gibi her kuyumcuda hazır bulunmayabilir; kuyumcunuzla stok ve fiyat teyidini önceden yapmanız önerilir. Bu sayfadaki yarım Reşat fiyatı, kaynağın yalnızca tam boy Reşat verisi sağlaması nedeniyle tam fiyattan gramaj oranıyla hesaplanarak gösterilir; ayrıntı için Veri Kaynakları sayfasına bakabilirsiniz.",
    sections: [
      {
        heading: "Yarım Reşat Kaç Gram?",
        body: "Yarım Reşat yaklaşık 3,5 gram has altın içerir. Osmanlı dönemi tasarımını taşıyan bu sikke, orta ölçekli hediye ve yatırım ihtiyaçları için tercih edilir.",
      },
      {
        heading: "Fiyatı Neye Göre Belirlenir?",
        body: "Reşat serisinin piyasa değeri temelde has altın fiyatına dayanır; koleksiyon ilgisi zaman zaman ek bir prim oluştursa da günlük fiyat hareketleri büyük ölçüde gram altınla paralel seyreder.",
      },
      {
        heading: "Denizli'de Yarım Reşat Talebi",
        body: "Diğer Reşat ürünleri gibi her kuyumcuda hazır bulunmayabilir; kuyumcunuzla stok ve fiyat teyidini önceden yapmanız önerilir.",
      },
    ],
  },
  {
    key: "tam-resat",
    slug: "tam-resat-altin",
    category: "altin",
    metaTitle: "Denizli Tam Reşat Altın Fiyatı",
    metaDescription:
      "Denizli tam Reşat altın fiyatı canlı olarak güncellenir. Reşat Altını'nın tam boyu, tarihi ve güncel alış/satış fiyatlarını hesaplama aracıyla öğrenin.",
    h1: "Denizli Tam Reşat Altın Fiyatı",
    keyword: "denizli tam reşat altın fiyatı",
    intro:
      "Tam Reşat, Reşat Altını serisinin en büyük gramajlı üyesidir. Denizli tam Reşat altın fiyatını aşağıda canlı olarak görebilirsiniz.",
    summary:
      "Denizli tam Reşat altın fiyatı, Reşat Altını serisinin en büyük gramajlı ve en yüksek koleksiyon değerine sahip üyesinin güncel karşılığıdır. Yaklaşık 7 gram has altın içeren tam Reşat, Sultan V. Mehmed Reşad dönemi tasarımıyla basılmıştır ve hem yatırım hem koleksiyon amaçlı yüksek talep görür; tarihi tasarımı nedeniyle bazı dönemlerde has altın değerinin üzerinde küçük bir prim oluşabilir. Yüksek gramajı nedeniyle tam Reşat, büyük hediyelerde ve toplu yatırımlarda tercih edilir. Bu sayfadaki tam Reşat fiyatı, finans.truncgil.com kaynağından doğrudan (türetme olmadan) çekilir ve yaklaşık her 60 saniyede bir güncellenir; alış/satış fiyatını canlı olarak takip edebilir, hesaplama aracıyla güncel TL karşılığını öğrenebilirsiniz. Kesin fiyat için kuyumcunuzla görüşmenizi öneririz.",
    sections: [
      {
        heading: "Tam Reşat Kaç Gram?",
        body: "Tam Reşat yaklaşık 7 gram has altın içerir. Sultan V. Mehmed Reşad dönemi tasarımıyla basılan bu seri, hem yatırım hem koleksiyon amaçlı yüksek talep görür.",
      },
      {
        heading: "Reşat Serisinin Koleksiyon Değeri",
        body: "Reşat Altını, tarihi tasarımı nedeniyle koleksiyonerler arasında özel bir ilgi görür; bu ilgi bazı dönemlerde has altın değerinin üzerinde küçük bir prim oluşturabilir.",
      },
      {
        heading: "Denizli'de Tam Reşat Talebi",
        body: "Yüksek gramajı nedeniyle tam Reşat, büyük hediyelerde ve toplu yatırımlarda tercih edilir. Güncel fiyatını bu sayfadan takip edebilirsiniz.",
      },
    ],
  },
  {
    key: "gremse-altin",
    slug: "gremse-altin",
    category: "altin",
    metaTitle: "Denizli Gremse Altın Fiyatı",
    metaDescription:
      "Denizli gremse altın fiyatı canlı olarak güncellenir. Gremse altının özellikleri, kullanım alanı ve güncel alış/satış fiyatlarını burada bulabilirsiniz.",
    h1: "Denizli Gremse Altın Fiyatı",
    keyword: "denizli gremse altın fiyatı",
    intro:
      "Gremse altın, özellikle Ege bölgesinde geleneksel takı kültüründe yer bulan, kendine özgü bir ziynet altını türüdür. Denizli gremse altın fiyatını aşağıda bulabilirsiniz.",
    summary:
      "Denizli gremse altın fiyatı, özellikle Ege bölgesinde geleneksel takı kültüründe yer bulan, kendine özgü bir ziynet altını türünün güncel piyasa karşılığıdır. Gremse, diğer sikke tipi altınlar (çeyrek, yarım, tam) kadar ulusal ölçekte yaygın olmasa da Ege ve çevre illerde tanınan, bölgesel talep gören bir kuyumculuk ürünüdür. Fiyatı, diğer ziynet altınları gibi has altın değerine ve güncel piyasa koşullarına göre şekillenir; kuyumcudaki nihai fiyata işçilik ve tasarım farkı eklenebilir. Bölgesel bir gelenek ürünü olması nedeniyle Denizli'deki kuyumcularda talep gördüğünde bulunabilir; almadan önce kuyumcunuzla stok durumunu teyit etmenizi öneririz. Bu sayfada gremse altın alış/satış fiyatını canlı olarak, yaklaşık her 60 saniyede bir yenilenen verilerle takip edebilir, hesaplama aracıyla güncel TL karşılığını öğrenebilirsiniz.",
    sections: [
      {
        heading: "Gremse Altın Nedir?",
        body: "Gremse, Ege ve çevre illerde yerel takı geleneğinde tanınan bir ziynet altını türüdür. Diğer sikke tipi altınlar (çeyrek, yarım, tam) kadar ulusal ölçekte yaygın olmasa da, bölgesel talep gören kuyumculuk ürünlerinden biridir.",
      },
      {
        heading: "Fiyatı Nasıl Belirlenir?",
        body: "Gremse altının fiyatı da diğer ziynet altınları gibi has altın değerine ve güncel piyasa koşullarına göre şekillenir; kuyumcudaki nihai fiyata işçilik ve tasarım farkı eklenebilir.",
      },
      {
        heading: "Denizli'de Gremse Altın",
        body: "Bölgesel bir gelenek ürünü olması nedeniyle Denizli'deki kuyumcularda talep gördüğünde bulunabilir; almadan önce kuyumcunuzla stok durumunu teyit etmenizi öneririz.",
      },
    ],
  },
  {
    key: "ons-altin",
    slug: "ons-altin",
    category: "altin",
    metaTitle: "Denizli Ons Altın Fiyatı (USD)",
    metaDescription:
      "Ons altın (XAU/USD) fiyatı canlı olarak güncellenir. Ons altının Denizli'deki gram altın fiyatına etkisini burada öğrenin.",
    h1: "Denizli Ons Altın Fiyatı (Uluslararası, USD)",
    keyword: "ons altın fiyatı",
    intro:
      "Ons altın, dünya genelinde altının referans alındığı uluslararası fiyattır ve dolar bazında işlem görür. Türkiye'deki gram altın fiyatının temelini oluşturur.",
    summary:
      "Ons altın fiyatı (XAU/USD), dünya genelinde altının referans alındığı uluslararası fiyattır ve Londra ile New York borsalarında dolar bazında işlem görür. 1 ons (troy ons) yaklaşık 31,1 grama karşılık gelir; Türkiye'deki gram altın fiyatı, ons altın fiyatının dolar/TL kuruyla çarpılıp 31,1'e bölünmesiyle yaklaşık olarak elde edilir. Bu yüzden ons altındaki bir hareket — kur sabit kalsa bile — aynı gün içinde Denizli'de gram altın fiyatına doğrudan yansır. Merkez bankaları, kurumsal yatırımcılar ve bireysel altın yatırımcıları ons altın fiyatını faiz kararları, enflasyon ve jeopolitik gelişmelerin bir göstergesi olarak yakından izler. Bu sayfada ons altın fiyatını USD cinsinden canlı olarak takip edebilir, güncel gram altın fiyatıyla ilişkisini karşılaştırabilirsiniz.",
    sections: [
      {
        heading: "Ons Altın Nedir?",
        body: "1 ons (troy ons), yaklaşık 31,1 grama karşılık gelir. Dünya genelindeki altın borsalarında (Londra, New York) fiyatlanan bu birim, altın piyasasının küresel referans noktasıdır ve dolar cinsinden ifade edilir.",
      },
      {
        heading: "Ons Altın, Denizli Gram Altın Fiyatını Nasıl Etkiler?",
        body: "Türkiye'deki gram altın fiyatı, ons altın fiyatının dolar/TL kuruyla çarpılıp 31,1'e bölünmesiyle (yaklaşık olarak) elde edilir. Bu yüzden ons altındaki bir hareket, aynı gün içinde Denizli'deki gram altın fiyatına da yansır — kur sabit kalsa bile.",
      },
      {
        heading: "Ons Altın Fiyatını Kimler Takip Eder?",
        body: "Merkez bankaları, kurumsal yatırımcılar ve bireysel altın yatırımcıları ons altın fiyatını küresel ekonomik gelişmelerin (faiz kararları, enflasyon, jeopolitik riskler) bir göstergesi olarak yakından izler.",
      },
    ],
  },
  {
    key: "usd-try",
    slug: "dolar",
    category: "doviz",
    metaTitle: "Denizli Dolar Kuru (USD/TRY)",
    metaDescription:
      "Denizli dolar kuru (USD/TRY) canlı olarak güncellenir. Doların altın fiyatlarına etkisi ve güncel alış/satış kurları burada.",
    h1: "Denizli Dolar Kuru (USD/TRY)",
    keyword: "denizli dolar kuru",
    intro:
      "Dolar kuru, hem günlük hayatta hem de altın fiyatlarının belirlenmesinde kilit bir referans noktasıdır. Denizli dolar kurunu aşağıda canlı olarak takip edebilirsiniz.",
    summary:
      "Denizli dolar kuru (USD/TRY), hem günlük hayatta hem de altın fiyatlarının belirlenmesinde kilit bir referans noktasıdır. Altın uluslararası piyasada dolar bazında (ons altın) fiyatlandığı için Türkiye'deki gram altın fiyatı hem ons altına hem de dolar/TL kuruna bağlıdır — dolar kurundaki bir yükseliş, ons altın sabit kalsa bile TL bazında altın fiyatını yukarı çeker. Dolar kuru, Türkiye Cumhuriyet Merkez Bankası faiz kararları, enflasyon verileri, küresel risk iştahı ve ABD Merkez Bankası (Fed) politikalarından doğrudan etkilenir. Kuyumcular, ithalat yapan işletmeler ve bireysel yatırımcılar dolar kurunu günlük olarak takip eder. Bu sayfada güncel dolar alış/satış kurunu canlı olarak, yaklaşık her 60 saniyede bir yenilenen verilerle takip edebilir, hesaplama aracıyla istediğiniz miktarın TL karşılığını anında öğrenebilirsiniz.",
    sections: [
      {
        heading: "Dolar Kuru Neden Önemli?",
        body: "Altın, uluslararası piyasada dolar bazında (ons altın) fiyatlanır. Bu yüzden Türkiye'deki gram altın fiyatı hem ons altına hem de dolar/TL kuruna bağlıdır — dolar kurundaki bir yükseliş, ons altın sabit kalsa bile TL bazında altın fiyatını yukarı çeker.",
      },
      {
        heading: "Dolar Kurunu Ne Etkiler?",
        body: "Türkiye Cumhuriyet Merkez Bankası faiz kararları, enflasyon verileri, küresel risk iştahı ve ABD Merkez Bankası (Fed) politikaları dolar/TL kurunun günlük hareketlerinde belirleyici rol oynar.",
      },
      {
        heading: "Denizli'de Dolar Kuru Takibi",
        body: "Kuyumcular, ithalat yapan işletmeler ve bireysel yatırımcılar dolar kurunu günlük olarak takip eder. Bu sayfadaki kur, yaklaşık her 60 saniyede bir tazelenir.",
      },
    ],
  },
  {
    key: "eur-try",
    slug: "euro",
    category: "doviz",
    metaTitle: "Denizli Euro Kuru (EUR/TRY)",
    metaDescription:
      "Denizli euro kuru (EUR/TRY) canlı olarak güncellenir. Euro'nun kullanım alanları ve güncel alış/satış kurları burada.",
    h1: "Denizli Euro Kuru (EUR/TRY)",
    keyword: "denizli euro kuru",
    intro:
      "Euro, Türkiye'nin Avrupa Birliği ile olan yoğun ticaret ilişkisi nedeniyle dolardan sonra en çok takip edilen döviz kurlarından biridir. Denizli euro kurunu aşağıda canlı olarak görebilirsiniz.",
    summary:
      "Denizli euro kuru (EUR/TRY), Türkiye'nin Avrupa Birliği ile olan yoğun ticaret ilişkisi nedeniyle dolardan sonra en çok takip edilen döviz kurlarından biridir. Türkiye'nin en büyük ticaret ortağı Avrupa Birliği olduğu için tekstil, ihracat ve turizm sektörlerinde euro kuru doğrudan etkilidir; güçlü tekstil ve ihracat altyapısına sahip Denizli, bu kurdan yakından etkilenen şehirlerden biridir. Euro/TL kurunun seyrini Avrupa Merkez Bankası'nın (ECB) faiz kararları, Euro Bölgesi'ndeki enflasyon-büyüme verileri ve Türkiye-AB ticaret hacmi belirler. Bu sayfada güncel euro alış/satış kurunu canlı olarak, gram altın ve dolar kuruyla birlikte anlık takip edebilir, hesaplama aracıyla istediğiniz miktarın TL karşılığını anında öğrenebilirsiniz.",
    sections: [
      {
        heading: "Euro Kuru Neden Takip Edilir?",
        body: "Türkiye'nin en büyük ticaret ortağı Avrupa Birliği'dir; tekstil, ihracat ve turizm sektörlerinde euro kuru doğrudan etkilidir. Denizli, güçlü tekstil ve ihracat altyapısıyla bu kurdan yakından etkilenen şehirlerden biridir.",
      },
      {
        heading: "Euro Kurunu Ne Etkiler?",
        body: "Avrupa Merkez Bankası'nın (ECB) faiz kararları, Euro Bölgesi'ndeki enflasyon ve büyüme verileri ile Türkiye-AB ticaret hacmi euro/TL kurunun seyrini belirleyen başlıca etkenlerdir.",
      },
      {
        heading: "Denizli'de Euro Kurunun Önemi",
        body: "Denizli'nin ihracata dayalı tekstil sektörü nedeniyle birçok işletme euro bazlı fiyatlandırma yapar; bu yüzden euro kurunu güncel takip etmek yerel iş dünyası için de önemlidir.",
      },
    ],
  },
  {
    key: "gbp-try",
    slug: "sterlin",
    category: "doviz",
    metaTitle: "Denizli Sterlin Kuru (GBP/TRY)",
    metaDescription:
      "Denizli sterlin kuru (GBP/TRY) canlı olarak güncellenir. İngiliz sterlini hakkında bilgiler ve güncel alış/satış kurları burada.",
    h1: "Denizli Sterlin Kuru (GBP/TRY)",
    keyword: "denizli sterlin kuru",
    intro:
      "İngiliz sterlini (GBP), dünyanın en eski ve en istikrarlı para birimlerinden biri olarak kabul edilir. Denizli sterlin kurunu aşağıda canlı olarak takip edebilirsiniz.",
    summary:
      "Denizli sterlin kuru (GBP/TRY), dünyanın en eski ve en istikrarlı para birimlerinden biri olan İngiliz sterlininin güncel TL karşılığıdır. İngiltere ile ticaret yapan işletmeler, Birleşik Krallık'a seyahat edecek veya oradan dönecek kişiler ve döviz biriktiren yatırımcılar sterlin kurunu yakından takip eder. Sterlin/TL kurunun günlük hareketlerini İngiltere Merkez Bankası'nın (Bank of England) faiz politikaları, Birleşik Krallık ekonomik verileri ve küresel risk algısı şekillendirir. Dolar ve euroya kıyasla daha düşük işlem hacmine sahip olsa da sterlin, Denizli'deki döviz büfeleri ve bazı kuyumcularda alınıp satılabilen bir kalemdir. Bu sayfada güncel sterlin alış/satış kurunu canlı olarak takip edebilir, hesaplama aracıyla istediğiniz miktarın TL karşılığını anında öğrenebilirsiniz.",
    sections: [
      {
        heading: "Sterlin Kuru Kimler İçin Önemli?",
        body: "İngiltere ile ticaret yapan işletmeler, Birleşik Krallık'a seyahat edecek veya oradan dönecek kişiler ve döviz biriktiren yatırımcılar sterlin kurunu yakından takip eder.",
      },
      {
        heading: "Sterlin Kurunu Ne Etkiler?",
        body: "İngiltere Merkez Bankası'nın (Bank of England) faiz politikaları, Birleşik Krallık ekonomik verileri ve küresel risk algısı sterlin/TL kurunun günlük hareketlerini şekillendirir.",
      },
      {
        heading: "Denizli'de Sterlin Bozdurma",
        body: "Dolar ve euroya kıyasla daha düşük işlem hacmine sahip olsa da, sterlin Denizli'deki döviz büfeleri ve bazı kuyumcularda alınıp satılabilen bir kalemdir. Güncel kuru bu sayfadan kontrol edebilirsiniz.",
      },
    ],
  },
  {
    key: "chf-try",
    slug: "isvicre-frangi",
    category: "doviz",
    metaTitle: "Denizli İsviçre Frangı Kuru (CHF/TRY)",
    metaDescription:
      "Denizli İsviçre frangı kuru (CHF/TRY) canlı olarak güncellenir. Frangın güvenli liman özelliği ve güncel kurları burada.",
    h1: "Denizli İsviçre Frangı Kuru (CHF/TRY)",
    keyword: "denizli isviçre frangı kuru",
    intro:
      "İsviçre frangı, küresel piyasalarda 'güvenli liman' para birimi olarak bilinir ve ekonomik belirsizlik dönemlerinde talep görür. Denizli İsviçre frangı kurunu aşağıda canlı olarak görebilirsiniz.",
    summary:
      "Denizli İsviçre frangı kuru (CHF/TRY), küresel piyasalarda 'güvenli liman' para birimi olarak bilinen frangın güncel TL karşılığıdır. İsviçre'nin siyasi istikrarı, güçlü bankacılık sistemi ve düşük enflasyon geçmişi, frangı ekonomik belirsizlik dönemlerinde yatırımcıların sığındığı bir para birimi haline getirmiştir. İsviçre aynı zamanda dünya çapında lüks saat ve mücevher üretiminin merkezlerinden biri olduğu için frank, kuyumculuk ve saatçilik sektöründe ithalat yapan işletmeler için de referans bir kur olabilir. İşlem hacmi dolar ve euro kadar yüksek olmasa da İsviçre frangı, Denizli'deki döviz büfelerinde ve bazı kuyumcularda alınıp satılabilir. Bu sayfada güncel frank alış/satış kurunu canlı olarak takip edebilir, hesaplama aracıyla istediğiniz miktarın TL karşılığını anında öğrenebilirsiniz.",
    sections: [
      {
        heading: "İsviçre Frangı Neden 'Güvenli Liman'?",
        body: "İsviçre'nin siyasi istikrarı, güçlü bankacılık sistemi ve düşük enflasyon geçmişi, frangı küresel belirsizlik dönemlerinde yatırımcıların sığındığı bir para birimi haline getirmiştir.",
      },
      {
        heading: "İsviçre ile Kuyumculuk Bağlantısı",
        body: "İsviçre, dünya çapında lüks saat ve mücevher üretiminin merkezlerinden biridir. Bu nedenle frangı, kuyumculuk ve saatçilik sektöründe ithalat yapan işletmeler için de referans bir kur olabilir.",
      },
      {
        heading: "Denizli'de Frank Kuru Takibi",
        body: "İşlem hacmi dolar ve euro kadar yüksek olmasa da, İsviçre frangı Denizli'deki döviz büfelerinde ve bazı kuyumcularda alınıp satılabilir. Güncel kuru bu sayfadan takip edebilirsiniz.",
      },
    ],
  },
  {
    key: "sar-try",
    slug: "suudi-riyali",
    category: "doviz",
    metaTitle: "Denizli Suudi Riyali Kuru (SAR/TRY)",
    metaDescription:
      "Denizli Suudi riyali kuru (SAR/TRY) canlı olarak güncellenir. Riyalin kullanım alanları ve güncel alış/satış kurları burada.",
    h1: "Denizli Suudi Riyali Kuru (SAR/TRY)",
    keyword: "denizli suudi riyali kuru",
    intro:
      "Suudi riyali, Türkiye ile Orta Doğu arasındaki ticaret ve gurbetçi para transferlerinde sıkça karşılaşılan bir döviz kurudur. Denizli Suudi riyali kurunu aşağıda canlı olarak takip edebilirsiniz.",
    summary:
      "Denizli Suudi riyali kuru (SAR/TRY), Türkiye ile Orta Doğu arasındaki ticaret ve gurbetçi para transferlerinde sıkça karşılaşılan bu döviz biriminin güncel TL karşılığıdır. Suudi Arabistan'da çalışan gurbetçiler, hac ve umre dönüşü elinde riyal kalan ziyaretçiler ile Orta Doğu ile ticaret yapan işletmeler riyal kurunu yakından takip eder. Suudi riyali uzun yıllardır ABD dolarına sabitlenmiş bir kurla işlem görür; bu yüzden riyal/TL kuru büyük ölçüde dolar/TL kurundaki hareketleri takip eder. Hac veya umre dönüşü Denizli'deki döviz büfelerinde riyal bozdurmak mümkündür. Bu sayfada güncel riyal alış/satış kurunu canlı olarak takip edebilir, hesaplama aracıyla istediğiniz miktarın TL karşılığını anında öğrenebilirsiniz.",
    sections: [
      {
        heading: "Suudi Riyali Kimler İçin Önemli?",
        body: "Suudi Arabistan'da çalışan gurbetçiler, hac ve umre dönüşü elinde riyal kalan ziyaretçiler ile Orta Doğu ile ticaret yapan işletmeler riyal kurunu yakından takip eder.",
      },
      {
        heading: "Riyal Kurunu Ne Etkiler?",
        body: "Suudi riyali, uzun yıllardır ABD dolarına sabitlenmiş bir kurla işlem görür; bu yüzden riyal/TL kuru büyük ölçüde dolar/TL kurundaki hareketleri takip eder.",
      },
      {
        heading: "Denizli'de Riyal Bozdurma",
        body: "Hac/umre dönüşü veya Orta Doğu'dan gelen ziyaretçiler için Denizli'deki döviz büfelerinde riyal bozdurmak mümkündür. Güncel kuru bu sayfadan kontrol edebilirsiniz.",
      },
    ],
  },
];

export function getPriceContentByKey(key: string): PriceContentEntry | undefined {
  return priceContent.find((entry) => entry.key === key);
}

export function getPriceContentBySlug(
  category: PriceCategory,
  slug: string
): PriceContentEntry | undefined {
  return priceContent.find((entry) => entry.category === category && entry.slug === slug);
}

// Tablolarda ürün adına tıklayınca gidilecek detay sayfası — kalem için
// içerik tanımlı değilse (ör. ileride eklenen yeni bir fiyat kalemi) link
// gösterilmez, sadece düz metin kalır.
export function getPriceHref(key: string): string | undefined {
  const entry = getPriceContentByKey(key);
  return entry ? `/${entry.category}/${entry.slug}` : undefined;
}
