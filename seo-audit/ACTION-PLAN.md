# DenizliKuyumcu.com — SEO Aksiyon Planı

Bulgular `FULL-AUDIT-REPORT.md`'de. Öncelik: kritik → hemen, yüksek → bu hafta, orta → bu ay, düşük → birikmiş iş.

## Faz 1 — Kritik/Yüksek (bu oturumda uygulandı)

- [x] **S1 — Organization/WebSite şeması** eklendi (logo, sameAs hazır alan olarak)
- [x] **T1 — Canonical etiketler** her sayfaya `alternates.canonical` ile eklendi
- [x] **G2 — OG görseli** (`opengraph-image.tsx`, gerçek logo kullanılarak) eklendi
- [x] **T3 — Sitemap `lastModified` doğruluğu** — statik sayfalar için sabit bir tarih, fiyat sayfaları için hâlâ "hourly" mantıklı (gerçekten sık değişiyorlar) ama sabit sayfalar artık "şu an"ı yansıtmıyor
- [x] **T4/G1 — `llms.txt`** eklendi

## Faz 2 — Orta (bu ay, kod dışı/veri gerektiren)

- [x] **T2 — Güvenlik başlıkları**: `next.config.ts`'e `headers()` ile X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, Strict-Transport-Security eklendi (canlıya alma öncesi güvenlik denetimi sırasında tamamlandı). Tam CSP bilinçli olarak eklenmedi — canlıda test edilmeden yanlış yapılandırılmış bir CSP siteyi sessizce kırabilir.
- [ ] **C1 — Yazar/uzmanlık sinyali**: Rehber makalelerine bir yazar/editöryal ekip ibaresi eklenmeli. **Karar kullanıcıya ait** — gerçek bir isim/unvan mı, yoksa "DenizliKuyumcu.com Editöryal Ekibi" gibi genel bir ibare mi kullanılacak?
- [ ] **S2 — LocalBusiness şeması**: Gerçek kuyumcu verisi (`lib/jewelers.ts`) geldiğinde `/kuyumcular` sayfasına eklenmeli. Demo veri üzerine kurulmamalı (PRODUCT.md ilkesi).

## Faz 3 — Düşük / Optimizasyon (birikmiş iş)

- [ ] **C2 — GEO pasaj uzunluğu**: Fiyat sayfası bölümlerini (`lib/priceContent.ts`) 130-170 kelimelik tek-blok özetlere doğru genişletmek — mevcut kısa/taranabilir yapıyı bozmadan, her sayfaya EK bir "özet" paragrafı olarak düşünülebilir.
- [ ] **Lighthouse/CWV ölçümü**: Site canlıya alındığında veya `npx unlighthouse --site <url>` ile yerel olarak çalıştırılmalı (bu oturumda paket indirilmediği için atlandı).

## Faz 4 — İzleme (devam eden)

- [ ] **seo-drift baseline** kuruldu (`seo-audit/drift/` — bkz. ilgili not) — site canlıya alındıktan sonra düzenli `compare` çalıştırılarak SEO regresyonları yakalanabilir.
- [ ] Site canlıya alınıp Google Search Console'a eklendiğinde `seo-google setup` ile gerçek indeksleme/CTR verisi bu denetime eklenebilir.
- [ ] Ahrefs/DataForSEO/SE Ranking gibi ücretli araçlardan biri edinilirse `seo-backlinks`/`seo-cluster` çok daha güçlü, gerçek arama hacmi verisiyle çalışabilir.

## Bu Denetimde Bilinçli Olarak Atlanan/Uygulanamayan Kategoriler

| Skill | Neden |
|---|---|
| seo-ahrefs, seo-dataforseo, seo-bing, seo-seranking, seo-profound | API anahtarı/ücretli hesap yok |
| seo-google | GSC/GA4 OAuth + canlı doğrulanmış site gerekiyor |
| seo-backlinks, seo-maps | Site canlı değil, gerçek backlink/GBP verisi yok |
| seo-ecommerce | Site e-ticaret değil |
| seo-image-gen | "banana" eklentisi yok + tasarım kararı stok görsel kullanmama yönünde |
| seo-competitor-pages | Şu an talep edilmedi, ayrı bir görev |
