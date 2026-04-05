import {getPageContent} from "@/src/api/pages/get-page-content";
import {homeFallbackData} from "@/src/api/pages/homeFallbackData";
import {HeroComponent, WelcomeComponent} from "@/src/types/home";
import HomeWelcome from "@/src/app/[locale]/(root)/components/home-welcome";
import Hero from "@/src/app/[locale]/(root)/components/hero";
import {HeroSection} from "@/src/types/pages/home"

function renderComponent(component: any, index: number) {
    switch (component.__component) {
        case "home.hero":
            return <Hero key={component.id} data={component as HeroSection}/>
        case "home.welcome":
            return (
                <HomeWelcome key={component.id} data={component as WelcomeComponent}/>
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