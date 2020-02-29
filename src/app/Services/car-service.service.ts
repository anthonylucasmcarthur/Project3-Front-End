import { Injectable } from '@angular/core';
import {Car} from 'app/Models/Car';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  constructor(private http:HttpClient) { }

  getCarById(cid:number):Promise<Car>{

    return this.http.get<Car>(`http://localhost:9999/cars/${cid}`).toPromise();
  }

}
