import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  listaClientes: any[] = [
    {
      id: 20462,
      nome: 'Hat',
      email: 'hat@agrosoft.com',
      telefone: 476897984,
      tipo: 'Externo',
    },
    {
      id: 20462,
      nome: 'Hat',
      email: 'hat@agrosoft.com',
      telefone: 476897984,
      tipo: 'Externo',
    },
  ];

  constructor() {}

  getListaClientes() {
    return this.listaClientes;
  }

  addCliente(novoCliente: any){
    this.listaClientes.push(novoCliente);
  }
}
