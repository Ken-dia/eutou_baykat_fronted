import { BoardUserComponent } from './components/board-user/board-user.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', component: BackofficeComponent,
    children: [
      {
        path: "",
        redirectTo: "/dashboard/profile",
        pathMatch: "full"
      },
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "admin",
        component: BoardAdminComponent
      },
      {
        path: "user",
        component: BoardUserComponent
      }

    ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
