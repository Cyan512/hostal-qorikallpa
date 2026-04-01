import { UrlImage } from "@/src/types/UrlImage";

export type Experience = {
    id: number;
    category: string;
    title: string;
    description: string;
    duration: number;
    price: number;
    image: UrlImage | string;
};