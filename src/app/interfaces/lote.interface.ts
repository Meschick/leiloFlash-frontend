import { VeiculoInterface } from "./veiculo.interface";

export interface LoteInterface {
  id: number;
  numeroLote: number;
  valorInicial: number;
  valorFinal: number;
  tipo: string;
  tipoRetomado: string;
  valorMercado: number;
  localizacao: string;
  descricao: string;
  leilaoId: number;
  usuarioId: number;
  veiculo: VeiculoInterface
}
