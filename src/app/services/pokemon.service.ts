import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, mergeMap, Observable, ReplaySubject, switchMap, take } from 'rxjs';
import { Pokemon } from '../model/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  BASE_URL: string = `https://pokeapi.co/api/v2/pokemon/`;

  constructor(
    private http: HttpClient
  ) {  }

  getPokemons(limit: number, offset: number) {
    return this.http.get<any>(`${this.BASE_URL}?limit=${limit}&offset=${offset}`)
    .pipe(
      map(value => value.results),
      map((value: any) => {
        return from(value).pipe(
          mergeMap((v: any) => this.http.get(v.url))
        );
      }),
      mergeMap((value: any) => value)
    );
  }
}
