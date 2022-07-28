import { StorageService } from './../../../frontoffice/services/auth/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-gerer-annonces',
  templateUrl: './gerer-annonces.component.html',
  styleUrls: ['./gerer-annonces.component.scss']
})
export class GererAnnoncesComponent implements OnInit {
  produits = [];
  currentUser?: any;
  displayedColumns: string[] = ['libelle','description','categorie','created_at','status', 'actions'];
  constructor( private storageService: StorageService, private produitService: ProduitService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.index();
  }

  index() {
    this.produitService.userProduits(this.currentUser.id).subscribe(data => this.produits = data);
  }
}
