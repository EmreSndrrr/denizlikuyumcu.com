import { NextResponse, after } from "next/server";
import { getPrices } from "@/lib/prices.server";
import { STALE_THRESHOLD_MS } from "@/lib/prices";
import { captureIfStale } from "@/lib/snapshotCapture";

// Bu dosya bir "Route Handler". app/api/prices/route.ts yolu otomatik
// olarak /api/prices adresinde bir HTTP endpoint'i oluşturur.
//
// Ne zaman kullanılır? Sayfaların kendisi (Server Component) fiyat verisini
// doğrudan lib/prices.ts'den çağırır — ekstra ağ isteği gerekmez. Bu
// endpoint asıl olarak CLIENT tarafındaki bileşenlerin (PriceTicker,
// GoldCalculator vb.) periyodik "canlı" güncelleme çekmesi için var.
//
// getPrices() artık veritabanından okuyor (bkz. lib/prices.ts) — hızlı,
// indeksli tek bir sorgu. Yine de çok sayıda ziyaretçi aynı anda yoklarsa
// diye yanıtı CDN'de 30 sn tutuyoruz (stale-while-revalidate ile).

export const dynamic = "force-dynamic";

// Kayıt bu kadar eskiyse arayüz zaten "Veri gecikmeli" gösterecek demektir;
// o noktada yakalamayı arka plana bırakmak kullanıcıyı bir sonraki yoklamaya
// (60 sn) kadar yanlış bir uyarıyla baş başa bırakıyor. Eşiğin biraz
// altından itibaren yakalamayı YANITTAN ÖNCE yapıyoruz, böylece dönen veri
// zaten taze oluyor ve rozet hiç görünmüyor.
const INLINE_CAPTURE_AFTER_MS = STALE_THRESHOLD_MS - 5 * 60 * 1000;

export async function GET() {
  let data = await getPrices();

  const yas = Date.now() - new Date(data.sourceUpdatedAt).getTime();
  const cokEski = Number.isFinite(yas) && yas > INLINE_CAPTURE_AFTER_MS;

  if (cokEski) {
    // Sessiz bir dönemin (gece, zamanlanmış görev atlamış) ardından gelen
    // İLK istek: kısa bir gecikmeyi göze alıp taze veriyle dönüyoruz.
    // Yanıt CDN'de 30 sn tutulduğu ve captureIfStale kendi soğuma süresini
    // uyguladığı için bu maliyet arka arkaya tekrarlanmıyor.
    try {
      // Ziyaretçi bu yanıtı bekliyor: yeniden denemeler dahil en fazla
      // ~6 sn. Kopan bağlantılar anında hata verdiği için başarılı bir
      // ikinci deneme çoğu zaman 1 sn'nin altında sonuçlanıyor.
      const sonuc = await captureIfStale(data.sourceUpdatedAt, { butceMs: 6000 });
      if (sonuc.ok && !sonuc.skipped) data = await getPrices();
    } catch (err) {
      // Kaynak ulaşılamıyorsa eski veriyle devam — istek başarısız olmamalı.
      console.error("[api/prices] eşzamanlı anlık görüntü hatası:", err);
    }
  } else {
    // Normal durum: yakalama YANIT GÖNDERİLDİKTEN SONRA (after) arka planda
    // denenir, yanıt süresi etkilenmez. Ayrıntılı gerekçe için bkz.
    // lib/snapshotCapture.ts.
    after(async () => {
      try {
        await captureIfStale(data.sourceUpdatedAt);
      } catch (err) {
        console.error("[api/prices] arka plan anlık görüntü hatası:", err);
      }
    });
  }

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
    },
  });
}
