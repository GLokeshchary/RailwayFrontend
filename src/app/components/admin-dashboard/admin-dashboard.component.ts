import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Train } from 'src/app/models/train';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  
  constructor(private router:Router,private trainservice:TrainService,private route:ActivatedRoute) { }

  ngOnInit(): void {
   
  }
  home(){
    this.router.navigate(['/home']);
  }
  trainList(){
    this.router.navigate(['Trainlist'],{relativeTo:this.route});
  }
  addtrain(){
    this.router.navigate(['createtrain'],{relativeTo:this.route});
  }
}
