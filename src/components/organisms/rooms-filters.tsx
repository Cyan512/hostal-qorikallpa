import { SlidersHorizontal } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function RoomsFilters() {
  const t = await getTranslations('common');
  return (
    <div className="lg:w-72 shrink-0">
      <div className="sticky top-32">
        <div className="flex items-center gap-3 mb-8">
          <SlidersHorizontal size={18} strokeWidth={1.5} />
          <h2 className="text-xs font-medium tracking-[0.2em] uppercase">
            {t("filters")}
          </h2>
        </div>
        <div className="space-y-8">
          <div>
            <label className="block text-xs tracking-[0.15em] uppercase"></label>
          </div>
        </div>
      </div>
    </div>
  )
}
