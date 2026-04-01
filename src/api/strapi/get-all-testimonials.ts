import { testimonials } from "@/src/data/testimonials";
import environment from "@/src/environments/environment";
import { Testimonial } from "@/src/types/testimonial";

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
        console.warn("Strapi no disponible, usando mock");
        return testimonials
    }
}