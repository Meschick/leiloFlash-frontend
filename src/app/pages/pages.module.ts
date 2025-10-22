import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
  ],
})
export class PagesModule { }
