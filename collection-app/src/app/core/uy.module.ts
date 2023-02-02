import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from "@angular/material/menu";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports : [
    MatSlideToggleModule,
    MatIconModule,
    MatMenuModule,
  ]
})
export class UyModule { }
