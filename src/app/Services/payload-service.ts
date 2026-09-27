import { Injectable, Service } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname'?: string;
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'?: string;
  'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'?: string;
  exp?: number;
  iss?: string;
  aud?: string;
}
@Injectable({
  providedIn: 'root'
})
export class PayloadService {
     private readonly tokenKey = 'token';

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUser(): JwtPayload | null {
    const token = this.getToken();

    if (!token) {
      return null;
    }

    try {
      return jwtDecode<JwtPayload>(token);
    } catch {
      return null;
    }
  }

  getRole(): string | null {
    const user = this.getUser();

    return user?.[
      'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
    ] ?? null;
  }

  getUserName(): string | null {
    const user = this.getUser();

    return user?.[
      'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname'
    ] ?? null;
  }

  getEmail(): string | null {
    const user = this.getUser();

    return user?.[
      'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'
    ] ?? null;
  }
}
