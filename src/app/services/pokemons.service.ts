import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private pokeApi = "https://pokeapi.co/api/v2/pokemon/?limit=20"

  constructor(private http: HttpClient) { }

  public getPokemons(): Observable<any> {
    return this.http.get(this.pokeApi)
  }

}
