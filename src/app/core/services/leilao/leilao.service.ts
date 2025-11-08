import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base-service/base.service';
import { LeilaoInterface } from '../../../interfaces/leilao.interface';
import { LeilaoListInterface } from '../../../interfaces/leilaoList.interface';
@Injectable({
  providedIn: 'root'
})
export class LeilaoService extends BaseService<LeilaoListInterface> {


  constructor(httpClient: HttpClient){
    super(httpClient, `${environment.api_url}/api/v1/Leilao`)
  }

}
