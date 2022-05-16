import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookedTicket } from 'src/app/models/booked-ticket';
import { BookService } from 'src/app/services/book.service';
import { PaymentService } from 'src/app/services/payment.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import Swal from 'sweetalert2';
declare var Razorpay: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  form:any = {}; 
  paymentId?: string;
  error?: string;
  amount?:string;
  trainNo?:string;
  coach?:string;
  bookedTicket:BookedTicket=new BookedTicket();
 
  constructor(private orderService: PaymentService,private route:ActivatedRoute,private tokenstorage:TokenStorageService,private bookservice:BookService,private router:Router) {
    this.route.paramMap.subscribe((params)=>{this.amount=params.get('totalamount')!;});
    this.route.paramMap.subscribe((params)=>{this.trainNo=params.get('trainNo')!;});
    this.route.paramMap.subscribe((params)=>{this.coach=params.get('coach')!;});
    this.form.name=this.tokenstorage.getUser().username;
    this.form.email=this.tokenstorage.getUser().email;
    this.form.amount=this.amount;
  }
  ngOnInit(): void {
      
    
  }

  options = {
  "key": "",
  "amount": "", 
  "name": "GoTrains",
  "description": "Booking a Train",
  "image": "assets/images/besttrainlogo.jfif",
  "order_id":"",
  "handler": function (response:any){
      var event = new CustomEvent("payment.success", 
          {
              detail: response,
              bubbles: true,
              cancelable: true
          }
      );    
      window.dispatchEvent(event);
  }
  ,
  "prefill": {
  "name": "",
  "email": "",
  "contact": ""
  },
  "notes": {
  "address": ""
  },
  "theme": {
  "color": "#3399cc"
  }
  };

  onSubmit(): void {
      this.paymentId = ''; 
      this.error = ''; 
      this.orderService.createOrder(this.form).subscribe(
      data => {
          this.options.key = data.secretKey;
          this.options.order_id = data.razorpayOrderId;
          this.options.amount = data.applicationFee; //paise
          this.options.prefill.name = this.form.name;
          this.options.prefill.email = this.form.email;
          this.options.prefill.contact = this.form.phone;
          var rzp1 = new Razorpay(this.options);
          rzp1.open();
                     
          rzp1.on('payment.failed',  (response:any) =>{    
              // Todo - store this information in the server
              console.log(response.error.code);    
              console.log(response.error.description);    
              console.log(response.error.source);    
              console.log(response.error.step);    
              console.log(response.error.reason);    
              console.log(response.error.metadata.order_id);    
              console.log(response.error.metadata.payment_id);
              this.error = response.error.reason;
          }
          );
      }
      ,
      err => {
          this.error = err.error.message;
      }
      );
  }

  @HostListener('window:payment.success', ['$event']) 
  onPaymentSuccess(event:any): void {
      this.orderService.updateOrder(event.detail).subscribe(
      data => {
          this.paymentId = data.message;
      }
      ,
      err => {
          this.error = err.error.message;
      }
      );
      this.bookedTicket.status="Confirmed";
      this.bookedTicket.transactional_id=this.paymentId;
      this.bookservice.bookTicketByTrainNo(this.bookedTicket,this.trainNo!,this.coach!,this.form.email).subscribe(data=>console.log(data),error=>alert(error));
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Payment SuccessFull',
        showConfirmButton: true,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.router.navigate(['/home']);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Booked SuccessFully',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })

  }

}
