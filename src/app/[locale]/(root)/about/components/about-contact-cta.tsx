import { Button } from "@/src/components/atoms/button";

export default function AboutContactCTA() {
  return (
    <section className="py-24 lg:py-32 bg-t1 text-pg0">
      <div className="max-w-4xl mx-auto px-8 lg:px-12 text-center">
        <span className="text-xs font-medium tracking-[0.3em] uppercase text-pg0/40">
          Contacto
        </span>
        <h2 className="text-4xl md:text-5xl font-extralight mt-4 mb-8">
          ¿Tienes
          <br />
          <span className="font-normal">preguntas?</span>
        </h2>
        <p className="text-lg text-pg0/50 mb-12 max-w-lg mx-auto font-light leading-relaxed">
          Nuestro equipo está listo para ayudarte a planificar tu estadía
          perfecta.
        </p>
        <Button href="mailto:hola@andean.pe" variant="primary">
          Contáctanos
        </Button>
      </div>
    </section>
  );
}
