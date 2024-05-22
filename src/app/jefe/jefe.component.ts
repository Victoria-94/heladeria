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
  

}
