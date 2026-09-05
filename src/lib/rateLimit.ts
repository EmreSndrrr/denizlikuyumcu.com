import "server-only";

// Basit, bellek-içi hız sınırlama. Sunucusuz (Vercel) bir ortamda her
// "warm" fonksiyon örneği kendi belleğini tutar — bu yüzden KESİN/küresel
// bir limit DEĞİLDİR, yalnızca aynı örnek üzerinde art arda gelen spam'i
// yavaşlatan bir önlemdir (honeypot alanına ek katman). Daha kesin bir
// limit gerekirse (ör. Vercel KV/Upstash) ileride bu dosyanın içi
// değiştirilir — çağıran taraf (lib/infoRequest.ts) etkilenmez.

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 3;

const hits = new Map<string, number[]>();
let lastPrune = 0;

// Bellek büyümesin diye eski girişleri arada temizliyoruz.
function prune(now: number) {
  for (const [key, timestamps] of hits) {
    const kept = timestamps.filter((t) => now - t < WINDOW_MS);
    if (kept.length === 0) hits.delete(key);
    else hits.set(key, kept);
  }
}

// `key` genelde istemci IP'si (bkz. infoRequest.ts). Aynı pencerede
// MAX_REQUESTS_PER_WINDOW'dan fazla çağrı yapılırsa true döner.
export function isRateLimited(key: string): boolean {
  const now = Date.now();
  if (now - lastPrune > WINDOW_MS) {
    prune(now);
    lastPrune = now;
  }
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(key, timestamps);
  return timestamps.length > MAX_REQUESTS_PER_WINDOW;
}
