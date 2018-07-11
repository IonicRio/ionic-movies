import { MovieDetailPage } from './../movie-detail/movie-detail';
import { NavController } from 'ionic-angular';
import { MoviesProvider } from './../../providers/movies/movies';
import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MoviesProvider]
})
export class HomePage {
  public movies: any;

  constructor(private _movies: MoviesProvider, private navController: NavController) { }

  ionViewDidLoad() {
    this._movies.listMovies().subscribe(
      movies => {
        this.movies = movies.data.movies;
      }
    );
  }

  goToDetail(id) {
    this.navController.push(MovieDetailPage, { id: id });
  }

  search(event: any) {
    let controll;

    clearTimeout(controll);

    controll = (() => {
      this._movies.listMovies(10, event.target.value).subscribe(
        movies => {
          this.movies = movies.data.movies;
        }
      );
    }, 500);

  }
}
