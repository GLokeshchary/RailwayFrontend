import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BookTicket } from 'src/app/models/book-ticket';
import { BookedTicket } from 'src/app/models/booked-ticket';
import { Passenger } from 'src/app/models/passenger';

import { Train } from 'src/app/models/train';
import { Values } from 'src/app/models/values';
import { BookService } from 'src/app/services/book.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { TrainService } from 'src/app/services/train.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-sl',
  templateUrl: './book-sl.component.html',
  styleUrls: ['./book-sl.component.css']
})
export class BookSLComponent implements OnInit {

  passenger:Passenger=new Passenger();
  passenger2:Passenger=new Passenger();
  bookTicket:BookTicket=new BookTicket();
  bookedTicket:BookedTicket=new BookedTicket();
  values:Values=new Values();
  count=0;
  isOpened:boolean=false;
  isDisabled:boolean=false;
  train:Train=new Train();
  trainNo:string|undefined;
  coach="SLEEPER(SL)";
  passengerList:Passenger[]=[];
  passengerList2:Passenger[]=[];
  price:number|any;
  size:number=0;
  ticketFare:number|undefined;
  ConvenienceFee:number=35.40;
  AgentServiceCharges=25.39;
  totalamount:number|undefined;
  duration:any;
  isEdited:boolean=false;
  isSubmitted:boolean=true;
  passengerid:string|undefined;
  openupdate:boolean=false;

  random:string|undefined;

  constructor(private bookservice:BookService,private route:ActivatedRoute,private router:Router,private trainservice:TrainService,private tokenstorage:TokenStorageService) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe((params)=>{this.trainNo=params.get('trainNo')!;});
    this.trainservice.getTrainByTrainNo(this.trainNo!).subscribe(data=>this.train=data);
    this.bookTicket.bookId="14523";
    this.bookTicket.userId="158233";
    this.trainservice.getValues(this.trainNo!,this.coach).subscribe(data=>this.values=data);
    this.bookedTicket.email=this.tokenstorage.getUser().email;
    this.bookservice.getAllPassengers().subscribe(data=>{
      this.size=data.length 
      this.passengerList=data;});
    
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


  getRandonString(){
    return Math.floor(100000+Math.random()*900000).toString();
  }

  onSubmit(f:NgForm){
    
    console.log(this.totalamount);
    
     this.bookservice.savePassengers(this.passenger).subscribe(data=>console.log(data));
     this.passengerList2.push(this.passenger);
     this.size=this.passengerList2.length;
     

    console.log(this.values.price);
    this.price=this.values.price;
    console.log(this.price);
    
    this.ticketFare=this.price*this.size;
    console.log(this.ticketFare);
    this.totalamount=this.ticketFare!+this.ConvenienceFee+this.AgentServiceCharges;
    
    if (this.disable()) {
      this.onClick();
    }
    this.onClick();
  }

  onClick(){
    this.isSubmitted=true;
    this.isOpened=!this.isOpened;
  }
  

  PayNow(trainNo:string,coach:string,t:number){
    this.router.navigate(['/payment',trainNo,this.coach,t]);
    //this.bookservice.bookTicketByTrainNo2(this.bookTicket!,trainNo,this.coach).subscribe(data=>console.log(data));
  }
  delete(passengerId:string){
    this.bookservice.deletePassengerById(passengerId).subscribe(data=>console.log(data),err=>console.log(err));
  }
  updatePassenger(id:string){
    this.router.navigate(['/updatePassenger',id]);
  }
}
