import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantUserComponent } from '@mantenimiento/components/mant-user/mant-user.component';
import { TemplatesComponent } from './templates/templates.component';

const routes: Routes = [
  {path:'', redirectTo: 'templates', pathMatch:'full'},
  {path:'mant-user', component: MantUserComponent},
  {path:'templates', component: TemplatesComponent},
  {path:'react-form', component: TemplatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
