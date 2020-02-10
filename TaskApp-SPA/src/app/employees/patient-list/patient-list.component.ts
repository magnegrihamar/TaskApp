import { Component, OnInit } from '@angular/core';
import { Employee } from '../../_models/employee';
import { Patient } from '../../_models/patient';
import { EmployeeService } from '../../_services/employee.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  employees: Employee[];
  patients: Patient[];

  constructor( private employeeService: EmployeeService ) { }

  ngOnInit() {
    this.loadPatients();
  }


  loadPatients() {
    this.employeeService.getEmployees().subscribe((employees: Employee[]) => {
        //this.employees = employees;
        this.patients = employees;
    });
  }
}
