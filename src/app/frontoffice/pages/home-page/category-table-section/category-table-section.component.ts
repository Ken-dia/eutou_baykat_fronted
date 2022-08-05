import { Component, Input, OnInit } from '@angular/core';
import { categoryModel } from 'src/app/frontoffice/models/category.model';

@Component({
  selector: 'app-category-table-section',
  templateUrl: './category-table-section.component.html',
  styleUrls: ['./category-table-section.component.scss'],
})
export class CategoryTableSectionComponent implements OnInit {
  @Input() categories!: categoryModel[];
  constructor() {}

  ngOnInit(): void {}
}
