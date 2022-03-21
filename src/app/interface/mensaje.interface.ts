/* Interface creada para manejar el tipo dato "Mensaje" y no usar "any" */

export interface Mensaje {
    nombre: string;
    mensaje: string;
    fecha?: number;
    uid?: string;
}