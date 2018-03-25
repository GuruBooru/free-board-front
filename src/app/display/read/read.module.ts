import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadComponent } from './read.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule , ReactiveFormsModule
  ],
  declarations: [ReadComponent]
})
export class ReadModule { }
