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
  limit = 15;
  page = 1;
  offset = 0;
  totalPokemons: number = 0;


  constructor(
    private pokemonService: PokemonService
  ) { }
  
  ngOnInit(): void {
    this.getPokemons();
  }
  
  private getPokemons() {
    this.subscription = this.pokemonService.getPokemons(this.limit, ((this.page * this.limit) - this.limit))
      .subscribe((result: any) => {
        this.totalPokemons += 1;

        this.pokemons[result.id] = {
          image: result.sprites.front_default,
          number: result.id,
          hp: result.stats[0].base_stat,
          atk: result.stats[1].base_stat,
          def: result.stats[2].base_stat,
          name: result.name,
          types: result.types.map((t: any) => t.type.name)
        };
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changePage(event: any) {
    this.page = event;
    this.pokemons = [];
    this.getPokemons();
  }
}
