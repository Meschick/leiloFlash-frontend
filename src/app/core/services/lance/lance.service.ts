import { Inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../environments/environments";
import { BaseService } from "../base-service/base.service";
import { HistoricoLanceResponse } from "../../../interfaces/historicoLanceResponse.interface";

@Injectable({
  providedIn: 'root'
})
export class LanceService extends BaseService<HistoricoLanceResponse> {

  constructor(httpClient: HttpClient) {
    super(httpClient, `${environment.api_url}/api/v1/Leilao`)
  }
}
