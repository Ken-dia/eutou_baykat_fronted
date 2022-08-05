import { Component, Input, OnInit } from '@angular/core';
import { categoryModel } from 'src/app/frontoffice/models/category.model';

@Component({
  selector: 'app-category-table-item',
  templateUrl: './category-table-item.component.html',
  styleUrls: ['./category-table-item.component.scss'],
})
export class CategoryTableItemComponent implements OnInit {
  @Input() category!: categoryModel;

  constructor() {}

  ngOnInit(): void {}
}
