import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Passenger } from 'src/app/models/passenger';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-updatepassenger',
  templateUrl: './updatepassenger.component.html',
  styleUrls: ['./updatepassenger.component.css']
})
export class UpdatepassengerComponent implements OnInit {

  id:string|undefined;
  passenger:Passenger=new Passenger();
  constructor(private bookservice:BookService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{this.id=params.get('id')!;});
    this.bookservice.getPassengerById(this.id!).subscribe(data=>this.passenger=data);
  }
  onSubmit(f:NgForm){

  }

}
