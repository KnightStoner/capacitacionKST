import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '@mantenimiento/models/usuario-response.model';
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs/operators';
import { PerfilUsuario } from '../../models/perfil-response.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() titulo: string;

public listaUsuarios: Usuario[]=[];
public perfilUsuario: PerfilUsuario;

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    

  }


  gettest(value:boolean){
  /*
    this.listaUsuarios=[];
    this.userservice.listarUsuarioSeguridad().subscribe(resp =>{
      console.log(resp.usuarios);
      this.listaUsuarios = resp.usuarios;
    });
    */

    this.userservice.listarUsuarioPerfil('s')
      .subscribe(resp =>{
       
        this.perfilUsuario = resp;
        
      
      /*
      this.perfilUsuario.id =resp.id
      this.perfilUsuario.nombre =resp.nombre
      this.perfilUsuario.empresa.nombre =resp.empresa.nombre;
      console.log(this.perfilUsuario);
*/
      console.log(this.perfilUsuario);
     
      //this.listaUsuarios = resp.usuarios;

      
    });

    /*
    this.userservice.listarUsuarioPerfil(this.codigoPerfil)
    .subscribe((data: PerfilUsuario) =>{
      const list = data..map(x =>{
        return {
          "data" : x.id
        }

      })
      console.log(list);
    });


/*
    this.mantUsuarioServices.getAllUsers(filter)
      .subscribe((data: any) => {
        const listaUsuarios = data.usuarios.map(x => {
          return {
            "IdUsuario": x.id,
            //"IDPersona": x.idPersona,
            "Nombre": x.nombre,
            "LoginUsuario": x.login,
            "Correo": x.email,
            "Dominio": x.esAd == 0 ? "No" : "Si",
            "Perfil": x.perfil.nombre,
            "Estado": x.estado.descripcion,
            "Fecha Ultima Sesión": x.fechaUltimaSesion == "0001-01-01T00:00:00" ? "" : this.datepipe.transform(x.fechaUltimaSesion, 'yyyy-MM-dd hh:mm:ss')
          }
        });

        generateExcel2(listaUsuarios, "Usuario");
        this.loaderExcel = false;
      }
      */
  }
}
