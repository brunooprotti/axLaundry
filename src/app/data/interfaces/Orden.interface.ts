export interface Orden {
    numero:number,
    origen: string,
    destino: string,
    fechaAlta?: Date,
    fechaCierre?: Date,
    prendas?: number,
    estado: EstadoOrden
}

export enum EstadoOrden {
    'GENERADA' = 1,
    'FINALIZADA PARCIAL' = 2,
}