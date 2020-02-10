import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../../_models/patient';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent implements OnInit {
  @Input() patient: Patient;
  constructor() { }

  ngOnInit() {
  }

}
