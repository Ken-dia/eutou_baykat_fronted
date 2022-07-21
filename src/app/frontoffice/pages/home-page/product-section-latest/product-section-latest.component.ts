import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-section-latest',
  templateUrl: './product-section-latest.component.html',
  styleUrls: ['./product-section-latest.component.scss'],
})
export class ProductSectionLatestComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
