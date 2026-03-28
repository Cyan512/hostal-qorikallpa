import { SlidersHorizontal } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { getAllRoomTypes } from "@/src/api/rooms/get-all-room-types";
import BookingDate from "../atoms/booking-input";

export default async function RoomsFilters() {
  const t = await getTranslations("common");
  const roomTypes = await getAllRoomTypes();
  return (
    <aside className="lg:w-72 shrink-0">
      <div className="sticky top-32">
        <div className="flex items-center gap-3 mb-8">
          <SlidersHorizontal size={18} strokeWidth={1.5} />
          <h2 className="text-xs font-medium tracking-[0.2em] uppercase">
            {t("filters")}
          </h2>
        </div>
        <div className="space-y-8">
          <div>
            <label className="block text-xs tracking-[0.15em] uppercase mb-4">
              Typo
            </label>
            <select className="w-full border-b border-black/10 pb-3 text-sm font-light bg-transparent focus:outline-none focus:border-black transition-colors">
              <option value="">all</option>
              {roomTypes.map((type) => (
                <option key={type.id} value={type.nombre}>
                  {type.nombre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs tracking-[0.15em] uppercase mb-4">
              Check-in
            </label>
            <div className="relative z-100 w-full border-b border-black/10 pb-3 text-sm font-light bg-transparent focus:outline-none focus:border-black transition-colors">
              <BookingDate />
            </div>
          </div>
          <button className="w-full bg-black text-white py-4 text-xs font-medium tracking-[0.15em] uppercase hover:bg-black/90 transition-colors mt-8">
            applyFilters
          </button>
        </div>
      </div>
    </aside>
  );
}
