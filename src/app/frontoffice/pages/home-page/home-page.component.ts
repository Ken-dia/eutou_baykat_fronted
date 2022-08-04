import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories/categories.service';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  advertising1 = {
    img: 'ads.jpg',
    message: 'Devenez un vendeur dès maintenant',
    url: '/register',
    buttonText: 'Créer compte',
  };
  advertising2 = {
    img: 'ads2.jpg',
    message: 'Passer vos bientot vos pré-command',
    url: '#',
    buttonText: 'Boutique',
  };

  products = [];
  categories = [];
  constructor(
    private productService: ProductsService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });

    this.categoriesService.getCategories().subscribe((data) => {
      this.categories = data.map((category: any) => {
        return category.libelle;
      });
      console.log(`categories: ${this.categories}`);
    });
  }
}
