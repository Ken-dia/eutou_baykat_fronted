import { RegisterComponent } from './frontoffice/register/register.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontofficeComponent } from './frontoffice/frontoffice.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { CoreComponent } from './core/core.component';
import { HomePageComponent } from './frontoffice/home-page/home-page.component';
import { CategorySectionComponent } from './frontoffice/home-page/category-section/category-section.component';
import { CategorySectionItemComponent } from './frontoffice/home-page/category-section/category-section-item/category-section-item.component';
import { ProductSectionLatestComponent } from './frontoffice/home-page/product-section-latest/product-section-latest.component';
import { ProductItemComponent } from './shared/product-item/product-item.component';
import { AdvertisingComponent } from './shared/advertising/advertising.component';
import { ProductSectionLocalityComponent } from './frontoffice/home-page/product-section-locality/product-section-locality.component';
import { TestimonialSectionComponent } from './frontoffice/home-page/testimonial-section/testimonial-section.component';
import { TestimonialComponent } from './frontoffice/home-page/testimonial-section/testimonial/testimonial.component';
import { CategoryTableSectionComponent } from './frontoffice/home-page/category-table-section/category-table-section.component';
import { CategoryTableItemComponent } from './shared/category-table-item/category-table-item.component';
import { PartnerSectionComponent } from './shared/partner-section/partner-section.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './frontoffice/login/login.component';
import { ProfileComponent } from './backoffice/profile/profile.component';
import { BoardUserComponent } from './backoffice/board-user/board-user.component';
import { authInterceptorProviders } from './core/_helpers/auth.interceptor';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BoardAdminComponent } from './backoffice/board-admin/board-admin.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TopbarComponent } from './shared/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontofficeComponent,
    CoreComponent,
    NavbarComponent,
    HomePageComponent,
    CategorySectionComponent,
    CategorySectionItemComponent,
    ProductSectionLatestComponent,
    ProductItemComponent,
    AdvertisingComponent,
    ProductSectionLocalityComponent,
    TestimonialSectionComponent,
    TestimonialComponent,
    CategoryTableSectionComponent,
    CategoryTableItemComponent,
    PartnerSectionComponent,
    FooterComponent,
    LoginComponent,
    BackofficeComponent,
    RegisterComponent,
    BoardAdminComponent,
    BoardUserComponent,
    ProfileComponent,
    TopbarComponent

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
export class AppModule {}
