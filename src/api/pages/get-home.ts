import environment from "@/src/environments/environment";

export async function getHome(locale: string) {
    const res = await fetch(
        `${environment.strapi.apiEndpoint}/api/home?locale=${locale}&populate[content][populate]=*`,
        {
            next: { revalidate: 60 },
        }
    );

    if (!res.ok) throw new Error("Error fetching home");

    return res.json();
}