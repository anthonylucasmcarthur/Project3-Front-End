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
  car : Car = new Car(0,"", "", "", 1, 2000, this.employee);
  make : string;
  model : string;
  color : string;
  year : number;
  seats : number;
  
  ngOnInit() {
    this.employee = JSON.parse(sessionStorage.getItem('User'));
    console.log(this.employee);
    this.GetCarByEmployeeId(this.employee.employee_id);
  }

  async GetCarByEmployeeId(id:number){
    let c: any = await this.carService.getCarByEmployeeId(id)
    .then((onfulfilled) => {
      console.log(onfulfilled);
      this.car = onfulfilled;
      this.make = this.car.make;
      this.model = this.car.model;
      this.color = this.car.color;
      this.year = this.car.car_year;
      this.seats = this.car.available_seats;
      console.log(this.car);
      return onfulfilled;
    })
    .catch(error =>{
      console.log("");
    })
    console.log(c);
  }

  async UpdateCarInfo(){
    this.car = new Car(this.car.car_id, this.color, this.make, this.model, this.seats, this.year, this.employee);

    let updated: Car = await this.carService.updateCar(this.car)
    .then((onfulfilled) => {
      this.car = onfulfilled;
      console.log(this.car);
      return onfulfilled;
    })
  }
}
