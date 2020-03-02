import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/Models/Employee';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';

@Component({
  selector: 'app-manager-edit-employee',
  templateUrl: './manager-edit-employee.component.html',
  styleUrls: ['./manager-edit-employee.component.css']
})
export class ManagerEditEmployeeComponent implements OnInit {


 // employee:Array<Employee>= [];
  
  constructor(public ess:EmployeeServiceService) { }

async populateEmployeeTable(){
  let tempE:Employee[] = await this.ess.getAllEmployees(); 
  this.employee = tempE; 
}

  ngOnInit() {
    this.populateEmployeeTable();
  }

}
