import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfilUsuario } from '@mantenimiento/models/perfil-response.model';
import { UserService } from 'src/app/services/user.service';
import { Aplicacion } from '../../models/aplicacion-response.model';

@Component({
  selector: 'app-mant-profile',
  templateUrl: './mant-profile.component.html',
  styleUrls: ['./mant-profile.component.scss']
})
export class MantProfileComponent implements OnInit {
public tituloCardPerfil: string;
public tituloCardAplicacion: string;
public codigoPerfil:string;
public perfilUsuario: PerfilUsuario;
public aplicacion: Aplicacion;
  constructor(private activateroute: ActivatedRoute, 
    private userservice: UserService) { }

  ngOnInit(): void {
    const cod =(this.activateroute.snapshot.paramMap.get('codigo') || '').toString();
    this.codigoPerfil = cod;
    this.tituloCardPerfil = "Detalle Perfil";
    this.tituloCardAplicacion = "Aplicaciones Asignadads";
    if (this.codigoPerfil){
      this.getPerfil();
    }
    
  }


  getPerfil(){
       this.userservice.listarUsuarioPerfil(this.codigoPerfil)
        .subscribe(resp =>{
          this.perfilUsuario = resp;
          const aplicacionId =this.perfilUsuario.aplicacionesAsignadas[0].toString()
          
          this.getAplicacion(aplicacionId);
       });
  }

  getAplicacion(id:string){
      this.userservice.listarAplicacionDetalle(id) //26
      .subscribe(resp =>{
         this.aplicacion = resp;
      
    });
}
}