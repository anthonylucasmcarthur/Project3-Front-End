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

  submit(){
    // validate address
    // add user to database

    this.showLogin = true;
    this.showRegister = false;
  }

}
