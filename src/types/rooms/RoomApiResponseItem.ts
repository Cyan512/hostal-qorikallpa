import { Habitacion } from "@/src/types/rooms/Habitacion";

export type RoomApiResponseItem = {
  habitacion: Habitacion;
  precio_noche: number | null;
};
