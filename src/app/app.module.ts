import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokematchComponent } from './pokematch/pokematch.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    NavbarComponent,
    PokematchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
