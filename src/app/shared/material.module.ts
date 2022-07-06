import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';


const MODULES = [
  MatButtonModule,
  MatChipsModule
];
@NgModule({
  imports: MODULES,
  exports: MODULES
})

export class MaterialModule {}
