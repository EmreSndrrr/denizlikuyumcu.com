"use client";

// Footer'daki "Çerez Tercihleri" bağlantısı: kayıtlı onayı siler, bildirim
// çubuğunu yeniden açar.
//
// Neden gerekli: KVKK m. 7 ve çerez politikamız açık rızanın geri
// alınabilmesini gerektiriyor. Onay kutusunu bir kez kapattıktan sonra
// kullanıcının fikrini değiştirmesinin başka bir yolu olmazdı (tarayıcı
// verisini elle silmek dışında).

import { useConsent, resetConsent } from "@/lib/consent";

export default function CookiePreferencesLink() {
  const consent = useConsent();

  // Seçim yapılmamışken (veya sunucuda) bağlantıyı göstermiyoruz: bildirim
  // çubuğu zaten ekranda, aynı işi iki yerden sunmak kafa karıştırıcı olur.
  if (consent !== "accepted" && consent !== "rejected") return null;

  return (
    <button type="button" onClick={resetConsent} className="hover:text-brand">
      Çerez Tercihleri
      <span className="sr-only">
        {" "}
        (mevcut seçim: {consent === "accepted" ? "kabul edildi" : "reddedildi"})
      </span>
    </button>
  );
}
