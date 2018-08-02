import { Component, OnInit, Input } from '@angular/core';
import { iProduct } from '../../../_data/_data-models';


import { ResizedEvent } from 'angular-resize-event/resized-event';


@Component({
  selector: 'btk-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.sass']
})
export class ImageComponent implements OnInit {
  @Input() data: iProduct;
  @Input() language: string;
  @Input() type: number;


  width: number;
  height: number;
 
  onResized(event: ResizedEvent): void {
    this.width = event.newWidth;
    this.height = event.newHeight;
    console.log("RESIZE3 ",this.width, this.height)
  }



  constructor() { }

  ngOnInit() {
  }

}
