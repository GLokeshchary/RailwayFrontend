import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seat } from 'src/app/models/seat';
import { Train } from 'src/app/models/train';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trains:Train[]|undefined;
  DepartFromList=["Hyderabad","Mumbai","Chennai","Banglore"];
  goingToList=["Hyderabad","Mumbai","Chennai","Banglore"];
  DepartFrom:string|undefined;
  goingTo:string|undefined;
  Date:Date|undefined;
  isSubmitted:boolean=false;
  demo1:any;
  demo2:any;
  date:Date | undefined; 
  constructor(private trainservice:TrainService,private route:Router) {
    
   }

  ngOnInit(): void {
  }
  onSwap(demo1: any,demo2: any){
    this.demo1=demo1;
    this.demo2=demo2;

  }

  onSubmit(userForm: any){
    this.isSubmitted=true;
    console.log(userForm.value);
    console.log(userForm.value.DepartFrom);
    console.log(userForm.value.goingTo);
    console.log(userForm.value.Date);

    this.DepartFrom=userForm.value.DepartFrom;
    this.goingTo=userForm.value.goingTo;
    this.Date=userForm.value.Date;
    console.log(this.DepartFrom);

    this.trainservice.getTrainsBetweenStations(this.DepartFrom,this.goingTo).subscribe(data=>this.trains=data);
  }
  onClick1():void{
    this.route.navigate(["/contact"]);
  }
  onClick2():void{
    this.route.navigate(['/bookedTickets'])
  }

  bookTrain(trainNo:string,classes:Map<String,Seat>){
    this.route.navigate(['/bookSL',trainNo]);
  }

}
