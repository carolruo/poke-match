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

  public pokemons: Pokemon[] = [
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      number: 1,
      name: 'Bulbasaur',
      types: ['Grass', 'Poison'],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
      number: 2,
      name: 'Ivysaur',
      types: ['poision'],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
      number: 3,
      name: 'Venosaur',
      types: ['Grass'],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
      number: 4,
      name: 'Charmander',
      types: ['Fire'],
    },
  ];
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
