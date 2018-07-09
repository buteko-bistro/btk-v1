import { NgModule } from '@angular/core';

import { 
  MatButtonModule, 
  MatCheckboxModule,
  MatSliderModule,
  MatSidenavModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSliderModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSliderModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: []
})
export class MaterialModule { }
