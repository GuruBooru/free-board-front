import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadComponent } from './read.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl} from '@angular/forms';
import { PostService } from '../../shared/service/post/post.service';

@NgModule({
  imports: [
    CommonModule , ReactiveFormsModule
  ],
  exports: [ReadComponent],
  declarations: [ReadComponent],
  providers: [PostService]
})
export class ReadModule { }
