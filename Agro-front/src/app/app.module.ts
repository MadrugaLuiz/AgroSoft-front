import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteDetalheComponent } from './Componentes/ERP/cliente/cliente-detalhe/components/cliente-detalhe/cliente-detalhe.component';
import { ClienteFormComponent } from './Componentes/ERP/cliente/cliente-form/components/cliente-form/cliente-form.component';
import { ClienteListaComponent } from './Componentes/ERP/cliente/cliente-lista/components/cliente-lista/cliente-lista.component';
import { GestorDetalheComponent } from './Componentes/ERP/gestor/gestor-detalhe/components/gestor-detalhe/gestor-detalhe.component';
import { GestorFormComponent } from './Componentes/ERP//gestor/gestor-form/components/gestor-form/gestor-form.component';
import { GestorListaComponent } from './Componentes/ERP/gestor/gestor-lista/components/gestor-lista/gestor-lista.component';
import { VendedorDetalheComponent } from './Componentes/ERP/vendedor/vendedor-detalhe/components/vendedor-detalhe/vendedor-detalhe.component';
import { VendedorFormComponent } from './Componentes/ERP/vendedor/vendedor-form/components/vendedor-form/vendedor-form.component';
import { VendedorListaComponent } from './Componentes/ERP/vendedor/vendedor-lista/components/vendedor-lista/vendedor-lista.component';
import { FooterComponent } from './Componentes/LandPage/footer/footer.component';
import { HeaderComponent } from './Componentes/LandPage/header/header.component';
import { MainComponent } from './Componentes/LandPage/main/main.component';
import { CardProdutoComponent } from './Componentes/LandPage/card-produto/card-produto.component';
import { PartOneComponent } from './Componentes/LandPage/part-one/part-one.component';
import { ServicoComponent } from './Componentes/LandPage/servico/servico.component';


@NgModule({
  declarations: [
    AppComponent,
    ClienteDetalheComponent,
    ClienteFormComponent,
    ClienteListaComponent,
    GestorDetalheComponent,
    GestorFormComponent,
    GestorListaComponent,
    VendedorDetalheComponent,
    VendedorFormComponent,
    VendedorListaComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    CardProdutoComponent,
    PartOneComponent,
    ServicoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
