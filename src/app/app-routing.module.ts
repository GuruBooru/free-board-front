import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { CommentComponent } from './display/comment/comment.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'post/:id', component: DisplayComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
