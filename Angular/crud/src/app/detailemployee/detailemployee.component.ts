
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiEmployeeService } from '../api-employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailemployee',
  templateUrl: './detailemployee.component.html',
  styleUrls: ['./detailemployee.component.css'],
})
export class DetailemployeeComponent {
  emp: any = {};
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _api: ApiEmployeeService,
    private _router: Router
  ) { }

  ngOnInit() {
    let id = this._activatedRoute.snapshot.params['id']
    this._api.getById(id).subscribe((res: any) => {
      this.emp = res;
    });
  }

  deleteemp(id: any) {
    this._api.deleteEmployee(id).subscribe((res) => {
      this._router.navigate(['employee']);
    });
  }
}
