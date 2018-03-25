import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display.component';
import { ReadComponent } from './read/read.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ReadModule } from './read/read.module';

@NgModule({
  imports: [
    CommonModule, ReadModule, ReactiveFormsModule
  ],
  declarations: [DisplayComponent]
})
export class DisplayModule { }
