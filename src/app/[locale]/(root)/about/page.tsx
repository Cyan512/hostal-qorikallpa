import { getTranslations } from "next-intl/server";

import AboutContactCTA from "@/src/components/pages/about/about-contact-cta";
import AboutStats from "@/src/components/pages/about/about-stats";
import AboutStory from "@/src/components/pages/about/about-story";
import AboutValues from "@/src/components/pages/about/about-values";
import HeroSection from "@/src/components/pages/hero-section";

export default async function AboutPage() {
  const t = await getTranslations("aboutPage");
  return (
    <>
      <HeroSection
        eyebrow={t("hero.eyebrow")}
        title={{
          prefix: t("hero.title.prefix"),
          highlight: t("hero.title.highlight"),
        }}
        description={t("hero.description")}
      />
      <AboutStats />
      <AboutStory />
      <AboutValues />
      <AboutContactCTA />
    </>
  );
}
