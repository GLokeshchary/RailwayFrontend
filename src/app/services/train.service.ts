import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Train } from '../models/train';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private httpClient:HttpClient) { }
  getTrainsBetweenStations(DepartFrom:any,goingTo:any):Observable<Train[]>{
    const baseUrl=`http://localhost:1111/trains/public/getTrainBetween/${DepartFrom}:${goingTo}`;
    return this.httpClient.get<Train[]>(`${baseUrl}`);
  }
  getTrainByTrainNo(trainNo:string):Observable<Train>{
    const baseUrl=`http://localhost:1111/trains/public/getTrainByTrainNo/${trainNo}`;
    return this.httpClient.get<Train>(`${baseUrl}`);

  }
}
