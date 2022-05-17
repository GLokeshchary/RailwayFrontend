import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { BookTicket } from '../models/book-ticket';
import { BookedTicket } from '../models/booked-ticket';
import { Passenger } from '../models/passenger';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  bookTicketByTrainNo2(bookticket:BookTicket,trainNo:string,coach:string):Observable<BookTicket>{
    const baseurl =`http://localhost:3333/customer/bookTicketByTrainNo2/${trainNo}/${coach}`;
    return this.http.post<BookTicket>(`${baseurl}`,bookticket);

  }
  bookTicketByTrainNo(bookticket:BookedTicket,trainNo:string,coach:string,email:string):Observable<BookedTicket>{
    const baseurl =`http://localhost:3333/customer/bookTicketByTrainNo/${trainNo}/${coach}/${email}`;
    return this.http.post<BookedTicket>(`${baseurl}`,bookticket);

  }
  savePassengers(passenger:Passenger):Observable<Passenger>{
    const baseurl=`http://localhost:3333/customer/savePassenger`;
    return this.http.post<Passenger>(`${baseurl}`,passenger);
  }
  cancelTicketByPNR(pnr:number,email:string,bookedTicket:BookedTicket):Observable<BookTicket>{
    const url=`http://localhost:3333/customer/cancelBookedTicketByPNR/${pnr}/${email}`;
    return this.http.put<BookTicket>(`${url}`,bookedTicket);
  }
  getAllPassengers():Observable<Passenger[]>{
    const url=`http://localhost:3333/customer/getAllPassengers`;
    return this.http.get<Passenger[]>(`${url}`);
  }
  getPassengerById(passengerId:string):Observable<Passenger>{
    const url=`http://localhost:3333/customer/getPassengerById/${passengerId}`;
    return this.http.get<Passenger>(`${url}`);
  }
  updatePassengerById(passengerId:string,passenger:Passenger):Observable<Passenger>{
    const url=`http://localhost:3333/customer/updatePassengerById/${passengerId}`;
    return this.http.put<Passenger>(`${url}`,passenger);
  }
  deleteAllPassengers(){
    const url=`http://localhost:3333/customer/deleteAllPassengerList`;
    return this.http.delete(`${url}`);
  }
  checkPnr(pnr:number):Observable<boolean>{
    const url=`http://localhost:3333/customer/checkPnrExistsOrNot/${pnr}`;
    return this.http.get<boolean>(`${url}`);
  }
  getBookedTicketByPnr(pnr:number):Observable<BookedTicket>{
    const url=`http://localhost:3333/customer/getbookedTicketByPNR/${pnr}`;
    return this.http.get<BookedTicket>(`${url}`);
  }
  deletePassengerById(passengerid:string):Observable<string>{
    const url=`http://localhost:3333/customer/deletePassengerById/${passengerid}`;
    return this.http.delete<string>(`${url}`);
  }
}
