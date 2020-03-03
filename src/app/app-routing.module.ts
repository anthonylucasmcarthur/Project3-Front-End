import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowDriversComponent } from './Components/show-drivers/show-drivers.component';
import { HomeComponent} from './Components/home/home.component';
import { EmployeePageComponent } from './Components/employee-page/employee-page.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ManagerPageComponent } from './Components/manager-page/manager-page.component';

const routes: Routes = [

{path: "drivers", component: ShowDriversComponent},
{path: "home", component: HomeComponent},
{path: "profile", component: EmployeePageComponent},
{path: "register", component: RegisterComponent},
{path: "login", component: LoginComponent},
{path: "manager", component: ManagerPageComponent},
{path: "**", component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
