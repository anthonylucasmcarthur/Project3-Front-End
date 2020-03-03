import { Component, OnInit } from '@angular/core';
import { CarServiceService } from 'src/app/Services/car-service.service';
import { ConfigServiceService } from 'src/app/Services/config-service.service';
import { Employee } from 'src/app/Models/Employee';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';
import { Car } from 'src/app/Models/Car';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})

export class EditCarComponent implements OnInit {

  constructor(private carService: CarServiceService, private employeeService:EmployeeServiceService, private configService: ConfigServiceService) { }

  employee : Employee;
  car : Car;
  make : string;
  model : string;
  colour : string;
  year : number;
  seats : number;
  
  ngOnInit() {
    this.employee = JSON.parse(sessionStorage.getItem('User'));
    console.log(this.employee);
    // this.configService.currentEmployee.subscribe(currentEmployee => this.employee = currentEmployee);
    this.GetCarByEmployeeId(this.employee.employee_id);
  }

  async GetCarByEmployeeId(id:number){
    let car: Car = await this.carService.getCarByEmployeeId(id)
    .then((onfulfilled) => {
      this.car = onfulfilled;
      console.log(this.car);
      return onfulfilled;
    })
  }

  async UpdateCarInfo(){
    this.car = new Car(this.car.car_id, this.colour, this.make, this.model, this.seats, this.year, this.car.employee);
    
    let updated: Car = await this.carService.updateCar(this.car)
    .then((onfulfilled) => {
      this.car = onfulfilled;
      console.log(this.car);
      return onfulfilled;
    })
  }
}
