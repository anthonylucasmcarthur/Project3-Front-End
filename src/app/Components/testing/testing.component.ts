import { Component, OnInit } from '@angular/core';
import { CarServiceService } from 'src/app/Services/car-service.service';
import { ConfigServiceService } from 'src/app/Services/config-service.service';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';
import { OfficeServiceService } from 'src/app/Services/office-service.service';
import { Car } from 'src/app/Models/Car';
import { Employee } from 'src/app/Models/Employee';
import { Office } from 'src/app/models/Office'

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

// car defined in models
   cars:Array<Car>;
   car:Car;
   employees:Employee;
   //employees:Array<Employee>;
//  carC:Car= {
//   car_id: 0,
//   color: "blue",
//   make: "Jeep",
//   model: "Grand Cherokee",
//   available_seats: 5,
//   car_year: 2020,
//   employee: "em"
 
// emp:Employee = {
//   employee_id : 0;
//   email : "jkittens@yahoo.com",
//   first_name : "Janeva",
//   last_name : "Kittens",
//   phone_number : "351-438-1486",
//   username : "JKittens",
//   password : "catsahoy",
//   user_address : "13161 Fox Hunt Lane, Herndon, VA 20171",
//   is_accepting_rides : true,
//   is_active : true,
//   isDriver : true,
//   is_manager : false,
//   office : 2;
// }
//  }
office1:Office = {
  office_id : 1,
  office_address : "496 High Street"
}

defineOffice(){
  let office1 = this.os.getOfficeById(108); 

}

employee1:Employee = {
  employee_id : 0,
  email : "anthony@getMaxListeners.com",
  first_name : "Anthony",
  last_name : "McArthur",
  phone_number : "3402500340",
  username : "Tmac",
  password : "password",
  user_address : "12404 Koehler Dr",
  is_accepting_rides : true,
  is_active : true,
  isDriver : true,
  is_manager : false,
  office : this.office1
}

car1:Car = {
  car_id : 0,
  color : "blue",
  make : "Chevy",
  model : "Silverado",
  available_seats : "5",
  car_year : 2001,
  employee : this.employees
}





constructor(private cs:CarServiceService,private es:EmployeeServiceService,private os:OfficeServiceService) { }

  
  
  ngOnInit() {
    this.getCars();
    this.getCarById();
    //this.addCar();
    this.deleteCar();
    this.getEmployeeById();
    this.getAllEmployees();
    this.getAllOffices();
    this.getOfficeById(2);
    this.addOffice();
    //this.defineOffice();
    this.deleteOffice();
   // this.login();
   // this.deleteEmployee();

    //add and update
    

  }

  async getCars(){
    let response = await this.cs.getAllCars();
    console.log(response);
    this.cars = response;
  }
   async getCarById(){
     let response = await this.cs.getCarById(1);
     console.log(response);
    this.car = response;
   }

   async deleteCar(){

  let response = await this.cs.deleteCar(20);

  this.car = response;


   }

   async getEmployeeById(){

    let response = await this.es.getEmployeeById(3);
    this.employees = response;


   }


 async getAllEmployees(){
   let response = await this.es.getAllEmployees();
   console.log(response);
this.employees = response;
 }

//  async login(){
//    let response = await this.es.login();
//  }  //   this.getAllEmployees();
  //   this.login();
  //   this.deleteEmployee();

   
     async addCar(carC:Car){
      let response = await this.cs.addCar(this.car1);
      
     }

    // works
  async getOfficeById(id:number){
    let response = await this.os.getOfficeById(id);
    console.log(response);
  }

  // works
  async getAllOffices(){
    let response = await this.os.getAllOffices();
    console.log(response);
  }

  // works
  async addOffice(){
    let response = await this.os.addOffice(this.office1);
    console.log(response);
  }

  // works
  async deleteOffice(){
    await this.os.deleteOffice(107);
  }


  // testUpdateOffice(){
  //   let home:Office = this.getOfficeById(108).subscribe {
  //      office_id : 108,
  //     office_address : "13492 Monroe St"
  //   }
  //   this.updateOffice(this.home);
  // }

  async updateOffice(){
    let response = await this.os.updateOffice(this.office);
    console.log(response);
  }

  }

    
  //  // this for global scope referenced elsewhere 
  //   //this.cars = response;

   

  
