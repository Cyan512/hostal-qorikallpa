export type PublicHabitacion = {
    id: string;
    nombre: string;
    descripcion: string;
    habitacion: {
        id: string
        nro_habitacion: string,
        tipo_habitacion_id: string,
        piso: number,
        tiene_ducha: boolean,
        tiene_banio: boolean,
        url_imagen: string[],
        estado: string,
        descripcion: string
    }
}