import { Component } from '@angular/core';
import { FormBuilder, Validators,FormGroup  } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthServiceService } from '../../../Services/auth-service.service';
import { BaseResponse } from '../../../../BaseModels/BaseResponse';
import { AuthResponse } from '../../../Models/Login/AuthResponse';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

 
  constructor(private fb: FormBuilder,
    private _AuthServiceService: AuthServiceService,
    private _Router: Router
  ) { }

  hidePassword = true;
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/)
        ]
      ]
    });

  }

  public AuthenticateUser(): void {

     if (this.loginForm.invalid) return;

    this._AuthServiceService.AuthenticateUser(this.loginForm.value)
      .pipe(
        tap((res: BaseResponse<AuthResponse>) => {
          if (res.succeeded && res.responseData) {
            // Save token to local storage
            localStorage.setItem('token', res.responseData.token);
            localStorage.setItem('employeeId', res.responseData.employeeId.toString());
            localStorage.setItem('fullName', res.responseData.fullName);

            // Navigate to employees page
            this._Router.navigate(['/employees']);
          } else {
            alert(res.message || 'Login failed');
          }
        })
      )
      .subscribe();
  }
}
