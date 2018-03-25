import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostService } from '../shared/service/post/post.service';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent],
  providers: [PostService]
})

export class ListModule {
}
