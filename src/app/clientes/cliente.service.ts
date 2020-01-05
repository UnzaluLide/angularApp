import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente.js';
import { of, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndpoint:string='http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) { }
  //hacemos Observable al array cliente
  getClientes(): Observable<Cliente []> {
    //con el of hacemos observable CLIENTES
    //return of(CLIENTES);
    return this.http.get<Cliente []>(this.urlEndpoint);
  }
}
