import { Component } from '@angular/core';
import { LanguageService } from './core/language/language.service';

@Component({
  selector: 'btk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers:[LanguageService],

})
export class AppComponent {
  title = 'btk';
}
