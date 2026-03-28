import { TipoHabitacion } from "@/src/types/rooms/TipoHabitacion";

export type Habitacion = {
  id: string;
  nro_habitacion: string;
  tipo_habitacion_id: string;
  tipo: TipoHabitacion;
  piso: number;
  tiene_ducha: boolean;
  tiene_banio: boolean;
  url_imagen: string[];
  estado: string;
  notas: string | null;
  ulti_limpieza: string | null;
  created_at: string;
  updated_at: string;
};
