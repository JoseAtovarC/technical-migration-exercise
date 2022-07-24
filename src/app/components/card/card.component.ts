import { Component, Input } from '@angular/core';
import { poke_data } from 'src/app/interface/poke-data';
@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',

})
export class CardComponent {
  @Input() pokeNames: poke_data[] = [];
  constructor() { }


}
