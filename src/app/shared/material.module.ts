import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';


const MODULES = [
  MatButtonModule,
  MatChipsModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatGridListModule,
  MatDialogModule,
  MatSelectModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDialogModule
];
@NgModule({
  imports: MODULES,
  exports: MODULES
})

export class MaterialModule {}
