import { Estado } from "./usuario-response.model";

export class PerfilUsuario{
    id: number;
    nombre: string;
    descripcion: string;
    empresa: Empresa;
    ambitosAsignados: number[];
    aplicacionesAsignadas: number[];
    estado: Estado;
}


export class Empresa{
    id: number;
    nombre: string;
}