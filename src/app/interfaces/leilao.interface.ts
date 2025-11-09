import { LoteInterface } from "./lote.interface";

export interface LeilaoInterface {
  id: number;
  nome: string;
  descricao: string;
  dataInicio: string;
  dataFim: string;
  statusLeilao: string;
  lotes: LoteInterface[]
}
