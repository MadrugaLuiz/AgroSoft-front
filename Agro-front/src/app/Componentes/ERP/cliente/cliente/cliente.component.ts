import { Component } from '@angular/core';
import { ClienteService } from '../../../servicos/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {

  clientes: any[] = [];

  constructor(
    private clienteService: ClienteService
  ){}

  ngOnInit() {
    this.clientes = this.clienteService.getListaClientes();
  }

}
