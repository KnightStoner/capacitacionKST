import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descripcionEstado'
})
export class DescripcionEstadoPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string  {
    if(value)
    return "Activo"
    else
    return "Inactivo"
    
  }

}
