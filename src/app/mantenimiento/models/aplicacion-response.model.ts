import { Estado } from "./usuario-response.model";

export interface TipoAplicacion {
    id: number;
    nombre: string;
}


export class Aplicacion {
    id: number;
    nombre: string;
    descripcion: string;
    esLanzador: boolean;
    esAppLanzamiento: boolean;
    nombreHost: string;
    dominio: string;
    url: string;
    ipAddress: string;
    key: string;
    code: string;
    browserDefault: string;
    versionBrowserDefault: string;
    version: string;
    imagen: string;
    esAppInterno: boolean;
    tipoAplicacion: TipoAplicacion;
    estado: Estado;
    visibleEnD4: boolean;
    esMesaServicio: boolean;
}