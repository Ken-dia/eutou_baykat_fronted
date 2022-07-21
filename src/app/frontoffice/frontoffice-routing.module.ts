import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from '../backoffice/backoffice.component';
import { ProfileComponent } from '../backoffice/components/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FrontofficeComponent } from './frontoffice.component';

const routes: Routes = [
  {
    path: '',
    component: FrontofficeComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      { path: 'home', component: HomePageComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontOfficeRoutingModule {}
