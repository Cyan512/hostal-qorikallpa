import AuthenticDivider from "@/src/components/molecules/authentic-divider";
import { Link } from "@/src/i18n/navigation";
import { ArrowRight } from "lucide-react";
import SmartImage from "@/src/components/atoms/smart-image";
import { WelcomeComponent } from "@/src/types/home";

type HomeWelcomeProps = {
  data?: WelcomeComponent;
};

export default function HomeWelcome({ data }: HomeWelcomeProps) {
  const welcome = data;

  return (
    <section className="py-24 lg:py-32 relative ">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-tx3">
              {welcome?.subtitle || "Bienvenida"}
            </span>
            <h2 className="text-4xl md:text-5xl font-extralight text-tx mt-4 mb-8 leading-tight">
              {welcome?.title || "Un legado de"}
              <br />
              <span className="font-normal">elegancia</span>
            </h2>
            <div className="space-y-6 text-tx2 leading-relaxed font-light">
              {welcome?.description ? (
                <p className="whitespace-pre-line">{welcome.description}</p>
              ) : (
                <>
                  <p>
                    Andean nace de la pasión por compartir la magia de los Andes con
                    el mundo. Cada espacio ha sido diseñado para ofrecerte una
                    experiencia única, donde la tradición y la modernidad se funden
                    en perfecta armonía.
                  </p>
                  <p>
                    Desde nuestra ubicación privilegiada en el centro histórico de
                    Cusco, te invitamos a descubrir uno de los destinos más
                    fascinantes del mundo.
                  </p>
                </>
              )}
            </div>
            <div className="mt-12">
              <Link
                href={welcome?.cta_link || "/about"}
                className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-tx hover:gap-4 transition-all"
              >
                {welcome?.cta_text || "Descubre más"}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-4/5 w-full relative">
              {welcome?.image ? (
                <SmartImage
                  strapiUrl={welcome.image.formats?.medium?.url || welcome.image.url}
                  alt={welcome.title || ""}
                  width={800}
                  height={1000}
                  className="absolute inset-0 w-full h-full object-cover clip-stepped"
                />
              ) : (
                <img
                  src="/test.webp"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover clip-stepped"
                />
              )}
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-t1 rounded-sm flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-4xl font-extralight">15+</div>
                <div className="text-xs tracking-[0.2em] uppercase mt-2">
                  Años
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AuthenticDivider/>
    </section>
  );
}
