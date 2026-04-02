import { getTranslations } from "next-intl/server";
import HomeFeatures from "@/src/app/[locale]/(root)/components/home-features";
import HomeHero from "@/src/app/[locale]/(root)/components/home-hero";
import HomeReservationsCTA from "@/src/app/[locale]/(root)/components/home-reservations-cta";
import HomeRoomsPreview from "@/src/app/[locale]/(root)/components/home-rooms-preview";
import HomeTestimonials from "@/src/app/[locale]/(root)/components/home-testimonials";
import HomeWelcome from "@/src/app/[locale]/(root)/components/home-welcome";
import Newsletter from "@/src/components/pages/newsletter";
import { HomeResponse } from "@/src/types/home";

export default async function Home() {
  const t = await getTranslations("newsletter");

  return (
    <>
      <HomeHero />
      <HomeWelcome />
      <HomeRoomsPreview />
      <HomeTestimonials />
      <Newsletter title={t("title")} subtitle={t("subtitle")} />
      <HomeFeatures />
      <HomeReservationsCTA />
    </>
  );
}
