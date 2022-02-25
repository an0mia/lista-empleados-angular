import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  radio: string = 'Todos';

  listEmpleados: Empleado[] = [
    {id: 1, nombre: 'Nicolás', apellido: 'Álvarez', genero: 'Femenino', salario: 1100000},
    {id: 1, nombre: 'Nicolás', apellido: 'Álvarez', genero: 'Femenino', salario: 1100000},
    {id: 1, nombre: 'Nicolás', apellido: 'Álvarez', genero: 'Femenino', salario: 1100000},
    {id: 1, nombre: 'Nicolás', apellido: 'Álvarez', genero: 'Femenino', salario: 1100000},
    {id: 1, nombre: 'Nicolás', apellido: 'Álvarez', genero: 'Femenino', salario: 1100000},
    {id: 1, nombre: 'Nicolás', apellido: 'Álvarez', genero: 'Femenino', salario: 1100000},
    {id: 1, nombre: 'Nicolás', apellido: 'Álvarez', genero: 'Masculino', salario: 1100000},
    {id: 1, nombre: 'Nicolás', apellido: 'Álvarez', genero: 'Masculino', salario: 1100000},
    {id: 1, nombre: 'Nicolás', apellido: 'Álvarez', genero: 'Masculino', salario: 1100000},
    {id: 1, nombre: 'Nicolás', apellido: 'Álvarez', genero: 'Masculino', salario: 1100000},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getTotalEmpleados(): number {
    return this.listEmpleados.length;
  }

  getTotalFemeninos(): number {
    return this.listEmpleados.filter(list => list.genero === 'Femenino').length;
  }

  getTotalMasculinos(): number {
    return this.listEmpleados.filter(list => list.genero === 'Masculino').length;
  }

}
