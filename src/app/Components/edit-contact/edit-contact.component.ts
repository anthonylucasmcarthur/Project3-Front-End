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
  f_name : string;
  l_name : string;
  username : string;
  password : string;
  email : string;
  phone : string;
  address : string;
  isDriver : boolean;
  isActive : boolean;


  ngOnInit() {
    this.configService.currentEmployee.subscribe(currentEmployee => this.employee = currentEmployee);
  }

  async UpdateContactInfo(){
    let employee : Employee = new Employee(this.employee.employee_id, this.email, this.f_name, this.l_name,
      this.phone, this.username, this.password, this.address, this.employee.is_accepting_rides,
      this.isActive, this.isDriver, this.employee.is_manager, this.employee.office);

    let updated: Employee = await this.employeeService.updateEmployee(employee)
    .then((onfulfilled) => {
      this.employee = onfulfilled;
      console.log(this.employee);
      return onfulfilled;
    })
  }
}
