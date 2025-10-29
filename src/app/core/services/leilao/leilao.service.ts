import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LeilaoService {

  private url = `${environment.api_url}`

  constructor(private http: HttpClient) { }


}
