import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'btk-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent {

  // isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');


  isHandset$: Observable<boolean> = this.breakpointObserver.observe([
    '(min-width: 600px)'
  ])
    .pipe(
      map(result => !result.matches)
    );
    
  menu:any;

  constructor(private breakpointObserver: BreakpointObserver) {
    // this.breakpointObserver.observe([
    //   Breakpoints.Small,
    //   Breakpoints.XSmall,
    // ]).subscribe(result => {
    //   if (result.matches) {
    //     console.log("SOSO", result.matches,result.matches);
    //     this.menu=result.matches
    //   }
    // });
  }
  }
