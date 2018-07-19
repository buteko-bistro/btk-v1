import { Injectable } from '@angular/core';
import {  LANGUAGES, textNAVIGATION } from '../../data/language-data';
import { iLanguage, eTextTypes } from '../../data/_data-models';
import { of, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private currentLangugeID:string;

  private changeLanguage: Subject<iLanguage>;


  getChangeLanguage(): Observable<iLanguage> {
    return this.changeLanguage.asObservable();
  }
   

   
  constructor() {
    this.changeLanguage = new Subject<iLanguage>();
    this.changeLanguage.subscribe({
      next: (value)=>{console.log("Subject val: ", value)}
    })
    
    this.changeLanguage.next(<iLanguage>{id: 'ger', name: 'Deutsch', icon:"assets/icons/flag-ger.svg"})
  }


  setLanguage(lang:iLanguage){
    this.changeLanguage.next(lang);
    this.currentLangugeID = lang.id;
    console.log("change ", lang)
  }

  getCurrentLanguageID():string {
    return this.currentLangugeID;
  }

  getLanguages(): Observable<iLanguage[]> {
    return of(LANGUAGES);
  }

  getText(lang:iLanguage, type:eTextTypes): Observable<Object> {
    let allLang = null;
    switch (type) {
      case eTextTypes.navigation:
        allLang = textNAVIGATION;
        break;
    
      default:
        break;
    }
    let singleLang = this.extractLanguege(allLang, lang);

    return of(singleLang);


  }


  extractLanguege(words:Object, lang:iLanguage):Object{

    let retVal = {};

    Object.entries(words).forEach((elem, i) => {
      retVal[elem[0]] = elem[1][lang.id.toString()]
    });

    return retVal;
  }





}
