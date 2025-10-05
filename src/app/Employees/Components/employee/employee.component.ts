import { Component } from '@angular/core';
import { EmployeeViewModel } from '../../Models/EmployeeViewModel';
import { EmployeeService } from '../../Services/employee.service';
import { DxDataGridComponent, DxiDataGridColumnComponent } from 'devextreme-angular/ui/data-grid';
import { DxDataGridModule } from 'devextreme-angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: false,
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {


  constructor(private _employeeService: EmployeeService) {}

  employees: EmployeeViewModel[] = [];


ngOnInit(): void {
    this._employeeService.GetAllEmployees().subscribe({
      next: (data) => this.employees = data,
      error: (err) => console.error(err)
    });
  }
}
