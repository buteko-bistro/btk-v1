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
  MatSelectModule,
  MatToolbarModule,
  MatTreeModule,
  MatExpansionModule,
  MatTableModule,
  MatButtonToggleModule,
  MatBadgeModule
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
    MatSelectModule,
    MatToolbarModule,
    MatTreeModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatTableModule,
    MatBadgeModule
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
    MatSelectModule,
    MatToolbarModule,
    MatTreeModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatTableModule,
    MatBadgeModule
  ],
  declarations: []
})
export class MaterialModule { }
