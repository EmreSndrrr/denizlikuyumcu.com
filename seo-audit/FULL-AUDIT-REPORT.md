# DenizliKuyumcu.com — SEO Denetim Raporu

**Tarih:** 2 Eylül 2026
**Kapsam:** Next.js kod tabanı + yerel geliştirme sunucusu (canlı URL yok — site henüz yayınlanmadı)
**Yöntem:** `claude-seo` eklentisinin denetim kategorileri (seo-audit/seo-technical/seo-content/seo-schema/seo-images/seo-sitemap/seo-geo/seo-sxo) manuel olarak, kendi tarayıcı araçlarım ve kod okumasıyla uygulandı — eklentinin kendi CLI'ı (`render_page.py`) SSRF korumasından dolayı localhost'a karşı çalışamıyor (bkz. kullanıcı onayı: canlı URL yok, kendi araçlarla devam).

**SEO Sağlık Skoru (tahmini): 74/100** — sağlam bir temel var (semantik HTML, mevcut şema, tam sitemap, 21 programatik fiyat sayfası, temiz build), ama site kimliğini kuran birkaç kritik parça (Organization şeması, OG görseli, canonical etiketler) eksik.

---

## 1. Teknik SEO

**Çalışanlar:**
- `robots.ts` doğru: `allow: "/"`, sitemap referansı var.
- `sitemap.ts` 43 URL içeriyor (statik sayfalar + 21 fiyat sayfası), doğru `changeFrequency`/`priority`.
- Tüm sayfalarda `<title>`/`description` var (Next.js metadata API, `template: "%s | DenizliKuyumcu.com"`).
- Semantik başlık hiyerarşisi (h1→h2→h3) bu oturumda uçtan uca denetlendi, atlama yok.
- Next.js App Router zaten SSR/statik üretim yapıyor — JS olmadan içerik okunabilir (crawlability sorunu yok).

**Bulgular:**

| # | Bulgu | Önem | Açıklama |
|---|---|---|---|
| T1 | **Canonical etiket hiçbir sayfada yok** | Yüksek | `metadataBase` var ama `alternates.canonical` hiçbir sayfada set edilmemiş. 21 fiyat sayfası gibi programatik URL'lerde bu, arama motorunun "asıl" URL'yi kendi tahmin etmesine bırakır. |
| T2 | **Güvenlik başlıkları yok** | Orta | `next.config.ts`'te `headers()` yok — X-Frame-Options, Referrer-Policy, Permissions-Policy, HSTS tanımlı değil. SEO'yu doğrudan etkilemez ama Google'ın "güvenli site" sinyallerinden biri ve gerçek bir güvenlik açığı. |
| T3 | **Sitemap `lastModified` her zaman "şu an"** | Orta | Her URL için `new Date()` kullanılıyor — gerçek değişim tarihini yansıtmıyor. Google zamanla bunu güvenilmez bulup yok sayabilir. |
| T4 | **llms.txt yok** | Düşük-Orta | AI arama botları (ChatGPT, Perplexity) için sitenin ne olduğunu özetleyen bir `llms.txt` yok. |
| T5 | Lighthouse/CWV ölçümü yapılamadı | Bilgi | `seo-unlighthouse` yerel kurulum gerektiriyor (npx üzerinden indirilmedi); site canlıya alındığında veya `npx unlighthouse` ile ayrıca çalıştırılmalı. Kod incelemesi: ağır kütüphane yok (motion + phosphor-icons dışında), gerçek görsel yok, font'lar `next/font` ile optimize — CWV'nin iyi çıkması beklenir ama doğrulanmadı. |

## 2. Şema / Yapılandırılmış Veri

**Çalışanlar:** `WebSite` (anasayfa), `Article` (rehber makaleleri, `publisher` alt-nesnesinde Organization referansı var), `FAQPage` (SSS), `BreadcrumbList` (fiyat detay sayfaları).

**Bulgular:**

| # | Bulgu | Önem |
|---|---|---|
| S1 | **Bağımsız `Organization`/`WebSite` şeması yok** | Yüksek | Sadece Article'ın `publisher` alt-alanında geçiyor; sitewide, `logo` ve `sameAs` içeren bağımsız bir Organization varlığı yok. Artık gerçek bir logo var (bu oturumda eklendi) — tam zamanı. |
| S2 | `/kuyumcular` dizininde `LocalBusiness`/`JewelryStore` şeması yok | Orta | Demo veri olduğu için düşük öncelikli ama altyapı hazırlanabilir; gerçek kuyumcu verisi geldiğinde devreye alınır. |
| S3 | Fiyat detay sayfalarında ürün/fiyat için şema yok | Düşük | Schema.org'da "canlı emtia fiyatı" için net bir tip yok (Product/Offer yanıltıcı olur — satış yapılmıyor); bilinçli olarak eklenmedi, doğru karar. |

## 3. İçerik Kalitesi (E-E-A-T)

**Çalışanlar:** 4 rehber makalesi + 21 fiyat sayfası + SSS, hepsi özgün ve makul uzunlukta (fiyat sayfası gövdeleri ort. 31 kelime/bölüm × 3 bölüm + giriş). Hiçbir sayfa "ince içerik" sınırına yakın değil. "Veri güvenilirliği" notu (SSS altında) şeffaflık sinyali veriyor.

**Bulgular:**

| # | Bulgu | Önem |
|---|---|---|
| C1 | **Yazar/uzmanlık sinyali yok** (E-E-A-T'nin "E" ve "E"si) | Orta | Rehber makalelerinde yazar adı/unvanı yok. Finansal/değerli-metal içeriğinde (YMYL'ye yakın bir kategori) bu daha kritik. Gerçek bir kuyumculuk uzmanı/danışmanı varsa makalelere atıf eklenmeli; yoksa "editöryal ekip" gibi genel ama dürüst bir ibare bile yardımcı olur. |
| C2 | Fiyat sayfası bölümleri AI alıntılama için kısa (ort. 31 kelime) | Düşük | GEO pratiği 134-167 kelimelik özet-alınabilir bloklar öneriyor; mevcut kısa bölümler tarama için iyi ama tek başına alıntılanabilirlik için ideal değil. |

## 4. Görseller

Sitede gerçek fotoğraf yok (bilinçli tasarım kararı — stok görsel kullanılmıyor). Yeni eklenen marka logoları hepsinde `alt` metni var, `width`/`height` sabit (CLS riski yok, bu oturumda ayrıca bir bulanıklık bug'ı da düzeltildi). **Bulgu yok.**

## 5. AI Arama Hazırlığı (GEO)

| # | Bulgu | Önem |
|---|---|---|
| G1 | `llms.txt` yok (bkz. T4) | Orta |
| G2 | OG görseli yok → sosyal paylaşımda ve bazı AI önizlemelerinde boş kart | Yüksek |
| G3 | Soru-cevap yapısı zaten var (SSS + FAQPage şeması) — GEO için olumlu | — |

## 6. Site Haritası

43 URL, hepsi gerçek/erişilebilir sayfalar (yetim veya kırık URL yok — programatik olarak `priceContent.ts`'ten üretiliyor). Tek bulgu: T3 (lastModified doğruluğu).

## 7. Programatik SEO (/altin/[slug], /doviz/[slug])

21 sayfa, her biri özgün başlık/açıklama/gövde metniyle (bu oturumun erken bir aşamasında elle yazıldı, şablon tekrarı riski düşük). Canlı fiyat verisiyle senkron, anasayfa tablolarıyla tutarlı. **Ölçekte kaliteli bir uygulama — örnek gösterilebilecek seviyede.**

## 8. SXO (Arama Deneyimi)

Sorgu niyeti ↔ sayfa tipi eşleşmesi güçlü: "denizli gram altın fiyatı" gibi bir sorgu, gerçek zamanlı fiyat + hesaplama aracı içeren bir sayfaya düşüyor (doğru sayfa tipi — bir blog yazısı değil, bir veri aracı). Bu, Google'ın böyle sorgular için ödüllendirdiği format ile örtüşüyor.

## 9. Uluslararasılaştırma (hreflang)

Tek dil (tr-TR), `<html lang="tr">` doğru ayarlı, hreflang gerekmez. **Uygunluk: tam.**

## 10. E-ticaret

Kapsam dışı (site ürün satmıyor). **Uygulanamaz.**
