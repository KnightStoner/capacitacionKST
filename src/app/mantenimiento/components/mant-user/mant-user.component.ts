import { Component, OnInit } from '@angular/core';
import { RespuestaError } from '@mantenimiento/models/respuestaerror.model';
import { Usuario } from '@mantenimiento/models/usuario-response.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mant-user',
  templateUrl: './mant-user.component.html',
  styleUrls: ['./mant-user.component.scss']
})
export class MantUserComponent implements OnInit {
public listaUsuarios: Usuario[]=[];
  public showUserMant: boolean=false;
  public dataUser: Usuario;
  public loading:boolean=false;
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.getUsers(true)
    this.showUserMant=false;
  }

  getUsers(value:boolean){
    this.loading= true;
    this.showUserMant=false;
    this.listaUsuarios=[];
    this.userservice.listarUsuarioSeguridad().subscribe(resp =>{
      this.listaUsuarios = resp.usuarios;
      this.loading= false;
    });
  }

  newUser(){
    this.showUserMant=true;
    this.dataUser = new Usuario();
  }

  onClickHijo(value:Usuario)
  {
    this.showUserMant=true;
    this.dataUser=value;
  }


  saveUser(value:Usuario){
    this.loading= true;
    this.showUserMant=false;
    console.log(value);

    if (value.id >0){
      this.saveActualizar(value);
    }else{
      this.saveNuevo(value);
    }
    
  }

  private saveNuevo(user: Usuario) {
    this.userservice.createUser(user).subscribe(
      (result) => {
        this.getUsers(true);
       
      },
      (err: RespuestaError) => {
        console.log(err);
        this.loading= false;
      }

    );
  }

  private saveActualizar(user: Usuario) {
    this.userservice.updateUser(user).subscribe(
      (result) => {
        this.getUsers(true);
      },
      (err: RespuestaError) => {
        console.log(err);
        this.loading= false;
      }
    );
  }
}
