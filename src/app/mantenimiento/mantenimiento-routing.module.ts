import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantUserComponent } from './components/mant-user/mant-user.component';
import { MantProfileComponent } from './components/mant-profile/mant-profile.component';
import { AuditoriaerroresComponent } from './components/auditoriaerrores/auditoriaerrores.component';

const routes: Routes = [
  {path:'mant-user', component: MantUserComponent},
  {path:'mant-profile', component:MantProfileComponent},
  {path:'mant-profile/:codigo', component:MantProfileComponent},
  {path:'aud-erro', component: AuditoriaerroresComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
