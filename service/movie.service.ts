import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../class/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies:Movie[] = [];
  private myUrl = 'http://www.omdbapi.com/?apikey=3f90d51f';

  constructor(private http:HttpClient) { }

  public getMovies(movie:string = 'movie'):any{
    return this.http.get(this.myUrl + '&s=' + movie);
  }

  public getMovieById(imdbID:string):any{
    return this.http.get(this.myUrl + '&i='+imdbID)
  }

}
