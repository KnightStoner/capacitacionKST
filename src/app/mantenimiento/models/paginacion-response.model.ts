export class PaginacionResponse {
    totalregistros: number;
    totalpagina: number;

    constructor(totalregistros: number, totalpagina: number) {
        this.totalregistros = totalregistros;
        this.totalpagina = totalpagina;
    }

}


export class PaginacionFiltroRequest {
    numeropagina: number;
    registroporpagina: number;
    constructor() {
        this.numeropagina = 1;
        this.registroporpagina= 5;
    }
}