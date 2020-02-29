import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Office} from 'app/Models/Office';

@Injectable({
  providedIn: 'root'
})
export class OfficeServiceService {

  constructor(private http:HttpClient) { }

  getOfficeById(office_id:number):Promise<Office>{

    return this.http.get<Office>(`http://localhost:9999/offices/${office_id}`).toPromise();
  }

  getAllOffices():Promise<Office>{

    return this.http.get<Office>(`http://localhost:9999/offices`).toPromise();
  }

  addOffice(office:Office):Promise<Office>{
   
    return this.http.post<Office>(`http://localhost:9999/offices`,office).toPromise();
  }

  deleteOffice(office:Office):Promise<any>{

    return this.http.delete<any>(`http://localhost:9999/offices/`,office).toPromise();

  }

  updateOffice(office:Office):Promise<Office>{

    return this.http.put<Office>(`http://localhost:9999/offices/`,office).toPromise();

  }
}
