import { Component, OnInit } from '@angular/core';
import { MovieService } from './../movie.service';
import { Movies } from './../models/movie.class';
@Component({
  selector: 'app-child-book',
  templateUrl: './child-book.component.html',
  styleUrls: ['./child-book.component.css']
})
export class ChildBookComponent implements OnInit {
  private movies: Movies[] = [];
  private number = 12 ;
  constructor( private _MovieService: MovieService) {

  }
  ngOnInit() {
    this.movies = this._MovieService.getShowData();
  }
  upfunction(index) {
    if (index > 0) {
      let newArr = this.movies;
      let newArrItem = newArr[index];
      newArr[index] = newArr[index - 1];
      newArr[index - 1] = newArrItem;
    }
  }
  downfunction(index) {
    if (index + 1 !== this.movies.length ) {
      let newArr = this.movies;
      let newArrItem = newArr[index];
      newArr[index] = newArr[index + 1];
      newArr[index + 1] = newArrItem;
    }
  }
  //
  upfunction2(index) {
    let newArr = this.movies;
    let newArrIndex = newArr[index].age;
    newArrIndex = newArrIndex + 1;
    this.number = newArrIndex;
    //
    this.movies[index].age = this.number;
    console.log(this.movies[index]);

  }
  downfunction2(index) {
    let newArr = this.movies;
    let newArrIndex = newArr[index].age;
    newArrIndex = newArrIndex - 1;
    this.number = newArrIndex;
    //
    this.movies[index].age = this.number;
    console.log(this.movies[index].age);
  }
}
