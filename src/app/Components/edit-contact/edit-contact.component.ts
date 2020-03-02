import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/Employee';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';
import { ConfigServiceService } from 'src/app/Services/config-service.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  constructor(private employeeService: EmployeeServiceService, private configService:ConfigServiceService) { }

  employeeId : number;
  employee: Employee = null;

  ngOnInit() {
    this.configService.currentEmployee.subscribe(currentEmployee => this.employee = currentEmployee);
    // this.GetEmployeeById(this.employeeId);
  }

  // async GetEmployeeById(id:number){
  //   let special: Employee = await this.es.getEmployeeById(id)
  //   .then((onfulfilled) => {
  //     this.employee = onfulfilled;
  //     console.log(this.employee);
  //     return onfulfilled;
  //   })
  // }

  async UpdateContactInfo(employee: Employee){
    let updated: Employee = await this.employeeService.updateEmployee(employee)
    .then((onfulfilled) => {
      this.employee = onfulfilled;
      console.log(this.employee);
      return onfulfilled;
    })
  }
}
