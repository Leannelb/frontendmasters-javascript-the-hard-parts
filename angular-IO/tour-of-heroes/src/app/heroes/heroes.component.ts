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
  selectedHero: Hero;
  
  constructor() { }

  ngOnInit(): void {  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
