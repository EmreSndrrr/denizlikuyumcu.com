// "Son güncelleme" etiketi — fiyat gösteren bütün bileşenlerin ortak
// parçası (rozet + saat), tek yerde.
//
// Neden ayrı bir bileşen: sekiz bileşen aynı üçlüyü (gecikme rozeti, saat,
// "itibarıyla") kendi içinde tekrarlıyordu. Asıl sebep ise aşağıdaki
// `refreshing` durumu: sayfa CDN'de donmuş eski veriyle geldiğinde ilk
// boyamada saati ve rozeti göstermek yanıltıcı oluyor (canlıda "en son
// güncelleme sabah 09:00 diyordu" geri bildirimi geldi). Bu kararın sekiz
// yerde ayrı ayrı yazılması yerine burada bir kez veriliyor.

import { formatTime } from "@/lib/format";
import StaleBadge from "@/components/StaleBadge";

export default function UpdatedAt({
  at,
  stale,
  refreshing,
  // "16:15:02 itibarıyla" (varsayılan) yerine "Son güncelleme: 16:15:02"
  // isteyen koyu kartlar için.
  variant = "suffix",
  className,
}: {
  at: string;
  stale: boolean;
  refreshing: boolean;
  variant?: "suffix" | "prefix";
  className?: string;
}) {
  if (refreshing) {
    return (
      <span className={className}>
        {/* Saat YOK: elimizdeki değer bilinerek eski, birazdan
            değişecek. Sayı göstermek yerine ne olduğunu söylüyoruz. */}
        Fiyatlar güncelleniyor…
      </span>
    );
  }

  return (
    <span className={className}>
      {stale && <StaleBadge />}
      {variant === "prefix"
        ? `Son güncelleme: ${formatTime(at)}`
        : `${formatTime(at)} itibarıyla`}
    </span>
  );
}
