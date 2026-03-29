import { getTranslations } from "next-intl/server";
import HomeFeatures from "@/src/components/pages/home/home-features";
import HomeHero from "@/src/components/pages/home/home-hero";
import HomeReservationsCTA from "@/src/components/pages/home/home-reservations-cta";
import HomeRoomsPreview from "@/src/components/pages/home/home-rooms-preview";
import HomeTestimonials from "@/src/components/pages/home/home-testimonials";
import HomeWelcome from "@/src/components/pages/home/home-welcome";
import Newsletter from "@/src/components/pages/newsletter";

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
