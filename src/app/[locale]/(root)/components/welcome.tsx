import {WelcomeSection} from "@/src/types/pages/home";

interface Props {
    data: WelcomeSection;
}

export default function Welcome({data}: Props) {
    const welcome = data;
    return (
        <section className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-8 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div>
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-black/40">
                {welcome.header.subtitle}
            </span>
                        <h2 className="text-4xl md:text-5xl font-extralight text-black mt-4 mb-8 leading-tight">
                            {welcome.header.title}
                        </h2>
                        <div className="space-y-6 text-black/60 leading-relaxed font-light">
                            <p>
                                {welcome.header.description}
                            </p>
                        </div>
                        <div className="mt-12">
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-[4/5] bg-stone-100 rounded-sm overflow-hidden">
                            <div
                                className="w-full h-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
                                <span className="text-8xl text-stone-400">⛰️</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}