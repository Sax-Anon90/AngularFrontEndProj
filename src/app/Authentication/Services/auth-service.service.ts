import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../app/environments/environment.development';
import { AuthRequest } from '../Models/Login/AuthRequest';
import { BaseResponse } from '../../BaseModels/BaseResponse';
import { AuthResponse } from '../Models/Login/AuthResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiUri = '${environment.apiUrl}/Authentication';

  constructor(private _HttpClient:HttpClient) { }

  public AuthenticateUser(authRequest:AuthRequest):Observable<BaseResponse<AuthResponse>>{
    return this._HttpClient.post<BaseResponse<AuthResponse>>(`${this.apiUri}`,authRequest);
  }
}
