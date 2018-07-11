import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { MatSelectChange, MatSelect } from '@angular/material';
import { LanguageService } from '../core/language/language.service';
import { iLanguage } from '../core/language/language-model';




@Component({
  selector: 'btk-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.sass'],


})
export class NavigatorComponent {
  @ViewChild('drawer') drawer: ElementRef;
  
  
  private textNavigation:{};


  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([
    '(min-width: 600px)'
  ]).pipe( map(result => !result.matches) );
    

  private subscription_changeLanguage :Subscription;
  
  constructor(
    private breakpointObserver: BreakpointObserver,
    private languageService:LanguageService
  ) { 
    
    this.subscription_changeLanguage = this.languageService.getChangeLanguage().subscribe(
      lang => { this.getWords(lang) }
    );


   
  }


  getWords(lang:iLanguage):void {
    this.languageService.getText(lang, 1)
      .subscribe(texts => { 
        this.textNavigation = Object.entries(texts); 
        console.log("nav" ,this.textNavigation);

      });
  }

  ngOnInit() {
    console.log("drawer", this.drawer)
    this.drawer

  }

  ngOnDestroy() {
    this.subscription_changeLanguage.unsubscribe();
  }

}
