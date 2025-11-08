import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LoteDetalheComponent } from './pages/lote-detalhe/lote-detalhe.component';
import { SobreComponent } from './pages/sobre/sobre.component';

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
    loadComponent: () => import('../app/pages/login/components/form-cadastro/form-cadastro.component').then(m => m.FormCadastroComponent)
  },
  {
    path: 'detalhe',
    component: LoteDetalheComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
