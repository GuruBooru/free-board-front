import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display.component';
import { CommentComponent } from './comment/comment.component';
import { CommentModule } from './comment/comment.module';

@NgModule({
  imports: [
    CommonModule,
    CommentModule
  ],
  exports: [DisplayComponent],
  declarations: [DisplayComponent]
})
export class DisplayModule { }
