import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

declare var Razorpay: any;
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

   api_url=`http://localhost:8080/api/`;
  constructor(private http: HttpClient) {
 
  }
 
  createOrder(order:any): Observable<any> {
      return this.http.post("http://localhost:8080/api/order", {
      customerName: order.name,
      email: order.email,
      phoneNumber: order.phone,
      amount: order.amount
      });
  }
 
  updateOrder(order:any): Observable<any> {
      return this.http.put("http://localhost:8080/api/order", {
      razorpayOrderId: order.razorpay_order_id,
      razorpayPaymentId: order.razorpay_payment_id,
      razorpaySignature: order.razorpay_signature
      });
  }
}
