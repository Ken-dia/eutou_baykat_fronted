import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { categoryModel } from '../../models/category.model';
import { ProductModel } from '../../models/product.model';
import { CategoriesService } from '../../services/categories/categories.service';
import { ProductsService } from '../../services/products/products.service';
import { RegionService } from '../../services/region/region.service';

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

  products: ProductModel[] = [];
  productsTemp: ProductModel[] = [];
  regions: string[] = [];
  categories: categoryModel[] = [];
  loading: boolean = true;
  constructor(
    private productService: ProductsService,
    private categoriesService: CategoriesService,
    private regionService: RegionService
  ) {
    // this.productService.filterEvent.subscribe((data: string) => {
    //   this.categoryChange = data;
    // });
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: ProductModel[]) => {
      this.products = data;
      this.productsTemp = data;
      this.loading = false;
      console.log(this.products);
    });

    this.regionService.index().subscribe((data: string[]) => {
      this.regions = data;
      console.log(this.regions);
      // console.log(`categories: ${this.categories}`);
    });

    this.categoriesService
      .getCategories()
      .subscribe((data: categoryModel[]) => {
        this.categories = data;
        console.log(this.categories);
        // console.log(`categories: ${this.categories}`);
      });
  }

  onFilter(region: string) {
    console.log(region);
    const tempProducts = this.productsTemp.filter((product) => {
      return product.user.region === region;
    });
    this.products = tempProducts;
    console.log(this.products);
  }
}
