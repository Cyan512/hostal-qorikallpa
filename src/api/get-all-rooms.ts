import environment from "@/src/environments/environment";
import { ApiResponse } from "@/src/types/ApiResponse";
import { Room } from "@/src/types/rooms/Room";
import { RoomApiResponseItem } from "@/src/types/rooms/RoomApiResponseItem";
import { rooms } from "@/src/data/rooms";

export async function getAllRooms(): Promise<Room[]> {
    try {
        const response = await fetch(
            `${environment.app.apiEndpoint}/api/habitaciones/disponibles`,
            {
                signal: AbortSignal.timeout(5000),
            },
        );

        if (!response.ok) {
            throw new Error("Error en la API");
        }

        const data: ApiResponse<RoomApiResponseItem> = await response.json();
        return data.data.map((item) => ({
            id: item.habitacion.id,
            numero: item.habitacion.nro_habitacion,
            tipo: item.habitacion.tipo.nombre,
            piso: item.habitacion.piso,
            estado: item.habitacion.estado,
            precio: item.precio_noche,
            imagenes: item.habitacion.url_imagen,
        }));

    } catch (error) {
        console.warn("⚠️ Backend no disponible, usando mock");
        return rooms;
    }

}