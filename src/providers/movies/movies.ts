import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MoviesProvider {
  private movieApiBaseUrl = 'https://yts.am/api/v2';
  constructor(private _http: HttpClient) { }

  listMovies(limit: number = 10): Observable<any> {
    return this._http.get(this.movieApiBaseUrl + '/list_movies.json');
  }

  getOne(id: number) {
    return this._http.get(this.movieApiBaseUrl + '/movie_details.json?movie_id=' + id);
  }
}
