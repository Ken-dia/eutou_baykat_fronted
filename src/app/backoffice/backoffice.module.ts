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
import { ParametreComponent } from './components/parametre/parametre.component';



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
    ParametreComponent
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    SharedModule
  ],
})
export class BackofficeModule { }
