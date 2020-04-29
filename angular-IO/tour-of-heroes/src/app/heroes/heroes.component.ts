import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  hero = "Windstorm";

  ngOnInit(): void {
    // lifecycle hook
    // called shortly after componet creation
    // initalisation logic HERE
  }

}
