import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookedTicket } from '../models/booked-ticket';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  bookTicketByTrainNo(bookticket:BookedTicket,trainNo:string,coach:string):Observable<BookedTicket>{
    const baseurl =`http://localhost:3333/customer/bookTicketByTrainNo/${trainNo}/${coach}`;
    return this.http.post<BookedTicket>(`${baseurl}`,bookticket);

  }
}
