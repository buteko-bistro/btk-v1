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
import { LanguageService } from './core/language/language.service';
import { FoodsComponent } from './views/foods/foods.component';
import { DrinksComponent } from './views/drinks/drinks.component';
import { NewsComponent } from './views/news/news.component';
import { ContactComponent } from './views/contact/contact.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { UsComponent } from './views/us/us.component';
import { CurrencyHufPipe } from './core/pipes/currency-huf.pipe';
import { DrinkCategoryNamePipe } from './core/pipes/drink-category-name.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    FoodsComponent,
    DrinksComponent,
    NewsComponent,
    ContactComponent,
    GalleryComponent,
    UsComponent,
    CurrencyHufPipe,
    DrinkCategoryNamePipe
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
