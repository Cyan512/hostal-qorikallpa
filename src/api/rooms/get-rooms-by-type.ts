import environment from "@/src/environments/environment";
import { ApiResponse } from "@/src/types/ApiResponse";
import { Room } from "@/src/types/rooms/Room";
import { RoomApiResponseItem } from "@/src/types/rooms/RoomApiResponseItem";

export async function getRoomsByType(type: string): Promise<Room[]> {
  const response = await fetch(
    `${environment.app.apiEndpoint}/api/habitaciones/disponibles?tipo=${type}`,
  );

  if (!response.ok) {
    throw new Error("Error en la API");
  }

  const result: ApiResponse<RoomApiResponseItem> = await response.json();

  return result.data.map((item) => ({
    id: item.habitacion.id,
    numero: item.habitacion.nro_habitacion,
    tipo: item.habitacion.tipo.nombre,
    piso: item.habitacion.piso,
    estado: item.habitacion.estado,
    precio: item.precio_noche,
    imagenes: item.habitacion.url_imagen,
  }));
}
