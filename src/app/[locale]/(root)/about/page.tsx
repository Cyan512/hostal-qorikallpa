import { getTranslations } from "next-intl/server";

import AboutContactCTA from "@/src/app/[locale]/(root)/about/components/about-contact-cta";
import AboutStats from "@/src/app/[locale]/(root)/about/components/about-stats";
import AboutStory from "@/src/app/[locale]/(root)/about/components/about-story";
import AboutValues from "@/src/app/[locale]/(root)/about/components/about-values";
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
