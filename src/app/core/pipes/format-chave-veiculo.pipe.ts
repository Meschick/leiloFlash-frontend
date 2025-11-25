import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatChaveVeiculo'
})
export class FormatChaveVeiculoPipe implements PipeTransform {

  transform(value: boolean): string {

    const ISTRUE = value;

    return ISTRUE ? "Sim" : "Não "
  }

}
