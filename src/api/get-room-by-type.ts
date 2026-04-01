import environment from "../environments/environment";
import { ApiResponse } from "../types/ApiResponse";
import { PublicHabitacion } from "../types/rooms/PublicHabitacion";

export async function getRoomByType(): Promise<PublicHabitacion[]> {
    try {
        const response = await fetch(
            `${environment.app.apiEndpoint}/api/public/tipos-habitacion?habitacion=true`,
            {
                signal: AbortSignal.timeout(5000),
            },
        );

        if (!response.ok) {
            throw new Error("Error en la API");
        }

        const data: ApiResponse<PublicHabitacion> = await response.json();
        return data.data;

    } catch (error) {
        console.warn("⚠️ Backend no disponible, usando mock getRoomByType");
        return [];
    }
}