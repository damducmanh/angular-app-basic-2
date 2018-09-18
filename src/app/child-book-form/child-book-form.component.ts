import { Component, OnInit } from '@angular/core';
import { MovieService } from './../movie.service';
import { Movies } from './../models/movie.class';
import { ShowlogService } from './../showlog.service';
@Component({
  selector: 'app-child-book-form',
  templateUrl: './child-book-form.component.html',
  styleUrls: ['./child-book-form.component.css']
})
export class ChildBookFormComponent implements OnInit {

  constructor(private _MovieService: MovieService , public _ShowlogService: ShowlogService ) { }

  ngOnInit() {
  }
  addData(name: string, age: number, address: string ) {
    const movies = new Movies(name, age, address) ;
    this._MovieService.addData(movies);
  }
  myclick() {
    this._ShowlogService.getHeroes();
  }
}
