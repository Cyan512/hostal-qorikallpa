import environment from "@/src/environments/environment";

type Testimonial = {
    id: number;
    name: string;
    country: string;
    rating: number;
    text: string;
};

export async function getAllTestimonials(): Promise<Testimonial[]> {
    try {
        const response = await fetch(
            `${environment.strapi.apiEndpoint}/api/testimonials?populate=*&locale=es`,
            {
                signal: AbortSignal.timeout(5000),
            },
        );

        if (!response.ok) {
            throw new Error("Error en la API");
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching testimonials:", error);
        throw error;
    }
}