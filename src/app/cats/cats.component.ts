import { Component, OnInit } from '@angular/core';
import {CATS} from "../mock-cats";
import {Cat} from '../cat';
selectedCat: Cat;
import * as _ from 'lodash';
import {Component, Input, OnInit} from '@angular/core';
import {Cat} from '../cat';
@Input() cat: Cat;


@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  
  styleUrls: ['./cats.component.css'],
  
})
export class CatsComponent implements OnInit {
  selectedCat: Cat | undefined;

  constructor() { }
  cats = CATS;
  showDetails!: boolean;

    ngOnInit(): void {
    
  }
  getCatById(id: any) {
    let index = _.findIndex(this.cats, (c: Cat) => {
      return c.id === id
      });
      this.selectedCat = this.cats[index];
console.log(this.selectedCat);
}

  
}
