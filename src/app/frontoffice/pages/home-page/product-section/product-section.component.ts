import { Component, Input, OnInit } from '@angular/core';
import { categoryModel } from 'src/app/frontoffice/models/category.model';
import { ProductModel } from 'src/app/frontoffice/models/product.model';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss'],
})
export class ProductSectionComponent implements OnInit {
  @Input() title!: string;
  @Input() products!: ProductModel[];
  @Input() categories!: categoryModel[];
  constructor() {}

  ngOnInit(): void {}
}
