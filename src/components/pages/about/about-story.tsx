import { Award } from "lucide-react";

export default function AboutStory() {
  return (
    <section className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-4/5 bg-stone-100 rounded-sm overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-stone-200 to-stone-300 flex items-center justify-center">
                  <span className="text-8xl text-stone-400">🏛️</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black rounded-sm flex items-center justify-center">
                <div className="text-center text-white">
                  <Award size={24} strokeWidth={1.5} className="mx-auto mb-2" />
                  <div className="text-xs tracking-[0.15em] uppercase">
                    Desde 2009
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-black/40">
              Nuestra historia
            </span>
            <h2 className="text-4xl md:text-5xl font-extralight text-black mt-4 mb-8 leading-tight">
              Raíces profundas,
              <br />
              <span className="font-normal">horizontes amplios</span>
            </h2>
            <div className="space-y-6 text-black/60 leading-relaxed font-light">
              <p>
                Andean nació del sueño de crear un espacio donde la elegancia y
                la autenticidad se encontraran. Ubicado en una casona colonial
                del siglo XIX, nuestro hotel combina el encanto del pasado con
                el confort del presente.
              </p>
              <p>
                A lo largo de los años, hemos tenido el privilegio de recibir a
                viajeros de todos los continentes, cada uno aportando su
                historia única a la nuestra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
