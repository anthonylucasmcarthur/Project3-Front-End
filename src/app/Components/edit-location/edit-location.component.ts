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
  offices : Array<Office> = [];
  officeCities : Array<string> = [];
  cityOffices : Array<Office> = [];
  city : string = " Select a City ";
  office : string = " Select an Office ";
  officeObject : Office;

  ngOnInit() {
    this.configService.currentEmployee.subscribe(currentEmployee => this.employee = currentEmployee);
    this.GetAllOffices();
  }

  GetAllCityOffices(){
    this.cityOffices = [];
    for(let i = 0; i < this.offices.length; i++){
      if(this.offices[i].office_address.includes(this.city)){
        this.cityOffices.push(this.offices[i]);
      }
    }
    console.log(this.cityOffices);
  }

  updateOffice(){
    console.log(this.office);
    for(let i = 0; i < this.cityOffices.length; i++){
      if(this.office == this.cityOffices[i].office_address){
        this.officeObject = this.cityOffices[i];
      }
    }
    console.log(this.officeObject);

  }

  async GetAllOffices(){
    let o: Array<Office> = await this.officeService.getAllOffices()
    .then((onfulfilled) => {
      this.offices = onfulfilled;
      //for future batches, this whole mess below can be avoided by either seperating address into street, city, state and zip
        //or just making a new column and giving each office a name
      for(let i = 0; i < this.offices.length; i++){
        let counter = 0;
        let city : string = this.offices[i].office_address.split(", ")[1];
        for(let j = 0; j < this.officeCities.length; j++){
          if(this.officeCities[j] == city){
            counter++;
            break;
          }
        }
        if(counter == 0){
          this.officeCities.push(city);
        }
      }
      return onfulfilled;
    })
  }

  async UpdateContactInfo(){
    let employee : Employee = new Employee(this.employee.employee_id, this.employee.email, this.employee.first_name, this.employee.last_name,
      this.employee.phone_number, this.employee.username, this.employee.password, this.employee.user_address, this.employee.is_accepting_rides,
      this.employee.is_active, this.employee.isDriver, this.employee.is_manager, this.officeObject);

    let updated: Employee = await this.employeeService.updateEmployee(employee)
    .then((onfulfilled) => {
      this.employee = onfulfilled;
      console.log(this.employee);
      return onfulfilled;
    })
  }
}
