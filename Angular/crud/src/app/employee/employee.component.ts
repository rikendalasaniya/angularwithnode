import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiEmployeeService } from '../api-employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  Employee: any = [];

  constructor(
    private _apiEmployee: ApiEmployeeService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
  ) {}

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this._apiEmployee.getAllEmployee().subscribe((res) => {
      this.Employee = res;
    });
  }

  deleteEmp(id: any) {
    this._apiEmployee.deleteEmployee(id).subscribe(() => {
      this.ngOnInit();
    });
  }
}
