import { Component, OnInit, Input } from '@angular/core';
import { DRINKS_DATA } from '../../../data/drinks-data';
import { iProductGroup } from '../../../data/_data-models';

@Component({
  selector: 'btk-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  @Input() data: iProductGroup[];
  @Input() language: string;

  pictureTag = 'picture'

  displayedColumns: string[] = [ 'name', '0.3L', '0.5L' ];

 
  lang:string = 'hun'; 


  constructor() { }

  ngOnInit() {
    console.log("ngOnInit ", this.language, this.data)
  }
  ngOnChanges() {
    console.log("ngOnChanges ", this.language, this.data)
  }

}
