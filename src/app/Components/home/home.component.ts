import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showHome:boolean;
  showLogin:boolean;
  showRegister:boolean;

  constructor() { }

  ngOnInit() {
    this.showHome = true;
    this.showLogin = false;
    this.showRegister = false;
  }


  Login(){
    this.showHome = false;
    this.showLogin = true;
  }

  Register(){
    this.showHome = false;
    this.showRegister = true;
  }

}
