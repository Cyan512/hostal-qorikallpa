import { getAllTestimonials } from "@/src/api/strapi/get-all-testimonials";
import { Link } from "@/src/i18n/navigation";
import { ArrowRight, Star } from "lucide-react";

export default async function HomeTestimonials() {
  const testimonials = await getAllTestimonials();
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-tx3">
            Testimonios
          </span>
          <h2 className="text-4xl md:text-5xl font-extralight text-tx mt-4">
            Lo que dicen
            <br />
            <span className="font-normal">nuestros huéspedes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review, i) => (
            <div key={i} className="bg-pg0 p-8 rounded-sm">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={12}
                    className={
                      s <= review.rating
                        ? "text-o1 fill-o1"
                        : "text-tx/20"
                    }
                  />
                ))}
              </div>
              <p className="text-sm text-tx2 font-light leading-relaxed mb-6">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pg2 rounded-full flex items-center justify-center text-sm font-medium text-tx">
                  {review.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-medium text-tx">
                    {review.name}
                  </p>
                  <p className="text-xs text-tx3">{review.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-sm text-tx2 hover:text-tx transition-colors"
          >
            Ver todas las reseñas
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
