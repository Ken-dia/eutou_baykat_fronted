import { UserService } from './../../../frontoffice/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user_id?: string;
  produits = [];
  user? : any;
  loading: Boolean = true;
  displayedColumns: string[] = ['libelle','created_at','status', 'view'];
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private produitService: ProduitService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.user_id = params['id'];
    });
    this.show();
    this.getProduits();
  }

  async show() {
    this.userService.show(this.user_id).subscribe(data =>{
      this.user = data
    });
  }

  getProduits() {
    this.produitService.userProduits(this.user_id).subscribe(data => {
      this.produits = data;
      this.loading = false;
    }, err => this.loading = false
    );
  }
  isActive(user: any) {
    this.userService.isActive(user._id, {value : !user.enabled}).subscribe( data => this.show());
  }
  activedProduct(produit: any) {

  }
  view(id: any) {
    this.router.navigate([`dashboard/admin/produit-detail/${id}`])
  }

}
