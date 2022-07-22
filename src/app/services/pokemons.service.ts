import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService, pokeData } from '../interface/poke-data';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService implements ApiService {
  private pokeApi = "https://pokeapi.co/api/v2/pokemon/?limit=20"


  constructor(private http: HttpClient) { }

  public async getPokemons() {
    let pokeArray: pokeData[] = []
    let res: any = await this.http.get(this.pokeApi).toPromise()
    await res.results.map(async (pokemon: any) => {
      await this.http.get(pokemon.url).toPromise()
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
