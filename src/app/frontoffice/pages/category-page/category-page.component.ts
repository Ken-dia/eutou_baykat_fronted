import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { categoryModel } from '../../models/category.model';
import { ProductModel } from '../../models/product.model';
import { CategoriesService } from '../../services/categories/categories.service';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit {
  loading: boolean = true;
  products!: ProductModel[];
  Allcategories!: categoryModel[];

  constructor(
    private productservice: ProductsService,
    private categoriesService: CategoriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categoriesService
      .getCategories()
      .subscribe((data: categoryModel[]) => {
        this.Allcategories = data;
        console.log(this.Allcategories);
      });

    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.categoryFilter(params['id']);
    });
  }

  categoryFilter(categoryID: string) {
    this.loading = true;
    this.productservice.getProducts().subscribe((data: ProductModel[]) => {
      this.products = data;
      console.log(this.products);
      let categoryProducts: ProductModel[] = [];
      this.products.forEach((product) => {
        product.categories.forEach((category) => {
          if (categoryID === category._id) {
            categoryProducts.push(product);
          }
        });
        this.products = categoryProducts;
        this.loading = false;
      });
    });
  }
}
