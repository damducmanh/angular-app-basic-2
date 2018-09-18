import { Injectable } from '@angular/core';

@Injectable()
export class ShowlogService {

  constructor() { }

  getHeroes(): void {
    console.log('show book');
  }
}
