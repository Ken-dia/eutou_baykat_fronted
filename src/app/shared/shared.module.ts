import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeComponent } from '../backoffice/backoffice.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  exports: [MaterialModule, ReactiveFormsModule],
  imports: [
    CommonModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
  ],
})
export class SharedModule {}
