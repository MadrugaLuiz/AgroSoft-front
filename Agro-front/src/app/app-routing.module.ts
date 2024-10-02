import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Componentes/LandPage/main/main.component';
import { HeaderComponent } from './Componentes/LandPage/header/header.component';
import { PartOneComponent } from './Componentes/LandPage/part-one/part-one.component';
import { CardProdutoComponent } from './Componentes/LandPage/card-produto/card-produto.component';
import { ServicoComponent } from './Componentes/LandPage/servico/servico.component';
import { FooterComponent } from './Componentes/LandPage/footer/footer.component';
import { TelaComponent } from './Componentes/ERP/login/tela/tela.component';
import { AcessoComponent } from './Componentes/ERP/login/acesso/acesso.component';
import { TelaProdutoComponent } from './Componentes/ERP/produto/tela-produto/tela-produto.component';
import { TelaVendedorComponent } from './Componentes/ERP/vendedor/tela-vendedor/tela-vendedor.component';


const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: "header", component: HeaderComponent },
  { path: "part-one", component: PartOneComponent },
  { path: "card-produto", component: CardProdutoComponent },
  { path: "servico", component: ServicoComponent },
  { path: "footer", component: FooterComponent },
  { path: "login", component: TelaComponent },
  { path: "acesso", component: AcessoComponent },
  { path: "tela-produto", component: TelaProdutoComponent },
  { path: "tela-vendedor", component: TelaVendedorComponent },
  

  






  { path: "", redirectTo: "/tela-vendedor", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
