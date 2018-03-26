import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { ReadComponent } from './display/read/read.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path: '', component: DisplayComponent },
  {path: 'post/:id', component: ReadComponent },
  {path: 'login', component: PostComponent }
]; // path가 ''일때 (뒤에 아무것도 안붙였을때)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
