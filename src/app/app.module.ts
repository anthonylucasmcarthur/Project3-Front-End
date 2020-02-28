import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ManagerPageComponent } from './Components/manager-page/manager-page.component';
import { EmployeePageComponent } from './Components/employee-page/employee-page.component';
import { ShowDriversComponent } from './Components/show-drivers/show-drivers.component';
import { MapComponent } from './Components/map/map.component';
import { DriverListComponent } from './Components/driver-list/driver-list.component';
import { EditContactComponent } from './Components/edit-contact/edit-contact.component';
import { EditLocationComponent } from './Components/edit-location/edit-location.component';
import { EditCarComponent } from './Components/edit-car/edit-car.component';
import { EditOfficeComponent } from './Components/edit-office/edit-office.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { ManagerEditEmployeeComponent } from './Components/manager-edit-employee/manager-edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ManagerPageComponent,
    EmployeePageComponent,
    ShowDriversComponent,
    MapComponent,
    DriverListComponent,
    EditContactComponent,
    EditLocationComponent,
    EditCarComponent,
    EditOfficeComponent,
    NavBarComponent,
    ManagerEditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
