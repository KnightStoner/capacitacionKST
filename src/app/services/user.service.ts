import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from '@mantenimiento/models/user.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UsuarioListResponse } from '@mantenimiento/models/usuario-response.model';
import { PerfilUsuario } from '@mantenimiento/models/perfil-response.model';
import { Aplicacion } from '@mantenimiento/models/aplicacion-response.model';
import { HttpParams } from '@angular/common/http';
import { LogErrorListResponse } from '@mantenimiento/models/logerror-response.model';
import { AuditoriaFiltro } from '@mantenimiento/models/auditoria-reporte.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlSeguridad = environment.urlApiSeguridad;
  private urlLog = environment.urlLog;
  constructor(private http: HttpClient) { }

  getalluser(){
    const user  = 'https://gorest.co.in/public/v1/users'
    return this.http.get<UserResponse>(user);
  }

  listarUsuarioSeguridad(): Observable<UsuarioListResponse>{
    const url = `${this.urlSeguridad}/mantenimiento/usuario/todos`;
    return  this.http.get<UsuarioListResponse>(url);
  }

  listarUsuarioPerfil(id: string): Observable<PerfilUsuario>{
    const url = `${this.urlSeguridad}/mantenimiento/perfil/{id}`;
    const urlData = url.replace("{id}",id);
    return  this.http.get<PerfilUsuario>(urlData);
  }

  listarAplicacionDetalle(idAplicacion: string): Observable<Aplicacion>{
    const url = `${this.urlSeguridad}/mantenimiento/aplicacion/{idAplicacion}`;
    const urlData = url.replace("{idAplicacion}",idAplicacion);
    return  this.http.get<Aplicacion>(urlData);
  }


  listarErrores(request: AuditoriaFiltro): Observable<LogErrorListResponse> {
    const url = `${this.urlLog}/log/listar`;
    let params = new HttpParams();
    Object.keys(request).forEach(key => {
      if (request[key] && request[key] != null) {
        params = params.append(key, request[key]);
      }
    });
    return this.http.get<LogErrorListResponse>(url, { params });
  }

  createUser(data: any): Observable<any> {
    const sano= 'http://localhost:45888/api/v1';
    const url = `${this.urlSeguridad}/mantenimiento/usuario/nuevo`;
    return this.http
      .post<any>(url, data, { observe: "response" })
      .pipe(
        map((response) => {
          return response.status === 201;
        })
      );
  }

  updateUser(data: any): Observable<boolean> {
    const sano= 'http://localhost:45888/api/v1';
    const url = `${this.urlSeguridad}/mantenimiento/usuario/{id}`;
    const urlData = url.replace("{id}",data.id.toString());
    return this.http
      .put<any>(urlData, data, { observe: "response" })
      .pipe(
        map((response) => {
          return response.status === 204;
        })
      );
  }

}
