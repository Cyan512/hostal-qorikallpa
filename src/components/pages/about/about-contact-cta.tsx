import { ArrowRight } from "lucide-react";

export default function AboutContactCTA() {
  return (
    <section className="py-24 lg:py-32 bg-black text-white">
      <div className="max-w-4xl mx-auto px-8 lg:px-12 text-center">
        <span className="text-xs font-medium tracking-[0.3em] uppercase text-white/40">
          Contacto
        </span>
        <h2 className="text-4xl md:text-5xl font-extralight mt-4 mb-8">
          ¿Tienes
          <br />
          <span className="font-normal">preguntas?</span>
        </h2>
        <p className="text-lg text-white/50 mb-12 max-w-lg mx-auto font-light leading-relaxed">
          Nuestro equipo está listo para ayudarte a planificar tu estadía
          perfecta.
        </p>
        <a
          href="mailto:hola@andean.pe"
          className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase hover:bg-white/90 transition-colors"
        >
          Contáctanos
          <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
}
