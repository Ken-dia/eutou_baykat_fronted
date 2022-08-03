import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.scss']
})
export class ProduitDetailComponent implements OnInit {
  produit?: any;
  constructor(
    private produitService: ProduitService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.index(params['id']);
    });

  }

  index(id: any) {
    this.produitService.findById(id).subscribe(data => this.produit = data);
  }

}
