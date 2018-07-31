import { Component, OnInit, Input } from '@angular/core';
import { iProductGroup, eTableType } from '../../../_data/_data-models';

@Component({
  selector: 'btk-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  @Input() data: iProductGroup[];
  @Input() language: string;
  @Input() isTiny: boolean;

  pictureTag = 'picture'

  displayedColumns: string[] = [ 'name', '0.3L', '0.5L' ];

 
  lang:string = 'hun'; 
  tabletype = eTableType.default;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
  }

}
