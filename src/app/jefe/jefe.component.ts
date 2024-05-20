import { Component } from '@angular/core';
import { EmpleadosComponent } from '../empleados/empleados.component';

@Component({
  selector: 'app-jefe',
  standalone: true,
  imports: [EmpleadosComponent],
  templateUrl: './jefe.component.html',
  styleUrl: './jefe.component.css'
})
export class JefeComponent {
  mensajefromjefe: string = 'Hola estas son las Tareas para hoy:';
  mensajefromempleado: string='Esperando';
  recibirdesdeEmpleado(sms:string){
    console.log('recibiendo..');
    this.mensajefromempleado=sms ;
  }

}
