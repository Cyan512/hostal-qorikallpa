import { Button } from "@/src/components/atoms/button";
import { Phone } from "lucide-react";

export default function HomeReservationsCTA() {
  return (
    <section className="py-24 lg:py-32 bg-t1 text-pg0">
      <div className="max-w-4xl mx-auto px-8 lg:px-12 text-center">
        <span className="text-xs font-medium tracking-[0.3em] uppercase text-pg0/40">
          Reservaciones
        </span>
        <h2 className="text-4xl md:text-5xl font-extralight mt-4 mb-8">
          ¿Listo para
          <br />
          <span className="font-normal">visitarnos?</span>
        </h2>
        <p className="text-lg text-pg0/50 mb-12 max-w-lg mx-auto font-light leading-relaxed">
          Reserva directamente con nosotros para obtener las mejores tarifas y
          atención personalizada.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button href="/rooms" variant="primary">
            Reservar ahora
          </Button>
          <Button href="tel:+51984123456" variant="secondary">
            <Phone size={14} strokeWidth={1.5} />
            +51 984 123 456
          </Button>
        </div>
      </div>
    </section>
  );
}
