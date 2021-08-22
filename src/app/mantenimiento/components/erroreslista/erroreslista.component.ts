import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuditoriaFiltro } from '@mantenimiento/models/auditoria-reporte.model';
import { LogErrorTrazaResponse } from '@mantenimiento/models/logerror-response.model';
import { LazyLoadEvent } from 'primeng-lts/api/lazyloadevent';

@Component({
  selector: 'app-erroreslista',
  templateUrl: './erroreslista.component.html',
  styleUrls: ['./erroreslista.component.scss']
})
export class ErroreslistaComponent implements OnInit {
  @Input() listaErrores: LogErrorTrazaResponse[];
  @Input() totalRecords: number;
  @Input() filapagina:number;
  @Output() changeConfigEvent: EventEmitter<number> = new EventEmitter<number>();
  @Input() loading:boolean = false;
  public rowsPagina:number;
 
  public paginactual = 1;
  public auditoriaFiltro :AuditoriaFiltro = new AuditoriaFiltro();
  constructor() { }

  ngOnInit(): void {
    this.rowsPagina = 5;
    this.filapagina = 0;
  }

  nextPage(d: LazyLoadEvent) {
    const d_first  = Number(d.first);
    let nroPagina = (d_first / this.rowsPagina) + 1;
    this.filapagina = d_first;
    this.paginactual = nroPagina;
    this.auditoriaFiltro.numeropagina=(nroPagina)?nroPagina:1;
    this.auditoriaFiltro.registroporpagina=5;
    this.changeConfigEvent.emit(nroPagina);
  }

}
