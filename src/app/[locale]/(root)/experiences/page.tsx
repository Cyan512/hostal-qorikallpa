import HeroSection from "@/src/components/pages/hero-section";
import { getTranslations } from "next-intl/server";
import ExperiencesFeatured from "@/src/app/[locale]/(root)/experiences/components/experiences-featured";
import ExperiencesGrid from "@/src/app/[locale]/(root)/experiences/components/experiences-grid";

export default async function ExperiencesPage() {
  const t = await getTranslations("contactPage");
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
      <ExperiencesFeatured />
      <ExperiencesGrid />
    </>
  );
}
