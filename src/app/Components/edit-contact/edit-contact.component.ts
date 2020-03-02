import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/Employee';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  constructor(private es: EmployeeServiceService) { }

  employee: Employee = null;
  ue:Employee = null;

  ngOnInit() {
  }

  async UpdateContactInfo(employee: Employee){
    let updated: Employee = await this.es.updateEmployee(employee)
    .then((onfulfilled) => {
      this.ue = onfulfilled;
      console.log(this.ue);
      return onfulfilled;
    })
  }
}
