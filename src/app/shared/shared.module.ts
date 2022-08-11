import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';


@NgModule({
  exports: [MaterialModule, ReactiveFormsModule,NgxGalleryModule],
  imports: [
    CommonModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    NgxGalleryModule
  ]
})
export class SharedModule {}
