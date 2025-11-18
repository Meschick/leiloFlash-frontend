export interface PagamentoResponse {
  Status: string;
  QrCodeBase64: string;
  QrCode: string;
  InitPointCard: string;
  PaymentId: string;
}
