import { NgModule } from '@angular/core';
import { AdvertisingComponent } from './advertising/advertising.component';
import { CategoryTableItemComponent } from './category-table-item/category-table-item.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PartnerSectionComponent } from './partner-section/partner-section.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    PartnerSectionComponent,
    FooterComponent,
    TopbarComponent,
    AdvertisingComponent,
    CategoryTableItemComponent,
    ProductItemComponent,
  ],
  exports: [
    NavbarComponent,
    PartnerSectionComponent,
    FooterComponent,
    TopbarComponent,
    AdvertisingComponent,
    CategoryTableItemComponent,
    ProductItemComponent,
  ],
})
export class sharedComponentsModule {}
