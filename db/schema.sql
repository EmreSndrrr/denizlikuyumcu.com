-- DenizliKuyumcu.com — fiyat geçmişi şeması
--
-- Kurulum: Vercel Postgres (Neon) oluşturduktan sonra bu dosyayı bir kez
-- çalıştırın. Örn. Neon SQL Editor'a yapıştırın ya da:
--   psql "$DATABASE_URL" -f db/schema.sql
--
-- Tüm ifadeler "IF NOT EXISTS" — tekrar çalıştırmak güvenlidir.

-- Her Truncgil "Update_Date" değişiminde 21 kalemin alış/satış fiyatı buraya
-- bir satır olarak yazılır. Grafikler YALNIZCA bu gerçek kayıtlardan üretilir.
CREATE TABLE IF NOT EXISTS price_snapshots (
  id                BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  instrument        TEXT        NOT NULL,
  buy               NUMERIC(14, 2) NOT NULL,
  sell              NUMERIC(14, 2) NOT NULL,
  change_percent    NUMERIC(7, 2)  NOT NULL DEFAULT 0,
  source            TEXT        NOT NULL DEFAULT 'truncgil',
  -- Kaynağın (Truncgil) kendi bildirdiği güncelleme zamanı.
  source_updated_at TIMESTAMPTZ NOT NULL,
  -- Bizim kaydı yazdığımız an.
  fetched_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- "Her kalemin en güncel / belirli aralıktaki kayıtları" sorgusu için.
CREATE INDEX IF NOT EXISTS idx_price_snapshots_instrument_time
  ON price_snapshots (instrument, source_updated_at DESC);

-- Zamanlanmış görev aynı Update_Date için iki kez tetiklenirse tekrar
-- yazmasın diye (ON CONFLICT DO NOTHING buna dayanır).
CREATE UNIQUE INDEX IF NOT EXISTS uq_price_snapshots_instrument_source_time
  ON price_snapshots (instrument, source_updated_at);
