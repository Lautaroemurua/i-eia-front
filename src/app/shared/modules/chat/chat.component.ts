// src/app/shared/modules/chat/chat.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-chat',
  template: `
    <div class="chat-container">
      <div class="chat-header">
        <div class="header-content">
          <div class="avatar">AI</div>
          <div class="title">
            <h3>Chat Assistant</h3>
            <span class="status">Online</span>
          </div>
        </div>
      </div>
      
      <div class="messages-container">
        <deep-chat
          initialMessages='[{"role": "assistant", "content": "¡Hola! ¿En qué puedo ayudarte hoy?"}]'
          style="width: 100%; height: 100%;"
          textInput="true"
          [style]="chatStyles"
        ></deep-chat>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 400px;
      height: 500px;
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1000;
    }

    .chat-container {
      width: 100%;
      height: 100%;
      background: white;
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: 0 2px 12px rgba(0,0,0,0.1);
    }

    .chat-header {
      background: #007bff;
      color: white;
      padding: 16px;
      z-index: 1;
    }

    .header-content {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .avatar {
      width: 36px;
      height: 36px;
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

    h3 {
      margin: 0;
      font-size: 16px;
      font-weight: 500;
    }

    .status {
      font-size: 12px;
      opacity: 0.8;
    }

    .messages-container {
      flex: 1;
      background: white;
      position: relative;
      display: flex;
      flex-direction: column;
      height: calc(100% - 68px); /* Altura total menos el header */
    }

    ::ng-deep deep-chat {
      --chat-background-color: #ffffff;
      --chat-border-radius: 8px;
      --chat-font-size: 14px;
      --chat-message-bg-color: #f0f0f0;
      --chat-message-border-radius: 8px;
      --chat-message-max-width: 80%;
      --chat-message-padding: 12px;
      --chat-message-margin: 8px;
      --chat-input-border-radius: 8px;
      --chat-input-bg-color: #ffffff;
      --chat-input-padding: 12px;
      --chat-input-button-bg-color: #007bff;
      --chat-input-button-color: white;
      --chat-input-button-hover-bg-color: #0056b3;
      --chat-assistant-bg-color: #e3f2fd;
      --chat-user-bg-color: #f0f0f0;
      --chat-border: none;
      --chat-footer-border: 1px solid #e0e0e0;
      --chat-input-border: 1px solid #e0e0e0;
      height: 100% !important;
      display: flex !important;
      flex-direction: column !important;
    }
  `],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChatComponent {
  chatStyles = {
    'display': 'flex',
    'flexDirection': 'column',
    'height': '100%',
    'width': '100%',
    'background': '#ffffff'
  };
}