// src/app/core/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  constructor(private storage: StorageService, private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this.storage.set(this.TOKEN_KEY, 'mock-jwt-token');
      this.router.navigate(['/home']);
      return true;
    }
    return false;
  }

  logout() {
    this.storage.remove(this.TOKEN_KEY);
    this.router.navigate(['/auth']);
  }

  isAuthenticated(): boolean {
    return !!this.storage.get(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return this.storage.get(this.TOKEN_KEY);
  }
}
