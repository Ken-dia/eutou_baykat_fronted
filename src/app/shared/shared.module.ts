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
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';



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
    MaterialModule,
    ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ]
})
export class SharedModule { }
