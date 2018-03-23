import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display.component';
import { ReadComponent } from './read/read.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DisplayComponent, ReadComponent]
})
export class DisplayModule { }
