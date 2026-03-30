export default function AboutValues() {
  const values = [
    {
      title: "Autenticidad",
      desc: "Cada detalle refleja la riqueza cultural de los Andes.",
    },
    {
      title: "Excelencia",
      desc: "Servicio de primera clase en cada momento.",
    },
    {
      title: "Tradición",
      desc: "Honramos nuestro patrimonio cultural.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-20">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-black/40">
            Valores
          </span>
          <h2 className="text-4xl md:text-5xl font-extralight text-black mt-4">
            Lo que nos
            <br />
            <span className="font-normal">define</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-px h-12 bg-black/10 mx-auto mb-8" />
              <h3 className="text-lg font-light text-black tracking-wide mb-4">
                {value.title}
              </h3>
              <p className="text-black/50 font-light leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
