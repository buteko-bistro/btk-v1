import { Injectable, HostListener, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable, Subscription, Subject } from 'rxjs';
import { iScreenData } from './screen-model';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  private _screenData:iScreenData;

  private changeScreen: Subject<iScreenData>;
  private _isBigScreen = this.breakpointObserver.observe([ '(min-width: 700px)' ]);
  private _isLayoutLandscape = this.breakpointObserver.observe(['(orientation: landscape)']);

  screen():Observable<iScreenData>{
    return this.changeScreen.asObservable();
  }

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
      this._screenData =  <iScreenData>{
        width: window.innerWidth,
        height: window.innerHeight
      };

     

      this.changeScreen = new Subject<iScreenData>();
      this.changeScreen.subscribe({
        next: (value)=>{console.log("iScreenData val: ", value, window.innerWidth)}
      })

      this._isLayoutLandscape.subscribe(r => {
        this._screenData.isLandscape = r.matches;
        this._screenData.isPortrait = !r.matches;
        this._screenData.zoom = this.sampleZoom();
        this.changeScreen.next(this._screenData)
      });  

      this._isBigScreen.subscribe(r => {
        this._screenData.isBig = r.matches;
        this._screenData.zoom = this.sampleZoom();
        this.changeScreen.next(this._screenData)
        console.log("EEEEEE", this._screenData.isBig)
      });  

      this.changeScreen.next(this._screenData)
      console.log("EEEEEE 3", this._screenData.isBig)

  }

 


  public triggerScreenCheck():void{
    this.changeScreen.next(this._screenData);
  }

  public changeSize(width:number, height:number) {
    this._screenData.width = width;
    this._screenData.height = height;
    this._screenData.zoom = this.sampleZoom();

    this.changeScreen.next(this._screenData)
  }

  private sampleZoom():number{
    return Math.round(window.devicePixelRatio * 100);
  }

  


}
