import { Component, OnInit, Input } from '@angular/core';
import { iProductGroup, eTableType } from 'src/app/_data/_data-models';

@Component({
  selector: 'btk-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {
  @Input() data: iProductGroup;
  @Input() language: string;
  @Input() type: eTableType;
  @Input() isTiny: boolean;

  
  
  constructor() { }

  ngOnInit() {

  }

}
