import { getAllRooms } from "@/src/api/get-all-rooms";
import { Link } from "@/src/i18n/navigation";
import { ArrowRight } from "lucide-react";

function Decoration() {
  return (
    <>
      <img
        src="/img/pngwing.png"
        className="absolute top-[10%] left-[3%] w-10 opacity-40 rotate-12 
        animate-bounce"
      />

      <img
        src="/img/pngwing.png"
        className="absolute top-[45%] left-[12%] w-14 opacity-30 -rotate-6 scale-110 
        animate-bounce"
      />

      <img
        src="/img/pngwing.png"
        className="absolute bottom-[12%] left-[6%] w-12 opacity-50 rotate-20 scale-90 
        animate-bounce"
      />

      {/* DERECHA */}
      <img
        src="/img/pngwing.png"
        className="absolute top-[15%] right-[5%] w-11 opacity-40 -rotate-12 
        animate-bounce"
      />

      <img
        src="/img/pngwing.png"
        className="absolute top-[55%] right-[15%] w-16 opacity-30 rotate-6 scale-125 
        animate-bounce"
      />

      <img
        src="/img/pngwing.png"
        className="absolute bottom-[10%] right-[6%] w-12 opacity-50 rotate-25
        animate-bounce"
      />
    </>
  );
}

export default async function HomeRoomsPreview() {
  const rooms = await getAllRooms();
  return (
    <section className="py-24 lg:py-32 bg-stone-50 relative overflow-hidden">
      {Decoration()}
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-20">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-black/40">
            Habitaciones
          </span>
          <h2 className="text-4xl md:text-5xl font-extralight text-black mt-4">
            Espacios para
            <br />
            <span className="font-normal">tu descanso</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={room.id}>
              <div className="aspect-4/4 bg-stone-100 rounded-sm overflow-hidden mb-6 relative">
                <div className="w-full h-full bg-linear-to-br from-stone-200 to-stone-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                  <span className="text-6xl text-stone-400">🛏️</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs tracking-[0.2em] uppercase text-white bg-black/50 backdrop-blur-sm px-3 py-1">
                    {room.estado}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-light text-black tracking-wide">
                  {room.tipo}
                </h3>
              </div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-2xl font-light text-black">
                  {room.precio}
                </span>
                <span className="text-xs text-black/40">noche</span>
              </div>
              <Link
                href="/rooms"
                className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase text-black hover:gap-4 transition-all border-b border-black/20 pb-1"
              >
                Ver detalles
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/rooms"
            className="inline-flex items-center gap-3 bg-black text-white px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase hover:bg-black/90 transition-colors"
          >
            Ver todas las habitaciones
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
