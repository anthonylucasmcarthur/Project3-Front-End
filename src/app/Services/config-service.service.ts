import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {

  constructor(private http:HttpClient) { }

  private employeeAccount = new BehaviorSubject<Employee>(null);
  currentEmployee = this.employeeAccount.asObservable();

  changeEmployee(employee : Employee):void{
    this.employeeAccount.next(employee);
  }

  getConfigurationByLabel(label:string):Promise<string>{

    return this.http.get(`http://localhost:9999/configurations/${label}`,{responseType: 'text'}).toPromise();
  }
}
