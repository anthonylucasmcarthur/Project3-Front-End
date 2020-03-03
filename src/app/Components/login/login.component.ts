import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/Employee';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';
import { ConfigServiceService } from 'src/app/Services/config-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  showLogin:boolean;
  showNavBar:boolean;
  showManagerPage:boolean;
  showEmployeeProfile:boolean;
  showShowDrivers:boolean;

  constructor(private es : EmployeeServiceService, private cs : ConfigServiceService, private r : Router) { }

  ngOnInit() {
    this.showLogin = true;
    this.showManagerPage = false;
    this.showEmployeeProfile = false;
    this.showShowDrivers = false;
  }

  async employeelogin(){
    let username=((document.getElementById("username")as HTMLInputElement).value);
    let password=((document.getElementById("password")as HTMLInputElement).value);
    let  empl:Employee = new Employee(0,"","","","",username,password,"",false,true,false,false,null);
    let e:Employee = await this.es.login(empl);
      if(e != null){
        let key = 'User'
        sessionStorage.setItem(key,JSON.stringify(e));
        let user = JSON.parse(sessionStorage.getItem(key))
        if(e.is_manager){
          this.r.navigateByUrl("/manager");

        }else{
          this.r.navigateByUrl("/profile");
        }
      }
      else {
        console.log("c")
        alert("User or password doesnt exist!");
      } 
  }
}
