import { Component, OnInit } from '@angular/core';
import { Employee } from '../../_models/employee';
import { EmployeeService } from '../../_services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];

  constructor( private employeeService: EmployeeService ) { }

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe((employees: Employee[]) => {
        this.employees = employees;
    });
  }
}
