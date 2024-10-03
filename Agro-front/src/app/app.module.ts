import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { TelaComponent } from './Componentes/ERP/login/tela/tela.component';
import { AcessoComponent } from './Componentes/ERP/login/acesso/acesso.component';
import { TelaProdutoComponent } from './Componentes/ERP/produto/tela-produto/tela-produto.component';
import { TelaServicosComponent } from './Componentes/ERP/tela-servicos/erp-servicos/tela-servicos.component';
import { TelaVendedorComponent } from './Componentes/ERP/vendedor/tela-vendedor/tela-vendedor.component';
import { ClienteComponent } from './Componentes/ERP/cliente/cliente/cliente.component';
import { TelaCadastroServicosComponent } from './Componentes/ERP/tela-servicos/tela-cadastro-servicos/tela-cadastro-servicos/tela-cadastro-servicos.component';
import { TelaCadastroVendedorComponent } from './Componentes/ERP/vendedor/tela-cadastro-vendedor/tela-cadastro-vendedor.component';
import { TelaCadastroClienteComponent } from './Componentes/ERP/cliente/tela-cadastro-cliente/tela-cadastro-cliente.component';
import { TelaOrcamentoComponent } from './Componentes/ERP/orcamento/tela-orcamento/tela-orcamento.component';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from './Componentes/ERP/compartilhados/cabecalho/cabecalho.component';




@NgModule({
  declarations: [
    AppComponent,
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
    TelaComponent,
    AcessoComponent,
    TelaProdutoComponent,
    TelaServicosComponent,
    TelaVendedorComponent,
    ClienteComponent,
    TelaCadastroServicosComponent,
    TelaCadastroVendedorComponent,
    TelaCadastroClienteComponent,
    TelaOrcamentoComponent,
    CabecalhoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
