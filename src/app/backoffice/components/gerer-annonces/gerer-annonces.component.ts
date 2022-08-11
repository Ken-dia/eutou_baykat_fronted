import { StorageService } from './../../../frontoffice/services/auth/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../services/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerer-annonces',
  templateUrl: './gerer-annonces.component.html',
  styleUrls: ['./gerer-annonces.component.scss']
})
export class GererAnnoncesComponent implements OnInit {
  produits = [];
  currentUser?: any;
  loading: Boolean = true;
  displayedColumns: string[] = ['libelle','description','categorie','created_at','status', 'actions'];
  constructor(
    private storageService: StorageService,
    private produitService: ProduitService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.index();
  }

  index() {
    this.loading = true;
    this.produitService.userProduits(this.currentUser.id).subscribe(data => {
      this.produits = data;
      this.loading = false
    }, err => this.loading = false);
  }
  view(id: any) {
    this.router.navigate(['dashboard/user/produit-detail', id]);
  }
  delete(id: any) {
    this.produitService.deleteOne(id).subscribe(data => this.index());
  }
  disabled(id: any) {
    this.produitService.disabled(id).subscribe(data => {
      this.index();
    })
  }

}
