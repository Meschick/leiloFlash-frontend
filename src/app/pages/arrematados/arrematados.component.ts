import { Component, OnInit } from '@angular/core';
import { LoteService } from '../../core/services/lote/lote.service';
import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-arrematados',
  templateUrl: './arrematados.component.html',
  styleUrl: './arrematados.component.scss'
})
export class ArrematadosComponent implements OnInit {
  loteSelecionado!: any;
  userId!: number;
  userEmail!: string
  isLogged: boolean = false;
  lotesArrematados: any[] = [];
  mostrarModal: boolean = false;

  constructor(
    private readonly _loteService: LoteService,
    private readonly _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.inicializarUsuario();
    this.obterLotesArrematados();
  }

  private inicializarUsuario() {
    const decoded = this._authService.getDecodedToken();

    const idClaim = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier";
    const emailClaim = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress";

    this.userId = decoded?.[idClaim] || null;
    this.userEmail = decoded?.[emailClaim] || 'Usuário';
    this.isLogged = this._authService.isLoggeIn();
  }

  private obterLotesArrematados() {
    this._loteService.obterLotesArrematados(this.userId).subscribe({
      next: (response) => {
        this.lotesArrematados = response.data;
      },
      error: (error) => {
        console.error('Erro ao obter lotes arrematados:', error);
      }
    });
  }

  public visualizarModal(lote: any) {
    this.loteSelecionado = lote
    this.mostrarModal = true;
  }
}
