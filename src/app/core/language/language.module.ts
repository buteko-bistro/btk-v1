import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    LanguageSelectorComponent,
  ],
  exports:[
    LanguageSelectorComponent, 
    
  ], 
  // providers: [
  //   LanguageService
  // ]
})
export class LanguageModule { }
