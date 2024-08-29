import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Componentes/LandPage/main/main.component';
import { HeaderComponent } from './Componentes/LandPage/header/header.component';

const routes: Routes = [
  {path:"landpage", component: MainComponent },
  {path:"header", component:HeaderComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
