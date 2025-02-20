import { Component } from '@angular/core';
import { FloatingButtonComponent } from '../chat/floating-button/floating-button.component';

@Component({
  selector: 'app-home',
  template: `
    <div class="home-container">
      <h2>Bienvenido a DeepChat</h2>
      <p>Tu asistente de chat inteligente</p>
      <app-floating-button></app-floating-button>
    </div>
  `,
  styles: [`
    .home-container {
      padding: 2rem;
      text-align: center;
    }
    h2 {
      margin-bottom: 1rem;
    }
  `],
  standalone: true,
  imports: [FloatingButtonComponent]
})
export class HomeComponent {}
