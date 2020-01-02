import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente.js';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }
  //hacemos Observable al array cliente
  getClientes(): Observable<Cliente []> {
    //con el of hacemos observable CLIENTES
    return of(CLIENTES);
  }
}
