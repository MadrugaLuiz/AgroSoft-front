import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {

  userNome: string | null = '';

  ngOnInit() {
    this.userNome = sessionStorage.getItem('user-name');
  }

}
