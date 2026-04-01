import { Button } from "@/src/components/atoms/button";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 lg:pt-20">
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full py-16 md:py-24 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight leading-[1.1] mb-8 tracking-wide">
            Donde el tiempo
            <br />
            <span className="font-normal">se detiene</span>
          </h1>
          <p className="text-lg leading-relaxed mb-12 max-w-lg font-light">
            Un refugio de elegancia en el corazón de los Andes. Vive
            experiencias que trascienden lo ordinario.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/rooms" variant="primary" showArrow={false}>
              Explorar habitaciones
            </Button>
            <Button href="/about" variant="secondary" showArrow={false}>
              Nuestra historia
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
