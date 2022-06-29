import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input()
  product!: {
    img: string;
    name: string;
    locality: string;
    quantities: { price: number; interval: string }[];
  };

  constructor() {}

  ngOnInit(): void {}
}
