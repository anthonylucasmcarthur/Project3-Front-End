import { Component, OnInit } from '@angular/core';
import{Employee} from 'src/app/Models/Employee';
import{EmployeeServiceService} from 'src/app/Services/employee-service.service';
import{Office} from 'src/app/Models/Office';
import{OfficeServiceService} from 'src/app/Services/office-service.service';
import {ConfigServiceService} from 'src/app/Services/config-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fname:string;
  lname:string;
  email:string;
  phone:string;
  username:string;
  password:string;
  street:string;
  city:string;
  state:string;
  zip:number;
  checked: boolean;
  showLogin:boolean;
  showRegister:boolean;
  offices: Office;
  office: Office;
  states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS',
            'KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY',
            'NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV',
            'WI','WY'];
  constructor(private es: EmployeeServiceService, private os: OfficeServiceService, private cs:ConfigServiceService) { 
    this.checked = false;
  }
  ngOnInit() {
    this.showLogin = false;
    this.showRegister = true;
    this.offices = JSON.parse(sessionStorage.getItem("offices"));
    console.log(this.offices);
    this.office = this.offices[0];
  }
   // this.employee_id = employee_id;
  // this.email = email;
  // this.first_name = first_name;
  // this.last_name = last_name;
  // this.phone_number = phone_number;
  // this.username = username;
  // this.password = password;
  // this.user_address = user_address;
  // this.is_accepting_rides = is_accepting_rides;
  // this.is_active = is_active;
  // this.isDriver = isDriver;
  // this.is_manager = is_manager;
  // this.office = office;
  async submit(){
    
    let username=((document.getElementById("username")as HTMLInputElement).value);
    let password=((document.getElementById("password")as HTMLInputElement).value);
    let email=((document.getElementById("email")as HTMLInputElement).value);
    let phone=((document.getElementById("phone")as HTMLInputElement).value);
    let fname=((document.getElementById("fname")as HTMLInputElement).value);
    let lname=((document.getElementById("lname")as HTMLInputElement).value);
    let street=((document.getElementById("street")as HTMLInputElement).value);
    let city=((document.getElementById("city")as HTMLInputElement).value);
    let state=this.state;
    let zip= this.zip;
    let uaddress= street + ", "+ city + ", " + state + " " + zip;
    let  empl:Employee = new Employee(0,email,fname,lname,phone,username,password,uaddress,true,true,this.checked,false,this.office);
    let veri = await this.cs.verifyAddress(state ,city, street, zip);
    console.log(veri);
    let verstat = veri.is_valid;
    if(verstat) {
      try {
        let e:Employee =await this.es.addEmployee(empl);
      } catch(e) {
        console.log(e);
      }
    } else {
      console.log("asdasd");
    }
    
    // this.showLogin = true;
    // this.showRegister = false;
  }

  changeLocation(event) {
    let option = event.target.options.selectedIndex;
    this.office = this.offices[option];
    console.log(this.office);
	}
}
