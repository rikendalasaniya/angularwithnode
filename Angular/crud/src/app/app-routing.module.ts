import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AppComponent } from './app.component';
import { DetailemployeeComponent } from './detailemployee/detailemployee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'employee/add', component: AddEmployeeComponent },
  { path: 'employee/:id', component: DetailemployeeComponent },
  { path: 'employee/edit/:id', component: AddEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }