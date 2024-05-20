import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
  @Input() mensaje: string;
  @Output() mensajeEmitido= new EventEmitter<string>();
  emitirMensaje(){
    this.mensajeEmitido.emit('Tarea recibida');
  }

}
