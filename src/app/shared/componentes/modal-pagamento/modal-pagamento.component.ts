import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PagamentoService } from '../../../core/services/pagamento/pagamento.service';
import { environmentMercadoPago } from '../../../../environments/environments.mercadoPago';
import { MessageService } from 'primeng/api';
import { ChangeDetectorRef } from '@angular/core';
declare var MercadoPago: any;

interface MPFormData {
  token: string;
  payment_method_id: string;
  issuer_id?: string;
  installments?: number;
  payer: {
    email: string;
    identification: {
      type: string;
      number: string;
    };
  };
}
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

  idPagamento!: string;
  status!: string;
  isProcessing = false;
  isSuccess = false;
  metodoSelecionado: 'pix' | 'card' | null = null;

  mp: any;
  paymentBrickController: any;

  pagamentoGerado: any = null;

  constructor(
    private pagamentoService: PagamentoService,
    private cdr: ChangeDetectorRef,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.mp = new MercadoPago(environmentMercadoPago.mercadoPagoPublicKey, {
      locale: 'pt-BR'
    });
  }

  async iniciarPaymentBrick() {
    const valorTeste = 848;


    const bricksBuilder = this.mp.bricks();

    this.paymentBrickController = await bricksBuilder.create(
      "payment",
      "paymentBrick_container",
      {
        initialization: {
          amount: valorTeste,
          payer: {
            email: "email@teste.com"
          }
        },

        customization: {
          render: {
            card: {
              label: "Pagamento com cartão"
            }
          },

          paymentMethods: {
            creditCard: "all",
            debitCard: "all"
          },

          visual: {
            style: { theme: "default" }
          }
        },

        locale: "pt-BR",

        callbacks: {
          onReady: () => console.log("Payment Brick carregado!"),

          onError: (error: any) =>
            console.error("ERRO PAYMENT BRICK:", error),
          onSubmit: async ({ formData }: { formData: MPFormData }) => {

            this.isProcessing = true;
            this.isSuccess = false;

            const payload = {
              loteId: this.loteId,
              valor: valorTeste,
              metodo: "card",

              Token: formData.token,
              PaymentMethodId: formData.payment_method_id,
              IssuerId: formData.issuer_id,
              Installments: formData.installments,
              TransactionAmount: valorTeste,

              IdentificationType: formData.payer.identification.type,
              IdentificationNumber: formData.payer.identification.number,
              Email: formData.payer.email
            };

            return new Promise((resolve, reject) => {
              this.pagamentoService.pagarComCartao(payload).subscribe({
                next: (res) => {

                  this.isProcessing = false;
                  this.isSuccess = true;

                  if (this.paymentBrickController) {
                    this.paymentBrickController.unmount();
                  }

                  this.idPagamento = res.data.paymentId;
                  this.status = res.data.status;

                  this.cdr.detectChanges();
                  resolve(res);
                },
                error: (err) => {
                  this.isProcessing = false;
                  this.isSuccess = false;

                  console.error("Erro no backend:", err);
                  reject(err);
                }
              });
            });
          }
        }
      }
    );
  }

  selecionarCartao() {
    this.metodoSelecionado = 'card';

    setTimeout(() => this.iniciarPaymentBrick(), 80);
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
