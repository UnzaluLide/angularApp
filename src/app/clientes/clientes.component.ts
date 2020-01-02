import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {

  clientes:Cliente[];

  //se define el atributo (private clienteService) y se le inyecta el valor (clienteService)
  constructor(private clienteService: ClienteService) {

   }
  ngOnInit() {
    this.clientes=this.clienteService.getClientes();
  }

}
