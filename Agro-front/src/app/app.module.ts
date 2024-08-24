import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteDetalheComponent } from './Componentes/cliente/cliente-detalhe/components/cliente-detalhe/cliente-detalhe.component';
import { ClienteFormComponent } from './Componentes/cliente/cliente-form/components/cliente-form/cliente-form.component';
import { ClienteListaComponent } from './Componentes/cliente/cliente-lista/components/cliente-lista/cliente-lista.component';
import { GestorDetalheComponent } from './Componentes/gestor/gestor-detalhe/components/gestor-detalhe/gestor-detalhe.component';
import { GestorFormComponent } from './Componentes/gestor/gestor-form/components/gestor-form/gestor-form.component';
import { GestorListaComponent } from './Componentes/gestor/gestor-lista/components/gestor-lista/gestor-lista.component';
import { VendedorDetalheComponent } from './Componentes/vendedor/vendedor-detalhe/components/vendedor-detalhe/vendedor-detalhe.component';
import { VendedorFormComponent } from './Componentes/vendedor/vendedor-form/components/vendedor-form/vendedor-form.component';
import { VendedorListaComponent } from './Componentes/vendedor/vendedor-lista/components/vendedor-lista/vendedor-lista.component';
import { FooterComponent } from './Componentes/LandPage/footer/components/footer/footer.component';
import { HeaderComponent } from './Componentes/LandPage/header/components/header/header.component';
import { MainComponent } from './Componentes/LandPage/main/components/main/main.component';


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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
