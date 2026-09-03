// Sıkça Sorulan Sorular — kullanıcının gerçekten aradığı sorular esas
// alınarak genişletildi (Eylül 2026). Her sorunun cevabı doğrudan,
// öne çıkan snippet'e uygun bir ilk cümleyle başlar; ayrıntılı anlatım
// için ilgili rehber makalesine `href` ile bağlanır.
export type FaqItem = {
  question: string;
  answer: string;
  // Varsa, konunun ayrıntılı işlendiği rehber makalesi. Akordeon altında
  // "Detaylı rehber →" bağlantısı olarak gösterilir; FAQPage şemasına
  // dahil edilmez (şema yalnızca soru + metin cevap içerir).
  href?: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Gram altın bugün ne kadar?",
    answer:
      "Gram altının güncel alış ve satış fiyatını sayfanın üst kısmındaki fiyat şeridinden ve anasayfadaki fiyat tablosundan canlı olarak görebilirsiniz; veriler yaklaşık her 60 saniyede bir tazelenir. Gösterilen rakam bilgilendirme amaçlıdır, kesin işlem fiyatı için kuyumcunuzla teyitleşin.",
    href: "/rehber/gram-altin-bugun-ne-kadar",
  },
  {
    question: "10 gram altın kaç TL eder?",
    answer:
      "10 gram altının değeri, güncel gram altın fiyatının 10 ile çarpılmasıyla bulunur. Külçe/gram altında işçilik payı çok düşüktür; bilezik gibi işlenmiş üründe ise ayrıca işçilik eklenir. Anasayfadaki hesaplama aracına gramajı girerek anlık tutarı görebilirsiniz.",
    href: "/rehber/10-gram-altin-kac-tl",
  },
  {
    question: "Çeyrek altında alış ve satış fiyatı neden farklı?",
    answer:
      "Bu fark (makas/spread) kuyumcunun işletme maliyetini, kur riskini ve kâr marjını yansıtır. Çeyrek altında makas genellikle gram altına göre biraz daha geniştir çünkü basım (darphane) payı ve talep esnekliği devreye girer. Piyasa oynak olduğunda makas açılır.",
    href: "/rehber/ceyrek-altin-alis-satis-farki",
  },
  {
    question: "22 ayar bilezik hesabı nasıl yapılır?",
    answer:
      "22 ayar bilezik değeri kabaca şöyle bulunur: (gram altın fiyatı × 0,916 × bileziğin gramı) + işçilik. 0,916 katsayısı 22 ayarın saflık oranıdır (916/1000). İşçilik, kuyumcuya ve modele göre yüzde olarak eklenir. Anasayfadaki hesaplama aracında ayar ve gram girerek sonucu görebilirsiniz.",
    href: "/rehber/22-ayar-bilezik-hesaplama",
  },
  {
    question: "14 ayar altın bozdurunca ne kadar para alırım?",
    answer:
      "14 ayar altının has (saf) oranı 585/1000'dir. Bozdurmada kuyumcu genellikle şu mantıkla öder: bozdurulan gram × 0,585 × has altın alış fiyatı, üzerinden küçük bir düşüş (fire/işlem payı) yapılarak. İşçilik bozdurmada geri ödenmez. Net rakam kuyumcuya göre değişir.",
    href: "/rehber/14-ayar-altin-bozdurma-hesabi",
  },
  {
    question: "Bilezikte işçilik nasıl hesaplanır?",
    answer:
      "İşçilik çoğunlukla altının has değeri üzerinden yüzde olarak alınır (ör. %3–%20). Makine işi burma/klasik modellerde işçilik düşük, el işi ve taşlı modellerde yüksektir. Bazı kuyumcular gram başına sabit tutar da uygular. Alırken işçiliğin yüzde mi TL mi olduğunu ve toplam fiyata etkisini net sorun.",
    href: "/rehber/bilezikte-iscilik-hesaplama",
  },
  {
    question: "Düğünde damat ve geline hangi altınlar takılır?",
    answer:
      "En yaygın takılar çeyrek/yarım/tam altın, gram altın, bilezik ve set (Trabzon hasırı, burma vb.) ile alyanstır. Yakın aile genelde bilezik veya tam/yarım altın, uzak çevre çeyrek altın veya gram takar. Bölgesel gelenekler değişebilir; Denizli'de bilezik ve set takma kültürü güçlüdür.",
    href: "/rehber/dugunde-hangi-altinlar-takilir",
  },
  {
    question: "Altın alırken fatura almalı mıyım?",
    answer:
      "Evet. Fatura veya fiş; ürünün ayarını, gramını, işçiliğini ve satıcıyı belgeleyen tek resmî kanıttır. İleride bozdururken, iade/değişimde veya bir anlaşmazlıkta işinize yarar. Faturasız satıştan kaçının; kuyumcu belge vermekten çekiniyorsa bu bir uyarı işaretidir.",
    href: "/rehber/altin-alirken-fatura",
  },
  {
    question: "Sahte altın nasıl anlaşılır?",
    answer:
      "İlk kontrol ayar damgası ve darphane/marka kaşesidir. Mıknatısa yapışan altın sahtedir (altın manyetik değildir). Renk kaçıkları, terle yeşillenme, beklenenden hafif gelen gramaj şüphe uyandırmalı. Kesin sonuç için kuyumcuda mihenk taşı, asit testi veya XRF (spektrometre) ölçümü yaptırın.",
    href: "/rehber/sahte-altin-nasil-anlasilir",
  },
  {
    question: "Eski tarihli çeyrek altın ile yeni tarihli arasında fark var mı?",
    answer:
      "Altın içeriği (has değer) aynıdır, bu yüzden temel değerleri eşittir. Ancak piyasada eski tarihli ( ör. 1970–80'ler) çeyrekler bazen hafif düşük, ziynet/koleksiyon değeri taşıyan bazı yıllar ise primli işlem görebilir. Yıpranmış, delinmiş veya lehimli çeyrekler daha düşük fiyatlanır.",
    href: "/rehber/eski-yeni-tarihli-ceyrek-altin-farki",
  },
  {
    question: "Kuyumcuda altın bozdururken nelere dikkat etmeliyim?",
    answer:
      "Birden fazla kuyumcudan o günün has altın alış fiyatını ve önerdikleri net tutarı sorun. Ayarın doğru okunduğundan emin olun, tartımı gözünüzün önünde yaptırın, fire/işlem kesintisini net öğrenin. Faturalı aldığınız ürünü faturasıyla götürün. Piyasa hareketliyse fiyat gün içinde değişebilir.",
    href: "/rehber/kuyumcuda-altin-bozdururken-dikkat",
  },
  {
    question: "Alyans (yüzük) ölçüsü nasıl belirlenir?",
    answer:
      "Ölçü, parmağın iç çevresinin milimetre cinsinden uzunluğudur (ör. 54 = 54 mm çevre). En güvenilir yöntem kuyumcuda çelik ölçü halkalarıyla denemektir. Evde ip/şerit metreyle ölçerken günün ortasında, oda sıcaklığında ve parmak eklemini geçebilecek şekilde ölçün.",
    href: "/rehber/alyans-olcusu-nasil-belirlenir",
  },
  {
    question: "Sitedeki altın ve döviz fiyatları ne sıklıkla güncelleniyor?",
    answer:
      "Fiyatlar otomatik olarak periyodik aralıklarla (yaklaşık her 60 saniyede bir) tazelenir ve sayfa üzerinde 'son güncelleme' saatiyle gösterilir. Piyasa anlık hareket edebileceğinden, kesin işlem öncesi kuyumcunuzla teyitleşmenizi öneririz.",
  },
  {
    question: "Sitede gösterilen fiyatla kuyumcudaki fiyat neden farklı olabilir?",
    answer:
      "Sitedeki rakamlar bilgilendirme amaçlıdır ve gecikmeli olabilir; işlenmiş takılarda ayrıca işçilik ve tasarım bedeli eklenir. Kesin alım-satım fiyatı için ilgili kuyumcuyla görüşmeniz gerekir.",
  },
  {
    question: "Hangi ayar altın daha değerlidir?",
    answer:
      "Ayar, saflık oranını gösterir; 24 ayar en saf (has) olanıdır. Ancak 'daha değerli' olmak günlük kullanım için her zaman en iyi seçim anlamına gelmez — 22 ve 18 ayar, dayanıklılık açısından günlük takı için daha sık tercih edilir.",
    href: "/rehber/altin-ayari-nedir",
  },
  {
    question: "Denizli'de güvenilir bir kuyumcuyu nasıl bulurum?",
    answer:
      "Kuyumcular sayfamızdan Denizli'deki işletmeleri inceleyebilir, ayar damgası net olan ve faturalı satış yapan kuyumcuları tercih edebilirsiniz.",
    href: "/kuyumcular",
  },
];
