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

1. **Zamanlanmış görev** (`app/api/cron/snapshot`) 5 dakikada bir
   `finans.truncgil.com`'u kontrol eder. Kaynağın `Update_Date` değeri
   değişmişse 21 kalemin alış/satış fiyatını `price_snapshots` tablosuna
   yazar (`lib/priceHistory.ts`). Hobby planında Vercel Cron 5 dakikada
   bir çalışamadığı için tetikleyici bir **GitHub Actions** workflow'u:
   `.github/workflows/price-snapshot.yml`.
2. `lib/prices.ts` → `getPrices()` sayfalara **en güncel kaydı
   veritabanından** verir. Veritabanı boşsa (ilk deploy) veya erişilemezse
   doğrudan Truncgil'e, o da olmazsa mock veriye düşer.
3. `page.tsx` (anasayfa) sunucuda `getPrices()`'ı çağırıp ilk veriyi
   doğrudan HTML'e gömüyor — sayfa JS yüklenmeden önce bile fiyatlar
   görünür (SEO + hız). Sayfa `revalidate = 60` ile en fazla dakikada bir
   yeniden üretilir.
4. Client bileşenleri (`PriceTicker` vb.) ilk veriyi prop olarak alır,
   sonra `/api/prices`'ı 60 saniyede bir yoklar (`lib/useLivePrices.ts`).
   Endpoint yine `getPrices()`'ı çağırır; yanıt CDN'de 30 sn tutulur.

Grafikler **yalnızca `price_snapshots` tablosundaki gerçek kayıtlardan**
üretilir (Aşama 1b'den itibaren). Sentetik/rastgele geçmiş üretilmez.

### Veritabanı kurulumu

1. Bir Postgres oluşturun — **Vercel Postgres (Neon)** önerilir (Vercel
   projesi → Storage → Postgres). `DATABASE_URL` otomatik eklenir.
2. Şemayı bir kez çalıştırın: `db/schema.sql` (Neon SQL Editor'a yapıştırın
   ya da `psql "$DATABASE_URL" -f db/schema.sql`).
3. `CRON_SECRET` env değişkenini ekleyin (`openssl rand -hex 32`).
4. GitHub repo → Settings → Secrets and variables → Actions:
   - Secret `CRON_SECRET` — sitedekiyle **aynı** değer
   - Variable `SNAPSHOT_URL` — `https://denizlikuyumcu.com/api/cron/snapshot`
5. İlk veriyi hemen almak için endpoint'i manuel tetikleyin:
   `curl -H "Authorization: Bearer <CRON_SECRET>" https://denizlikuyumcu.com/api/cron/snapshot`

Daha katı bir zamanlama gerekirse GitHub Actions yerine (veya ek olarak)
[cron-job.org](https://cron-job.org) aynı endpoint'i çağıracak şekilde
ayarlanabilir.

## Ortam değişkenleri

Gerçek anahtar/gizli bilgi içermeyen bir şablon dosya olan `.env.example`'ı
kopyalayarak başlayın:

```bash
cp .env.example .env.local
```

`.env.local` asla commit edilmez (`.gitignore`'da). Yerel geliştirmede
`PRICE_PROVIDER=mock` ile veritabanı kurmadan çalışabilirsiniz; detaylar
`.env.example` içindeki yorumlarda ve yukarıdaki "Veritabanı kurulumu"
maddesinde.

## Yapılacaklar / eksikler (canlıya almadan önce)

- [x] **Gerçek fiyat verisi + geçmiş**: `lib/prices.ts` en güncel kaydı
      Postgres'ten okuyor; zamanlanmış görev (`app/api/cron/snapshot`)
      Truncgil'den 5 dakikada bir gerçek kayıt biriktiriyor. Kurulum
      adımları için "Veritabanı kurulumu" bölümüne bakın.
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
