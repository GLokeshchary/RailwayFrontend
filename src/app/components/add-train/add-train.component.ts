import { Component, OnInit } from '@angular/core';
import { Seat } from 'src/app/models/seat';
import { Train } from 'src/app/models/train';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-train',
  templateUrl: './add-train.component.html',
  styleUrls: ['./add-train.component.css']
})
export class AddTrainComponent implements OnInit {

   coach:{
     coachname: any;
     seat:Seat
   } | undefined 
  train:Train=new Train();
  DepartFromList=["Hyderabad","Mumbai","Chennai","Banglore"];
  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {
    this
  }
  onSubmit(){
    console.log(this.train);
  }
}
