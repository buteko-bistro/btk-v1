import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgxPopperModule} from 'ngx-popper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularResizedEventModule } from 'angular-resize-event';


import { MaterialModule } from './core/material/material.module';
import { LanguageModule } from './core/language/language.module';
import { NavigatorComponent } from './navigator/navigator.component';
import { FoodsComponent } from './views/foods/foods.component';
import { DrinksComponent } from './views/drinks/drinks.component';
import { NewsComponent } from './views/news/news.component';
import { ContactComponent } from './views/contact/contact.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { UsComponent } from './views/us/us.component';
import { CurrencyHufPipe } from './core/pipes/currency-huf.pipe';
import { DrinkCategoryNamePipe } from './core/pipes/drink-category-name.pipe';
import { ListComponent } from './core/templates/list/list.component';
import { TableComponent } from './core/templates/table/table.component';
import { CardComponent } from './core/templates/card/card.component';
import { ImageComponent } from './core/templates/image/image.component';
import { GridComponent } from './core/templates/grid/grid.component';
import { CardFrameComponent } from './core/templates/card-frame/card-frame.component';



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
    DrinkCategoryNamePipe,
    ListComponent,
    TableComponent,
    CardComponent,
    ImageComponent,
    GridComponent,
    CardFrameComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    LanguageModule,
    NgxPopperModule,
    AngularResizedEventModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
