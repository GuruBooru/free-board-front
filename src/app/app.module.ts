import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { ReadComponent } from './display/read/read.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ReadModule } from './display/read/read.module';
import { DisplayModule } from './display/display.module';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ReadModule,
    AppRoutingModule,
    DisplayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
