import { Component, OnInit } from '@angular/core';
import { Train } from 'src/app/models/train';
import { AdminService } from 'src/app/services/admin.service';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.css']
})
export class TrainListComponent implements OnInit {

  trains:Train[]|undefined;
  constructor(private trainservice:TrainService,private adminservice:AdminService ) { }

  ngOnInit(): void {
   // this.trainservice.getTrainList().subscribe(data=>this.trains=data);
   this.adminservice.gettrainList().subscribe(data=>this.trains=data);
  }

}
