import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LoteInterface } from '../../../interfaces/lote.interface';

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
export class ListLeilaoDestaqueComponent implements OnInit, OnChanges {

  responsiveOptions!: any[];

  @Input() nome!: string;
  @Input() dataInicio!: string;
  @Input() dataFim!: string;
  @Input() lotes: LoteInterface[] = [];

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1920px', // telas 1080p ou maiores
        numVisible: 5,
        numScroll: 1
      },
      {
        breakpoint: '1600px', // notebooks grandes
        numVisible: 4,
        numScroll: 1
      },
      {
        breakpoint: '1366px', // notebooks padrão
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '1024px', // tablets horizontais
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '900px', // tablets verticais
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '768px', // celulares grandes
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '600px', // celulares médios
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '480px', // celulares pequenos
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['lotes'].currentValue) {
      console.log("Lotes atualizados:", this.lotes);
    }
  }

}
