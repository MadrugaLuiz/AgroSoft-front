import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela',
  templateUrl: './tela.component.html',
  styleUrl: './tela.component.css'
})
export class TelaComponent {

  login: string = '';
  senha: string = '';

  constructor(
    private router: Router
  ){}

  realizarLogin() {

    // Login padrão
    if (this.login === 'admin' && this.senha === 'admin') {

      sessionStorage.setItem('user-name', 'Luiz');
      sessionStorage.setItem('user-email', 'luiz@agrosoft.com');

      this.router.navigate(['/acesso']);
    } else {
      alert('Usuário ou senha incorretos');
    }

  }

}
