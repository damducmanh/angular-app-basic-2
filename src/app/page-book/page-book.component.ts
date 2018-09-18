import { Component, OnInit } from '@angular/core';
import { ChildBookComponent } from './../child-book/child-book.component';
// sevice
@Component({
  selector: 'app-page-book',
  template: `
      <div class="col-md-12">
         <div class="container">
            <app-child-book-form></app-child-book-form>
            <app-child-book></app-child-book>
         </div>
      </div>
  `,
  styles: []
})
export class PageBookComponent implements OnInit {
  ngOnInit() {
  }
}
