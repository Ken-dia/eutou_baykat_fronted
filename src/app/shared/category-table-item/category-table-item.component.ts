import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-table-item',
  templateUrl: './category-table-item.component.html',
  styleUrls: ['./category-table-item.component.scss'],
})
export class CategoryTableItemComponent implements OnInit {
  @Input() item!: { url: string; name: string };

  constructor() {}

  ngOnInit(): void {}
}
