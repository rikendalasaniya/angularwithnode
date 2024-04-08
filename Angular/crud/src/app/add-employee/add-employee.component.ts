
import { Component } from '@angular/core';
import { ApiEmployeeService } from '../api-employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent {
  editid = -1;
  data: any = {
    EmpImage: '',
    EmpName: '',
    EmpCity: '',
    EmpDesc: '',
    EmpJoiningDate: '',
    Empexperience: '',
  };
  constructor(
    private _api: ApiEmployeeService,
    private _router: Router,
    private _activatedroute: ActivatedRoute
  ) { }
  addemp(form: any) {
    if (this.editid==-1) {

      this._api.insert(form).subscribe((res: any) => {
        this.data = res;
        this._router.navigate(['employee']);
      });

      

    }
    else {
      this._api.update(form, this.editid).subscribe((res: any) => {
        this._router.navigate(['employee'])
      })
    }
  }

  ngOnInit(): void {
    this.editid = this._activatedroute.snapshot.params[('id')]
    this._api.getById(this.editid).subscribe((res: any) => {
      this.data.EmpImage = res.EmpImage;
      this.data.EmpName = res.EmpName;
      this.data.EmpCity = res.EmpCity;
      this.data.EmpDesc = res.EmpDesc;
      this.data.EmpJoiningDate = res.EmpJoiningDate;
      this.data.Empexperience = res.Empexperience;
    });
  }
}
