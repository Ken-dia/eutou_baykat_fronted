import { BoardUserComponent } from './components/board-user/board-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersComponent } from './components/users/users.component';
import { RoleComponent } from './components/role/role.component';
import { ProduitComponent } from './components/produit/produit.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { StatsAdminComponent } from './components/stats-admin/stats-admin.component';
import { CreerAnnonceComponent } from './components/creer-annonce/creer-annonce.component';
import { ParametreComponent } from './components/parametre/parametre.component';

const routes: Routes = [
  { path: '', component: BackofficeComponent,
    children: [
      {
        path: "",
        redirectTo: "profile",
        pathMatch: "full"
      },
      {
        path: 'parametre',
        component: ParametreComponent
      },

      {
        path: "admin",
        children: [
          {
            path: "profile",
            component: ProfileComponent
          },
          {
            path: "users",
            component: UsersComponent
          },
          {
            path: "roles",
            component: RoleComponent
          },
          {
            path: "produits",
            component: ProduitComponent
          },
          {
            path: "categories",
            component: CategorieComponent
          },
          {
            path: 'stats',
            component: StatsAdminComponent
          },
          {
            path: 'parametre',
            component: ParametreComponent
          },
          {
            path: "",
            redirectTo: "profile",
            pathMatch: "full"
          }
        ]
      },
      {
        path: "profile",
        component: ProfileComponent
      },
       {
        path: "user",
        children: [
          {
            path: "profile",
            component: ProfileComponent
          },
          {
            path: "creer-annonce",
            component: CreerAnnonceComponent
          },
          {
            path: "mes-annonces",
            component: ProfileComponent
          },
          {
            path: "favoris",
            component: ProfileComponent
          },
          {
            path: 'parametre',
            component: ParametreComponent
          },
          {
            path: "stats",
            component: ProfileComponent
          },
          {
            path: "",
            redirectTo: "profile",
            pathMatch: "full"
          }
        ]
      }

    ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
