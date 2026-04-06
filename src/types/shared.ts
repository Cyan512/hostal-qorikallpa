import {ButtonVariant} from "@/src/types/ButtonVariant";
import {StrapiImage} from "@/src/types/home";

export type Link = {
    id: number;
    label: string;
    url: string;
    type: string;
    open_in_new_tab: boolean;
    variant: ButtonVariant;
}

export type SectionHeader = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
}

export type Image = {
    id: number;
    alt: string;
    image: StrapiImage;
}