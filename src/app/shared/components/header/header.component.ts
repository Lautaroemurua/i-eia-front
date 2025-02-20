// shared/components/header/header.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <div class="header-content">
        <h1>DeepChat Angular</h1>
        <button (click)="logout()" class="logout-btn">Logout</button>
      </div>
    </header>
  `,
  styles: [`
    header {
      background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
      color: white;
      padding: 1rem;
    }
    .header-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h1 {
      margin: 0;
      font-size: 1.5rem;
    }
    .logout-btn {
      padding: 0.5rem 1rem;
      background: transparent;
      border: 2px solid white;
      color: white;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s;
    }
    .logout-btn:hover {
      background: white;
      color: #1e3c72;
    }
  `],
  standalone: true
})
export class HeaderComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}