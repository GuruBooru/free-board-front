import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {DisplayComponent} from './display/display.component';
import {ReadComponent} from './display/read/read.component';


@NgModule({
  declarations: [
    AppComponent, DisplayComponent,ReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
