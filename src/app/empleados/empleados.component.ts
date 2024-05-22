import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
  message: string = "Hola Mundo!";
  @Input() mensaje: string='hola';
  @Output() mensajeEmitido= new EventEmitter<string>();
  //console.log('emitiendo..');

  emitirMensaje(){
    console.log('emitiendo..');
    //this.mensajeEmitido.emit('Tarea recibida');
    this.mensajeEmitido.emit(this.message);
  }

}

