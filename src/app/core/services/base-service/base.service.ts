import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiResponseInterface } from "../../../interfaces/apiResponse.interface";

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T> {

  constructor(
    protected http: HttpClient,
    protected apiUrl: string
  ) { }

  public getAll(params?: any): Observable<ApiResponseInterface<T[]>> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        httpParams = httpParams.set(key, params[key]);
      });
    }
    return this.http.get<ApiResponseInterface<T[]>>(this.apiUrl, { params: httpParams });
  }

  getById(id: number | string): Observable<ApiResponseInterface<T>> {
    return this.http.get<ApiResponseInterface<T>>(`${this.apiUrl}/${id}`);
  }

  create(item: T): Observable<ApiResponseInterface<T>> {
    return this.http.post<ApiResponseInterface<T>>(this.apiUrl, item);
  }

  update(id: number | string, item: T): Observable<ApiResponseInterface<T>> {
    return this.http.put<ApiResponseInterface<T>>(`${this.apiUrl}/${id}`, item);
  }

  delete(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
