import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_services/employee.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee;

  constructor( private employeeService: EmployeeService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.loadEmployee();
  }

  loadEmployee() {
      this.employeeService.getEmployee(+this.route.snapshot.params['id']).subscribe((employee: Employee) => {
        this.employee = employee;
    });
  }

}