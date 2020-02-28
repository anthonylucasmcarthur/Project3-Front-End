import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.showLogin = true;
    this.showNavBar = false;
    this.showManagerPage = false;
    this.showEmployeeProfile = false;
    this.showShowDrivers = false;
  }

  submit(){

    this.showLogin = false;
    this.showNavBar = true;
    // choose which page to show
  }
}
