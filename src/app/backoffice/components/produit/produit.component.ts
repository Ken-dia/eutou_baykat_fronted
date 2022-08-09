import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  displayedColumns: string[] = ['libelle','vendeur','categorie','created_at','status', 'view'];

  produits = [];
  loading: Boolean = true;
  constructor(private produitService: ProduitService, private router: Router) { }

  ngOnInit(): void {
    this.index();
  }
  index() {
    this.produitService.getAll().subscribe( data => {
      this.produits = data;
      this.loading = false;
    }, err => this.loading = false
    );
  }
  activedProduct(produit: any) {

  }
  view(id: any) {
    this.router.navigate([`dashboard/admin/produit-detail/${id}`])
  }

}
