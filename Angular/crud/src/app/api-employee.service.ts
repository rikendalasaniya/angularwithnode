
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiEmployeeService {
  private apiUrl = 'http://localhost:3000/employees/';
  constructor(private _http: HttpClient) { }

  getAllEmployee() {
    return this._http.get(this.apiUrl);
  }
  getById(id: any) {
    return this._http.get(this.apiUrl + id);
  }
  deleteEmployee(id: any) {
    return this._http.delete(this.apiUrl + id);
  }
  insert(form: any) {
    return this._http.post(this.apiUrl, form);
  }
  update(form: any, id: any) {
    return this._http.put(this.apiUrl + id, form);
  }

}
