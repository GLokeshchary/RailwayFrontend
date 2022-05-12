import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Train } from '../models/train';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }
  gettrainList():Observable<Train[]>{
    const url=`http://localhost:2222/admin/findAllTrains`;
    return this.httpClient.get<Train[]>(`${url}`);
  }
}
