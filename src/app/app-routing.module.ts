import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ShowDriversComponent } from './components/show-drivers/show-drivers.component';
// import { HomeComponent} from './components/home/home.component';

const routes: Routes = [

// {path: "drivers", component: ShowDriversComponent},
// {path: "home", component: HomeComponent},
// {path: "**", component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
