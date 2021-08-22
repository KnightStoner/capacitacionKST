import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescripcionEstadoPipe } from './pipes/descripcion-estado.pipe';
import { TemplatesComponent } from './templates/templates.component';
import { MantenimientoModule } from './mantenimiento/mantenimiento.module';
import { TableModule } from 'primeng/table';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CalendarModule } from 'primeng-lts/calendar';


@NgModule({
  declarations: [
    AppComponent,
    DescripcionEstadoPipe,
    TemplatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MantenimientoModule,
    TableModule,
    HttpClientModule,
    ReactiveFormsModule,
    CalendarModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi:true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
