import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarRatingComponent } from './feature/feature/star-rating/star-rating/star-rating.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "movie/:type/:id",
    component: MovieComponent
  },
  {
    path: "star",
    component: StarRatingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
