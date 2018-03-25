import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from './display.component';
import { ReadModule } from './read/read.module';

@NgModule({
  imports: [
    CommonModule, ReadModule, ReactiveFormsModule
  ],
  declarations: [DisplayComponent]
})
export class DisplayModule {
}
