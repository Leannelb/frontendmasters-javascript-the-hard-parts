import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  
  ],
  // add FormsModule to the @NgModule metadata's imports array, which contains a list of external modules that the app needs.
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
