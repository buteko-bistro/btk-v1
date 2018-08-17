import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../core/language/language.service';
import { Subscription } from 'node_modules/rxjs';
import { CONTACT_DATA } from '../../_data/contact-data';

@Component({
  selector: 'btk-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = CONTACT_DATA;

  hours = [];

  displayedColumns: string[] = ['day', 'start', 'end'];

  lang:string; 
  private subscription_changeLanguage :Subscription;



  constructor(    
    private languageService:LanguageService,
  ) {
    this.lang = this.languageService.getCurrentLanguageID();

    this.subscription_changeLanguage = this.languageService.getChangeLanguage().subscribe(
      lang => { 
        this.lang = lang.id; 
        this.updateHours(this.lang );
      }
    );
    this.languageService.extractLanguege


  }
  ngOnInit() {
    this.updateHours(this.lang );
  }


  updateHours(lang:string){
    this.hours= [];
    this.contact.days.time.forEach((day, i) => {
      let L = this.lang;

      this.hours.push({day:day[L][0], start:day[L][1],end:day[L][2]});
    })

    console.log(" hours ", this.contact.days.time, this.hours)
    this.contact.days;
  }

}
