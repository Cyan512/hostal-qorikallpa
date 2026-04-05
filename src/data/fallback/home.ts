import { getTranslations } from "next-intl/server";
import { getPageContent } from "@/src/api/get-page-content";
import HomeHero from "@/src/app/[locale]/(root)/components/home-hero";
import HomeWelcome from "@/src/app/[locale]/(root)/components/home-welcome";
import { HeroComponent, WelcomeComponent } from "@/src/types/home";

function renderComponent(component: any, index: number) {
  switch (component.__component) {
    case "home.hero":
      return <HomeHero key={component.id} data={component as HeroComponent} />;
    case "home.welcome":
      return (
          <HomeWelcome key={component.id} data={component as WelcomeComponent} />
    );
    default:
      return null;
  }
}

interface Props {
  params: { locale: string };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("newsletter");

  const response = await getPageContent("home", locale);
  const content = response?.data?.content || [];

  return (
      <>
          {content.map((component: any, index: number) =>
                renderComponent(component, index),
            )}
      </>
  );
}

