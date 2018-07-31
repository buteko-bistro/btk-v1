import { Component, OnInit } from '@angular/core';
import { DRINKS_DATA } from 'src/app/_data/drinks-data';
import { LanguageService } from '../../core/language/language.service';
import { ScreenService } from '../../core/screen/screen.service';
import { Subscription } from '../../../../node_modules/rxjs';
import { Card, CardDeck } from '../../_data/_data-models';

@Component({
  selector: 'btk-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  private isScreenTiny:boolean = false;

  foods = DRINKS_DATA;
  foodsGroup = this.foods[3]
  foodsItem  = this.foodsGroup.list[4]

  cards: Card[] = [];

  cardDeck:CardDeck;


  lang:string; 

  private subscription_changeLanguage :Subscription;
  private subscription_screenBreakpoint :Subscription;


  constructor(
    private languageService:LanguageService,
    private screenService:ScreenService
  ) { 
    this.cardDeck = new CardDeck("foods-", this.foodsGroup.columns);


    this.foodsGroup.list.forEach((data, i)=> {this.cardDeck.pushCard(i,data)})

    this.foodsGroup.list.forEach((data, i)=> {this.cardDeck.pushCard(i+30,data)})
    this.foodsGroup.list.forEach((data, i)=> {this.cardDeck.pushCard(i+60,data)})
    this.foodsGroup.list.forEach((data, i)=> {this.cardDeck.pushCard(i+90,data)})


    console.log("FOODS -> ",this.cards, this.foods, this.foodsGroup, this.foodsItem)


    this.lang = this.languageService.getCurrentLanguageID();

    this.subscription_changeLanguage = this.languageService.getChangeLanguage().subscribe(
      lang => { 
        this.lang = lang.id; 
      }
    );


    this.subscription_screenBreakpoint = this.screenService.screenBreakpointTiny().subscribe({
      next: (isTiny)=>{
        setTimeout(() => { this.isScreenTiny = isTiny; }, 0); 
      }
    });
  }

  ngOnInit() {
  }


  

  ngOnDestroy() {
    this.subscription_changeLanguage.unsubscribe();
    this.subscription_screenBreakpoint.unsubscribe();
  }

}

