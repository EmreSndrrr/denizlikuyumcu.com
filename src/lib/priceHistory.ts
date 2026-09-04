import "server-only";

// Fiyat geçmişi veri erişimi — `price_snapshots` tablosunu okur/yazar.
// Zamanlanmış görev (app/api/cron/snapshot) yazar; lib/prices.ts ve
// (Aşama 1b'de) grafik bileşenleri okur.

import { db, hasDatabase } from "@/lib/db";
import { INSTRUMENT_META, INSTRUMENTS } from "@/lib/instruments";
import type {
  GoldChartData,
  GoldHistoryPoint,
  Period,
  PriceItem,
  PriceSnapshot,
} from "@/lib/prices";

export { hasDatabase };

type SnapshotRow = {
  instrument: string;
  buy: string | number;
  sell: string | number;
  change_percent: string | number;
  source: string;
  source_updated_at: string | Date;
};

function toIso(v: string | Date): string {
  return v instanceof Date ? v.toISOString() : new Date(v).toISOString();
}

function rowToItem(row: SnapshotRow): PriceItem | null {
  const meta = INSTRUMENT_META[row.instrument];
  if (!meta) return null;
  return {
    key: meta.key,
    label: meta.label,
    unit: meta.unit,
    type: meta.type,
    buy: Number(row.buy),
    sell: Number(row.sell),
    changePercent: Number(row.change_percent),
  };
}

// Her kalemin EN GÜNCEL kaydını tek sorguda çeker (DISTINCT ON). Veritabanı
// tanımlı değilse veya hiç kayıt yoksa null döner — çağıran taraf (getPrices)
// bu durumda doğrudan Truncgil'e / mock'a düşer.
export async function getLatestSnapshot(): Promise<PriceSnapshot | null> {
  if (!hasDatabase) return null;

  const rows = (await db()`
    SELECT DISTINCT ON (instrument)
      instrument, buy, sell, change_percent, source, source_updated_at
    FROM price_snapshots
    ORDER BY instrument, source_updated_at DESC
  `) as SnapshotRow[];

  if (rows.length === 0) return null;

  const items = rows
    .map(rowToItem)
    .filter((i): i is PriceItem => i !== null);

  if (items.length === 0) return null;

  // Kalemler INSTRUMENTS sırasında dursun (tablolar bu sıraya güveniyor).
  const order = new Map(
    Object.keys(INSTRUMENT_META).map((k, idx) => [k, idx]),
  );
  items.sort((a, b) => (order.get(a.key) ?? 0) - (order.get(b.key) ?? 0));

  const sourceUpdatedAt = rows
    .map((r) => toIso(r.source_updated_at))
    .sort()
    .at(-1)!;

  return {
    items,
    updatedAt: new Date().toISOString(),
    sourceUpdatedAt,
    source: "live",
  };
}

// Zamanlanmış görevin karşılaştırması için: en son kaydettiğimiz
// source_updated_at (herhangi bir kalem). Yoksa null.
export async function getLatestStoredSourceUpdatedAt(): Promise<string | null> {
  if (!hasDatabase) return null;
  const rows = (await db()`
    SELECT source_updated_at
    FROM price_snapshots
    ORDER BY source_updated_at DESC
    LIMIT 1
  `) as { source_updated_at: string | Date }[];
  return rows.length > 0 ? toIso(rows[0].source_updated_at) : null;
}

// Bir Truncgil anlık görüntüsünü veritabanına yazar. Aynı
// (instrument, source_updated_at) için tekrar yazmaz.
export async function insertSnapshot(
  items: PriceItem[],
  sourceUpdatedAt: string,
  source = "truncgil",
): Promise<number> {
  if (!hasDatabase) throw new Error("insertSnapshot: DATABASE_URL tanımlı değil");
  if (items.length === 0) return 0;

  const instruments = items.map((i) => i.key);
  const buys = items.map((i) => i.buy);
  const sells = items.map((i) => i.sell);
  const changes = items.map((i) => i.changePercent);
  const when = new Date(sourceUpdatedAt).toISOString();

  // Tek round-trip toplu ekleme (UNNEST ile). ON CONFLICT DO NOTHING:
  // zamanlanmış görev aynı Update_Date için iki kez tetiklenirse zararsız.
  // RETURNING ile gerçekten eklenen satır sayısını öğreniyoruz.
  const inserted = (await db().query(
    `INSERT INTO price_snapshots
       (instrument, buy, sell, change_percent, source, source_updated_at)
     SELECT * FROM UNNEST(
       $1::text[], $2::numeric[], $3::numeric[], $4::numeric[],
       $5::text[], $6::timestamptz[]
     )
     ON CONFLICT (instrument, source_updated_at) DO NOTHING
     RETURNING instrument`,
    [
      instruments,
      buys,
      sells,
      changes,
      instruments.map(() => source),
      instruments.map(() => when),
    ],
  )) as { instrument: string }[];

  return inserted.length;
}

// --- Grafik geçmişi (Aşama 1b) ---
//
// Grafikler YALNIZCA bu fonksiyonların döndürdüğü gerçek kayıtlardan
// üretilir — hiçbir yerde rastgele/sentetik seri üretilmez. Deploy'dan
// sonra veri birikene kadar (özellikle 90g/1y aralıkları) sonuç kısa veya
// boş olabilir; bileşenler bunu görünür biçimde ("veri toplanıyor")
// işaretler, boş/eksik veriyi tam geçmiş gibi göstermez.

type BucketRow = { bucket: string | Date; buy: string | number; sell: string | number };

// Sabit, kod içinde tanımlı SQL parçaları — kullanıcı girdisi asla bu
// dizeye karışmaz (yalnızca `days`/`instrument` parametre olarak geçer).
const BUCKET_EXPR: Record<Period, string> = {
  7: "date_trunc('hour', source_updated_at)",
  // 4 saatlik dilimler: date_bin (PostgreSQL 14+, Neon destekliyor).
  30: "date_bin('4 hours', source_updated_at, timestamptz '2001-01-01')",
  90: "date_trunc('day', source_updated_at)",
  365: "date_trunc('day', source_updated_at)",
};

async function queryBucketed(
  instrument: string,
  days: Period,
): Promise<GoldHistoryPoint[]> {
  const rows = (await db().query(
    `SELECT ${BUCKET_EXPR[days]} AS bucket, avg(buy) AS buy, avg(sell) AS sell
     FROM price_snapshots
     WHERE instrument = $1 AND source_updated_at >= now() - ($2 || ' days')::interval
     GROUP BY bucket
     ORDER BY bucket`,
    [instrument, days],
  )) as BucketRow[];

  return rows.map((r) => ({
    date: toIso(r.bucket),
    buy: Number(Number(r.buy).toFixed(2)),
    sell: Number(Number(r.sell).toFixed(2)),
  }));
}

async function getEarliestSourceUpdatedAt(instrument: string): Promise<string | null> {
  const rows = (await db()`
    SELECT min(source_updated_at) AS earliest
    FROM price_snapshots
    WHERE instrument = ${instrument}
  `) as { earliest: string | Date | null }[];
  const v = rows[0]?.earliest;
  return v ? toIso(v) : null;
}

const EMPTY_CHART: GoldChartData = {
  periods: { 7: [], 30: [], 90: [], 365: [] },
  historyStartedAt: null,
};

// Ana "Altın Fiyatları Grafiği" için — tek bir kalemin (varsayılan: gram
// altın) 4 aralıktaki gerçek geçmişi, tek seferde (paralel) çekilir.
export async function getGoldChart(instrument = "gram-altin"): Promise<GoldChartData> {
  if (!hasDatabase) return EMPTY_CHART;

  const [p7, p30, p90, p365, historyStartedAt] = await Promise.all([
    queryBucketed(instrument, 7),
    queryBucketed(instrument, 30),
    queryBucketed(instrument, 90),
    queryBucketed(instrument, 365),
    getEarliestSourceUpdatedAt(instrument),
  ]);

  return { periods: { 7: p7, 30: p30, 90: p90, 365: p365 }, historyStartedAt };
}

// "Tüm Altın Çeşitleri" tablosundaki satır detaylarının (ve hero/fiyat
// detay kartlarının) 7 günlük mini grafiği — tüm altın kalemleri için TEK
// sorguda (instrument bazında gruplanmış saatlik ortalama).
export async function getAllGoldSparklines(): Promise<Record<string, GoldHistoryPoint[]>> {
  if (!hasDatabase) return {};

  const instruments = INSTRUMENTS.filter(
    (i) => i.type === "gold" || i.type === "gold-extra",
  ).map((i) => i.key);

  const rows = (await db().query(
    `SELECT instrument, date_trunc('hour', source_updated_at) AS bucket,
            avg(buy) AS buy, avg(sell) AS sell
     FROM price_snapshots
     WHERE instrument = ANY($1) AND source_updated_at >= now() - interval '7 days'
     GROUP BY instrument, bucket
     ORDER BY instrument, bucket`,
    [instruments],
  )) as (BucketRow & { instrument: string })[];

  const result: Record<string, GoldHistoryPoint[]> = {};
  for (const row of rows) {
    const point: GoldHistoryPoint = {
      date: toIso(row.bucket),
      buy: Number(Number(row.buy).toFixed(2)),
      sell: Number(Number(row.sell).toFixed(2)),
    };
    (result[row.instrument] ??= []).push(point);
  }
  return result;
}
