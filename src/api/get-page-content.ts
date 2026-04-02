import environment from "@/src/environments/environment";
import { homeFallbackData } from "@/src/data/fallback/home";

const fallbackDataMap: Record<string, any> = {
    home: homeFallbackData,
};

export async function getPageContent(endpoint: string, locale: string) {
    try {
        const res = await fetch(
            `${environment.strapi.apiEndpoint}/api/${endpoint}?locale=${locale}&populate[content][populate]=*`,
            {
                next: { revalidate: 0 },
            }
        );

        if (!res.ok) {
            console.warn(`⚠️ Strapi error for ${endpoint}, using fallback`);
            return fallbackDataMap[endpoint] || { data: { content: [] } };
        }

        const data = await res.json();

        if (!data.data || !data.data.content || data.data.content.length === 0) {
            console.warn(`⚠️ No content for ${endpoint}, using fallback`);
            return fallbackDataMap[endpoint] || { data: { content: [] } };
        }

        return data;
    } catch (error) {
        console.warn(`⚠️ Strapi unavailable for ${endpoint}, using fallback`);
        return fallbackDataMap[endpoint] || { data: { content: [] } };
    }
}

export function extractPageComponents<T>(
    content: any[],
    componentType: string
): T | undefined {
    if (!content || !Array.isArray(content)) return undefined;
    return content.find((c) => c.__component === componentType) as T | undefined;
}