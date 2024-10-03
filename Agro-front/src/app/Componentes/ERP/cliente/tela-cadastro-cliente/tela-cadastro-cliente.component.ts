import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../../servicos/cliente.service';

@Component({
  selector: 'app-tela-cadastro-cliente',
  templateUrl: './tela-cadastro-cliente.component.html',
  styleUrl: './tela-cadastro-cliente.component.css'
})
export class TelaCadastroClienteComponent {

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ){}

  nome: string = '';
  telefone: string = '';
  email: string = '';
  tipo: string = '';

  salvar() {

    // Criando um objeto genérico para ser inserido na lista de clientes
    const novoCliente: any = {
      nome: this.nome,
      telefone: this.telefone,
      email: this.email,
      tipo: this.tipo
    }

    // chamando o serviço do cliente para adicionar o novo objeto à lista
    this.clienteService.addCliente(novoCliente);

    this.router.navigate(['/tela-cliente']);
  }

}
