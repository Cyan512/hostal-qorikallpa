import { experiences } from "@/src/data/experiences";
import environment from "@/src/environments/environment";

type ExperienceImage = {
  url: string;
};

type Experience = {
  id: number;
  title: string;
  description: string;
  image: ExperienceImage | string;
};

export async function getAllExperiences(): Promise<Experience[]> {
    try {
        const response = await fetch(
            `${environment.strapi.apiEndpoint}/api/experiences?populate=*&locale=es`,
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
        console.warn("⚠️ Strapi no disponible, usando mock");
        return experiences;
    }
}
