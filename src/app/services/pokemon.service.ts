import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private BASE_API: string = 'https://pokeapi.co/api/v2/';

  constructor(
    private http: HttpClient
  ) { }

  getAllPokemons(): Observable<any> {
    return this.http.get(`${this.BASE_API}pokemon`);
  }
}
