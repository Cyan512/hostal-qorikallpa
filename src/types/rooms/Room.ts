export type Room = {
  id: string;
  numero: string;
  tipo: string;
  piso: number;
  estado: string;
  precio: number | null;
  imagenes: string[];
};