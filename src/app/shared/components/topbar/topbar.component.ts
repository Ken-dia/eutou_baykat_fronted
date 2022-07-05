import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  title: string = 'Welcome to our store!';
  number: string = '+221 78 546 21 59';
  socialLinks = [
    {
      name: 'facebook',
      url: 'https://www.facebook.com',
      iconClass: 'fa-brands fa-facebook',
    },
    {
      name: 'instagram',
      url: 'https://instagram.com',
      iconClass: 'fa-brands fa-instagram',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
