import { Component } from '@angular/core';

@Component({
  selector: 'app-jefe',
  standalone: true,
  imports: [],
  templateUrl: './jefe.component.html',
  styleUrl: './jefe.component.css'
})
export class JefeComponent {
  mensajeRecibido: string;
  recibirMensaje(mensaje:string){
    this.mensajeRecibido= mensaje;
  }

}
