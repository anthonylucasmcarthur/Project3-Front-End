import { Component, OnInit } from '@angular/core';
import { Office } from 'src/app/Models/Office';
import { OfficeServiceService } from 'src/app/Services/office-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showHome:boolean;
  showLogin:boolean;
  showRegister:boolean;
  offices : Office[];

  constructor(private os : OfficeServiceService) { }

  ngOnInit() {
    
  }
  
  async register(){
    this.offices =  await this.os.getAllOffices();
    sessionStorage.setItem("offices", JSON.stringify(this.offices));
  }

}
