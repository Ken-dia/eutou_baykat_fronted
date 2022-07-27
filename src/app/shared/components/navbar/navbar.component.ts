import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navbarLinks = [
    {
      name: 'Acceuil',
      url: '#',
    },
    {
      name: 'Catégories',
      url: '#',
    },
    {
      name: 'A propos',
      url: '#',
    },
    {
      name: 'Contact',
      url: '#',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
