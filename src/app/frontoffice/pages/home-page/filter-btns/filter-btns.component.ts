import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { categoryModel } from 'src/app/frontoffice/models/category.model';
import { ProductsService } from 'src/app/frontoffice/services/products/products.service';

@Component({
  selector: 'app-filter-btns',
  templateUrl: './filter-btns.component.html',
  styleUrls: ['./filter-btns.component.scss'],
})
export class FilterBtnsComponent implements OnInit {
  @Input() categories!: categoryModel[];
  @Output() filterEvent = new EventEmitter<string>();

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {}

  onFilter(category: string) {
    // this.productService.setFilterEvent(category);
    // this.productService.filterEvent.emit(category);
    console.log(category);
  }
}
