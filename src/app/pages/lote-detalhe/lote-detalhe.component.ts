import { Component, OnInit } from '@angular/core';
import { SignalrService } from '../../core/services/signalr/signalr.service';
import { ActivatedRoute } from '@angular/router';
import { LoteService } from '../../core/services/lote/lote.service';
import { LoteInterface } from '../../interfaces/lote.interface';
import { AuthService } from '../../core/services/auth/auth.service';
import { LanceService } from '../../core/services/lance/lance.service';
import { MessageService } from 'primeng/api';
import { StatusLeilaoService } from '../../core/services/status-leilao/status-leilao.service';

@Component({
  selector: 'app-lote-detalhe',
  templateUrl: './lote-detalhe.component.html',
  styleUrls: ['./lote-detalhe.component.scss']
})
export class LoteDetalheComponent implements OnInit {
  public valorLance: number = 0;
  public lanceAtual: number = 48200;
  public loteId: number = 1;

  isLogged = false;
  responsiveOptions!: any[]
  images!: any[];
  displayBasic: boolean = false;
  lances: any[] = [];
  lote!: LoteInterface;
  userId!: any;
  userEmail!: string;
  leilaoAtivo: boolean = true;
  intervalId: any;
  tempoRestante!: string;
  dataFim!: string;
  loteFinalizado: boolean = false;
  vencedorLote!: string;
  valorFinalLote!: number;

  constructor(
    private signalRService: SignalrService,
    private route: ActivatedRoute,
    private readonly _loteService: LoteService,
    private readonly _lanceService: LanceService,
    private readonly _authService: AuthService,
    private messageService: MessageService,
    private readonly _leilaoStateService: StatusLeilaoService
  ) { }



  ngOnInit(): void {
    this.inicializarUsuario();
    this.iniciarSignalR();
    this.carregarDadosDoLote();
    this.responsiveCarrosel();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private inicializarUsuario() {
    const decoded = this._authService.getDecodedToken();

    const idClaim = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier";
    const emailClaim = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress";

    this.userId = decoded?.[idClaim] || null;
    this.userEmail = decoded?.[emailClaim] || 'Usuário';
    this.isLogged = this._authService.isLoggeIn();
  }

  private iniciarSignalR() {
    this.signalRService.startConnection();

    this.signalRService.lances$.subscribe(lance => this.processarLanceAoVivo(lance));
  }

  private processarLanceAoVivo(lance: any) {
    const jaExiste = this.lances.some(x =>
      x.valor === lance.valor &&
      x.usuario === lance.emailUsuario &&
      new Date(x.data).getTime() === new Date(lance.dataHora).getTime()
    );

    if (!jaExiste) {
      this.lances.unshift({
        valor: lance.valor,
        usuario: lance.emailUsuario || this.userEmail,
        data: lance.dataHora
      });

      this.lances = this.lances.slice(0, 5);
    }

    if (this.lote && this.lote.id === lance.loteId) {
      this.lote.valorAtual = lance.valor;
    }
  }

  private carregarDadosDoLote() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) return;

    this.obterLotePorId(id);
    this.obterHistoricoLances(id);
  }

  private obterLotePorId(id: number): void {
    this._loteService.getById(id).subscribe({
      next: (response) => {
        this.lote = response.data;
        this.dataFim = response.data.dataFim;
        this.images = response.data.veiculo.imagens;

        this.iniciarContagemRegressiva();
      },
      error: (err) => console.error('Erro ao buscar lote:', err)
    });
  }

  private obterHistoricoLances(id: number) {
    this._lanceService.getHistoricoLancesByLoteId(id).subscribe({
      next: (response) => {
        this.lances = response.data
          .map((x: any) => ({
            valor: x.valor,
            usuario: x.emailUsuario,
            data: x.dataHora
          }))
          .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())
          .slice(0, 5);
      }
    });
  }


  private iniciarContagemRegressiva() {
    this.atualizarTempoRestante();
    this.intervalId = setInterval(() => this.atualizarTempoRestante(), 1000);
  }

  private atualizarTempoRestante() {
    const agora = new Date().getTime();
    const fim = new Date(this.dataFim).getTime();
    const diff = fim - agora;

    if (diff <= 0) {
      this.tempoRestante = "Finalizado";
      this.leilaoAtivo = false;
      clearInterval(this.intervalId);
      this.finalizarLote();
      return;
    }

    const horas = Math.floor(diff / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000);

    this.tempoRestante = `${horas}h ${minutos}m ${segundos}s`;
  }

  private finalizarLote() {

    if (!this.lote || this.loteFinalizado) return;

    this.loteFinalizado = true;

    this._loteService.finalizarLote(this.lote.id).subscribe({
      next: (response) => {
        this.vencedorLote = response.data.emailUsuarioVencedor;
        this.valorFinalLote = response.data.valorFinal;
      },
      error: (err) => {
        console.error("Erro ao finalizar lote:", err);
      }
    });
  }

  enviarLance(loteId: number, valor: number) {
    if (!this.leilaoAtivo) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Leilão Finalizado',
        detail: 'Não é possível dar lance após o término.'
      });
      return;
    }

    const request = {
      loteId,
      usuarioId: Number(this.userId),
      valor
    };

    this.signalRService.enviarLance(request, this.userEmail);
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Lance efetuado com sucesso!' });
  }


  private responsiveCarrosel() {
    this.responsiveOptions = [
      { breakpoint: '991px', numVisible: 4 },
      { breakpoint: '767px', numVisible: 3 },
      { breakpoint: '575px', numVisible: 1 }
    ];
  }


  public obterUltimoLance() {
    return this.lances.length > 0 ? this.lances[0] : null;
  }
}
