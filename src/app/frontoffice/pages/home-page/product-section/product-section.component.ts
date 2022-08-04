import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss'],
})
export class ProductSectionComponent implements OnInit {
  @Input() title!: string;
  @Input() products = [];
  @Input() categories!: string[];
  constructor() {}

  ngOnInit(): void {}

  onFilterClicked(categoryName: string) {
    console.log(categoryName);
  }
}
