import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {
  product = {
    name: 'Товар',
    price: 'Цена',
    color: 'Цвет'
  }
  constructor() { }

  ngOnInit() {
  }

}
