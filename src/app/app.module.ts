import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontofficeComponent } from './frontoffice/frontoffice.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { CoreComponent } from './core/core.component';
import { SharedComponent } from './shared/shared.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontofficeComponent,
    BackofficeComponent,
    CoreComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
