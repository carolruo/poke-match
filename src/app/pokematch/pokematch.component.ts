import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pokemon } from '../model/Pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokematch',
  templateUrl: './pokematch.component.html',
  styleUrls: ['./pokematch.component.scss']
})
export class PokematchComponent implements OnInit, OnDestroy {
  pokemon!: Pokemon;
  subscription: Subscription = new Subscription();
  limit = 1;
  offset = 0;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
  }

  private getPokemon(id: number) {
    return this.subscription = this.pokemonService.getPokemonById(id)
      .subscribe((result: any) => {
          this.pokemon =
          {
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

  getRandomPokemon() {
    let randomNumber = Number.parseInt((Math.random() * 905 ).toFixed(0));
    this.getPokemon(randomNumber);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
