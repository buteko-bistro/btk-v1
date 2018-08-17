import { Component, OnInit, Injectable } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { Observable, BehaviorSubject, merge, of, Subscription } from 'rxjs';
import { map } from '../../../../node_modules/rxjs/operators';
import { MatTreeFlatDataSource, MatTreeFlattener } from '../../../../node_modules/@angular/material';
import {  DRINKS_DATA } from '../../_data/drinks-data';
import { eDrinkTypes } from '../../_data/_data-models';
import { LanguageService } from '../../core/language/language.service';
import { ScreenService } from '../../core/screen/screen.service';
import { trigger, transition, query, style, animate, keyframes, stagger } from 'node_modules/@angular/animations';







@Component({
  selector: 'btk-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css'],
  providers: [],
  animations:[
    trigger('listAnimation', [
      transition('* <=> *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('125ms', [
          animate('700ms ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(-65%) translateY(20%) scale(0.3)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateX(-10%) translateY(15%) scale(0.80)', offset: 0.8 }),
            style({ opacity: 1, transform: 'translateX(0%) translateY(0%) scale(1)', offset: 1 }),
          ]))]), { optional: true }),
          query(':leave', animate('50ms', style({ opacity: 0 })), {
            optional: true
          })
      ])
    ]),

  ]

})
export class DrinksComponent implements OnInit {



  public isScreenTiny:boolean = false;


  allData = DRINKS_DATA;
  drinks = this.allData[4].list;

 
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


  switchDrinkList(index:number){
    this.drinks = this.allData[index].list;
    console.log("   switchDrinkList: ", index)
  }
  
  ngOnInit() {
  }


  ngOnDestroy() {
    this.subscription_changeLanguage.unsubscribe();
    this.subscription_screenBreakpoint.unsubscribe();
  }


}









