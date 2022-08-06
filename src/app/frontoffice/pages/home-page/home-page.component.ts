import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { categoryModel } from '../../models/category.model';
import { ProductModel } from '../../models/product.model';
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

  products: ProductModel[] = [];
  categories: categoryModel[] = [];
  categoryChange: string = '';
  constructor(
    private productService: ProductsService,
    private categoriesService: CategoriesService
  ) {
    // this.productService.filterEvent.subscribe((data: string) => {
    //   this.categoryChange = data;
    // });
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: ProductModel[]) => {
      this.products = data;
      console.log(this.products);
    });

    this.categoriesService
      .getCategories()
      .subscribe((data: categoryModel[]) => {
        this.categories = data;
        console.log(this.categories);
        // console.log(`categories: ${this.categories}`);
      });

    this.categoryFilter(this.categoryChange);
  }

  categoryFilter(categoryLibelle: string) {
    let categoryProducts: ProductModel[] = [];
    this.products.forEach((product) => {
      product.categories.forEach((category) => {
        if (category.libelle === categoryLibelle) {
          categoryProducts.push(product);
        }
      });
      this.products = categoryProducts;
    });
  }
}
