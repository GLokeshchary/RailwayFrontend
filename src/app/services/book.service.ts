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
  bookTicketByTrainNo(bookticket:BookedTicket,trainNo:string,coach:string):Observable<BookedTicket>{
    const baseurl =`http://localhost:3333/customer/bookTicketByTrainNo/${trainNo}/${coach}`;
    return this.http.post<BookedTicket>(`${baseurl}`,bookticket);

  }
  savePassengers(passenger:Passenger):Observable<Passenger>{
    const baseurl=`http://localhost:3333/customer/savePassenger`;
    return this.http.post<Passenger>(`${baseurl}`,passenger);
  }
  getAllPassengers():Observable<Passenger[]>{
    const url=`http://localhost:3333/customer/getAllPassengers`;
    return this.http.get<Passenger[]>(`${url}`);
  }
  deleteAllPassengers(){
    const url=`http://localhost:3333/customer/deleteAllPassengerList`
    return this.http.delete(`${url}`);
  }
}
