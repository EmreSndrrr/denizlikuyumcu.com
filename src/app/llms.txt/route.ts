import { priceContent } from "@/lib/priceContent";
import { searchIndex } from "@/lib/searchIndex";

// /llms.txt — dil modeli tabanlı araçlar için sitenin kısa bir haritası.
//
// Neden statik dosya değil de route: eski public/llms.txt elle yazılmıştı
// ve zamanla bayatladı — 16 rehberin hiçbirini listelemiyordu, fiyatların
// "yaklaşık 60 saniyede bir tazelendiğini" (kaynak ~15 dakikada bir
// günceller) ve bir "kuyumcu dizini" bulunduğunu (yayımlanmış profil yok)
// söylüyordu. Artık içerik, sayfaların kendisini de üreten veri
// kaynaklarından (priceContent, searchIndex) türetiliyor; yeni bir fiyat
// sayfası ya da rehber eklendiğinde burası kendiliğinden güncelleniyor.
//
// Beklenti ayarı: Google, llms.txt'nin Google Arama'da görünürlüğü veya
// sıralamayı etkilemediğini açıkça belirtiyor (AI optimization guide,
// Mayıs 2026). Dosya yalnızca onu okuyan diğer araçlar için var; asıl GEO
// çalışması sayfaların kendi içeriğinde (bkz. PriceDetailPage içindeki
// DirectAnswer).

export const dynamic = "force-static";

const SITE = "https://denizlikuyumcu.com";

function satir(baslik: string, yol: string, aciklama?: string) {
  return `- [${baslik}](${SITE}${yol})${aciklama ? `: ${aciklama}` : ""}`;
}

export function GET() {
  const altin = priceContent.filter((e) => e.category === "altin");
  const doviz = priceContent.filter((e) => e.category === "doviz");
  const rehberler = searchIndex.filter((e) => e.group === "Rehber");

  const metin = [
    "# DenizliKuyumcu.com",
    "",
    "> Denizli odaklı, bilgi amaçlı bir altın ve döviz fiyat portalı: güncel",
    "> piyasa fiyatları, altın ve kuyumculuk rehberleri, Denizli'deki kuyumcu",
    "> bölgeleri hakkında içerik. Site bir kuyumcu değildir; ürün satmaz,",
    "> online satış yoktur.",
    "",
    "## Veriler hakkında",
    "",
    "- Fiyatlar finans.truncgil.com kaynağından alınır. Kaynak verisini piyasa açıkken yaklaşık 15 dakikada bir günceller; site yeni veriyi dakikada bir kontrol eder.",
    "- Her fiyatın yanında kaynağın bildirdiği son güncelleme saati gösterilir. Hafta sonu ve resmî tatillerde piyasa kapalı olduğundan fiyat değişmeyebilir.",
    "- Gösterilen rakamlar ulusal piyasa referans fiyatıdır. Denizli'deki kuyumcular bunlara kendi işçilik ve kâr paylarını ekleyebilir. Yatırım tavsiyesi değildir.",
    "- Fiyat geçmişi grafikleri yalnızca sitenin kendi kaydettiği gerçek verilerden çizilir; örnek veya türetilmiş veri gösterilmez.",
    "",
    "## Altın fiyatları",
    "",
    ...altin.map((e) => satir(e.h1, `/${e.category}/${e.slug}`, e.metaDescription)),
    "",
    "## Döviz kurları",
    "",
    ...doviz.map((e) => satir(e.h1, `/${e.category}/${e.slug}`, e.metaDescription)),
    "",
    "## Rehberler",
    "",
    ...rehberler.map((e) => satir(e.label, e.href)),
    "",
    "## Kuyumcular",
    "",
    satir(
      "Denizli'de Kuyumcular Nerede?",
      "/kuyumcular",
      "Denizli'de kuyumcuların yoğunlaştığı bölgeler ve alışveriş öncesi dikkat edilecekler. Kuyumcu profilleri yalnızca işletmenin başvurusu ve onayıyla yayımlanır; izinsiz listeleme yapılmaz.",
    ),
    "",
    "## Kurumsal",
    "",
    satir("Hakkımızda", "/hakkimizda"),
    satir("Veri Kaynakları", "/veri-kaynaklari", "fiyatların nereden ve nasıl alındığı"),
    satir("Sıkça Sorulan Sorular", "/sikca-sorulan-sorular"),
    satir("İletişim", "/iletisim"),
    satir("Gizlilik Politikası", "/gizlilik-politikasi"),
    satir("KVKK Aydınlatma Metni", "/kvkk"),
    "",
  ].join("\n");

  return new Response(metin, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
