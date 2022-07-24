import { Component, Input } from '@angular/core';
import { PokeData } from 'src/app/interface/poke-data';
@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',

})
export class CardComponent {
  @Input() pokeNames: PokeData[] = [];
  constructor() { }


}
