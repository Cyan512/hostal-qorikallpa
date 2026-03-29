import HomeHero from "@/src/components/pages/home/home-hero";
import HomeRoomsPreview from "@/src/components/pages/home/home-rooms-preview";
import HomeTestimonials from "@/src/components/pages/home/home-testimonials";
import HomeWelcome from "@/src/components/pages/home/home-welcome";

export default async function Home() {
  return (
    <>
      <HomeHero />
      <HomeWelcome />
      <HomeRoomsPreview />
      <HomeTestimonials />
    </>
  );
}
