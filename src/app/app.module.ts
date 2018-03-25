import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayModule } from './display/display.module';
import { ListModule } from './list/list.module';
import { WriteModule } from './write/write.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ListModule,
    DisplayModule,
    WriteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
