import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/frontoffice/services/products/products.service';

@Component({
  selector: 'app-filter-btns',
  templateUrl: './filter-btns.component.html',
  styleUrls: ['./filter-btns.component.scss'],
})
export class FilterBtnsComponent implements OnInit {
  @Input() regions!: string[];
  @Output() filterEvent = new EventEmitter<string>();

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {}

  onFilter(region: string) {
    this.filterEvent.emit(region);
  }
}
