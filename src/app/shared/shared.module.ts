import { CategoryTableItemComponent } from './components/category-table-item/category-table-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeComponent } from '../backoffice/backoffice.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PartnerSectionComponent } from './components/partner-section/partner-section.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { AdvertisingComponent } from './components/advertising/advertising.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    NavbarComponent,
    PartnerSectionComponent,
    FooterComponent,
    TopbarComponent,
    AdvertisingComponent,
    CategoryTableItemComponent,
    ProductItemComponent
  ],
  exports: [
    NavbarComponent,
    PartnerSectionComponent,
    FooterComponent,
    TopbarComponent,
    AdvertisingComponent,
    CategoryTableItemComponent,
    ProductItemComponent,
    MaterialModule
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
