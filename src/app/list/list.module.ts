import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from '../shared/service/post/post.service';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [PostService]

})
export class ListModule { }
