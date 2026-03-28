import environment from "@/src/environments/environment";
import { ApiResponse } from "@/src/types/ApiResponse";
import { TipoHabitacion } from "@/src/types/rooms/TipoHabitacion";

export async function getAllRoomTypes(): Promise<TipoHabitacion[]> {
  const response = await fetch(
    `${environment.app.apiEndpoint}/api/tipos-habitacion`,
  );

  if (!response.ok) {
    throw new Error("Error en la API");
  }

  const result: ApiResponse<TipoHabitacion> = await response.json();
  return result.data;
}
