import { Injectable } from '@angular/core';
import { Movies } from './models/movie.class';
@Injectable()
export class MovieService {
  public movie: Movies[] = [
    {
      'name': 'name' ,
      'age': 15 ,
      'address': '144 binh loi'
    }
  ];
  constructor() { }
  getShowData() {
    return this.movie;
  }
  addData(movie: Movies) {
    this.movie.push(movie);
  }
}
