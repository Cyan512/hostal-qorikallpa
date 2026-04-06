import {getPageContent} from "@/src/api/pages/get-page-content";
import {homeFallbackData} from "@/src/api/pages/homeFallbackData";
import Hero from "@/src/app/[locale]/(root)/about/components/hero";
import Stats from "@/src/app/[locale]/(root)/about/components/stats";
import Story from "@/src/app/[locale]/(root)/about/components/story";
import Values from "@/src/app/[locale]/(root)/about/components/values";

interface Props {
    params: { locale: string };
}

function renderComponent(component: any, index: number) {
    switch (component.__component) {
        case "shared.section-hero":
            return (
                <Hero/>
            );
        case "about.stats":
            return (
                <Stats/>
            );
        case "about.story":
            return (
                <Story/>
            );
        case "about.values":
            return (
                <Values/>
            );
        default:
            return null;
    }
}

export default async function About({params}: Props) {
    const {locale} = await params;
    const response = await getPageContent("about-page", locale, homeFallbackData)
    const content = response?.data?.content || [];
    return (
        <>
            {content.map((component: any, index: number) =>
                renderComponent(component, index),
            )}
        </>
    );
}
