import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService, poke_data } from '../interface/poke-data';
import { lastValueFrom, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService implements ApiService {
  private pokeApi = "https://pokeapi.co/api/v2/pokemon/?limit=20"


  constructor(private http: HttpClient) { }

  public async getPokemons() {
    let pokeArray: poke_data[] = []
    let res: any = await lastValueFrom(this.http.get(this.pokeApi).pipe(
      catchError(error => this.http.get(this.pokeApi))))

    await res.results.map(async (pokemon: any) => {
      await lastValueFrom(this.http.get(pokemon.url))
        .then(async (response: any) => {
          const pokeObj = {
            name: response.name,
            weight: response.weight,
            img: response.sprites.front_default
          }
          pokeArray.push(pokeObj)
        })

    })

    return pokeArray
  }

}
