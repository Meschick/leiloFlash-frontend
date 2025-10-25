import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrl: './form-cadastro.component.scss'
})
export class FormCadastroComponent implements OnInit {
  @Output() voltar = new EventEmitter<void>();

  acessoForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }


  private buildForm() {
    this.acessoForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required]
    })
  }


  get acessoFormControls() {
    return this.acessoForm.controls;
  }

  onSubmit(): void {
    if (this.acessoForm.invalid) {
      this.acessoForm.markAllAsTouched();
      return;
    }
    console.log('Formulário Enviado com sucesso:', this.acessoForm.value);
  }

}
