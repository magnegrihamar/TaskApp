import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../_models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  baseUrl = environment.apiUrl;

  constructor( private http: HttpClient ) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.baseUrl + 'patients');
  }

  getPatient(id): Observable<Patient> {
      return this.http.get<Patient>(this.baseUrl + 'patients/' + id );
  }
}
