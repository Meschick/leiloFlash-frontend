import { AbstractControl, ValidationErrors } from "@angular/forms";

export function termosDeUsoValidator(control: AbstractControl): ValidationErrors | null {
  // O valor do checkbox binário do PrimeNG é 'true' ou 'false'
  if (control.value !== true) {
    return { termosNaoAceitos: true };
  }
  return null;
}
