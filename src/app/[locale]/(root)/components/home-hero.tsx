import { Link } from "@/src/i18n/navigation";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 lg:pt-20">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30 z-10" />
        <div className="w-full h-full bg-linear-to-br from-stone-900 via-stone-800 to-stone-900 flex items-center justify-center">
          <div className="text-center text-white/20">
            <div className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-[0.5em] mb-4">
              ANDES
            </div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-thin tracking-[1em]">
              CUSCO
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full py-16 md:py-24 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white leading-[1.1] mb-8 tracking-wide">
            Donde el tiempo
            <br />
            <span className="font-normal">se detiene</span>
          </h1>
          <p className="text-lg text-white/60 leading-relaxed mb-12 max-w-lg font-light">
            Un refugio de elegancia en el corazón de los Andes. Vive
            experiencias que trascienden lo ordinario.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/rooms"
              className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 text-xs font-medium tracking-[0.2em] uppercase hover:bg-white/90 transition-colors"
            >
              Explorar habitaciones
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 text-xs font-medium tracking-[0.2em] uppercase hover:bg-white/10 transition-colors"
            >
              Nuestra historia
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
