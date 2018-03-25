import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from './display.component';
import { CommentComponent } from './comment/comment.component';
import { CommentModule } from './comment/comment.module';
import { ReadModule } from './read/read.module';

@NgModule({
  imports: [
    CommonModule, ReadModule, ReactiveFormsModule
    CommonModule,
    CommentModule
  ],
  declarations: [DisplayComponent]
})
export class DisplayModule { }
