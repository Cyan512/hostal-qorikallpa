import { getAllRooms } from "@/src/api/rooms/get-all-rooms"
import RoomCard from "@/src/components/molecules/room-card";
import RoomsFilters from "@/src/components/organisms/rooms-filters";
import { Room } from "@/src/types/rooms/Room";
import { getTranslations } from "next-intl/server";

export default async function RoomsPage() {
  const t = await getTranslations('common');
  const rooms: Room[] = await getAllRooms();

  return (
    <>
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12">
            <RoomsFilters />
            <div className="flex-1">
              <div className="mb-12">
                <p className="text-sm">
                  {t("showing")} {" "}
                  <span className="font-medium">
                    {rooms.length}{" "}
                  </span>
                  {t("rooms")}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                {rooms.map((room) => (
                  <RoomCard key={room.id} room={room} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
