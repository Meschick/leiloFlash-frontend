export interface PagamentoResquest {
  loteId: number
  valor: number;
  metodo: string;
  token: string;
  paymentMethodId: string;
  installments: number;
}
