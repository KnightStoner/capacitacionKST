import { LogErrorTrazaResponse } from './../../models/logerror-response.model';
import { Component, OnInit } from '@angular/core';
import { AuditoriaFiltro } from '@mantenimiento/models/auditoria-reporte.model';
import { LogErrorListResponse } from '@mantenimiento/models/logerror-response.model';
import { UserService } from 'src/app/services/user.service';
import { PaginacionResponse } from '@mantenimiento/models/paginacion-response.model';

@Component({
  selector: 'app-auditoriaerrores',
  templateUrl: './auditoriaerrores.component.html',
  styleUrls: ['./auditoriaerrores.component.scss']
})
export class AuditoriaerroresComponent implements OnInit {
  public logs: LogErrorTrazaResponse[];
  public paginacion: PaginacionResponse;
  public rowsPagina:number;
  public totalRecords: number;
  public filapagina: number;
  public auditoriaFiltro: AuditoriaFiltro = new AuditoriaFiltro();
  public loading:boolean=false;
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.rowsPagina=5;
  }

  getErrores(event: AuditoriaFiltro){
      this.loading= true;
      event.numeropagina = 1;
      event.registroporpagina = 5;
      this.auditoriaFiltro= event;
      this.filapagina = 0;
      this.userservice.listarErrores(event).subscribe((data: LogErrorListResponse) => {
        this.logs = data.logs;
        this.paginacion =data.paginacion;
        this.totalRecords = data.paginacion.totalregistros;
        this.loading= false;
      });
  }

  onClickHijo(numeroPag:number){
    if ((this.auditoriaFiltro.fechaInicio) ||
        (this.auditoriaFiltro.fechaFin)){
          this.loading= true;
      this.auditoriaFiltro.numeropagina = numeroPag;
      this.userservice.listarErrores(this.auditoriaFiltro).subscribe((data: LogErrorListResponse) => {
        this.logs = data.logs;
        this.paginacion =data.paginacion;
        this.totalRecords = data.paginacion.totalregistros;
        this.loading= false;
      });
        }
    
  }

  

}
