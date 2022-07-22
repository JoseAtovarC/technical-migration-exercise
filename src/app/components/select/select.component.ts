import { Component, Input } from '@angular/core';

@Component({
  selector: 'select-component',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() selected: string = '';

  constructor() { }

  addNewPoke(value: string) {
    localStorage.setItem('selected', value);
  }

}