import { VeiculoInterface } from "./veiculo.interface";

export interface LoteInterface {
  id: number;
  numeroLote: number;
  valorInicial: number;
  valorFinal: number;
  leilaoId: number;
  usuarioId: number;
  veiculo: VeiculoInterface
}
