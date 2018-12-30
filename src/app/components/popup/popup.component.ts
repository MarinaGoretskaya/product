import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'my-popup',
  templateUrl: './popup.component.html',
  host: {
    '[@state]': 'state',
  },
  animations: [
    trigger('state', [
      state('opened', style({transform: 'translateY(0%)'})),
      state('void, closed', style({transform: 'translateY(100%)', opacity: 0})),
      transition('* => *', animate('100ms ease-in')),
    ])
  ],
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent {
  private state: 'opened' | 'closed' = 'closed';

  @Input()
  set message(message: string) {

    this.state = 'opened';
  }
  get message(): string { return this._message; }
  _message: string;

  @Output()
  closed = new EventEmitter();

  columnDefs = [
    {headerName: 'Наименование', field: 'name', editable: true},
    {headerName: 'Цена', field: 'price', editable: true},
    {headerName: 'Цвет', field: 'color', editable: true}
  ];

  rowData = [
    {name: 'Товар 1', price: 2.5, color: 'красный'},
    {name: 'Товар 2', price: 3.5, color: 'зеленый'},
    {name: 'Товар 3', price: 4.0, color: 'синий'}
  ];

  selectedColor = '';

  colors = [
    {
      name: 'red',
      value: '#b72b1e'
    },
    {
      name: 'green',
      value: '#0a9f2d'
    },
    {
      name: 'blue',
      value: '#0000ff'
    }
  ];

  onChange(value){
    this.selectedColor = value;
  }

  /*onClick = new EventEmitter<string>();

  }*/

}
