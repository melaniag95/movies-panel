import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesResultsComponent } from './movies-results/movies-results.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { MovieComponent } from './movie/movie.component';

const routes:Routes = [
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'movies'
  },
  {
    path:'movies/:id/detail',
    component: DetailComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    MoviesComponent,
    MoviesResultsComponent,
    DetailComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
