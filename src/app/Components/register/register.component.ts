import { Component, OnInit } from '@angular/core';

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
  showLogin:boolean;
  showRegister:boolean;

  constructor() { }

  ngOnInit() {
    this.showLogin = false;
    this.showRegister = true;
  }
<<<<<<< Updated upstream

  submit(){
    // validate address
    // add user to database

    this.showLogin = true;
    this.showRegister = false;
=======
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
  
    let state=this.state;
    let zip= this.zip;
    let uaddress= this.street + ", "+ this.city + ", " + state + " " + zip;
    let  empl:Employee = new Employee(0,this.email,this.fname,this.lname,this.phone,this.username,this.password,uaddress,true,true,this.checked,false,this.office);
    let veri = await this.cs.verifyAddress(state ,this.city, this.street, zip);
    console.log(veri);
    let verstat = veri;
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
>>>>>>> Stashed changes
  }

}
