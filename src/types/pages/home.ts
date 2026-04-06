import {Link, SectionHeader} from "@/src/types/shared";
import {StrapiImage} from "@/src/types/StrapiImage";

export type HeroSection = {
    __component: "home.hero";
    id: number;
    header: SectionHeader;
    actions: Link[];
    image: StrapiImage;
}

export type WelcomeSection = {
    __component: "home.welcome";
    id: number;
    header: SectionHeader;
    action: Link;
    image: StrapiImage;
}

export type RoomSection = {
    __component: "home.room";
    id: number;
    header: SectionHeader;
    action: Link;
}

export type TestimonialSection = {
    __component: "home.testimonial";
    id: number;
    header: SectionHeader;
    action: Link;
}