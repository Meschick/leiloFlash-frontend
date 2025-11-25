import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatChaveVeiculoPipe } from './format-chave-veiculo.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FormatChaveVeiculoPipe
  ],
  exports: [
    FormatChaveVeiculoPipe
  ]

})
export class PipeModule { }
