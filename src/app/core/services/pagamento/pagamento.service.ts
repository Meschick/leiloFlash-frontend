import { PagamentoResponse } from './../../../interfaces/pagamentoResponse.interface';
import { ApiResponseInterface } from './../../../interfaces/apiResponse.interface';
import { Injectable } from "@angular/core";
import { BaseService } from "../base-service/base.service";
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../environments/environments";
import { PagamentoResquest } from "../../../interfaces/pagamentoRequest.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PagamentoService extends BaseService<PagamentoResquest> {

  constructor(private httpClient: HttpClient) {
    super(httpClient, `${environment.api_url}/api/v1/Pagamento`);
  }

  public pagarComCartao(paymentRequest: any): Observable<ApiResponseInterface<any>> {
    return this.httpClient.post<ApiResponseInterface<any>>(`${environment.api_url}/api/v1/Pagamento/cartao`, paymentRequest);
  }

  public pagarComPix(paymentRequest: any): Observable<ApiResponseInterface<any>> {
    return this.httpClient.post<ApiResponseInterface<any>>(`${environment.api_url}/api/v1/Pagamento/pix`, paymentRequest);
  }

  criarPreferencia(dto: any): Observable<ApiResponseInterface<any>> {
    return this.http.post<ApiResponseInterface<any>>(`${this.apiUrl}/api/v1/Pagamento/preferencia`, dto);
  }
}
