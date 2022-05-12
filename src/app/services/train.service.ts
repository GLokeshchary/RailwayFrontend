import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Train } from '../models/train';
import { Values } from '../models/values';

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
  getTrainList():Observable<Train[]>{
    const baseUrl=`http://localhost:1111/trains/public/getAllTrains`;
    return this.httpClient.get<Train[]>(`${baseUrl}`);
  }
  getValues(trainNo:string,coach:string){
    const url=`http://localhost:1111/trains/public/getPriceByTrainNo/${trainNo}/${coach}`;
    return this.httpClient.get<Values>(`${url}`);
  }
  
}
