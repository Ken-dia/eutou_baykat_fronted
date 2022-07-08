import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

const MODULES = [
  MatButtonModule,
  MatChipsModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatListModule

];
@NgModule({
  imports: MODULES,
  exports: MODULES
})

export class MaterialModule {}
