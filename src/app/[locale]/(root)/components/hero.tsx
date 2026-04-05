import {HeroSection} from "@/src/types/pages/home"
import SmartImage from "@/src/components/atoms/smart-image";
import {Button} from "@/src/components/atoms/button";
import {ButtonVariant} from "@/src/types/ButtonVariant";

interface Props {
    data: HeroSection;
}

export default function Hero({data}: Props) {
    const hero = data;
    return (
        <section className="relative min-h-screen flex items-center pt-16 lg:pt-20">
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full py-16 md:py-24 lg:py-32">
                <div className="max-w-2xl">
                    <div className="mb-8">
                        <span className="text-xs font-medium tracking-[0.3em] uppercase">
                            {hero.subtitle}
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight leading-[1.1] mb-8 tracking-wide">
                        {hero.title}
                    </h1>
                    <p className="text-lg leading-relaxed mb-12 max-w-lg font-light">
                        {hero.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        {data.actions.map((cta) => (
                            <Button key={cta.id} href={cta.url} variant={cta.variant as ButtonVariant}
                                    showArrow={false}>
                                {cta.label}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}