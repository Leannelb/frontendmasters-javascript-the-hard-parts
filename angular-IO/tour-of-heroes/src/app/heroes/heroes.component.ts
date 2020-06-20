import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../models/mock-heros';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heros = HEROES; 
  // import: export const HEROES: Hero[] = [  { id: 11, name: 'Dr Nice' },... ]
  
  constructor() { }

  

  ngOnInit(): void {
    // lifecycle hook
    // called shortly after componet creation
    // initalisation logic HERE
  }

}
