import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Aplicacion } from '../../models/aplicacion-response.model';

@Component({
  selector: 'app-aplicaciondetalle',
  templateUrl: './aplicaciondetalle.component.html',
  styleUrls: ['./aplicaciondetalle.component.scss']
})
export class AplicaciondetalleComponent implements OnInit, OnChanges {
  @Input() aplicacion:Aplicacion;
  public myForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    /*
    var current: string='';
    for (const propertyName in changes) {
      if (changes[propertyName]) {
        const change = changes[propertyName];
         current = JSON.stringify(change.currentValue);
      }
    }
    this.aplicacion = JSON.parse(current) as Aplicacion;
    console.log(this.aplicacion);


    for (const propName in changes) {
      if (changes [propName] .currentValue) {
        switch (propName) {
          case 'aplicacion': {
            const current = JSON.stringify(changes.aplicacion.currentValue);
            this.aplicacion = JSON.parse(current) as Aplicacion;
            console.log("aplicacion rctm", this.aplicacion)
            //this.setdataUsuario(changes.dataUsuario.currentValue);
          }
        }
      }
    }
*/
    for (const propName in changes) {
      if (changes [propName] .currentValue) {
        switch (propName) {
          case 'aplicacion': {
            const current = JSON.stringify(changes.aplicacion.currentValue);
            this.aplicacion = JSON.parse(current) as Aplicacion;
            this.setdataPerfil(changes.aplicacion.currentValue);
          }
        }
      }
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.myForm = this.fb.group({
      id:[null],
      nombre:[null],
      url:[null],
      imagen:[null]
    });
  }

  setdataPerfil(app: Aplicacion){
    this.myForm.controls.id.setValue(app.id);
    this.myForm.controls.nombre.setValue(app.nombre);
    this.myForm.controls.url.setValue(app.url);
    this.myForm.controls.imagen.setValue(app.imagen);
  }

}
