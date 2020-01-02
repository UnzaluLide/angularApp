import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {

  //Se puede declarar aquí también en vez de el OnInit
  //clientes:Cliente[]= CLIENTES;
  clientes:Cliente[];
  constructor() { }

  //cuando se inicia un componente
  ngOnInit() {
    this.clientes=CLIENTES;
  }

}
