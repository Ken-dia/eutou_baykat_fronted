import { FrontOfficeRoutingModule } from './frontoffice-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CategorySectionComponent } from './components/category-section/category-section.component';
import { CategorySectionItemComponent } from './components/category-section-item/category-section-item.component';
import { ProductSectionLatestComponent } from './components/product-section-latest/product-section-latest.component';
import { ProductSectionLocalityComponent } from './components/product-section-locality/product-section-locality.component';
import { TestimonialSectionComponent } from './components/testimonial-section/testimonial-section.component';
import { TestimonialComponent } from './components/testimonial-section/testimonial/testimonial.component';
import { CategoryTableSectionComponent } from './components/category-table-section/category-table-section.component';
import { FrontofficeComponent } from './frontoffice.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';


@NgModule({
  declarations: [
    FrontofficeComponent,
    HomePageComponent,
    CategorySectionComponent,
    CategorySectionItemComponent,
    ProductSectionLatestComponent,
    ProductSectionLocalityComponent,
    TestimonialSectionComponent,
    TestimonialComponent,
    CategoryTableSectionComponent,
    RegisterComponent,
    LoginComponent,
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
    SharedModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    FrontOfficeRoutingModule
  ]
})
export class FrontofficeModule { }
