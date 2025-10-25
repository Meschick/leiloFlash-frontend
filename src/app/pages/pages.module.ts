import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PrimengMaterialModule } from '../core/primeng-material/primeng-material.module';
import { FormCadastroComponent } from './login/components/form-cadastro/form-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    FormCadastroComponent
  ],
  exports: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    PrimengMaterialModule,
    ReactiveFormsModule,
    FormsModule

  ],
})
export class PagesModule { }
