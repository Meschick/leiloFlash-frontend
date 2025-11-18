import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PrimengMaterialModule } from '../core/primeng-material/primeng-material.module';
import { FormCadastroComponent } from './login/components/form-cadastro/form-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Toast } from 'primeng/toast';
import { LoteDetalheComponent } from './lote-detalhe/lote-detalhe.component';
import { SobreComponent } from './sobre/sobre.component';
import { RouterModule } from '@angular/router';
import { ArrematadosComponent } from './arrematados/arrematados.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    FormCadastroComponent,
    LoteDetalheComponent,
    SobreComponent,
    ArrematadosComponent
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    LoteDetalheComponent,
    SobreComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    PrimengMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    Toast,
    RouterModule


  ],
})
export class PagesModule { }
