import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //this is a CSS ELEMENT SELECTOR!!! matched the html element identifying this component.
  templateUrl: './app.component.html', //  TEMPLATE URL - location of components template file
  styleUrls: ['./app.component.css']  //  STYLES URL - location of components private CSS file
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
// this value is interpolated
}
