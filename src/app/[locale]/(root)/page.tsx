import {getPageContent} from "@/src/api/pages/get-page-content";
import {homeFallbackData} from "@/src/api/pages/homeFallbackData";
import {HeroComponent, WelcomeComponent} from "@/src/types/home";
import HomeWelcome from "@/src/app/[locale]/(root)/components/home-welcome";
import Hero from "@/src/app/[locale]/(root)/components/hero";
import {HeroSection, WelcomeSection} from "@/src/types/pages/home"
import Welcome from "@/src/app/[locale]/(root)/components/welcome";
import Room from "@/src/app/[locale]/(root)/components/room";
import Testimonial from "@/src/app/[locale]/(root)/components/testimonial";
import {Features} from "tailwindcss";

function renderComponent(component: any, index: number) {
    switch (component.__component) {
        case "home.hero":
            return (
                <Hero key={component.id} data={component as HeroSection}/>
            );
        case "home.welcome":
            return (
                <Welcome key={component.id} data={component as WelcomeSection}/>
            );
        case "home.room":
            return (
                <Room/>
            );
        case "home.testimonial":
            return (
                <Testimonial key={component.id} data={component as Testimonial}/>
            );
        case "home.feature":
            return (
                <Feature key={component.id} data={component as Features}/>
            );
        default:
            return null;
    }
}

interface Props {
    params: { locale: string };
}

export default async function Home({params}: Props) {
    const {locale} = await params;
    const response = await getPageContent("home-page", locale, homeFallbackData)
    const content = response?.data?.content || [];

    console.log("homepage", content)
    return (
        <>
            {content.map((component: any, index: number) =>
                renderComponent(component, index),
            )}
        </>
    )
}