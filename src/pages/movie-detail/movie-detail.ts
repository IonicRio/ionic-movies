import { MoviesProvider } from './../../providers/movies/movies';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the MovieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  public movie: any = {};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public moviesProvider: MoviesProvider,
    private _loading: LoadingController
  ) {
  }

  ionViewDidLoad() {
    let loading = this._loading.create();
    loading.present();
    this.moviesProvider.getOne(this.navParams.get('id')).subscribe(
      response => {
        this.movie = response.data.movie;
        loading.dismiss();
      },
      err => {
        loading.dismiss();
        this.navCtrl.pop();
      }
    );
    console.log(this.navParams.get('id'));
    console.log('ionViewDidLoad MovieDetailPage');
  }

}
