import environment from "@/src/environments/environment";

export async function getPageContent(endpoint: string, locale: string) {
    const res = await fetch(
        `${environment.strapi.apiEndpoint}/api/${endpoint}?locale=${locale}&populate[content][populate]=*`,
        {
            next: { revalidate: 60 },
        }
    );

    if (!res.ok) {
        return null;
    }

    const data = await res.json();
    return data;
}

export function extractPageComponents<T>(
    content: any[], 
    componentType: string
): T | undefined {
    if (!content || !Array.isArray(content)) return undefined;
    return content.find((c) => c.__component === componentType) as T | undefined;
}