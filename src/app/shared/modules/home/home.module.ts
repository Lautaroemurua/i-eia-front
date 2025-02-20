import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeComponent  // Import instead of declare
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
