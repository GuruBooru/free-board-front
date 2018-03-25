import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../../shared/service/post/post.service';
import { ReadComponent } from './read.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ReadComponent],
  declarations: [ReadComponent],
  providers: [PostService]
})
export class ReadModule {
}
