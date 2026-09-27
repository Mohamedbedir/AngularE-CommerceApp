import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IAuthResponse {
  displayName: string;
  email: string;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiLink = environment.apiLink;
  readonly isAuthenticated = signal(!!localStorage.getItem('token'));

  constructor(private http: HttpClient) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
    this.isAuthenticated.set(true);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isAuthenticated.set(false);
  }

  Login(user:any): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(`${this.apiLink}/Account/Login`,user);
  }

   Register(user:any): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(`${this.apiLink}/Account/Register`,user);
  }
}
