import { Component, OnInit } from '@angular/core';
import { SignalrService } from '../../core/services/signalr/signalr.service';
import { ActivatedRoute } from '@angular/router';
import { LoteService } from '../../core/services/lote/lote.service';
import { LoteInterface } from '../../interfaces/lote.interface';
import { AuthService } from '../../core/services/auth/auth.service';

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

  constructor(
    private signalRService: SignalrService,
    private route: ActivatedRoute,
    private readonly _loteService: LoteService,
    private readonly _authService: AuthService
  ) { }

  ngOnInit(): void {

    const decoded = this._authService.getDecodedToken();

    const idClaimKey = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier";

    this.userId = decoded[idClaimKey];

    this.isLogged = this._authService.isLoggeIn();

    this.signalRService.startConnection();

    this.signalRService.lances$.subscribe((lance) => {
      this.lances.push(lance);


      if (this.lote && this.lote.id === lance.loteId) {
        this.lote.valorAtual = lance.valor;
      }

    });

    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.obterLotePorId(id);
    }

    this.responsiveCarrosel();
    // this.buildImagens();
  }

  obterLotePorId(id: number): void {
    this._loteService.getById(id).subscribe({
      next: (response) => {
        this.lote = response.data;
        this.images = response.data.veiculo.imagens;
      },
      error: (err) => {
        console.error('Erro ao buscar lote:', err);
      }
    });
  }


  enviarLance(loteId: number, valor: number) {

    const request = {
      loteId: loteId,
      usuarioId: Number(this.userId),
      valor: valor
    };

    console.log("Request enviado", request);


    this.signalRService.enviarLance(request, 'Usuário Teste');
  }

  responsiveCarrosel() {
    this.responsiveOptions = [
      {
        breakpoint: '991px',
        numVisible: 4
      },
      {
        breakpoint: '767px',
        numVisible: 3
      },
      {
        breakpoint: '575px',
        numVisible: 1
      }
    ];
  }
}
