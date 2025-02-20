// src/app/shared/modules/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  template: `
    <div class="login-container">
      <div class="login-card">
        <h2>DeepChat</h2>
        <div class="input-group">
          <input [(ngModel)]="username" placeholder="Username" type="text">
          <input [(ngModel)]="password" placeholder="Password" type="password">
          <button (click)="login()">Login</button>
        </div>
        <p *ngIf="error" class="error">{{ error }}</p>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    }
    .login-card {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 400px;
    }
    h2 {
      text-align: center;
      color: #1e3c72;
      margin-bottom: 2rem;
    }
    .input-group {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    input {
      padding: 0.8rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
    }
    button {
      padding: 0.8rem;
      background: #1e3c72;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s;
    }
    button:hover {
      background: #2a5298;
    }
    .error {
      color: red;
      text-align: center;
      margin-top: 1rem;
    }
  `],
  standalone: true,
  imports: [FormsModule, NgIf]
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/home']);
    } else {
      this.error = 'Invalid credentials';
    }
  }
}
