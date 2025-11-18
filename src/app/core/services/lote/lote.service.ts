import { Injectable } from '@angular/core';
import { LoteInterface } from '../../../interfaces/lote.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environments';
import { BaseService } from '../base-service/base.service';
import { Observable } from 'rxjs';
import { ApiResponseInterface } from '../../../interfaces/apiResponse.interface';
import { LoteFinalizadoResponse } from '../../../interfaces/loteFinalizadoResponse.interface';
import { LotesArrematadosResponse } from '../../../interfaces/lotesArrematadosResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class LoteService extends BaseService<LoteInterface> {

  constructor(private httpClient: HttpClient) {
    super(httpClient, `${environment.api_url}/api/v1/Lote`)
  }

  public finalizarLote(loteId: number): Observable<ApiResponseInterface<LoteFinalizadoResponse>> {
    return this.httpClient.post<ApiResponseInterface<LoteFinalizadoResponse>>(`${environment.api_url}/api/v1/Lote/${loteId}/finalizar`, {});
  }

  public obterLotesArrematados(usuarioId: number): Observable<ApiResponseInterface<LotesArrematadosResponse[]>> {
    return this.httpClient.get<ApiResponseInterface<LotesArrematadosResponse[]>>(`${environment.api_url}/api/v1/Lote/arrematados/${usuarioId}`);
  }
}
