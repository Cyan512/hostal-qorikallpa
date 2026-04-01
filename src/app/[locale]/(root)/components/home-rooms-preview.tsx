import { getRoomByType } from "@/src/api/get-room-by-type";
import { Button } from "@/src/components/atoms/button";
import SmartImage from "@/src/components/atoms/smart-image";
import EthnicInvasionPro from "@/src/components/molecules/ethnic-textile-master";

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
  const rooms = await getRoomByType();

  return (
    <section className="py-24 lg:py-32 relative">
      {Decoration()}
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-20">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-tx3">
            Habitaciones
          </span>
          <h2 className="text-4xl md:text-5xl font-extralight text-tx mt-4">
            Espacios para
            <br />
            <span className="font-normal">tu descanso</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={room.id}>
              <div className="aspect-4/4 bg-pg2 rounded-sm overflow-hidden mb-6 relative">
                <div className="w-full h-full bg-linear-to-br from-pg2 to-pg3 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                  <SmartImage
                    strapiUrl={room.habitacion?.url_imagen?.[0]}
                    alt={room.nombre}
                    width={800} 
                    height={500}
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs tracking-[0.2em] uppercase text-pg0 bg-t1/50 backdrop-blur-sm px-3 py-1">
                    {room.estado}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-light text-tx tracking-wide">
                  {room.nombre}
                </h3>
              </div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-2xl font-light text-tx">
                  {room.habitacion.tipo_habitacion_id}
                </span>
                <span className="text-xs text-tx3">noche</span>
              </div>
              <Button href="/rooms" variant="link">
                Ver detalles
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button href="/rooms" variant="dark">
            Ver todas las habitaciones
          </Button>
        </div>
      </div>
      <EthnicInvasionPro />
    </section>
  );
}
