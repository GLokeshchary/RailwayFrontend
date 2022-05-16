import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seat } from 'src/app/models/seat';
import { Train } from 'src/app/models/train';
import { TrainService } from 'src/app/services/train.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
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
  now:any;
  content?: any;
  constructor(private trainservice:TrainService,private route:Router,private userService:UserService) {
    
   }

  ngOnInit(): void {
    const datePipe = new DatePipe('en-Us');
    this.now = datePipe.transform(new Date(), 'yyyy-MM-dd');
  }
  onSwap(demo1: any,demo2: any){
    this.demo1=demo2;
    this.demo2=demo1;

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
    this.route.navigate(['/search',this.DepartFrom,this.goingTo]);
  }
  onClick1():void{
    this.route.navigate(["/contact"]);
  }
  onClick2():void{
    this.route.navigate(['/bookedTickets']);
  }
  Admin(){
    this.route.navigate(['/admindashboard']);
  }
  login(){
    this.route.navigate(['/login']);
  }
  signup(){
    this.route.navigate(['/register']);
  }


}
