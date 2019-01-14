import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  name:string;
  price:number;
  color:string;

  constructor() { }

  ngOnInit() {
    /*this.name = {{prodName}},
    this.price = {{prodPrice}},
    this.color = {{prodColor}}*/
  }

}
