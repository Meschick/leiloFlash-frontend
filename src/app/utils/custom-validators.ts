import { AbstractControl, ValidatorFn } from '@angular/forms';

export const confirmacaoSenhaValidator: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
  const senha = control.get('senha');
  const confirmarSenha = control.get('confirmarSenha');

  if (!senha || !confirmarSenha) {
    return null;
  }

  if (!senha.value || !confirmarSenha.value) {
    return null;
  }

  if (senha.value !== confirmarSenha.value) {
    return { senhasNaoCoincidem: true };
  }

  return null;
};
