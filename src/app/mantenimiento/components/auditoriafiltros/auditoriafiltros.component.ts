import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuditoriaFiltro } from '@mantenimiento/models/auditoria-reporte.model';
import { Usuario } from '@mantenimiento/models/usuario-response.model';

@Component({
  selector: 'app-auditoriafiltros',
  templateUrl: './auditoriafiltros.component.html',
  styleUrls: ['./auditoriafiltros.component.scss']
})
export class AuditoriafiltrosComponent implements OnInit {
  private requestFilters: AuditoriaFiltro = new AuditoriaFiltro();
  @Output() changeConfigEvent: EventEmitter<AuditoriaFiltro> = new EventEmitter<AuditoriaFiltro>();
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.formGroup = this.formBuilder.group({
      fechaInicio: [null],
      fechaFin: [null],
      usuario: [null],
      nombreApi: [null]
    })
  }

  ngOnInit(): void {
    this.formGroup.controls.fechaInicio.setValue("2021-08-01");
    this.formGroup.controls.fechaFin.setValue("2021-08-10");
  }

  buscar(){
    this.requestFilters = new AuditoriaFiltro();
    this.requestFilters.fechaInicio = this.formGroup.controls.fechaInicio.value;
    this.requestFilters.fechaFin = this.formGroup.controls.fechaFin.value;
    this.requestFilters.usuarioejecucion = this.formGroup.controls.usuario.value;
    this.requestFilters.nombreApi = this.formGroup.controls.nombreApi.value;
    //this.requestFilters.numeropagina = nroPagina;
    //this.requestFilters.registroporpagina = rowsPagina;
    this.changeConfigEvent.emit(this.requestFilters);
  }
}
