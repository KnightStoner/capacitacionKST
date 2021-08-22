import { PaginacionResponse } from "./paginacion-response.model";

export class LogErrorListResponse {
    logs: LogErrorTrazaResponse[];
    paginacion: PaginacionResponse;
  }

  export class LogErrorTrazaResponse {
    id: number;
    idtransaccion: string;
    apimethod: string;
    request: string;
    response: string;
    fecharegistro: string;
    mensaje: string;
    nombreapi: string;
    clase: string;
    nombremetodo: string;
    usuarioejecucion: string;
}