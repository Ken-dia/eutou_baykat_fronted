import { NgModule } from '@angular/core';
import { BackofficeComponent } from './backoffice.component';
import { CommonModule } from '@angular/common';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RoleComponent } from './components/role/role.component';
import { SharedModule } from '../shared/shared.module';
import { BackOfficeRoutingModule } from './backoffice-routing.module';



@NgModule({
  declarations: [
    BackofficeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    ProfileComponent,
    RoleComponent
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    SharedModule
  ]
})
export class BackofficeModule { }
