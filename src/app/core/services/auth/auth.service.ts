import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginInterface } from "../../../interfaces/login.interface";
import { LoginResponse } from "../../../interfaces/loginResponse.interface";
import { environment } from "../../../../environments/environments";
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `${environment.api_url}`

  constructor(private http: HttpClient) { }

  public userLogin(userLogin: LoginInterface) {
    return this.http.post<LoginResponse>(`${this.url}/api/v1/Auth/login`, userLogin)
  }

  public registerUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.url}/api/v1/Auth/register`, user);
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

  public getDecodedToken(): any | null {
    const token = this.getToken();
    if (!token) return null;
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error("Erro ao decodificar o token JWT", error);
      return null;
    }
  }

  public getUserInfo(): any | null {
    const decoded = this.getDecodedToken();
    return decoded ? decoded : null;
  }

  public isTokenExpired(): boolean {
    const decoded: any = this.getDecodedToken();
    if (!decoded || !decoded.exp) return true;

    const expirationDate = decoded.exp * 1000;
    return Date.now() > expirationDate;
  }

}
