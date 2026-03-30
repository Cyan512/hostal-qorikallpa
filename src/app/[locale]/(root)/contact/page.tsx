import { getTranslations } from "next-intl/server";

import HeroSection from "@/src/components/pages/hero-section";
import ContactBlock from "@/src/components/pages/contact/contact-block";
import ContactLocation from "@/src/components/pages/contact/contact-location";

export default async function ContactPage() {
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
      <ContactBlock />
      <ContactLocation />
    </>
  );
}
