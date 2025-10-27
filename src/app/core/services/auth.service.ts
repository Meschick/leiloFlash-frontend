import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environments";
import { Observable } from "rxjs";
import { LoginModel } from "../../models/loginModel.interface";
import { LoginResponse } from "../../models/loginResponse.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `${environment.api_url}`

  constructor(private http: HttpClient) { }

  public userLogin(userLogin: LoginModel) {
    return this.http.post<LoginResponse>(`${this.url}/api/v1/Auth/login`, userLogin)
  }

  public userLogout() {
    localStorage.removeItem('token');
  }

  public setToken(token: string) {
    localStorage.setItem('token', token)
  }

  public getToken(): string | null {
    return localStorage.getItem('token')
  }

  public isLoggeIn(): boolean {
    return !!this.getToken();
  }

}
