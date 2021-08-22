import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PerfilUsuario } from '../../models/perfil-response.model';

@Component({
  selector: 'app-perfildetalle',
  templateUrl: './perfildetalle.component.html',
  styleUrls: ['./perfildetalle.component.scss']
})
export class PerfildetalleComponent implements OnInit, OnChanges {
@Input() dataPerfil:any;
@Input() usuarioPerfil:PerfilUsuario = new PerfilUsuario();
public fecha: Date;
public myForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes [propName] .currentValue) {
        switch (propName) {
          case 'usuarioPerfil': {
            const current = JSON.stringify(changes.usuarioPerfil.currentValue);
            this.usuarioPerfil = JSON.parse(current) as PerfilUsuario;
            this.setdataPerfil(changes.usuarioPerfil.currentValue);
          }
        }
      }
    }
  }

  ngOnInit(): void {
    this.initForm();
    this.fecha = new Date();
  }

  initForm(){
    this.myForm = this.fb.group({
      id:[null],
      nombre:[null],
      descripcion:[null],
      empresa:[null],
      estado: [null]
    });
  }

  setdataPerfil(perfil: PerfilUsuario){
    this.myForm.controls.id.setValue(perfil.id);
    this.myForm.controls.nombre.setValue(perfil.nombre);
    this.myForm.controls.descripcion.setValue(perfil.descripcion);
    this.myForm.controls.empresa.setValue(perfil.empresa.nombre);
    this.myForm.controls.estado.setValue(perfil.estado.descripcion);
  }
}
