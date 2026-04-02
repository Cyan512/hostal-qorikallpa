import { Button } from "@/src/components/atoms/button";
import { HeroComponent } from "@/src/types/home";
import SmartImage from "@/src/components/atoms/smart-image";

type HomeHeroProps = {
  data?: HeroComponent;
};

export default function HomeHero({ data }: HomeHeroProps) {
  const hero = data;

  return (
    <section className="relative min-h-screen flex items-center pt-16 lg:pt-20">
      {hero?.image && (
        <div className="absolute inset-0 z-0">
          <SmartImage
            strapiUrl={hero.image.formats?.large?.url || hero.image.url}
            alt={hero.title}
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full py-16 md:py-24 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight leading-[1.1] mb-8 tracking-wide">
            {hero?.title || "Donde el tiempo"}
            <br />
            <span className="font-normal">{hero?.title?.split(" ").slice(-2).join(" ") || "se detiene"}</span>
          </h1>
          <p className="text-lg leading-relaxed mb-12 max-w-lg font-light">
            {hero?.description || "Un refugio de elegancia en el corazón de los Andes. Vive experiencias que trascienden lo ordinario."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={hero?.cta_link_primary || "/rooms"} variant="primary" showArrow={false}>
              {hero?.cta_text_primary || "Explorar habitaciones"}
            </Button>
            <Button href={hero?.cta_link_secondary || "/about"} variant="secondary" showArrow={false}>
              {hero?.cta_text_secondary || "Nuestra historia"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
