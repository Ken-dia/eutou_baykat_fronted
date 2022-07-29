import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.scss'],
})
export class CategorySectionComponent implements OnInit {
  categoryItems = [
    {
      img: 'fruit.png',
      name: 'fruit',
      url: '#',
    },
    {
      img: 'fruit.png',
      name: 'fruit',
      url: '#',
    },
    {
      img: 'fruit.png',
      name: 'fruit',
      url: '#',
    },
    {
      img: 'fruit.png',
      name: 'fruit',
      url: '#',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
