import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  // <!-- The hero property must be an Input property, annotated with the @Input() decorator, because the external HeroesComponent will bind to it like this. -->

  constructor() { }

  ngOnInit(): void {
  }

}
