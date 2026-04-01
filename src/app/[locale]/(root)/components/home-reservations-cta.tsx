import { Link } from "@/src/i18n/navigation";
import { Phone } from "lucide-react";

export default function HomeReservationsCTA() {
  return (
    <section className="py-24 lg:py-32 bg-black text-white">
      <div className="max-w-4xl mx-auto px-8 lg:px-12 text-center">
        <span className="text-xs font-medium tracking-[0.3em] uppercase text-white/40">
          Reservaciones
        </span>
        <h2 className="text-4xl md:text-5xl font-extralight mt-4 mb-8">
          ¿Listo para
          <br />
          <span className="font-normal">visitarnos?</span>
        </h2>
        <p className="text-lg text-white/50 mb-12 max-w-lg mx-auto font-light leading-relaxed">
          Reserva directamente con nosotros para obtener las mejores tarifas y
          atención personalizada.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/rooms"
            className="inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase hover:bg-white/90 transition-colors"
          >
            Reservar ahora
          </Link>
          <a
            href="tel:+51984123456"
            className="inline-flex items-center justify-center gap-3 border border-white/30 text-white px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase hover:bg-white/10 transition-colors"
          >
            <Phone size={14} strokeWidth={1.5} />
            +51 984 123 456
          </a>
        </div>
      </div>
    </section>
  );
}
