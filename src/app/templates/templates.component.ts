import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {
 
  ejemplo ='place-holder';
  fechaHoy = new Date;
  estadoApp:boolean = true;
  nombreInput ="mcastro@gmail.com";
  nombreUsuario="";
  constructor() { }

  ngOnInit(): void {
  }
  cambiosInput(event: any){
    console.log(this.nombreUsuario);
    
  }
  onClickButton(){
    console.log('click button');
  }
}
