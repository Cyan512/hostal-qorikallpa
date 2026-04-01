interface HeroSectionProps {
    eyebrow?: string;
    title: {
        prefix: string;
        highlight: string;
    };
    description: string;
}

export default function HeroSection({
                                        eyebrow,
                                        title,
                                        description,
                                    }: HeroSectionProps) {
    return (
        <section className="pt-32 lg:pt-40 pb-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-8 lg:px-12">
                <div className="max-w-3xl">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-white/40">
            {eyebrow}
          </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight mt-4 mb-8 leading-[1.1]">
                        {title.prefix}
                        <br/>
                        <span className="font-normal">{title.highlight}</span>
                    </h1>
                    <p className="text-lg text-white/50 max-w-xl font-light leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
}
