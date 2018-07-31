import { Component, OnInit, Input } from '@angular/core';
import { iProduct, Card } from '../../../_data/_data-models';

import { ResizedEvent } from 'angular-resize-event/resized-event';



@Component({
  selector: 'btk-card-frame',
  templateUrl: './card-frame.component.html',
  styleUrls: ['./card-frame.component.sass'],

})
export class CardFrameComponent implements OnInit {
  @Input() card: Card;
  @Input() language: string;
  @Input() type: string;
  @Input() isTiny: boolean;



  width: number;
  height: number;
 
  onResized(event: ResizedEvent): void {
    this.width = event.newWidth;
    this.height = event.newHeight;
    console.log("RESIZE  ",this.width, this.height)
  }




  show = false;
  toggle() {
    console.log("RESIZE  ",this.width, this.height)

    this.show = !this.show;
  }
  get stateName() {
    return this.show ? 'show' : 'hide'
  }



  constructor() { }

  ngOnInit() {
  }

}
