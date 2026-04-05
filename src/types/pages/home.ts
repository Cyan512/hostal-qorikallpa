import {Link} from "@/src/types/shared";
import {StrapiImage} from "@/src/types/StrapiImage";

export type HeroSection = {
    __component: "home.hero";
    id: number;
    subtitle: string;
    title: string;
    description: string;
    actions: Link[];
    background_image: StrapiImage;
}