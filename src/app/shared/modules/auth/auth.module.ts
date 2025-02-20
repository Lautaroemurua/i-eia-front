// shared/modules/auth/auth.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoginComponent  // Import instead of declare since it's standalone
  ],
  exports: [LoginComponent]
})
export class AuthModule {}