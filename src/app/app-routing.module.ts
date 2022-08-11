import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import {} from '@app/c'

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./frontoffice/frontoffice.module').then(
        (mod) => mod.FrontofficeModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./backoffice/backoffice.module').then(
        (mod) => mod.BackofficeModule
      ),
  },
  /* {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  }, */
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
