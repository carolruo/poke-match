import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, mergeMap, Observable, ReplaySubject, switchMap } from 'rxjs';
import { Pokemon } from '../model/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public pokemons: Pokemon[] = [];

  constructor(
    private http: HttpClient
  ) {
    const allPokemonsUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

    this.http.get<any>(allPokemonsUrl).pipe(
      map(value => value.results),
      map((value: any) => {
        return from(value).pipe(
          mergeMap((v: any) => this.http.get(v.url)),
        );
      }),
      mergeMap(value => value),
    ).subscribe((result: any) => this.pokemons[result.id] = {
      image: result.sprites.front_default,
      number: result.id,
      hp: result.stats[0].base_stat,
      height: result.height,
      name: result.name,
      types: result.types.map((t:any) => t.type.name),
    });
  }
}
