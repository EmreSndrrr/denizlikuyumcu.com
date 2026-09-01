# DenizliKuyumcu.com

Denizli'deki kuyumcuların reklam verdiği; güncel altın/döviz fiyatları ve
altın/kuyumculuk konulu SEO içerikleri sunan bir portal sitesi.

## Proje yapısı (Next.js App Router)

```
src/
  app/
    layout.tsx          Tüm sayfaları saran ortak iskelet (Header, Footer, <html>)
    page.tsx             Anasayfa
    globals.css          Tailwind + tipografi eklentisi
    sitemap.ts            /sitemap.xml üretir (Next.js dosya konvansiyonu)
    robots.ts              /robots.txt üretir
    api/prices/route.ts     /api/prices → JSON fiyat verisi döndüren endpoint
    kuyumcular/page.tsx      Kuyumcu dizini
    reklam-ver/page.tsx      Reklam paketleri / iletişim
    rehber/                  SEO rehber makaleleri
      page.tsx                Rehber index
      altin-ayari-nedir/page.tsx
      gram-altin-hesaplama/page.tsx
      alyans-rehberi/page.tsx
      altin-nasil-saklanir/page.tsx
  components/
    Header.tsx, Footer.tsx
    PriceTicker.tsx        Client component — 60sn'de bir /api/prices'ı yoklar
    AdSlot.tsx              Reklam alanı; boşsa "reklam ver" satış çağrısına döner
    GuideArticle.tsx         Rehber makaleleri için ortak şablon (Article schema dahil)
  lib/
    prices.ts               Fiyat veri katmanı (şu an mock, ileride gerçek API)
    ads.ts                   Reklam alanları config'i
    jewelers.ts              Kuyumcu dizini config'i (şu an demo veri)
```

### Next.js'in temel kuralı: Server vs Client Component

- Varsayılan olarak her `.tsx` dosyası bir **Server Component**'tir: sunucuda
  çalışır, `async/await` ile doğrudan veri çekebilir (`lib/prices.ts` gibi),
  tarayıcıya JS göndermez. `page.tsx`, `layout.tsx`, `kuyumcular/page.tsx`
  bu şekilde.
- Bir bileşen `useState`, `useEffect` gibi interaktif hook'lar kullanacaksa
  dosyanın en üstüne `"use client"` yazılır ve tarayıcıda çalışır. Bu
  projede tek client component **`PriceTicker.tsx`** — çünkü periyodik
  olarak fiyatı yeniden çekip ekranı güncellemesi gerekiyor.

### Fiyat verisi nasıl akıyor?

1. `lib/prices.ts` → `getPrices()` şu an mock (rastgele oynamalı) veri
   üretiyor. Gerçek bir sağlayıcı seçildiğinde sadece bu dosyanın içini
   değiştirmemiz yeterli, sayfa/bileşen kodlarına dokunmamıza gerek yok.
2. `page.tsx` (anasayfa) sunucuda `getPrices()`'ı çağırıp ilk veriyi
   doğrudan HTML'e gömüyor — sayfa JS yüklenmeden önce bile fiyatlar
   görünür (SEO + hız).
3. `PriceTicker.tsx` (client) bu ilk veriyi prop olarak alıyor, sonra her
   60 saniyede bir `/api/prices` endpoint'ini çağırıp ekranı tazeliyor.
4. `/api/prices` (Route Handler) de aynı `getPrices()`'ı çağırıyor ve
   sonucu 60 saniye cache'liyor (`export const revalidate = 60`) — böylece
   gerçek veri kaynağına saniyede değil, dakikada bir gidiyoruz.

## Ortam değişkenleri

Gerçek anahtar/gizli bilgi içermeyen bir şablon dosya olan `.env.example`'ı
kopyalayarak başlayın:

```bash
cp .env.example .env.local
```

`.env.local` asla commit edilmez (`.gitignore`'da). Şu an tek amacı, ileride
bağlanacak gerçek fiyat sağlayıcısının anahtarlarını tutmak — detaylar
`.env.example` içindeki yorumlarda ve aşağıdaki maddede.

## Yapılacaklar / eksikler (canlıya almadan önce)

- [ ] **Gerçek fiyat API'si**: `lib/prices.ts` içindeki mock veri gerçek bir
      altın/döviz veri sağlayıcısıyla değiştirilmeli. Sağlayıcı seçildiğinde:
      `.env.local`'da `PRICE_PROVIDER`/`PRICE_API_KEY`/`PRICE_API_BASE_URL`
      doldurulur, `getPrices()` içine o sağlayıcı için bir `fetch()` dalı
      eklenir — başka hiçbir dosyaya dokunmaya gerek kalmaz.
- [ ] **Gerçek kuyumcu verisi**: `lib/jewelers.ts` içindeki demo kayıtlar
      silinip gerçek (izinli) kuyumcu bilgileriyle değiştirilmeli.
- [ ] **İletişim bilgileri**: `reklam-ver/page.tsx` içindeki placeholder
      e-posta/telefon güncellenmeli.
- [ ] **Logo / favicon**: `public/` klasöründeki varsayılan Next.js
      ikonları değiştirilmeli.
- [ ] **Google Business Profile** ve gerçek adres/telefon ile
      `LocalBusiness` schema eklenmesi (local SEO için önemli).
- [ ] **Google Search Console** kaydı ve `sitemap.xml` gönderimi.

## Geliştirme ortamını çalıştırma

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) adresinde açılır.

## Canlıya alma

Bu proje Vercel'e deploy edilmeye hazırdır: GitHub'a push edip Vercel'de
projeyi içe aktardıktan sonra `denizlikuyumcu.com` domainini DNS
ayarlarından bağlamak yeterli.
