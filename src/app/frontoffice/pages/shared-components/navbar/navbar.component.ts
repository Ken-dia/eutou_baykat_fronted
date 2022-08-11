import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/frontoffice/services/auth/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menuIcon: boolean = false;
  constructor(private router: Router, private storageService: StorageService) {}
  currentUser?: any ;
  isLoggedIn = false;
  isAdmin = false;
  isVendeur = false;
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
  ];
  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if(this.isLoggedIn) {
      this.currentUser = this.storageService.getUser();
      this.isAdmin = this.currentUser.roles.includes("ROLE_ADMIN");
      this.menus = this.isAdmin ? this.menuAdmin : this.menuUser;

    }
  }
  login() {
    this.router.navigate(['login']);
  }

  toggle() {
    this.menuIcon = !this.menuIcon;
  }
  goTo(link: string) {
    this.router.navigate([link]);
  }
}
