import { NgModule } from '@angular/core';
import { BackofficeComponent } from './backoffice.component';
import { CommonModule } from '@angular/common';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RoleComponent } from './components/role/role.component';
import { SharedModule } from '../shared/shared.module';
import { BackOfficeRoutingModule } from './backoffice-routing.module';
import { UsersComponent } from './components/users/users.component';
import { ProduitComponent } from './components/produit/produit.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { StatsAdminComponent } from './components/stats-admin/stats-admin.component';
import { CreerAnnonceComponent } from './components/creer-annonce/creer-annonce.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ParametreComponent } from './components/parametre/parametre.component';
import { httpInterceptorProviders } from '../core/_helpers/auth.interceptor';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { ProduitDetailComponent } from './components/produit-detail/produit-detail.component';
import { GererAnnoncesComponent } from './components/gerer-annonces/gerer-annonces.component';
import { FavorisComponent } from './components/favoris/favoris.component';
import { DashboardUserComponent } from './components/dashboard-user/dashboard-user.component';



@NgModule({
  declarations: [
    BackofficeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    ProfileComponent,
    RoleComponent,
    UsersComponent,
    ProduitComponent,
    CategorieComponent,
    StatsAdminComponent,
    CreerAnnonceComponent,
    ConfirmDialogComponent,
    ParametreComponent,
    UserDetailComponent,
    ProduitDetailComponent,
    GererAnnoncesComponent,
    FavorisComponent,
    DashboardUserComponent
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    SharedModule
  ],
/*   providers: [httpInterceptorProviders],
 */
})
export class BackofficeModule { }
