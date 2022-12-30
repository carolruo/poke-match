import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit, OnDestroy {

  pokemons: any;
  subscription: Subscription = new Subscription();

  constructor(
    private pokemonService: PokemonService
  ) { }


  ngOnInit(): void {
    this.subscription = this.pokemonService.getAllPokemons().subscribe({
      next: pokemons => {
        this.pokemons = pokemons;
      },
      error: err => {
        console.log(err);
      }      
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
