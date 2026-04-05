import environment from "@/src/environments/environment";

export async function getPageContent<T>(
    endpoint: string,
    locale: string,
    fallbackData: T
): Promise<T> {
    try {
        const res = await fetch(
            `${environment.strapi.apiEndpoint}/api/${endpoint}?locale=${locale}&populate[content][populate]=*`,
            {
                next: {revalidate: 60},
            }
        );

        if (!res.ok) {
            console.warn("API respondió mal:", res.status);
            return fallbackData;
        }

        return (await res.json()) as T;

    } catch (error) {
        console.error("Error de red:", error);
        return fallbackData;
    }
}