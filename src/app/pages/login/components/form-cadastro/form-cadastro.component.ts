import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmacaoSenhaValidator } from '../../../../utils/custom-validators';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrl: './form-cadastro.component.scss'
})
export class FormCadastroComponent implements OnInit {
  @Output() voltar = new EventEmitter<void>();

  acessoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly _authService: AuthService,
    private router: Router,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.buildForm();
  }


  private buildForm() {
    this.acessoForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required]
    }, {
      Validators: confirmacaoSenhaValidator
    });
  }


  get acessoFormControls() {
    return this.acessoForm.controls;
  }

  get emailControl(): FormControl {
    return this.acessoForm.get('email') as FormControl
  }

  get senhaControl(): FormControl {
    return this.acessoForm.get('senha') as FormControl
  }

  get confirmarSenhaControl(): FormControl {
    return this.acessoForm.get('confirmarSenha') as FormControl
  }

  onSubmit(): void {

    if (this.acessoForm.invalid) {
      this.acessoForm.markAllAsTouched();
      return;
    }

    if (this.senhaControl.value != this.confirmarSenhaControl.value) {

      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'A confirmação da senha não corresponde à nova senha.' });
    }

    const novoUsuario = {
      email: this.emailControl.value,
      senha: this.senhaControl.value
    }

    this._authService.registerUser(novoUsuario).subscribe({
      next: (response) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Usuário cadastrado com sucesso!' });
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erro ao cadastrar usuário.' });
      }
    })


  }



}
