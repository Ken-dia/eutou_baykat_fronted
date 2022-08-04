import { FrontOfficeRoutingModule } from './frontoffice-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategorySectionComponent } from './pages/home-page/category-section/category-section.component';
import { CategorySectionItemComponent } from './pages/home-page/category-section/category-section-item/category-section-item.component';
import { TestimonialSectionComponent } from './pages/home-page/testimonial-section/testimonial-section.component';
import { TestimonialComponent } from './pages/home-page/testimonial-section/testimonial/testimonial.component';
import { CategoryTableSectionComponent } from './pages/home-page/category-table-section/category-table-section.component';
import { FrontofficeComponent } from './frontoffice.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
// import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { sharedComponentsModule } from './shared-components/shared-component.module';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductSectionComponent } from './pages/home-page/product-section/product-section.component';
import { HeroComponent } from './pages/home-page/hero/hero.component';
import { FilterBtnsComponent } from './pages/home-page/filter-btns/filter-btns.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

@NgModule({
  declarations: [
    FrontofficeComponent,

    //Home page
    HomePageComponent,
    CategorySectionComponent,
    CategorySectionItemComponent,
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

    //
    NavbarComponent,
  ],
  exports: [
    CategorySectionComponent,
    CategorySectionItemComponent,
    CategoryTableSectionComponent,
    FilterBtnsComponent,
    ProductSectionComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    sharedComponentsModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    FrontOfficeRoutingModule,
  ],
})
export class FrontofficeModule {}
