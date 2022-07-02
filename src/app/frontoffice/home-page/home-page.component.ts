import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  advertising1 = {
    img: 'ads.jpg',
    message: 'Devenez un vendeur dès maintenant',
    url: '#',
    buttonText: 'Créer compte',
  };
  advertising2 = {
    img: 'ads2.jpg',
    message: 'Passer vos bientot vos pré-command',
    url: '#',
    buttonText: 'Boutique',
  };
  constructor() {}

  ngOnInit(): void {}
}
