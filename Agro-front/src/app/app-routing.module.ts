import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Componentes/LandPage/main/main.component';
import { HeaderComponent } from './Componentes/LandPage/header/header.component';

const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: "header", component: HeaderComponent },






  { path: "", redirectTo: "/landpage", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
