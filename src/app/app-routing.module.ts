import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ManagerEditEmployeeComponent } from './Components/manager-edit-employee/manager-edit-employee.component';


const routes: Routes = [
{path: "mee", component : ManagerEditEmployeeComponent}, 
{path:"**", component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
