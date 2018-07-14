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
    MatTableModule
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
    MatTableModule
  ],
  declarations: []
})
export class MaterialModule { }
