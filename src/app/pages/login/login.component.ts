import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { termosDeUsoValidator } from '../../utils/termo.validators';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../core/services/auth.service';
import { LoginModel } from '../../models/loginModel.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup;
  visualizarForm: boolean = true;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private readonly _loginService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }


  private buildForm() {
    this.formLogin = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.maxLength(100)
      ]],
      senha: ['', [
        Validators.required,
        Validators.minLength(8)
      ]],
      termos: [false, [termosDeUsoValidator]]
    })
  }

  get acessarForm() {
    return this.formLogin.controls;
  }

  get email(): FormControl {
    return this.formLogin.get('email') as FormControl
  }

  get senha(): FormControl {
    return this.formLogin.get('senha') as FormControl
  }

  mostrarForm() {
    this.visualizarForm = !this.visualizarForm;
  }

  mudarVisualizacao() {
    this.visualizarForm = true;
  }

  onSubmit() {
    if (this.formLogin.invalid) {
      this.formLogin.markAllAsTouched();
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Dados inválidos' });
      return;
    }

    const user: LoginModel = {
      email: this.email.value,
      senha: this.senha.value
    };

    this._loginService.userLogin(user).subscribe({
      next: ((objResponse) => {
        if (objResponse.sucesso) {
          this._loginService.setToken(objResponse.token)
          this.router.navigate([''])
        }

        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login realizado com sucesso' });
      }),
      error: (error) => {
        console.error('Erro no login:', error);
      }
    })

  }
}
