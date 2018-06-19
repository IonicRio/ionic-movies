import { MoviesProvider } from './../../providers/movies/movies';
import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MoviesProvider]
})
export class HomePage {
  public movies: any;

  constructor(private _movies: MoviesProvider) { }

  ionViewDidLoad() {
    console.log('jeff');
    this._movies.listMovies().subscribe(
      movies => {
        this.movies = movies.data.movies;
      }
    );
  }

  save() {

  }
}
