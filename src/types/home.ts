export type StrapiImage = {
    url: string;
    formats?: {
        small?: { url: string };
        medium?: { url: string };
        thumbnail?: { url: string };
    };
};

export type HeroComponent = {
    __component: "home.hero";
    id: number;
    title: string;
    description: string;
    cta_text_primary: string;
    cta_link_primary: string;
    cta_text_secondary: string;
    cta_link_secondary: string;
    image: StrapiImage;
};

export type WelcomeComponent = {
    __component: "home.welcome";
    id: number;
    subtitle: string;
    title: string;
    description: string;
    cta_text: string;
    cta_link: string;
    image: StrapiImage;
};

export type HomeResponse = {
    data: {
        content: (HeroComponent | WelcomeComponent)[];
    };
};