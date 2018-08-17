import { Component, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { map, throttleTime, pairwise, debounceTime } from 'rxjs/operators';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { MatSelectChange, MatSelect } from '@angular/material';
import { LanguageService } from '../core/language/language.service';
import { ScreenService } from '../core/screen/screen.service';
import { getBodyNode } from '../../../node_modules/@angular/animations/browser/src/render/shared';
import { iLanguage } from '../_data/_data-models';
import { routerTransition } from '../core/animations/router.animations';




@Component({
  selector: 'btk-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.sass'],
  animations: [routerTransition]

})
export class NavigatorComponent {
  @ViewChild('drawer') drawer: ElementRef;
  @ViewChild('backDrop') backDrop: ElementRef;
  @ViewChild('toolbarContent') toolbarContent: ElementRef;
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenService.changeSize(event.target.innerWidth, event.target.innerHeight);
  }

  @ViewChild('drawerOpenButton')  private drawerOpenButton: ElementRef;
  @ViewChild('drawerCloseButton') private drawerCloseButton: ElementRef;


  
  manageBackDrop(isOn:boolean):void{
    this.isBackDropOn = isOn;
  }

  textNavigation:{};

  ngAfterViewInit() {
   
    this.screenService.subscribeScroll(document.querySelector('#drawerContent'))

    // let content = document.querySelector('#drawerContent');
    // const scroll$ = fromEvent(content, 'scroll').pipe(
    //   debounceTime(100)
    // );

    // scroll$.subscribe(() => (console.log(" scroll", content.scrollTop, content.scrollHeight, content.clientHeight+content.scrollTop)));
   



  }

  isDrawerOpen:boolean = false;
  isBackDropOn:boolean = false;
  isAnimS:boolean = false;

  isSmallScreen:boolean = false;
  
  logo = "assets/pictures/website/buteko_text.svg"
  background = "assets/pictures/website/brasil.jpg"

  private subscription_changeLanguage :Subscription;
  private subscription_screen :Subscription;
  private subscription_screenBreakpoint :Subscription;
  private subscription_screenBreakpointAnimS :Subscription;
  
  constructor(
    private languageService:LanguageService,
    private screenService:ScreenService
  ) { 
    



    this.subscription_changeLanguage = this.languageService.getChangeLanguage().subscribe(lang => { 
      this.getWords(lang); 
    });

    this.subscription_screen = this.screenService.screen().subscribe({
      next: (value)=>{
        
        
      }
    });

    this.subscription_screenBreakpoint = this.screenService.screenBreakpointBig().subscribe({
      next: (isBig)=>{
        this.isSmallScreen = !isBig;
        this.isDrawerOpen = false;
        if(isBig) this.isBackDropOn = false;
      }
    });

    this.subscription_screenBreakpointAnimS = this.screenService.screenBreakpointAnimS().subscribe({
      next: (isAnimS)=>{
        this.isAnimS = isAnimS;     
        console.log("Anime 2", this.isAnimS)
      }
    });
 
    this.screenService.triggerScreenCheck();
  }






  getWords(lang:iLanguage):void {
    this.languageService.getText(lang, 1)
      .subscribe(texts => { 
        this.textNavigation = Object.entries(texts); 
      });
  }


  drawerChanged (isOpen:boolean){
    // this.isDrawerOpen = isOpen;

    this.drawerOpenButton['_elementRef'].nativeElement
    .classList.remove('cdk-program-focused');
    this.drawerCloseButton['_elementRef'].nativeElement
    .classList.remove('cdk-program-focused');
    // this.backDrop.nativeElement.hidden = !isOpened;
    var elem = this.backDrop.nativeElement;
    // (function fade(){

    //   (s.opacity-=.01)<0?s.display="none":setTimeout(fade,40)
    //   console.log(s.opacity)
    // })();
  }

  closeDrawer(){
    // console.log("hohoh",this.drawer,this.drawer.)

    // if(this.isDrawerOpen){
      
    //   drawer.toggle()
    // }
  }



  getState(outlet) {
    let tag = '' + outlet.activatedRouteData.state + (this.isAnimS ? 'S' : 'L');
    console.log('GS ', this.isAnimS, tag)
    return tag;
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription_changeLanguage.unsubscribe();
    this.subscription_screen.unsubscribe();
    this.subscription_screenBreakpoint.unsubscribe();
    
  }

  

}
