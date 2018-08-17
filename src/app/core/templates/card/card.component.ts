import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { iProduct } from '../../../_data/_data-models';



import { ResizedEvent } from 'angular-resize-event/resized-event';


@Component({
  selector: 'btk-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input() data: iProduct;
  @Input() language: string;
  @Input() type: number;
  @Input() isTiny: boolean;

  @ViewChild('btkimgtest') btkimgtest: ElementRef;
  @ViewChild('btkimg') btkimg: ElementRef;




  width: number;
  height: number;
 
  onResized(event: ResizedEvent): void {
    this.width = event.newWidth;
    this.height = event.newHeight;
    console.log("RESIZE2 ",this.width, this.height)
  }


  private icons = {
    photo:"photo_camera",
    info:"info"
  }

  private title = '';
  private description = '';
  private isDescriptionValid = false;
  private imgpath = '';


wwww:number;

  buttons:string[] = []; 

  constructor() {
    // console.log("constructor ", this.data.info)
    // let pop = new NgxPopper()
    // this.update()
   }


  update():void{
    this.isDescriptionValid = false;
    if(this.data) 
      if(this.data.name) 
        if(this.data.name[this.language])
          this.title = this.data.name[this.language];
    if(this.data) 
      if(this.data.description) 
        if(this.data.description[this.language]){
          this.description = this.data.description[this.language];
          if(this.description.length > 0)
            this.isDescriptionValid = true;
        }
    if(this.data) 
      if(this.data.picture) 
        if(this.data.picture.path)  
          this.imgpath = this.data.picture.path;
      
  }


  buttonOptions(opt:string):void{
    if(opt == this.icons.info){

    }
    else if(opt == this.icons.photo){

    }
  }

  ngOnInit() {
    if(this.data){

      if(this.data.info)
        this.buttons.push(this.icons.info)

      // if(this.data.picture.path)
      //   this.buttons.push(this.icons.photo);

    }
  }


  imgsize(msg:string){
    console.log("\n...",msg, this.wwww)
    // if(this.btkimgtest)
    //   console.log("VI 1", this.btkimgtest.nativeElement)
    // if(this.btkimg)
    //   console.log("VI 2", this.btkimg.nativeElement,this.btkimg.nativeElement)

  }



  ngAfterViewInit(){

    // this.imgsize("ngAfterViewInit")
  }

  ngOnChanges(){
    this.update();
    this.imgsize("ngOnChanges")

      // console.log("CH ", this.btkimg, this.btkimgtest)
  }
}
