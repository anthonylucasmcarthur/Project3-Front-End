import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {

  constructor(private http:HttpClient) { }

  getConfigurationByLabel(label:string):Promise<string>{

    return this.http.get<string>(`http://localhost:9999/configurations/${label}`).toPromise();
  }
}
