import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../frontoffice/services/auth/auth.service';
import { StorageService } from '../frontoffice/services/auth/token-storage.service';

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
  tokenStage?: any;
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
  constructor(private storageService: StorageService, private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = user.username;
      this.menus = this.showAdminBoard ? this.menuAdmin : this.menuUser;
    }
  }
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        this.router.navigate(['/login'])
      },
      error: err => {
        console.log(err);
      }
    });

    //window.location.reload();
  }

}
