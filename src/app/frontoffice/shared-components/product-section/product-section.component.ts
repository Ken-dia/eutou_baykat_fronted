import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss'],
})
export class ProductSectionComponent implements OnInit {
  title: string = 'Les plus Récents';
  regions: string[] = ['vallé du fleuve', 'thies', 'St Louis'];
  products: any[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products[0].libelle);
    });
  }
}
