import { Component, OnInit, Injectable } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { Observable, BehaviorSubject, merge, of, Subscription } from 'rxjs';
import { map } from '../../../../node_modules/rxjs/operators';
import { MatTreeFlatDataSource, MatTreeFlattener } from '../../../../node_modules/@angular/material';
import { DRINKS_DATA } from '../../data/drinks-data';
import { eDrinkTypes } from '../../data/_data-models';
import { LanguageService } from '../../core/language/language.service';







@Component({
  selector: 'btk-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css'],
  providers: []

})
export class DrinksComponent implements OnInit {



  drinks = DRINKS_DATA;
  displayedColumns: string[] = [ 'name', '0.3L', '0.5L' ];

 
  lang:string = 'hun'; 


  private subscription_changeLanguage :Subscription;


  constructor(    
    private languageService:LanguageService
  ) {
    this.lang = this.languageService.getCurrentLanguageID();
    console.log("lang 1", this.lang) 

    this.subscription_changeLanguage = this.languageService.getChangeLanguage().subscribe(
      lang => { 
        this.lang = lang.id; 
        console.log("lang", this.lang) 
      }
    );

    console.log(this.drinks)
  }

  
  ngOnInit() {
  }


  ngOnDestroy() {
    this.subscription_changeLanguage.unsubscribe();
  }


}









