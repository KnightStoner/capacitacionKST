import { EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estado, Usuario } from '@mantenimiento/models/usuario-response.model';

@Component({
  selector: 'app-usuariomant',
  templateUrl: './usuariomant.component.html',
  styleUrls: ['./usuariomant.component.scss']
})
export class UsuariomantComponent implements OnInit, OnChanges {
@Input() isShown: boolean=false;
@Input() titulo: string='';
@Input() dataUsuario: Usuario;
@Output() outSubmitEvent: EventEmitter<Usuario> = new EventEmitter<Usuario>();
public nombreInput: string='Nombre validado';
public myForm: FormGroup;
public botonSubmit: boolean=true;
public nuevo: boolean;


  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes [propName] .currentValue) {
        switch (propName) {
          case 'dataUsuario': {
            const current = JSON.stringify(changes.dataUsuario.currentValue);
            const sano = JSON.parse(current) as Usuario;
            this.setdataUsuario(changes.dataUsuario.currentValue);
          }
        }
      }
    }
  }

  ngOnInit(): void {
    this.initForm();
    this.botonSubmit=true;
    this.validarLogin();
    
  }

  initForm(){
    this.myForm = this.fb.group({
      id:[null],
      nombre:[null, Validators.required],
      login:[null, Validators.required],
      email:[null, [Validators.email, Validators.required]],
      password: [null, Validators.required]
    });
  }

  ngAfterContentChecked() {

  }

  toggleShow() {
    this.isShown = ! this.isShown;
  }

  cambiosInput(event: any) {
    if(this.myForm.valid){
      this.botonSubmit =false;
    }
    else
    this.botonSubmit =true;
  }



  setdataUsuario(user: Usuario){
    this.myForm.controls.id.setValue(user.id);
    this.myForm.controls.nombre.setValue(user.nombre);
    this.myForm.controls.login.setValue(user.login);
    this.myForm.controls.email.setValue(user.email);
    this.myForm.controls.password.setValue(user.clave);
    this.cambiosInput(1);
  }


  validarLogin() {
    this.myForm.controls.id.valueChanges.subscribe(val => {
      if (val > 0) {
        this.nuevo=false;
        this.myForm.controls.login.disable();
      } else {
        this.nuevo=true;
        this.myForm.controls.login.enable();
      }
    });
  }

  guardar(){
    if (this.nuevo)
    this.guardarNuevo();
  else
    this.guardarActualizar();

  }

  guardarNuevo(){
    if (this.myForm.valid) {
      this.outSubmitEvent.emit(this.getObjectUser());
      this.toggleShow();
    }
  }

  guardarActualizar(){
    if (this.myForm.valid) {
      this.outSubmitEvent.emit(this.getObjectUser());
      this.toggleShow();
    }
  }

  getObjectUser(){
    let user: Usuario = new Usuario();
    user.id= this.myForm.controls.id.value;
    user.nombre= this.myForm.controls.nombre.value;
    user.login= this.myForm.controls.login.value;
    user.email= this.myForm.controls.email.value;
    user.clave= this.myForm.controls.password.value;
    user.estado = new Estado();
    user.estado.id =0;
    return user;
  }

}
