import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-section-item',
  templateUrl: './category-section-item.component.html',
  styleUrls: ['./category-section-item.component.scss'],
})
export class CategorySectionItemComponent implements OnInit {
  @Input()
  categoryItem: any;

  constructor() {}

  ngOnInit(): void {}
}
