import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { JefeComponent } from './jefe/jefe.component';
import { EmpleadosComponent } from './empleados/empleados.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,JefeComponent,EmpleadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'heladeria';
  
  message: string='';
  onEventLaunched() {
    // Aquí iría lo que el padre tenga que hacer
    this.message='hola hola';
  }
  receiveMessage(event: string) {
    this.message = event;
  }
}