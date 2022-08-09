import { StorageService } from './../../../frontoffice/services/auth/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../../services/produit.service';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.scss']
})
export class ProduitDetailComponent implements OnInit {
  produit?: any;
  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];
  currentUser?: any;
  loading: Boolean = true;
  isError: Boolean = false;
  isAdmin: Boolean = false;
  isVendeur: Boolean = false;
  isAcheteur: Boolean = false;
  constructor(
    private produitService: ProduitService,
    private activatedRoute: ActivatedRoute,
    private storageService: StorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.isAdmin = this.currentUser.roles.includes('ROLE_ADMIN');
    this.isVendeur = this.currentUser.roles.includes('ROLE_VENDEUR');
    this.activatedRoute.params.subscribe(params => {
      this.index(params['id']);
    });
  }

  index(id: any) {
    this.isError = false;
    this.loading = true;
    this.produitService.findById(id).subscribe(data => {
      this.produit = data;
      this.setGallery();
      this.loading = false;
    }, error => {
      console.log(error);
      this.isError = true;
      this.loading = false;
    }
    );
  }
  getImages(){
    const imageUrls= []
    for(let i = 0;i<this.produit.images.length;i++){
      imageUrls.push({
        small:this.produit.images[i].url,
        medium:this.produit.images[i].url,
        big:this.produit.images[i].url
      })
    }
    return imageUrls;
  }

  setGallery() {
    this.galleryOptions = [
      {
        width: '450px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = this.getImages()
  }
  valider(id: any) {
    this.produitService.actived(id).subscribe(data => {
      this.index(id);
    })
  }
  rejeter(id: any) {
    this.produitService.disabled(id).subscribe(data => {
      this.index(id);
    })
  }

}
