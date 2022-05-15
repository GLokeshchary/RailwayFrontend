import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Seat } from 'src/app/models/seat';
import { Train } from 'src/app/models/train';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { TrainService } from 'src/app/services/train.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  trains:Train[]|undefined;
    departFrom:string|undefined;
    goingTo:string|undefined;
    seatsl:Seat=new Seat();
    isLoggedIn:boolean|undefined;

  constructor(private route:ActivatedRoute,private trainservice:TrainService,private router:Router,private userService:UserService,private tokenstorage:TokenStorageService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{this.departFrom=params.get('start')!;});
    this.route.paramMap.subscribe((params)=>{this.goingTo=params.get('end')!;});
    this.trainservice.getTrainsBetweenStations(this.departFrom,this.goingTo).subscribe(data=>this.trains=data);


  }

  
  bookTrain(trainNo:string,classes:Map<String,Seat>){
    this.isLoggedIn = !!this.tokenstorage.getToken();
    if (this.isLoggedIn) {
      this.router.navigate(['/bookSL',trainNo]);
      
    }else{
      Swal.fire({
        title: 'Please Login First?',
        icon:"info",
        confirmButtonText: 'ok',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/login']);
        }
      })
      
      
    }

    

  }

  bookTrain1(trainNo:string,classes:Map<String,Seat>){

    this.isLoggedIn = !this.tokenstorage.getToken();
    if (this.isLoggedIn) {
      Swal.fire({
        title: 'Please Login First?',
        icon:"info",
        confirmButtonText: 'ok',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.router.navigate(['/login']);
          
        }
      })
      
    }else{
      this.router.navigate(['/bookSS',trainNo]);
    }
    
  }
  bookTrain2(trainNo:string,classes:Map<String,Seat>){

    this.isLoggedIn = !this.tokenstorage.getToken();
    if (this.isLoggedIn) {
      Swal.fire({
        title: 'Please Login First?',
        icon:"info",
        confirmButtonText: 'ok',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.router.navigate(['/login']);
          
        }
      })
      
    }else{
      this.router.navigate(['/bookAC1',trainNo]);
    }
    
  }
  bookTrain3(trainNo:string,classes:Map<String,Seat>){
    this.isLoggedIn = !this.tokenstorage.getToken();
    if (this.isLoggedIn) {
      Swal.fire({
        title: 'Please Login First?',
        icon:"info",
        confirmButtonText: 'ok',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.router.navigate(['/login']);
          
        }
      })
      
    }else{
      this.router.navigate(['/bookAC2',trainNo]);
    }
    
  }
  bookTrain4(trainNo:string,classes:Map<String,Seat>){
    this.isLoggedIn = !this.tokenstorage.getToken();
    if (this.isLoggedIn) {
      Swal.fire({
        title: 'Please Login First?',
        icon:"info",
        confirmButtonText: 'ok',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.router.navigate(['/login']);
          
        }
      })
      
    }else{
      this.router.navigate(['/bookAC3',trainNo]);
    }
    
  }

}
