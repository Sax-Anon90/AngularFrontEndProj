import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeViewModel } from '../Models/EmployeeViewModel';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private apiUri = `${environment.apiUrl}/Employee`;


  constructor(private _HttpClient: HttpClient) { }

  public GetAllEmployees(): Observable<EmployeeViewModel[]> {
    return this._HttpClient.get<EmployeeViewModel[]>(this.apiUri);
  }
}
