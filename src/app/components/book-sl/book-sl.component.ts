import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookedTicket } from 'src/app/models/booked-ticket';
import { Passenger } from 'src/app/models/passenger';
import { Ticket } from 'src/app/models/ticket';
import { Train } from 'src/app/models/train';
import { BookService } from 'src/app/services/book.service';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-book-sl',
  templateUrl: './book-sl.component.html',
  styleUrls: ['./book-sl.component.css']
})
export class BookSLComponent implements OnInit {

  passenger:Passenger=new Passenger();
  count=0;
  isOpened:boolean=false;
  isDisabled:boolean=false;
  train:Train=new Train();
  trainNo:string|undefined;
  coach="SLEEPER(SL)";
  bookedTicket:BookedTicket=new BookedTicket();
  ticket:Ticket=new Ticket();
  passengerList:Array<Passenger>=[];

  size:number|undefined;
  amount=this.train.classes?.get(this.coach)?.price;

  constructor(private bookservice:BookService,private route:ActivatedRoute,private trainservice:TrainService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{this.trainNo=params.get('trainNo')!;});
    this.trainservice.getTrainByTrainNo(this.trainNo!).subscribe(data=>this.train=data);

  }
  disable(){
   
  if (this.passengerList.length>2) {
    this.isDisabled=true;
    return true;
  } else {
    this.isDisabled=false;
    return false;
    
  }
  }
  onSubmit(f:NgForm){
    this.passengerList.push(this.passenger);
    this.size=this.passengerList.length;
    console.log(this.passenger);
    console.log(this.passengerList);
    console.log(this.amount);
    if (this.disable()) {
      this.onClick();
    }
  }
  onClick(){
    this.isOpened=!this.isOpened;
  }
  BookNow(trainNo:string){
    
    
  }
}
