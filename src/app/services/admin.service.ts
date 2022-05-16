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
  updateTrain(trainNo:string,train:Train):Observable<Train>{
    const url=`http://localhost:2222/admin/updateTrainByTrainNo/${trainNo}`;
    return this.httpClient.put<Train>(`${url}`,train);
  }
  getTrainbyTrainNo(trainNo:string):Observable<Train>{
    const url=`http://localhost:1111/trains/public/getTrainByTrainNo/${trainNo}`;
    return this.httpClient.get<Train>(`${url}`);
  }
  deleteTrainByTrainNo(trainNo:string):Observable<string>{
    const url=`http://localhost:2222/admin/deleteTrainByTrainNo/${trainNo}`;
    return this.httpClient.delete<string>(`${url}`);

  }
}
