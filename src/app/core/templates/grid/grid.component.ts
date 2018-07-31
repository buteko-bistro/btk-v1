import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { iProductGroup, eTableType, iProduct, Card, CardDeck } from 'src/app/_data/_data-models';
import { trigger, state, style, transition, animate, stagger, query, keyframes } from '@angular/animations';
import { fromEvent } from '../../../../../node_modules/rxjs';
import { throttleTime, map, pairwise } from '../../../../../node_modules/rxjs/operators';
import { ScreenService } from '../../screen/screen.service';
import { eScrollPosition } from '../../screen/screen-model';




@Component({
  selector: 'btk-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  animations: [
    // trigger('listAnimation', [
    //   transition('* => *', [

    //     query(':enter', style({ opacity: 0 }), { optional: true }),

    //     query(':enter', stagger('200ms', [
    //       animate('800ms ease-in', keyframes([
    //         style({ opacity: 0, transform: 'translateX(-175%) translateY(0%) scale(0.3)', offset: 0 }),
    //         style({ opacity: 0.8, transform: 'translateX(-10%) translateY(0%) scale(0.90)', offset: 0.8 }),
    //         style({ opacity: 1, transform: 'translateX(0%) translateY(0%) scale(1)', offset: 1 }),
    //       ]))]), { optional: true })
    //   ])
    // ]),


    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('200ms', [
          animate('800ms ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(0%) translateY(0%) scale(0.3)', offset: 0 }),
            style({ opacity: 0.8, transform: 'translateX(0%) translateY(0%) scale(0.90)', offset: 0.8 }),
            style({ opacity: 1, transform: 'translateX(0%) translateY(0%) scale(1)', offset: 1 }),
          ]))]), { optional: true })
      ])
    ]),



    trigger('priceAnimation', [
      transition('* => *', [

        // query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('1800ms ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(-175%) translateY(0%) scale(0.3)', offset: 0 }),
            style({ opacity: 0.8, transform: 'translateX(-10%) translateY(0%) scale(0.90)', offset: 0.8 }),
            style({ opacity: 1, transform: 'translateX(0%) translateY(0%) scale(1)', offset: 1 }),
          ]))]), { optional: true })
      ])
    ]),




    trigger('cardState', [
      state('front', style({ transform: ' rotateY(0deg)' })),
      state('back', style({ transform: ' rotateY(180deg) ' })),
      transition('front => back',
        animate('1500ms', keyframes([

          style({                               opacity:0,   offset: 0.3}),
          style({transform: 'rotateY(0deg) ',    opacity:0,   offset: 0.49}),
          style({transform: 'rotateY(180deg) ',  opacity:0,   offset: 0.51}),   
          style({transform: 'rotateY(180deg) ' , opacity:0.8,  offset: 0.67}),   
          style({transform: 'rotateY(180deg) ' , opacity:1,   offset: 0.7}),   

        ])
      )),
      transition('back => front',
        animate('1300ms', keyframes([

          style({                               opacity:0,   offset: 0.3}),
          style({transform: 'rotateY(180deg)',  opacity:0,   offset: 0.4999}),
          style({transform: 'rotateY(0deg)',    opacity:0,   offset: 0.5001}),
          style({                               opacity:1,   offset: 0.7}),   

        ])
      ))
    ])


    
    // trigger('cardState', [
    //   state('front', style({ transform: ' rotateX(0deg)' })),
    //   state('back', style({ transform: ' rotateX(180deg) ' })),
    //   transition('front => back',
    //     animate('1500ms', keyframes([

    //       style({                               opacity:0,   offset: 0.3}),
    //       style({transform: 'rotateX(0deg) ',    opacity:0,   offset: 0.49}),
    //       style({transform: 'rotateX(180deg) ',  opacity:0,   offset: 0.51}),   
    //       style({transform: 'rotateX(180deg) ' , opacity:0.8,  offset: 0.67}),   
    //       style({transform: 'rotateX(180deg) ' , opacity:1,   offset: 0.7}),   

    //     ])
    //   )),
    //   transition('back => front',
    //     animate('1300ms', keyframes([

    //       style({                               opacity:0,   offset: 0.3}),
    //       style({transform: 'rotateX(180deg)',  opacity:0,   offset: 0.4999}),
    //       style({transform: 'rotateX(0deg)',    opacity:0,   offset: 0.5001}),
    //       style({                               opacity:1,   offset: 0.7}),   

    //     ])
    //   ))
    // ])
  // ]


  
  // trigger('cardState', [
  //   animate("front", keyframes([
  //     style({ backgroundColor: "red", offset: 0 }),
  //     style({ backgroundColor: "blue", offset: 0.2 }),
  //     style({ backgroundColor: "orange", offset: 0.3 }),
  //     style({ backgroundColor: "black", offset: 1 })
  //   ])),


  //   state('back', style({
  //     transform: ' rotateY(-180deg)',
  //     zIndex: 1000,
  //     opacity: 1
  //   })),
  //   transition('front => back', animate('800ms ease-in-out')),
  //   transition('back => front', animate('800ms ease-in-out'))
  // ])
]

})
export class GridComponent implements OnInit {
  @Input() cards: Card[];
  @Input() deck: CardDeck;
  @Input() language: string;
  @Input() type: eTableType;
  @Input() isTiny: boolean;

  // @ViewChild('cardContainer') cardContainer: EventTarget;


  // private item:any
  // private item2:any


  resetAll(except?: Card): void {
    this.deck.visibleCards.forEach(vc => {
      setTimeout(() => {
        if (vc.state != "front" && except !== vc) 
        var elem = document.querySelector('#' + vc.id);
        if(elem) {        
          elem.classList.toggle('is-flipped');
          vc.reset();
        }
      }, 200);
    });
  }

  visibleCards: Card[] = [];

  flip(card: Card): void {
    // this.deck.resetVisibleCards(card)
    
    card.flip();
  }




  constructor(
    private screenService: ScreenService
  ) {
    this.screenService.scroll().subscribe(data => {
      if (data.position == eScrollPosition.BOTTOM) setTimeout(() => {
        this.subscribeFlip(this.deck.addToVisible(7));
      }, 0);

    });

  }








  subscribeFlip(cards: Card[]) {

    console.log("subscribe", this.isTiny)

    setTimeout(() => {
      cards.forEach(card => {

        let elem = document.querySelector('#' + card.id);

        if (elem) elem.addEventListener('click', () => {
          
          elem.classList.toggle('is-flipped');
          card.flip();
          console.log('flip', card.id, card.state, this.deck)
          this.resetAll(card)
        });
      });
    }, 0);

  }

  ngOnInit(){

  }
  ngChange(){
    console.log("   sub ", this.isTiny)
  }



  ngAfterViewInit() {
    this.screenService.triggerScreenCheck();



    // setTimeout(() => {
    // this.deck.allCards.forEach(card => {

    //   let elem = document.querySelector('#'+card.id);
    //   // console.log("   OHOHO", card.id, elem)

    //   if(elem) elem.addEventListener( 'click', function() {
    //     elem.classList.toggle('is-flipped');
    //   });
    // });
    // }, 0);
    // setTimeout(() => {
    //   var card = document.querySelector('#myCard-0');
    // card.addEventListener( 'click', function() {
    //   card.classList.toggle('is-flipped');
    // });
    // }, 3000); 
    setTimeout(() => {
      this.subscribeFlip(this.deck.addToVisible());
    }, 0);
    // this.deck.addToVisible(7);
    console.log("HELLO", this.deck)
    // // this.deck.cards

  }

  // items = [];

  // showItems() {
  //   this.items = [0,1,2,3,4];
  // }

  // hideItems() {
  //   this.items = [];
  // }

  // toggle() {
  //   this.items.length ? this.hideItems() : this.showItems();
  //  }


  // private list:iProduct[] =[];
  // private cards:Card[] = [];

  // constructor() {
  // this.list = this.data.list;
  // this.list.forEach((data)=> {this.cards.push(new Card(data))})
  // setTimeout(() => { if(this.cards.length > 0){
  //   this.cards.forEach(c => c.flip());
  // }}, 3000);
  // }

  // public state = 'inactive'
  // toggleState(){
  //   // this.state = this.state === 'active' ? 'inactive' : 'active';
  //   console.log("HLELE", this.state)

  // }

  // ngOnInit() {
  // //   // console.log("FOODS item 1", this.data, this.language)

  // //   // this.item = this.data.list[3]
  // //   // this.item2 = this.data.list[2]
  // //   // this.list = this.data.list;
  // //   // this.list.forEach((data)=> {this.cards.push(new Card(data, 2313))})
  // //   console.log("CARDS in",this.cards)
  // //   console.log("CARDS in",this.cards[0])

  // //   console.log("FOODS item 1")
  // }


  // flipCard(card?:Card){
  //   card = this.deck.visibleCards[0];
  //   // let elem = document.querySelector('#' + card.id);
  //   // elem.classList.toggle('is-flipped');
  //   // card.flip();
  //   console.log('flip', card.id, card.state)
  // }
}
