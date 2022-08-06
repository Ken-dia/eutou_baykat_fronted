import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  NgxGalleryAnimation,
  NgxGalleryImage,
  NgxGalleryOptions,
} from '@kolkov/ngx-gallery';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  product!: ProductModel;
  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];
  currentUser?: any;
  isAdmin: Boolean = false;
  isVendeur: Boolean = false;
  isAcheteur: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.index(params['id']);
    });
  }

  index(prodcutId: any) {
    this.productService
      .getProductByid(prodcutId)
      .subscribe((data: ProductModel) => {
        this.product = data;
        this.setGallery();

        console.log(this.product);
      });
  }

  getImages() {
    const imageUrls = [];
    for (let i = 0; i < this.product.images.length; i++) {
      imageUrls.push({
        small: this.product.images[i].url,
        medium: this.product.images[i].url,
        big: this.product.images[i].url,
      });
    }
    return imageUrls;
  }

  setGallery() {
    this.galleryOptions = [
      {
        width: '450px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
      },
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false,
      },
    ];

    this.galleryImages = this.getImages();
  }

  order(id: any) {
    // this.productService.actived(id).subscribe(data => {
    //   this.index(id);
    // })
  }
  addTofavourite(id: any) {
    // this.productService.disabled(id).subscribe((data) => {
    //   this.index(id);
    // });
  }
}
