import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule
  ],

})
export class ListModule { }
