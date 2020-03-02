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

  employee : Employee = null;
  car : Car = new Car(0, "", "", "", 0, 2000, null);
  
  ngOnInit() {
    this.configService.currentEmployee.subscribe(currentEmployee => this.employee = currentEmployee);
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

  async UpdateCarInfo(car: Car){
    let updated: Car = await this.carService.updateCar(car)
    .then((onfulfilled) => {
      this.car = onfulfilled;
      console.log(this.car);
      return onfulfilled;
    })
  }
}
