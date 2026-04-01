import { getAllExperiences } from "@/src/api/strapi/get-all-experiences";
import SmartImage from "@/src/components/atoms/smart-image";
import { ArrowRight, Clock } from "lucide-react";

export default async function ExperiencesFeatured() {
  const experiences = await getAllExperiences();
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-black/40">
            Destacados
          </span>
          <h2 className="text-4xl md:text-5xl font-extralight text-black mt-4">
            Experiencias
            <br />
            <span className="font-normal">imprescindibles</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="group bg-stone-50 overflow-hidden">
              <div className="aspect-16/10 bg-linear-to-br from-stone-200 to-stone-300 flex items-center justify-center relative">
                <SmartImage
                  strapiUrl={
                    typeof exp.image === "string" ? exp.image : exp.image?.url
                  }
                  alt={exp.title}
                  width={800}
                  height={500}
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs tracking-[0.15em] uppercase bg-black/70 backdrop-blur-sm text-white px-3 py-1">
                    {exp.category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <h3 className="text-2xl font-light text-black mb-3">
                  {exp.title}
                </h3>
                <p className="text-black/50 font-light leading-relaxed mb-6">
                  {exp.description}
                </p>
                <div className="flex items-center gap-6 text-xs text-black/40 mb-6">
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} strokeWidth={1.5} />
                    {exp.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-light text-black">
                      {exp.price}
                    </span>
                    <span className="text-xs text-black/40 ml-1">/persona</span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase text-black hover:gap-4 transition-all"
                  >
                    Reservar
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
