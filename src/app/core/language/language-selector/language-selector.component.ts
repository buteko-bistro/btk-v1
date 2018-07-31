import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LanguageService } from '../language.service';
import { MatSelectChange, MatSelect } from '@angular/material';
import { ViewChild } from '@angular/core';
import { iLanguage } from '../../../_data/_data-models';

@Component({
  selector: 'btk-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.sass'],
  providers:[],
  encapsulation: ViewEncapsulation.None
})
export class LanguageSelectorComponent implements OnInit {
  @ViewChild('languageSelector')  languageSelector:MatSelect;


  languages: iLanguage[];
  selected: iLanguage;

  private flagHtml:string;
  
  constructor(
    private languageService:LanguageService
  ) { 

    this.getWords();
    this.selected = this.languages[0];
    this.languageService.setLanguage(this.selected);   

   }
  ngOnInit() { }
  ngAfterContentInit(){
    this.refreshFlag();
  }



  getWords():void {
    this.languageService.getLanguages()
      .subscribe(languages => { 
        this.languages = languages; 
      });
  }
  

  selectLanguege(lan:iLanguage):void{
    this.refreshFlag(); 
    this.languageService.setLanguage(lan);   
  }

    
  setHorizontalOffset():void{
  }
  
  refreshFlag():void{
    let flag = "<div class=\"mat-select-option-image mat-select-option-image2 \"> <img   src=" + this.selected.icon + " > </div>";
    document.querySelectorAll(".mat-select-value")[0].innerHTML = flag;
  }
}
