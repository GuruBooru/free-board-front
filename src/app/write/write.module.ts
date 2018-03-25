import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriteComponent } from './write.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PostService } from '../shared/service/post/post.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [WriteComponent],
  exports: [WriteComponent],
  providers: [PostService]
})
export class WriteModule { }
