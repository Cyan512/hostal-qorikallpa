export default function AboutStats() {
  const stats = [
    { number: "15+", label: "Años de experiencia" },
    { number: "100+", label: "Habitaciones" },
    { number: "5000+", label: "Clientes satisfechos" },
    { number: "5*", label: "Calificación" },
  ];
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-extralight text-black mb-2">
                {stat.number}
              </div>
              <div className="text-xs tracking-[0.2em] uppercase text-black/40">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
