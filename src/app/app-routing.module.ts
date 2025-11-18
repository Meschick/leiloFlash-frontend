import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LoteDetalheComponent } from './pages/lote-detalhe/lote-detalhe.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { FormCadastroComponent } from './pages/login/components/form-cadastro/form-cadastro.component';
import { ArrematadosComponent } from './pages/arrematados/arrematados.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: FormCadastroComponent
  },
  {
    path: 'detalhe/:id',
    component: LoteDetalheComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'arrematados',
    component: ArrematadosComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
