import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PagamentoService } from '../../../core/services/pagamento/pagamento.service';
import { environmentMercadoPago } from '../../../../environments/environments.mercadoPago';
declare var MercadoPago: any;

@Component({
  selector: 'app-modal-pagamento',
  templateUrl: './modal-pagamento.component.html',
  styleUrl: './modal-pagamento.component.scss'
})
export class ModalPagamentoComponent {
  @Input() mostrarModal: boolean = false;
  @Output() fecharModal = new EventEmitter<void>();
  @Input() loteId!: number;
  @Input() valor!: number;
  @Input() lote!: any;

  metodoSelecionado: 'pix' | 'card' | null = null;

  mp: any;
  paymentBrickController: any;

  pagamentoGerado: any = null;

  constructor(private pagamentoService: PagamentoService) { }

  ngOnInit() {
    this.mp = new MercadoPago(environmentMercadoPago.mercadoPagoPublicKey, {
      locale: 'pt-BR'
    });
  }
  async iniciarPaymentBrick() {
    console.log("Valor recebido:", this.valor);

    const bricksBuilder = this.mp.bricks();

    this.paymentBrickController = await bricksBuilder.create(
      'payment',
      'paymentBrick_container',
      {
        initialization: {
          amount: this.valor,
        },

        mode: 'sandbox',        // 🔥 Garante ambiente correto
        locale: 'pt-BR',

        customization: {
          paymentMethods: {
            creditCard: "enabled",   // 🔥 NÃO coloca "all"
            pix: "disabled"          // opcional
          }
        },

        callbacks: {
          onReady: () => {
            console.log("Payment Brick pronto!");
          },

          onError: (error: any) => {
            console.error('Erro Payment Brick:', error);
          },

          onSubmit: (formData: any) => {
            return this.pagamentoService.pagarComCartao({
              loteId: this.loteId,
              valor: this.valor,
              metodo: 'card',
              ...formData
            }).toPromise();
          },
        }
      }
    );
  }
  selecionarCartao() {
    this.metodoSelecionado = 'card';

    setTimeout(() => this.iniciarPaymentBrick(), 50);
  }

  pagarPix() {
    const dto = {
      loteId: this.loteId,
      valor: this.valor,
      metodo: 'pix'
    };

    this.pagamentoService.pagarComPix(dto).subscribe(res => {
      this.pagamentoGerado = res.data;
    });
  }

  onFechar() {
    this.metodoSelecionado = null;
    this.pagamentoGerado = null;

    if (this.paymentBrickController) {
      this.paymentBrickController.unmount();
    }

    this.fecharModal.emit();
  }

  onAbrir() {
    this.metodoSelecionado = null;
    this.pagamentoGerado = null;
  }
}
