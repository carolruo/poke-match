import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokematchComponent } from './pokematch/pokematch.component';
import { PokemonsComponent } from './pokemons/pokemons.component';

const routes: Routes = [
  { path: 'pokedex', component: PokemonsComponent },
  { path: 'pokematch', component: PokematchComponent },
  { path: '', pathMatch: 'full', redirectTo: 'pokematch' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
