import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService, PokeData, PokeApiResult, PokeApi, Pokemon } from '../interface/poke-data';
import { lastValueFrom, catchError, Observable, map, mergeMap, forkJoin } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PokemonsService implements ApiService {
  private pokeApi = "https://pokeapi.co/api/v2/pokemon/?limit=20"


  constructor(private http: HttpClient) { }

  public getPokemons(): Observable<PokeData[]> {

    return this.http.get<PokeApi>(this.pokeApi).pipe(
      catchError(_error => this.http.get<PokeApi>(this.pokeApi))).pipe(
        mergeMap((data) => {
          let urls = data.results.map((result: PokeApiResult) => {
            return this.http.get<Pokemon>(result.url).pipe(map((result: Pokemon) => {
              return {
                name: result.name,
                img: result.sprites.front_default,
                weight: result.weight
              }
            })
            )
          }
          )
          return forkJoin(urls)
        })
      )
  }


}