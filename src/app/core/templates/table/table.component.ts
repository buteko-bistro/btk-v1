import { Component, OnInit, Input } from '@angular/core';
import { iProductGroup, eTableType, iMultiLangDataMultiLine } from 'src/app/_data/_data-models';

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

  public qcolumns:string[] = ['zz']; 
  
  constructor() { }

  update(){
    if(this.data.columns){
      if(this.data.columns[this.language]){
        this.qcolumns =  (this.data.columns as iMultiLangDataMultiLine)[this.language]
      }
      else{
        this.qcolumns =  (this.data.columns as string[]);
      }
    } 
    else {
      this.qcolumns =['name', 'NA']
    }

    // this.columns =['dz']
    // this.columns2 =  (this.data.columns as iMultiLangDataMultiLine)[this.language].slice(1);
    // this.columns =  (this.data.columns2 as string[]).slice(1);

    
    // console.log("WWWWW", this.language, this.data.columns, this.columns, this.columns2 ,  this.data.columns)
  }



  ngOnInit() {
    this.update()

  }
  ngOnChanges(){
    this.update()
  }

}
