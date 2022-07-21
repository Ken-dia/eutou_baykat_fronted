import { FrontOfficeRoutingModule } from './frontoffice-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategorySectionComponent } from './pages/home-page/category-section/category-section.component';
import { CategorySectionItemComponent } from './pages/home-page/category-section/category-section-item/category-section-item.component';
import { ProductSectionLatestComponent } from './pages/home-page/product-section-latest/product-section-latest.component';
import { ProductSectionLocalityComponent } from './pages/home-page/product-section-locality/product-section-locality.component';
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

@NgModule({
  declarations: [
    FrontofficeComponent,

    //Home page
    HomePageComponent,
    CategorySectionComponent,
    CategorySectionItemComponent,
    ProductSectionLatestComponent,
    ProductSectionLocalityComponent,
    TestimonialSectionComponent,
    TestimonialComponent,
    CategoryTableSectionComponent,

    //login page
    LoginComponent,

    //Register page
    RegisterComponent,
  ],
  exports: [
    CategorySectionComponent,
    CategorySectionItemComponent,
    ProductSectionLatestComponent,
    ProductSectionLocalityComponent,
    CategoryTableSectionComponent,
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
