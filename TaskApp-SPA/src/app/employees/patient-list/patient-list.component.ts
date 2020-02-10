import { Component, OnInit } from '@angular/core';
import { Employee } from '../../_models/employee';
import { PatientService } from '../../_services/patient.service';
import { Patient } from 'src/app/_models/patient';



@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Patient[];
  

  constructor( private patientService: PatientService ) { }

  ngOnInit() {
    this.loadPatients();
    
  }
  
  loadPatients() {
    this.patientService.getPatients().subscribe((patients: Patient[]) => {
        this.patients = patients;
    });
  } 
}
