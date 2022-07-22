import { Component, OnInit, Input } from '@angular/core';
import { pokeData } from 'src/app/interface/poke-data';
@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() pokeNames: pokeData[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
