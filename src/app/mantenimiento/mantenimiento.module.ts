import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { MantUserComponent } from './components/mant-user/mant-user.component';
import { MantProfileComponent } from './components/mant-profile/mant-profile.component';
import { MantReportComponent } from './components/mant-report/mant-report.component';
import { UsuariomantComponent } from './components/usuariomant/usuariomant.component';
import { UsuariolistaComponent } from './components/usuariolista/usuariolista.component';


import { TableModule } from 'primeng-lts/table';
import { FormsModule, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfildetalleComponent } from './components/perfildetalle/perfildetalle.component';
import { AplicaciondetalleComponent } from './components/aplicaciondetalle/aplicaciondetalle.component';
import { CardComponent } from './components/card/card.component';
import { CalendarModule } from 'primeng-lts/calendar';
import { AuditoriaerroresComponent } from './components/auditoriaerrores/auditoriaerrores.component';
import { AuditoriafiltrosComponent } from './components/auditoriafiltros/auditoriafiltros.component';
import { ErroreslistaComponent } from './components/erroreslista/erroreslista.component';



@NgModule({
  declarations: [
    MantUserComponent,
    MantProfileComponent,
    MantReportComponent,
    UsuariomantComponent,
    UsuariolistaComponent,
    PerfildetalleComponent,
    AplicaciondetalleComponent,
    CardComponent,
    AuditoriaerroresComponent,
    AuditoriafiltrosComponent,
    ErroreslistaComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule
  ]
})
export class MantenimientoModule { }
