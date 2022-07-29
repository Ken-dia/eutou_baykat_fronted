import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FrontofficeComponent } from './frontoffice.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

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
      { path: 'category/:categoryID', component: CategoryPageComponent },
      { path: 'product/:productID', component: ProductPageComponent },

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
