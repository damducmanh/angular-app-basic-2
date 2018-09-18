import { Component, OnInit } from '@angular/core';
import { MovieService } from './../movie.service';
import { Movies } from './../models/movie.class';
@Component({
  selector: 'app-page-skill',
  templateUrl: './page-skill.component.html',
  styleUrls: ['./page-skill.component.css']
})
export class PageSkillComponent implements OnInit {
  private movies: Movies[] = [];
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

}
