import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  // @Input()
  // product!: {
  //   img: string;
  //   name: string;
  //   locality: string;
  //   quantities: { price: number; interval: string }[];
  // };
  img?: string;
  @Input() product: any;

  constructor() {}

  ngOnInit(): void {
    /* this.img = this.product.images[0].url;
    console.log(this.img); */
  }
}
