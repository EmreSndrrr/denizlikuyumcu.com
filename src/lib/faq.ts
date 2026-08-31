// Sıkça Sorulan Sorular — kullanıcının isteğiyle şimdilik genel/başlangıç
// içeriği olarak eklendi, ileride kolayca güncellenebilir/genişletilebilir.
export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Sitedeki altın ve döviz fiyatları ne sıklıkla güncelleniyor?",
    answer:
      "Fiyatlar otomatik olarak periyodik aralıklarla tazelenir ve sayfa üzerinde 'son güncelleme' saatiyle birlikte gösterilir. Yine de piyasa anlık hareket edebileceğinden, kesin işlem öncesi kuyumcunuzla teyitleşmenizi öneririz.",
  },
  {
    question: "Alış ve satış fiyatı arasındaki fark neden var?",
    answer:
      "Bu fark (spread), kuyumcunun işletme maliyetini, kur riskini ve kâr marjını yansıtır. Piyasa oynaklığı arttığında bu makas genellikle biraz daha genişler.",
  },
  {
    question: "Sitede gösterilen fiyatla kuyumcudaki fiyat neden farklı olabilir?",
    answer:
      "Sitedeki rakamlar bilgilendirme amaçlıdır ve gecikmeli olabilir; işlenmiş takılarda ayrıca işçilik ve tasarım bedeli eklenir. Kesin alım-satım fiyatı için ilgili kuyumcuyla görüşmeniz gerekir.",
  },
  {
    question: "Hangi ayar altın daha değerlidir?",
    answer:
      "Ayar, saflık oranını gösterir; 24 ayar en saf (has) olanıdır. Ancak 'daha değerli' olmak günlük kullanım için her zaman en iyi seçim anlamına gelmez — 22 ve 18 ayar, dayanıklılık açısından günlük takı için daha sık tercih edilir. Detaylar için altın ayarı rehberimize göz atabilirsiniz.",
  },
  {
    question: "Denizli'de güvenilir bir kuyumcuyu nasıl bulurum?",
    answer:
      "Kuyumcular sayfamızdan Denizli'deki işletmeleri inceleyebilir, ayar damgası net olan ve faturalı satış yapan kuyumcuları tercih edebilirsiniz.",
  },
];
