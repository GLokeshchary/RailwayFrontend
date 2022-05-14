import { Component, HostListener, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';
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
 
  constructor(private orderService: PaymentService) {

  }
  ngOnInit(): void {
    
  }

  options = {
  "key": "",
  "amount": "", 
  "name": "Java Chinna",
  "description": "Web Development",
  "image": "https://www.javachinna.com/wp-content/uploads/2020/02/android-chrome-512x512-1.png",
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
  }

}
