import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontofficeComponent } from './frontoffice/frontoffice.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { CoreComponent } from './core/core.component';
import { SharedComponent } from './shared/shared.component';
import { LoginComponent } from './frontoffice/login/login.component';
import { RegisterComponent } from './frontoffice/register/register.component';
import { ProfileComponent } from './backoffice/profile/profile.component';
import { BoardAdminComponent } from './backoffice/board-admin/board-admin.component';
import { BoardUserComponent } from './backoffice/board-user/board-user.component';
import { authInterceptorProviders } from './core/_helpers/auth.interceptor';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

@NgModule({
  declarations: [
    AppComponent,
    FrontofficeComponent,
    BackofficeComponent,
    CoreComponent,
    SharedComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TypeaheadModule.forRoot(),
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
