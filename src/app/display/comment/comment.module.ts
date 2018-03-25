import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment.component';
import { CommentService } from '../../shared/service/comment/comment.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CommentComponent],
  declarations: [CommentComponent],
  providers: [CommentService]
})
export class CommentModule { }
