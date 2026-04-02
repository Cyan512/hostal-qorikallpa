import { getTranslations } from "next-intl/server";
import {
  getPageContent,
  extractPageComponents,
} from "@/src/api/get-page-content";
import HomeFeatures from "@/src/app/[locale]/(root)/components/home-features";
import HomeHero from "@/src/app/[locale]/(root)/components/home-hero";
import HomeReservationsCTA from "@/src/app/[locale]/(root)/components/home-reservations-cta";
import HomeRoomsPreview from "@/src/app/[locale]/(root)/components/home-rooms-preview";
import HomeTestimonials from "@/src/app/[locale]/(root)/components/home-testimonials";
import HomeWelcome from "@/src/app/[locale]/(root)/components/home-welcome";
import Newsletter from "@/src/components/pages/newsletter";
import { HeroComponent, WelcomeComponent } from "@/src/types/home";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("newsletter");

  const response = await getPageContent("home", locale);
  const content = response?.data?.content || [];

  const heroData = extractPageComponents<HeroComponent>(content, "home.hero");
  const welcomeData = extractPageComponents<WelcomeComponent>(
    content,
    "home.welcome",
  );

  return (
    <>
      <HomeHero data={heroData} />
      <HomeWelcome data={welcomeData} />
      <HomeRoomsPreview />
      <HomeTestimonials />
      <Newsletter title={t("title")} subtitle={t("subtitle")} />
      <HomeFeatures />
      <HomeReservationsCTA />
    </>
  );
}
