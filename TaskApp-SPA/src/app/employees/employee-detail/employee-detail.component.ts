import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/_models/employee';
import { Patient } from 'src/app/_models/patient';
import { EmployeeService } from 'src/app/_services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../_services/patient.service';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee;
  patients: Patient[];
  patient: Patient;
  
  

  patientList: Array<{ patientId: number, patientName: string }> = [];
 
  constructor( private employeeService: EmployeeService, private patientService: PatientService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.loadEmployee();
    this.loadPatients();
  }

  loadEmployee() {
      this.employeeService.getEmployee(+this.route.snapshot.params['id']).subscribe((employee: Employee) => {
        this.employee = employee;
    });
  }

  loadPatients() {
      //this.patientService.getPatients().subscribe((patients: Patient[]) => {
      //  this.patients = patients;
      this.patientService.getPatient(+this.route.snapshot.params['id']).subscribe((patient: Patient) => {
        this.patient = patient;

        if(this.patient.employeeID == this.employee.id )
        {
          //this.patients.push( this.patient.employeeID );
        }
    });
  }
}