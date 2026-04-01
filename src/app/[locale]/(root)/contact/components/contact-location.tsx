import { MapPin } from "lucide-react";

export default function ContactLocation() {
  return (
    <section className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-black/40">
            Ubicación
          </span>
          <h2 className="text-3xl md:text-4xl font-extralight text-black mt-4">
            En el corazón
            <br />
            <span className="font-normal">de Cusco</span>
          </h2>
        </div>

        <div className="bg-stone-200 rounded-sm aspect-21/9 flex items-center justify-center">
          <div className="text-center text-stone-400">
            <MapPin size={48} strokeWidth={1} className="mx-auto mb-4" />
            <p className="font-light">Google Maps</p>
            <p className="text-sm">Jr. Lima 432, Cusco Centro</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-center">
          <div>
            <div className="text-3xl font-extralight text-black">5</div>
            <div className="text-xs tracking-[0.15em] uppercase text-black/40 mt-2">
              min Plaza de Armas
            </div>
          </div>
          <div>
            <div className="text-3xl font-extralight text-black">10</div>
            <div className="text-xs tracking-[0.15em] uppercase text-black/40 mt-2">
              min Mercado
            </div>
          </div>
          <div>
            <div className="text-3xl font-extralight text-black">20</div>
            <div className="text-xs tracking-[0.15em] uppercase text-black/40 mt-2">
              min Aeropuerto
            </div>
          </div>
          <div>
            <div className="text-3xl font-extralight text-black">3,400</div>
            <div className="text-xs tracking-[0.15em] uppercase text-black/40 mt-2">
              m.s.n.m
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
