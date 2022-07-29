import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  products = {
    images: [
      'citrons.png',
      'citrons.png',
      'citrons.png',
      'citrons.png',
      'citrons.png',
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
