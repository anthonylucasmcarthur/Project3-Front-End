import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit {

  showCarEdit:boolean;
  showContactEdit:boolean;
  showLocationEdit:boolean;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Profile - Rideshare")
    this.showCarEdit = false;
    this.showContactEdit = true;
    this.showLocationEdit = false;
  }

  showCar(){
    this.showCarEdit = true;
    this.showContactEdit = false;
    this.showLocationEdit = false;
  }

  showLocation(){
    this.showCarEdit = false;
    this.showContactEdit = false;
    this.showLocationEdit = true;
  }

  showContact(){
    this.showCarEdit = false;
    this.showContactEdit = true;
    this.showLocationEdit = false;
  }
}
