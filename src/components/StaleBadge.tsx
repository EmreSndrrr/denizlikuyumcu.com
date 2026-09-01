import { WarningCircle } from "@phosphor-icons/react/dist/ssr";

// Periyodik yoklama başarısız olduğunda ("veri gecikmeli") gösterilen
// küçük, tutarlı uyarı rozeti — fiyat çeken tüm bileşenlerde aynı görünüm.
export default function StaleBadge() {
  return (
    <span className="flex items-center gap-1 rounded-full bg-negative/10 px-2 py-0.5 text-[11px] font-medium text-negative">
      <WarningCircle aria-hidden="true" size={12} weight="bold" />
      Veri gecikmeli
    </span>
  );
}
