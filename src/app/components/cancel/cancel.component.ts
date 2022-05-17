import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookedTicket } from 'src/app/models/booked-ticket';
import { BookService } from 'src/app/services/book.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import Swal from 'sweetalert2';

let checkPnr: boolean;

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {

  isOpened:boolean=false;
  userpnr:number|undefined;
  pnrexists?:boolean;
  bookedTicket:BookedTicket=new BookedTicket();
  email?:string;
  constructor(private bookservice:BookService,private tokenstorage:TokenStorageService ,private router:Router) { }

  ngOnInit(): void {
    this.email=this.tokenstorage.getUser().email;

  }
  onSubmit(){
   
    this.bookservice.checkPnr(this.userpnr!).subscribe(data=>{checkPnr=data;console.log(data);});
    console.log(checkPnr);
    if(!checkPnr){
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, cancel the ticket it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.bookservice.cancelTicketByPNR(this.userpnr!,this.email!,this.bookedTicket).subscribe(data=>console.log(data));
          swalWithBootstrapButtons.fire(
            'Cancelled Successfully!',
            'Your ticket has been Cancelled.',
            'success'
          )
          this.router.navigate(['/home']);
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid pnr!',
      })
    }
    
   

  }
}
