import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  isOpenend0:boolean=false;
  isOpenend1:boolean=false;
  isOpenend2:boolean=false;
  isOpenend3:boolean=false;
  isOpenend4:boolean=false;
  isOpenend5:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  

  isOpened0(){
    
    this.isOpenend0=!this.isOpenend0;
  }
  isOpened1(){
    this.isOpenend1=!this.isOpenend1;
  }
  isOpened2(){
    this.isOpenend2=!this.isOpenend2;
  }
  isOpened3(){
    this.isOpenend3=!this.isOpenend3;
  }
  isOpened4(){
    this.isOpenend4=!this.isOpenend4;
  }
  isOpened5(){
    this.isOpenend5=!this.isOpenend5;
  }
}
