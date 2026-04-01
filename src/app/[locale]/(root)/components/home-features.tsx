import { useTranslations } from "next-intl";

export default function HomeFeatures() {
  const t = useTranslations("HomePage.features");
  const features = [
    {
      title: t("feature1.title"),
      description: t("feature1.description"),
    },
    {
      title: t("feature2.title"),
      description: t("feature2.description"),
    },
    {
      title: t("feature3.title"),
      description: t("feature3.description"),
    },
  ];
  return (
    <section className="py-24 lg:py-32 bg-pg0">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center lg:text-left">
              <div className="w-px h-12 bg-tx/10 lg:hidden mx-auto mb-8" />
              <h3 className="text-lg font-light text-tx tracking-wide mb-4">
                {feature.title}
              </h3>
              <p className="text-tx2 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
