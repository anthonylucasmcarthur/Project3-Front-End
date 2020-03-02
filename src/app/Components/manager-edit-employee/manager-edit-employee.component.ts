import { Component, OnInit} from '@angular/core';
import { Employee } from 'src/app/Models/Employee';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';

@Component({
  selector: 'app-manager-edit-employee',
  templateUrl: './manager-edit-employee.component.html',
  styleUrls: ['./manager-edit-employee.component.css']
})
export class ManagerEditEmployeeComponent implements OnInit {


  employees:Array<Employee>= [];
  
  constructor(public ess:EmployeeServiceService) { }

async populateEmployeeTable(){
  let tempE:Employee[] = await this.ess.getAllEmployees(); 
  this.employees = tempE; 
}

  ngOnInit() {
    this.populateEmployeeTable();
  }

  
  async delete(employee){
    await this.ess.deleteEmployee(employee.employee_id);
    this.ngOnInit();
  }
  async promote(employee){

    employee.is_manager = true; 
    await this.ess.updateEmployee(employee);
    this.ngOnInit(); 
  }
}
