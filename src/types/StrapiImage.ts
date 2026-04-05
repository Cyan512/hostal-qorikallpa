export type StrapiImage = {
    id: number;
    url: string;
    formats?: {
        small?: { url: string };
        medium?: { url: string };
        large?: { url: string };
        thumbnail?: { url: string };
    };
};