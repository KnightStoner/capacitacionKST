import { PaginacionFiltroRequest } from "./paginacion-response.model";


export class AuditoriaFiltro extends PaginacionFiltroRequest{
    fechaInicio: string;
    fechaFin: string;
    usuario: string;
    nombreApi: string;
    usuarioejecucion: string;

}