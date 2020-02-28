import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-office',
  templateUrl: './edit-office.component.html',
  styleUrls: ['./edit-office.component.css']
})
export class EditOfficeComponent implements OnInit {

  showAddLocation:boolean;

  constructor() { }

  ngOnInit() {
    //Get list of Locations
    this.showAddLocation = false;
  }
  
  delete(id:number){

  }

  update(id:number){

  }

  addLocation(){

  }

}
