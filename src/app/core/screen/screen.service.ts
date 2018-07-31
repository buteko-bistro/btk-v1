import { Injectable, HostListener, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable, Subscription, Subject, fromEvent } from 'rxjs';
import { iScreenData, eSreenEventType, iScrollData, eScrollDirection, eScrollPosition } from './screen-model';
import { CONFIG } from '../../_data/config-data';
import { map, debounceTime } from '../../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  private config = CONFIG;

  private _screenData:iScreenData;
  private _scrollData:iScrollData;

  private changeScreen$: Subject<iScreenData>;
  private changeScreenBreakpointBig$: Subject<boolean>;
  private changeScreenBreakpointTiny$: Subject<boolean>;
  private changeScroll$: Subject<iScrollData>;

  private scroll$:Observable<{}>;
  
  private _isTinyScreen = this.breakpointObserver.observe([ 
    '(max-width: ' + this.config.breakpointTiny + 'px)'
   ]);


  private _isBigScreen = this.breakpointObserver.observe([ 
    '(min-width: ' + this.config.breakpointBig + 'px)'
   ]);
  private _isLayoutLandscape = this.breakpointObserver.observe(['(orientation: landscape)']);




  subscribeScroll(element:any){
    this.scroll$ = fromEvent(element, 'scroll').pipe(
      debounceTime(100)
    );
    this.scroll$.subscribe(() => {
      
      let topPos_last = (this._scrollData) ? this._scrollData.topPos : 0;
      let topPos_new = element.scrollTop;
      let bottomPos_new = element.clientHeight + element.scrollTop;

      let dir = (topPos_last == topPos_new) ? eScrollDirection.STILL : 
                (topPos_last <  topPos_new) ? eScrollDirection.DOWN : eScrollDirection.UP;  
      
      let pos = (topPos_new < 50) ? eScrollPosition.TOP :
                (bottomPos_new > element.scrollHeight-50) ? eScrollPosition.BOTTOM :
                eScrollPosition.MIDDLE;


      let data = <iScrollData>{
        heightFull:element.scrollHeight, 
        heightView:element.clientHeight, 
        topPos:topPos_new, 
        bottomPos:bottomPos_new,
        topPosPc:Math.round((topPos_new / element.scrollHeight) * 100), 
        bottomPosPc:Math.round((bottomPos_new / element.scrollHeight) * 100),
        direction: dir,
        position: pos,
      }
      this.changeScroll$.next(data);
      this._scrollData = data;

    });
  }


  screen():Observable<iScreenData>{
    return this.changeScreen$.asObservable();
  }

  
  screenBreakpointBig():Observable<boolean>{
    return this.changeScreenBreakpointBig$.asObservable();
  }
  screenBreakpointTiny():Observable<boolean>{
    return this.changeScreenBreakpointTiny$.asObservable();
  }

  scroll():Observable<iScrollData>{
    return this.changeScroll$.asObservable();
  }

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
      this._screenData =  <iScreenData>{
        width: window.innerWidth,
        height: window.innerHeight
      };


      this.changeScreen$ = new Subject<iScreenData>();
      this.changeScreenBreakpointBig$ = new Subject<boolean>();
      this.changeScreenBreakpointTiny$ = new Subject<boolean>();
      this.changeScroll$ = new Subject<iScrollData>();


      this.changeScreen$.subscribe({
        next: (value)=>{

        }
      });

      this.changeScreenBreakpointBig$.subscribe({
        next: (value)=>{

        }
      });
      this.changeScreenBreakpointTiny$.subscribe({
        next: (value)=>{

        }
      });

      
      this.changeScroll$.subscribe({
        next: (value)=>{
          
        }
      });
     


      this._isLayoutLandscape.subscribe(r => {
        this._screenData.event = eSreenEventType.Layout;
        this._screenData.isLandscape = r.matches;
        this._screenData.isPortrait = !r.matches;
        this._screenData.zoom = this.sampleZoom();
        this.changeScreen$.next(this._screenData)
      });  

      this._isBigScreen.subscribe(r => {
        this._screenData.event = eSreenEventType.Breakpoint;
        this._screenData.isBig = r.matches;
        this._screenData.zoom = this.sampleZoom();
        this.changeScreen$.next(this._screenData)
        this.changeScreenBreakpointBig$.next(this._screenData.isBig);
      });  

      
      this._isTinyScreen.subscribe(r => {
        this._screenData.event = eSreenEventType.Breakpoint;
        this._screenData.isTiny = r.matches;
        this._screenData.zoom = this.sampleZoom();
        this.changeScreen$.next(this._screenData)
        this.changeScreenBreakpointTiny$.next(this._screenData.isTiny);
      });  

      this.changeScreen$.next(this._screenData)
      this.changeScreenBreakpointBig$.next(this._screenData.isBig);
      this.changeScreenBreakpointTiny$.next(this._screenData.isTiny);




    window.onscroll = function(ev) {
      console.log("Hello")
        // if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        //     // you're at the bottom of the page
        // }
    };
  }

 


  public triggerScreenCheck():void{
    this.changeScreen$.next(this._screenData);
    this.changeScreenBreakpointBig$.next(this._screenData.isBig);
    this.changeScreenBreakpointTiny$.next(this._screenData.isTiny);

  }

  public changeSize(width:number, height:number) {
    this._screenData.width = width;
    this._screenData.height = height;
    this._screenData.zoom = this.sampleZoom();

    this.changeScreen$.next(this._screenData)
  }

  private sampleZoom():number{
    return Math.round(window.devicePixelRatio * 100);
  }

  


}
