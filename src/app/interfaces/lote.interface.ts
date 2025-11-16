import { VeiculoInterface } from "./veiculo.interface";

export interface LoteInterface {
  id: number;
  numeroLote: number;
  valorInicial: number;
  valorFinal: number;
  valorAtual: number;
  tipo: string;
  tipoRetomado: string;
  valorMercado: number;
  localizacao: string;
  descricao: string;
  leilaoId: number;
  dataFim: string;
  dataInicio: string;
  usuarioId: number;
  veiculo: VeiculoInterface
}
