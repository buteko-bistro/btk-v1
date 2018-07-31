import { Component, OnInit, Injectable } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { Observable, BehaviorSubject, merge, of, Subscription } from 'rxjs';
import { map } from '../../../../node_modules/rxjs/operators';
import { MatTreeFlatDataSource, MatTreeFlattener } from '../../../../node_modules/@angular/material';
import { DRINKS_DATA } from '../../_data/drinks-data';
import { eDrinkTypes } from '../../_data/_data-models';
import { LanguageService } from '../../core/language/language.service';
import { ScreenService } from '../../core/screen/screen.service';







@Component({
  selector: 'btk-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css'],
  providers: []

})
export class DrinksComponent implements OnInit {



  private isScreenTiny:boolean = false;

  drinks = DRINKS_DATA;

 
  lang:string; 


  private subscription_changeLanguage :Subscription;
  private subscription_screenBreakpoint :Subscription;


  constructor(    
    private languageService:LanguageService,
    private screenService:ScreenService
  ) {
    this.lang = this.languageService.getCurrentLanguageID();

    this.subscription_changeLanguage = this.languageService.getChangeLanguage().subscribe(
      lang => { 
        this.lang = lang.id; 
      }
    );

    
    this.subscription_screenBreakpoint = this.screenService.screenBreakpointTiny().subscribe({
      next: (isTiny)=>{
        this.isScreenTiny = isTiny;

      }
    });

    
    // this.subscription_changeLanguage = this.languageService.getChangeLanguage().subscribe(
    //   lang => { 
    //     this.lang = lang.id; 
    //   }
    // );

    this.screenService.triggerScreenCheck();

  }

  
  ngOnInit() {
  }


  ngOnDestroy() {
    this.subscription_changeLanguage.unsubscribe();
    this.subscription_screenBreakpoint.unsubscribe();
  }


}









