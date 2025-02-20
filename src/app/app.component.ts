import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <app-header></app-header>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    main {
      flex: 1;
      padding: 20px;
    }
  `],
  standalone: true,
  imports: [RouterOutlet, HeaderComponent]
})
export class AppComponent {
  title = 'deepchat-angular';

  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
}
