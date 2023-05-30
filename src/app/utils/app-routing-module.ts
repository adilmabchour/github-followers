import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { ProfilAvatarComponent } from '../profil-avatar/profil-avatar.component';
import { PostsComponent } from '../posts/posts.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes : Routes = [
  {
    path : "" ,
    component : HomeComponent
  },
  {
    path : "avatar" ,
    component : AvatarComponent
  },
  {
    path : "avatar/:id/:name" ,
    component : ProfilAvatarComponent
  },
  {
    path : "posts" ,
    component : PostsComponent
  },
  {
    path : "**" ,
    component : NotFoundComponent
  }
]
@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule {
}
