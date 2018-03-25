import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentModule } from './comment/comment.module';
import { DisplayComponent } from './display.component';
import { ReadModule } from './read/read.module';

@NgModule({
  imports: [
    CommonModule,
    ReadModule,
    ReactiveFormsModule,
    CommentModule
  ],
  declarations: [DisplayComponent]
})
export class DisplayModule {
}
