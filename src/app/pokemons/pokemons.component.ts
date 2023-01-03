import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pokemon } from '../model/Pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit, OnDestroy {
  pokemons: Pokemon[] = [];
  subscription: Subscription = new Subscription();

  constructor(
    private pokemonService: PokemonService
  ) { }
  
  ngOnInit(): void {
    this.subscription = this.pokemonService.getPokemons(20, 0)
    .subscribe((result: any) => this.pokemons[result.id] = {
      image: result.sprites.front_default,
      number: result.id,
      hp: result.stats[0].base_stat,
      height: result.height,
      name: result.name,
      types: result.types.map((t: any) => t.type.name)
    })
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
