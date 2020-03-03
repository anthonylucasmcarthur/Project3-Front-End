import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';
import { ConfigServiceService } from 'src/app/Services/config-service.service';
import { OfficeServiceService } from 'src/app/Services/office-service.service';
import { Employee } from 'src/app/Models/Employee';
import { Office } from 'src/app/Models/Office';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css']
})
export class EditLocationComponent implements OnInit {

  constructor(private officeService : OfficeServiceService, private employeeService : EmployeeServiceService, private configService:ConfigServiceService) { }

  employee : Employee = null;
  offices : Office;
  officeCities : Array<string> = [];

  ngOnInit() {
    this.configService.currentEmployee.subscribe(currentEmployee => this.employee = currentEmployee);
    this.GetAllOffices();
  }

  async GetAllOffices(){
    let offices: Office = await this.officeService.getAllOffices()
    .then((onfulfilled) => {
      this.offices = onfulfilled;
      console.log(this.offices);

      //for future batches, this whole mess below can be avoided by either seperating address into street, city, state and zip
        //or just making a new column and giving each office a name
      for(let i = 0; i < this.offices.length; i++){
        let counter = 0;
        let city : string = this.offices[i].office_address.split(", ")[1];
        for(let j = 0; j < this.officeCities.length; j++){
          if(this.officeCities[i] == city){
            counter++;
            break;
          }
        }

        if(counter== 0){
          this.officeCities.push(city);
        }
      }
      console.log(this.officeCities);
      return onfulfilled;
    })
  }

  async UpdateContactInfo(employee: Employee){
    let updated: Employee = await this.employeeService.updateEmployee(employee)
    .then((onfulfilled) => {
      this.employee = onfulfilled;
      console.log(this.employee);
      return onfulfilled;
    })
  }
}
