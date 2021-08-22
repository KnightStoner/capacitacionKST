import { Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { User } from '@mantenimiento/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { Usuario } from '@mantenimiento/models/usuario-response.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuariolista',
  templateUrl: './usuariolista.component.html',
  styleUrls: ['./usuariolista.component.scss']
})
export class UsuariolistaComponent implements OnInit {
  @Input() listaUsuarios: Usuario[]=[];
  @Output() changeConfigEvent: EventEmitter<Usuario> = new EventEmitter<Usuario>();
  @Input() filapagina =0;
  @Input() loading:boolean = false;
  
  constructor(private userservice: UserService,
              private route: Router) { }

  ngOnInit(): void {
  }

  onEdit(userData:any){
       this.changeConfigEvent.emit(userData);
  } 

  onPerfil(userData:any){
   
    this.route.navigate(['mant-profile', userData.id])
  }
}
