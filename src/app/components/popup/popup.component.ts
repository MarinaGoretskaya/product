import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AgGridNg2 } from 'ag-grid-angular';


@Component({
  selector: 'my-popup',
  templateUrl: './popup.component.html',
  host: { '[@state]': 'state',  },
  animations: [ trigger('state', []) ],
  styleUrls: ['./popup.component.css'],
})

export class PopupComponent {
 @ViewChild('agGrid') agGrid: AgGridNg2;
  private state: 'opened' | 'closed' = 'closed';

  @Input()
  set message(message: string) {
    this.state = 'opened';
  }

  @Output()
  closed = new EventEmitter();

  columnDefs = [
    {headerName: 'Наименование', field: 'name', editable: true, width: 100, checkboxSelection: true },
    {headerName: 'Цена', field: 'price', editable: true, width: 100},
    {headerName: 'Цвет', field: 'color', editable: true}
  ];
  rowData = [
    {name: 'Товар1', price: 2.5, color: 'красный'},
    {name: 'Товар2', price: 3.5, color: 'зеленый'},
    {name: 'Товар3', price: 4.0, cellRenderer: './cellColor.html'}
  ];

  selectedColor = '';
  colors = [
    { name: 'red',
      value: '#b72b1e' },
    { name: 'green',
      value: '#0a9f2d' },
    { name: 'blue',
      value: '#0000ff' }
  ];

  onChange(value) {
    this.selectedColor = value;
  }

  /*onClick = new EventEmitter<string>();*/
  addProduct() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const prodName = selectedData.map( node => node.name );
    const prodPrice = selectedData.map( node => node.price + '$');
    const prodColor = selectedData.map( node => node.color);
    const product = document.createElement('div');
    product.style.cursor = 'pointer';
    product.innerHTML = prodName + ' ' + prodPrice + ' ' + prodColor;
    document.body.appendChild(product);
    return product;
  }

  deleteProduct() {

  }




}
