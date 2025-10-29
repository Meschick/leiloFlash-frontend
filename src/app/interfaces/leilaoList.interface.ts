import { LeilaoInterface } from "./leilao.interface";
import { LoteInterface } from "./lote.interface";

export interface LeilaoListInterface {
  leilao: LeilaoInterface;
  lotes: LoteInterface[];
}
