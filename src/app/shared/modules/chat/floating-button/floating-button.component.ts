// src/app/shared/modules/chat/floating-button/floating-button.component.ts
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgIf, NgFor, NgClass, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-floating-button',
  template: `
    <div class="floating-container">
      <button class="floating-button" (click)="toggleChat()">
        <span>{{ isChatOpen ? '✖' : '💬' }}</span>
      </button>
      
      <div class="chat-wrapper" *ngIf="isChatOpen">
        <div class="chat-header">
          <div class="header-content">
            <div class="avatar">AI</div>
            <div class="title">
              <h3>Chat Assistant</h3>
              <span class="status">Online</span>
            </div>
          </div>
        </div>

        <div class="messages-area" #messagesContainer>
          <div class="message" *ngFor="let message of messages" [class]="message.role">
            {{ message.content }}
          </div>
        </div>

        <div class="input-area">
          <input 
            type="text" 
            [(ngModel)]="messageText" 
            placeholder="Escribe un mensaje..."
            (keyup.enter)="sendMessage()"
            class="message-input"
          >
          <button class="send-button" (click)="sendMessage()">
            <span>Enviar</span>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .floating-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1000;
    }
    
    .floating-button {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #007bff;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      color: white;
      z-index: 1001;
      transition: transform 0.2s;
    }

    .floating-button:hover {
      transform: scale(1.05);
      background-color: #0056b3;
    }

    .chat-wrapper {
      position: absolute;
      bottom: 80px;
      right: 0;
      width: 350px;
      height: 500px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.2);
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .chat-header {
      background: #007bff;
      color: white;
      padding: 15px;
      height: 60px;
    }

    .header-content {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .avatar {
      width: 32px;
      height: 32px;
      background: rgba(255,255,255,0.2);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
    }

    .title {
      display: flex;
      flex-direction: column;
    }

    .title h3 {
      margin: 0;
      font-size: 16px;
      font-weight: 500;
    }

    .status {
      font-size: 12px;
      opacity: 0.8;
    }

    .messages-area {
      flex: 1;
      overflow-y: auto;
      padding: 15px;
      background: #f8f9fa;
      display: flex;
      flex-direction: column;
    }

    .message {
      padding: 10px 15px;
      margin: 5px 0;
      border-radius: 15px;
      max-width: 80%;
      word-wrap: break-word;
    }

    .user {
      background-color: #007bff;
      color: white;
      align-self: flex-end;
      border-bottom-right-radius: 5px;
    }

    .assistant {
      background-color: white;
      color: black;
      align-self: flex-start;
      border-bottom-left-radius: 5px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.1);
    }

    .input-area {
      padding: 15px;
      background: white;
      border-top: 1px solid #e0e0e0;
      display: flex;
      gap: 10px;
      align-items: center;
    }

    .message-input {
      flex: 1;
      padding: 10px 15px;
      border: 1px solid #e0e0e0;
      border-radius: 20px;
      outline: none;
      font-size: 14px;
      transition: border-color 0.2s;
    }

    .message-input:focus {
      border-color: #007bff;
    }

    .send-button {
      background: #007bff;
      color: white;
      border: none;
      border-radius: 20px;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 14px;
      transition: background-color 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .send-button:hover {
      background: #0056b3;
    }

    ::ng-deep {
      .message-container {
        padding: 10px;
        margin: 5px 0;
        border-radius: 10px;
        max-width: 80%;
      }

      .user-message {
        background-color: #007bff;
        color: white;
        margin-left: auto;
      }

      .assistant-message {
        background-color: white;
        margin-right: auto;
      }
    }
  `],
  standalone: true,
  imports: [NgIf, NgFor, NgClass, FormsModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FloatingButtonComponent {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;
  
  isChatOpen = false;
  messageText = '';
  messages: Array<{role: string, content: string}> = [
    {
      role: 'assistant',
      content: '¡Hola! ¿En qué puedo ayudarte hoy?'
    }
  ];

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = 
        this.messagesContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  sendMessage() {
    if (this.messageText.trim()) {
      // Agregar mensaje del usuario
      this.messages.push({
        role: 'user',
        content: this.messageText.trim()
      });

      // Simular respuesta del asistente
      setTimeout(() => {
        this.messages.push({
          role: 'assistant',
          content: 'He recibido tu mensaje: "' + this.messageText.trim() + '"'
        });
        this.scrollToBottom();
      }, 1000);

      this.messageText = ''; // Limpiar input
      this.scrollToBottom();
    }
  }

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
    if (this.isChatOpen) {
      setTimeout(() => this.scrollToBottom(), 100);
    }
  }
}
