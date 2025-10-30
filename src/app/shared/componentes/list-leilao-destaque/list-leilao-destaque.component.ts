import { Component, Input } from '@angular/core';

interface Lote {
  id: number;
  lote: number;
  nome: string;
  cor: string;
  descricao: string;
  leilaoId: number;
  imagem?: string; // opcional
  lanceInicial?: number; // opcional
}

@Component({
  selector: 'app-list-leilao-destaque',
  templateUrl: './list-leilao-destaque.component.html',
  styleUrl: './list-leilao-destaque.component.scss'
})
export class ListLeilaoDestaqueComponent {
  @Input() nome!: string;
  @Input() dataHora!: string;
  @Input() lotes: any[] = [];
}
