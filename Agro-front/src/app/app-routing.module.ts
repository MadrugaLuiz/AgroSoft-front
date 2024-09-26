import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Componentes/LandPage/main/main.component';
import { HeaderComponent } from './Componentes/LandPage/header/header.component';
import { PartOneComponent } from './Componentes/LandPage/part-one/part-one.component';
import { CardProdutoComponent } from './Componentes/LandPage/card-produto/card-produto.component';
import { ServicoComponent } from './Componentes/LandPage/servico/servico.component';


const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: "header", component: HeaderComponent },
  { path: "PartOne", component: PartOneComponent },
  { path: "card-produto", component: CardProdutoComponent },
  { path: "servico", component: ServicoComponent },







  { path: "", redirectTo: "/main", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
