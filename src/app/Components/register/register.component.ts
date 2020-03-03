import { Component, OnInit } from '@angular/core';
import{Employee} from 'src/app/Models/Employee';
import{EmployeeServiceService} from 'src/app/Services/employee-service.service';
import{Office} from 'src/app/Models/Office';
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
  zip:string;
  checked: boolean;
  showLogin:boolean;
  showRegister:boolean;
  constructor(private es: EmployeeServiceService) { 
    this.checked = false;
  }
  ngOnInit() {
    this.showLogin = false;
    this.showRegister = true;
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
    let state=((document.getElementById("state")as HTMLInputElement).value);
    let zip=((document.getElementById("zip")as HTMLInputElement).value);
    let office=((document.getElementById("office")as HTMLInputElement).value);
    let uaddress= street + ", "+ city + ", " + state + " " + zip;
    let  off:Office = new Office(0,office);
    let  empl:Employee = new Employee(0,email,fname,lname,phone,username,password,uaddress,true,true,this.checked,false,off);
    try {
      let e:Employee =await this.es.addEmployee(empl);
  } catch(e) {
      console.log(e);
  }
    // this.showLogin = true;
    // this.showRegister = false;
  }
}
