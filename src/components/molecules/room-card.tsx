import { Room } from "@/src/types/rooms/Room";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = {
    room: Room;
};

export default function RoomCard({ room }: Props) {
    const t = useTranslations("common");
    return (
        <div className="group">
            <div className="relative aspect-3/4 overflow-hidden mb-6 -z-10">
                {/* Image */}
            </div>
            <div className="flex justify-between items-start mb-3"  >
                <h3 className="text-lg font-light tracking-wide capitalize">
                    {room.tipo}
                </h3>
            </div>
            <p className="text-sm font-light mb-6 leading-relaxed line-clamp-2">

            </p>
            <div className="flex items-baseline gap-1 mb-2">
                <span className="text-2xl font-light">
                    ${room.precio}
                </span>
                <span className="text-xs">
                    /{t("night")}
                </span>
            </div>
            <button className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase hover:gap-4 transition-all border-b border-black/20 pb-1">
                {t("viewDetails")}
                <ArrowRight size={12} />
            </button>

        </div>
    )
}
