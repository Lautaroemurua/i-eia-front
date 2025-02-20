import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { FloatingButtonComponent } from './floating-button/floating-button.component';
import { HomeComponent } from '../home/home.component';

@NgModule({
  imports: [
    CommonModule,
    ChatComponent,
    FloatingButtonComponent
  ],
  exports: [
    ChatComponent,
    FloatingButtonComponent
  ]
})
export class ChatModule {}
