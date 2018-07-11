import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './core/material/material.module';
import { LanguageModule } from './core/language/language.module';
import { NavigatorComponent } from './navigator/navigator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LanguageService } from './core/language/language.service';



@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    LanguageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
