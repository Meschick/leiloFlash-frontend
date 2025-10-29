import { ImagemInterface } from "./imagem.interface";

export interface VeiculoInterface {
  id: number;
  marca: string;
  modelo: string;
  ano: number;
  cor: string;
  kmAtual: number;
  valorInicial: number;
  imagens: ImagemInterface[];
}
