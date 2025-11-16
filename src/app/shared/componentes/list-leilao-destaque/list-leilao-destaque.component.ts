import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LoteInterface } from '../../../interfaces/lote.interface';
import { StatusLeilaoService } from '../../../core/services/status-leilao/status-leilao.service';

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
  tempoRestante: string = '';
  intervalId: any;
  leilaoAtivo: boolean = true;


  @Input() nome!: string;
  @Input() dataInicio!: string;
  @Input() dataFim!: string;
  @Input() lotes: LoteInterface[] = [];


  constructor(
    private readonly _statusLeilaoService: StatusLeilaoService
  ) { }

  ngOnInit(): void {

    this.atualizarTempoRestante();

    this.intervalId = setInterval(() => this.atualizarTempoRestante(), 1000);

    this.carroselResponse();
  }

  atualizarTempoRestante() {
    const agora = new Date().getTime();
    const fim = new Date(this.dataFim).getTime();
    const diff = fim - agora;

    if (diff <= 0) {
      this.tempoRestante = "Finalizado";
      this._statusLeilaoService.finalizar();
      clearInterval(this.intervalId);
      return;
    }

    const horas = Math.floor(diff / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000);

    this.tempoRestante = `${horas}h ${minutos}m ${segundos}s`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['lotes'].currentValue) {
      console.log("Lotes atualizados:", this.lotes);
    }
  }

  carroselResponse() {
    this.responsiveOptions = [
      { breakpoint: '1920px', numVisible: 5, numScroll: 1 },
      { breakpoint: '1600px', numVisible: 4, numScroll: 1 },
      { breakpoint: '1366px', numVisible: 3, numScroll: 1 },
      { breakpoint: '1024px', numVisible: 3, numScroll: 1 },
      { breakpoint: '900px', numVisible: 2, numScroll: 1 },
      { breakpoint: '768px', numVisible: 2, numScroll: 1 },
      { breakpoint: '600px', numVisible: 1, numScroll: 1 },
      { breakpoint: '480px', numVisible: 1, numScroll: 1 }
    ];
  }
}
