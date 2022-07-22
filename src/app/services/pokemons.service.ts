import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private pokeApi = "https://pokeapi.co/api/v2/pokemon/?limit=20"
  private pokeApiMoreInfo = "https://pokeapi.co/api/v2/pokemon/"

  constructor(private http: HttpClient) { }

  public async getPokemons(): Promise<any> {
    let pokeArray: any = []
    let res: any = await this.http.get(this.pokeApi).toPromise()
    let pokemons = await res.results.map(async (pokemon: any) => {
      await this.http.get(this.pokeApiMoreInfo + pokemon.name).toPromise()
        .then(async (response: any) => {

          pokeArray.push(response)
        })
      return pokeArray
    })
    await Promise.allSettled(pokemons)
      .then((d: any) => {
        pokeArray = d[0].value
        return pokeArray
      }
      )

    return pokeArray
  }

}
