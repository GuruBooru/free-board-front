import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { WriteComponent } from './write/write.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'write', component: WriteComponent},
  {path: 'post/:id', component: DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
