import { Component, OnInit } from '@angular/core';
import { BookedTicket } from 'src/app/models/booked-ticket';
import { BookService } from 'src/app/services/book.service';
import Swal from 'sweetalert2';

let checkPnr: boolean;
@Component({
  selector: 'app-checktickets',
  templateUrl: './checktickets.component.html',
  styleUrls: ['./checktickets.component.css']
})
export class CheckticketsComponent implements OnInit {

  isOpened:boolean=false;
  userpnr:number|undefined;
  pnrexists?:boolean;
  bookedTicket:BookedTicket=new BookedTicket();
  constructor(private bookservice:BookService) { }

  ngOnInit(): void {

  }
  onSubmit(){
   
    this.bookservice.checkPnr(this.userpnr!).subscribe(data=>{checkPnr=data;console.log(data);});
    console.log(checkPnr);
    
    if (checkPnr) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'PNR WITH '+this.userpnr+' DOESNOT EXISTS',
      });
      
      
    }else{
      this.isOpened=true;
      this.bookservice.getBookedTicketByPnr(this.userpnr!).subscribe(data=>{this.bookedTicket=data;console.log(data);
      },error=>console.log(error)
      );
      
    }

  }

}
