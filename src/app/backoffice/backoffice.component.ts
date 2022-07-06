import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../frontoffice/services/auth/token-storage.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {
  currentUser: any;
  title = 'eutou_baykat_frontend';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  selectedColor = "13EB28";
  menus?: any;
  menuAdmin = [
    {
    icon : 'dashboard',
    name: 'Dashboard',
    link: '/dashboard/admin/stats'
    },
    {
      icon : 'group',
      name: 'Utilisateurs',
      link: '/dashboard/admin/users'
    },
    {
      icon : 'manage_accounts',
      name: 'Roles',
      link: '/dashboard/admin/roles'
    },
    {
      icon : 'label',
      name: 'Catégories',
      link: '/dashboard/admin/categories'
    },
    {
      icon : 'bookmarks',
      name: 'Produits',
      link: '/dashboard/admin/produits'
    }
  ];
  menuUser = [
    {
    icon : 'dashboard',
    name: 'Dashboard',
    link: '/dashboard/user/stats'
    },
    {
      icon : 'campaign',
      name: 'Créer une annonce',
      link: '/dashboard/user/creer-annonce'
    },
    {
      icon : 'manage_history',
      name: 'Gérer mes annonces',
      link: '/dashboard/user/mes-annonces'
    },
    {
      icon : 'favorite',
      name: 'Mes favoris',
      link: '/dashboard/user/favoris'
    },
    /* {
      icon : 'bookmarks',
      name: 'Produits',
      link: '/dashboard/admin/produits'
    } */
  ]
  constructor(private token: TokenStorageService, private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      console.log(this.roles);
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_ACHETEUR');
      this.username = user.username;
      this.showAdminBoard ? this.menus = this.menuAdmin : this.menus = this.menuUser;
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['login']);
  }
}
