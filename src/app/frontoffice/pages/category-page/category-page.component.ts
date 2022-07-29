import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit {
  products = [
    {
      img: 'citrons.png',
      name: 'Citrons frais',
      locality: 'de la vallée du fleuve',
      quantities: [
        {
          price: 525,
          interval: '100kg - 200kg',
        },
        {
          price: 525,
          interval: '200kg - 500kg',
        },
        {
          price: 525,
          interval: '500kg - 1000kg',
        },
      ],
    },
    {
      img: 'citrons.png',
      name: 'Citrons frais',
      locality: 'de la vallée du fleuve',
      quantities: [
        {
          price: 525,
          interval: '100kg - 200kg',
        },
        {
          price: 525,
          interval: '200kg - 500kg',
        },
        {
          price: 525,
          interval: '500kg - 1000kg',
        },
      ],
    },
    {
      img: 'citrons.png',
      name: 'Citrons frais',
      locality: 'de la vallée du fleuve',
      quantities: [
        {
          price: 525,
          interval: '100kg - 200kg',
        },
        {
          price: 525,
          interval: '200kg - 500kg',
        },
        {
          price: 525,
          interval: '500kg - 1000kg',
        },
      ],
    },
    {
      img: 'citrons.png',
      name: 'Citrons frais',
      locality: 'de la vallée du fleuve',
      quantities: [
        {
          price: 525,
          interval: '100kg - 200kg',
        },
        {
          price: 525,
          interval: '200kg - 500kg',
        },
        {
          price: 525,
          interval: '500kg - 1000kg',
        },
      ],
    },
    {
      img: 'citrons.png',
      name: 'Citrons frais',
      locality: 'de la vallée du fleuve',
      quantities: [
        {
          price: 525,
          interval: '100kg - 200kg',
        },
        {
          price: 525,
          interval: '200kg - 500kg',
        },
        {
          price: 525,
          interval: '500kg - 1000kg',
        },
      ],
    },
    {
      img: 'citrons.png',
      name: 'Citrons frais',
      locality: 'de la vallée du fleuve',
      quantities: [
        {
          price: 525,
          interval: '100kg - 200kg',
        },
        {
          price: 525,
          interval: '200kg - 500kg',
        },
        {
          price: 525,
          interval: '500kg - 1000kg',
        },
      ],
    },
    {
      img: 'citrons.png',
      name: 'Citrons frais',
      locality: 'de la vallée du fleuve',
      quantities: [
        {
          price: 525,
          interval: '100kg - 200kg',
        },
        {
          price: 525,
          interval: '200kg - 500kg',
        },
        {
          price: 525,
          interval: '500kg - 1000kg',
        },
      ],
    },
  ];

  Allcategories = [
    [
      {
        url: '#',
        name: 'Légumes',
      },
      {
        url: '#',
        name: 'Légumes',
      },
      {
        url: '#',
        name: 'Légumes',
      },
      {
        url: '#',
        name: 'Légumes',
      },
      {
        url: '#',
        name: 'Légumes',
      },
      {
        url: '#',
        name: 'Légumes',
      },
      {
        url: '#',
        name: 'Légumes',
      },
      {
        url: '#',
        name: 'Légumes',
      },
    ],
  ];

  constructor() {}

  ngOnInit(): void {}
}
