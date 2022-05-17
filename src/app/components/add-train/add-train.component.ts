import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Seat } from 'src/app/models/seat';
import { Train } from 'src/app/models/train';
import { AdminService } from 'src/app/services/admin.service';
import { TrainService } from 'src/app/services/train.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-train',
  templateUrl: './add-train.component.html',
  styleUrls: ['./add-train.component.css']
})
export class AddTrainComponent implements OnInit {

  seat1:Seat=new Seat();
  coach1="SLEEPER(SL)";
  coach2="AC 3 Tier(2A)";
  coach3="AC 2 Tier(3A)";
  seat2:Seat=new Seat();
  seat3:Seat=new Seat();
  train:Train=new Train();
  trainNo:string|undefined;
  DepartFromList=["Hyderabad","Mumbai","Chennai","Banglore"];
  constructor(private adminservice:AdminService,private trainservice:TrainService,private router:Router) { }

  ngOnInit(): void {
    this.trainNo=this.train.trainNo;
  }
  onSubmit(){
    console.log(this.train);
    this.trainservice.saveTrain(this.train).subscribe(data=>console.log(data),error=>console.log(error));
    console.log("saved ");
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your Train has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(['/admindashboard']);
    
  }
  Sleeper(sl:NgForm){
    console.log(this.seat1);
    this.trainservice.saveSeatByTrainNoCoach(this.seat1,this.trainNo!,this.coach1).subscribe(data=>console.log(data));
    this.train.classes?.set("SLEEPER(SL)",this.seat1);
    console.log(this.train.classes?.get("SLEEPER(SL"));
    
  }
  
  Ac3(sl:NgForm){
    console.log(this.seat2);
    this.trainservice.saveSeatByTrainNoCoach(this.seat2,this.trainNo!,this.coach2).subscribe(data=>console.log(data));
    this.train.classes?.set("AC 3 Tier(2A)",this.seat2);
    console.log(this.train.classes?.get("AC 3 Tier(2A)"));
    
  }
  Ac2(sl:NgForm){
    console.log(this.seat2);
    this.trainservice.saveSeatByTrainNoCoach(this.seat3,this.trainNo!,this.coach3).subscribe(data=>console.log(data));
    this.train.classes?.set("AC 2 Tier(3A)",this.seat2);
    console.log(this.train.classes?.get("AC 2 Tier(3A)"));
    
  }
  getAll(){
  }
}
