import { Component, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { MatSelectChange, MatSelect } from '@angular/material';
import { LanguageService } from '../core/language/language.service';
import { iLanguage } from '../data/_data-models';
import { ScreenService } from '../core/screen/screen.service';
import { getBodyNode } from '../../../node_modules/@angular/animations/browser/src/render/shared';




@Component({
  selector: 'btk-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.sass'],


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




  textNavigation:{};

  

  isDrawerOpen:boolean = false;

  isSmallScreen:boolean = false;
  
  

  private subscription_changeLanguage :Subscription;
  private subscription_screen :Subscription;
  
  constructor(
    private languageService:LanguageService,
    private screenService:ScreenService
  ) { 
    
    this.subscription_changeLanguage = this.languageService.getChangeLanguage().subscribe(lang => { 
      this.getWords(lang);
      console.log("NAV getChangeLanguage ",  window.innerWidth, document.body.clientWidth)
 
    });

    this.subscription_screen = this.screenService.screen().subscribe({
      next: (value)=>{
        this.isSmallScreen = !value.isBig;
        console.log("subscription_screen: ", value)
      }
    });
    this.screenService.triggerScreenCheck();
  }




  getWords(lang:iLanguage):void {
    this.languageService.getText(lang, 1)
      .subscribe(texts => { 
        this.textNavigation = Object.entries(texts); 
        console.log("nav" ,this.textNavigation);

      });
  }


  drawerChanged (isOpen:boolean){
    this.isDrawerOpen = isOpen;
    console.log('drawerChanged', event, this.backDrop)

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

  ngOnInit() {
    console.log("drawer", this.drawer)
    this.drawer

  }

  ngOnDestroy() {
    this.subscription_changeLanguage.unsubscribe();
    this.subscription_screen.unsubscribe();
  }

}
