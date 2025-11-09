import { Injectable } from '@angular/core';
import { LoteInterface } from '../../../interfaces/lote.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environments';
import { BaseService } from '../base-service/base.service';

@Injectable({
  providedIn: 'root'
})
export class LoteService extends BaseService<LoteInterface> {

  constructor(httpClient: HttpClient) {
    super(httpClient, `${environment.api_url}/api/v1/Lote`)
  }

}
