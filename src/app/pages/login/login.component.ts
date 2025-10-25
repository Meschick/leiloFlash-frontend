import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  visualizarForm: boolean = true;

  mostrarForm() {
    this.visualizarForm = !this.visualizarForm;
  }

  mudarVisualizacao() {
    this.visualizarForm = true;
  }
}
