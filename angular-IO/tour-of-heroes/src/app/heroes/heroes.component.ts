import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  // hero is now an object, using an interface for definition and resusability
  
  
  constructor() { }

  

  ngOnInit(): void {
    // lifecycle hook
    // called shortly after componet creation
    // initalisation logic HERE
  }

}
