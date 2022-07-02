import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontofficeComponent } from './frontoffice/frontoffice.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { CoreComponent } from './core/core.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
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

@NgModule({
  declarations: [
    AppComponent,
    FrontofficeComponent,
    BackofficeComponent,
    CoreComponent,
    TopbarComponent,
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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
