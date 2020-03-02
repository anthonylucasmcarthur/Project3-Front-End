import { Component, OnInit } from '@angular/core';
import { CarServiceService } from 'src/app/Services/car-service.service';
import { ConfigServiceService } from 'src/app/Services/config-service.service';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';
import { OfficeServiceService } from 'src/app/Services/office-service.service';
import { Car } from 'src/app/Models/Car';
import { Employee } from 'src/app/Models/Employee';
import { Office } from 'src/app/Models/Office';

@Component({
  selector: 'app-test-services',
  templateUrl: './test-services.component.html',
  styleUrls: ['./test-services.component.css']
})
export class TestServicesComponent implements OnInit {


  cars: Array<Car>;
  employees: Employee;

  office:Office = {
    office_id : 118,
    office_address : "496 High Street, Morgantown, WV 26506"
  }


  employee:Employee = {
    employee_id : 28,
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
    office : this.office 
  }
  
  car:Car = {
    car_id : 0,
    color: "white",
    make : "Chevy",
    model : "Silverado",
    available_seats : "5",
    car_year : 2001,
    employee : this.employee
  }

  
  
  constructor(private carService:CarServiceService, private configService:ConfigServiceService, private employeeService:EmployeeServiceService, private officeService:OfficeServiceService) { }

  ngOnInit() {
    // this.getAllCars();
    // this.getCarById();
    // this.addCar();
    // this.deleteCar();
    // this.getConfigurationByLabel();
    // this.getEmployeeById()
    // this.getAllEmployees();
    // this.deleteEmployee();
    // this.getOfficeById();
    // this.getAllOffices();
    // this.deleteOffice();
    // this.addOffice();
    // this.addEmployee();
    // this.addCar();
  }

  // works
  async getCarById(){
    let response = await this.carService.getCarById(1);
    console.log(response);
  }

  // works
  async getAllCars(){
    let response = await this.carService.getAllCars();
    console.log(response);
    this.cars = response;
  }

  // works
  async addCar(){
    let response = await this.carService.addCar(this.car);
    console.log(response);
  }

  // works
  async deleteCar(){
    let response = await this.carService.deleteCar(8);
    
  }

  async updateCar(){
    let response = await this.carService.updateCar(this.car);
    console.log(response);
  }

  // works
  async getConfigurationByLabel(){
    let response = await this.configService.getConfigurationByLabel("API_KEY");
    console.log(response);
  }

  // works
  async getEmployeeById(){
    let response = await this.employeeService.getEmployeeById(3);
    console.log(response);
  }

  // works
  async getAllEmployees(){
    let response = await this.employeeService.getAllEmployees();
    console.log(response);
    }

  // works
  async addEmployee(){
    let response = await this.employeeService.addEmployee(this.employee);
    console.log(response);
  }

  async deleteEmployee(){
    let response = await this.employeeService.deleteEmployee(11);
    console.log(response);
    }


  async updateEmployee(){
    let response = await this.employeeService.updateEmployee(this.employee);
    console.log(response);
  }  

  // works
  async getOfficeById(id:number){
    let response = await this.officeService.getOfficeById(id);
    console.log(response);
  }

  // works
  async getAllOffices(){
    let response = await this.officeService.getAllOffices();
    console.log(response);
  }

  // works
  async addOffice(){
    let response = await this.officeService.addOffice(this.office);
    console.log(response);
  }

  // works
  async deleteOffice(){
    await this.officeService.deleteOffice(107);
  }


  // testUpdateOffice(){
  //   let home:Office = this.getOfficeById(108).subscribe {
  //      office_id : 108,
  //     office_address : "13492 Monroe St"
  //   }
  //   this.updateOffice(this.home);
  // }

  async updateOffice(){
    let response = await this.officeService.updateOffice(this.office);
    console.log(response);
  }
}
