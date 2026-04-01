import environment from "@/src/environments/environment";
import { ApiResponse } from "@/src/types/ApiResponse";
import { TipoHabitacion } from "../types/rooms/TipoHabitacion";
import { tipoHabitacion } from "../data/tipoHabitacion";

export async function getAllRoomTypes(): Promise<TipoHabitacion[]> {
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

        const data: ApiResponse<TipoHabitacion> = await response.json();
        console.log("✅ Respuesta de la API getAllRoomTypes:", data);
        return data.data;

    } catch (error) {
        console.warn("⚠️ Backend no disponible, usando mock getAllRoomTypes");
        return tipoHabitacion;
    }

}