import { Component, OnInit, TemplateRef } from '@angular/core';
import{Employee} from 'src/app/Models/Employee';
import{EmployeeServiceService} from 'src/app/Services/employee-service.service';
import{Office} from 'src/app/Models/Office';
import{OfficeServiceService} from 'src/app/Services/office-service.service';
import {ConfigServiceService} from 'src/app/Services/config-service.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef} from 'ngx-bootstrap';
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
  modalRef: BsModalRef;


  states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS',
            'KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY',
            'NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV',
            'WI','WY'];
  constructor(private es: EmployeeServiceService, private os: OfficeServiceService, private cs:ConfigServiceService, private r : Router, private modalService : BsModalService) { 
    this.checked = false;
  }
  ngOnInit() {
    this.showLogin = false;
    this.showRegister = true;
    this.offices = JSON.parse(sessionStorage.getItem("offices"));
    console.log(this.offices);
    this.office = this.offices[0];
  }

  openModal(template :TemplateRef<any>){
		this.modalRef = this.modalService.show(template);
	}

  async submit(){
    let uaddress= this.street + ", "+ this.city + ", " + this.state + " " + this.zip;
    let  empl:Employee = new Employee(0,this.email,this.fname,this.lname,this.phone,this.username,this.password,uaddress,true,true,this.checked,false,this.office);
    let veri = await this.cs.verifyAddress(this.state ,this.city, this.street, this.zip);
    console.log(veri);
    let verstat = veri;
    if(verstat) {
      try {
        let e:Employee =await this.es.addEmployee(empl);
        this.r.navigateByUrl("/home");
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
