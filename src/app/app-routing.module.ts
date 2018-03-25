import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WriteComponent } from './write/write.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  {path: '', component: DisplayComponent},
  {path: 'board-posting', component: WriteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
