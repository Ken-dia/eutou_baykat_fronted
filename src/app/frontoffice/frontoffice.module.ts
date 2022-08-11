import { TopbarComponent } from './pages/shared-components/topbar/topbar.component';
import { FrontOfficeRoutingModule } from './frontoffice-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TestimonialSectionComponent } from './pages/home-page/testimonial-section/testimonial-section.component';
import { TestimonialComponent } from './pages/home-page/testimonial-section/testimonial/testimonial.component';
import { CategoryTableSectionComponent } from './pages/home-page/category-table-section/category-table-section.component';
import { FrontofficeComponent } from './frontoffice.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
// import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductSectionComponent } from './pages/home-page/product-section/product-section.component';
import { HeroComponent } from './pages/home-page/hero/hero.component';
import { FilterBtnsComponent } from './pages/home-page/filter-btns/filter-btns.component';
import { NavbarComponent } from './pages/shared-components/navbar/navbar.component';
import { PartnerSectionComponent } from './pages/shared-components/partner-section/partner-section.component';
import { FooterComponent } from './pages/shared-components/footer/footer.component';
import { AdvertisingComponent } from './pages/shared-components/advertising/advertising.component';
import { CategoryTableItemComponent } from './pages/shared-components/category-table-item/category-table-item.component';
import { ProductItemComponent } from './pages/shared-components/product-item/product-item.component';
import { BreadcrumbComponent } from './pages/shared-components/breadcrumb/breadcrumb.component';
import { SharedModule } from '../shared/shared.module';
import { FavorisComponent } from './pages/favoris/favoris.component';

@NgModule({
  declarations: [
    FrontofficeComponent,

    //Home page
    HomePageComponent,
    TestimonialSectionComponent,
    TestimonialComponent,
    CategoryTableSectionComponent,
    ProductSectionComponent,
    FilterBtnsComponent,

    //category-page
    CategoryPageComponent,

    //login page
    LoginComponent,

    //Register page
    RegisterComponent,

    //Product page
    ProductPageComponent,
    HeroComponent,

    //shared-compoent
    PartnerSectionComponent,
    FooterComponent,
    TopbarComponent,
    AdvertisingComponent,
    CategoryTableItemComponent,
    ProductItemComponent,
    BreadcrumbComponent,
    NavbarComponent,
    FavorisComponent,
  ],
  exports: [
    CategoryTableSectionComponent,
    FilterBtnsComponent,
    ProductSectionComponent,
    PartnerSectionComponent,
    FooterComponent,
    TopbarComponent,
    AdvertisingComponent,
    CategoryTableItemComponent,
    ProductItemComponent,
    BreadcrumbComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    FrontOfficeRoutingModule,
    SharedModule,
  ],
})
export class FrontofficeModule {}
