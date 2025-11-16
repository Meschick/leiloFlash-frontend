import { ApiResponseInterface } from './../../../interfaces/apiResponse.interface';
import { Inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../environments/environments";
import { BaseService } from "../base-service/base.service";
import { HistoricoLanceResponse } from "../../../interfaces/historicoLanceResponse.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LanceService extends BaseService<HistoricoLanceResponse> {

  constructor(private httpClient: HttpClient) {
    super(httpClient, `${environment.api_url}/api/v1/Lance/historico`);
  }

  public getHistoricoLancesByLoteId(loteId: number): Observable<ApiResponseInterface<HistoricoLanceResponse[]>> {
    return this.httpClient.get<ApiResponseInterface<HistoricoLanceResponse[]>>(`${environment.api_url}/api/v1/Lance/historico/${loteId}`);
  }
}
