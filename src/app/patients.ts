import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class Patients {
  private baseUrl = "http://localhost:8080/api/patient";

  constructor(private httpClient: HttpClient) { }

  getPatientList(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseUrl}/getpatients`);
  }

  delete(id: number): Observable<object> {
    return this.httpClient.delete(`${this.baseUrl}/deletepatients/${id}`);
  }

  CreatePatient(patient: Patient): Observable<Patient> {
    return this.httpClient.post<Patient>(`${this.baseUrl}/Createpatients`, patient);
  }

  getPatientById(id: number): Observable<Patient> {
    return this.httpClient.get<Patient>(`${this.baseUrl}/patients/${id}`);
  }

  Updatepatient(id: number, patient: Patient): Observable<Patient> {
    return this.httpClient.put<Patient>(`${this.baseUrl}/Updatepatients/${id}`, patient);
  }
  
}
