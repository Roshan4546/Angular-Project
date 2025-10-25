import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentData } from './appointment-data';

@Injectable({
  providedIn: 'root'
})
export class Appointments {

  private baseUrl = "http://localhost:8080/api/appointment";

  constructor(private httpClient: HttpClient) { }

  CreateAppointment(appointmentdata: AppointmentData): Observable<AppointmentData> {
    return this.httpClient.post<AppointmentData>(`${this.baseUrl}/createappointments`, appointmentdata);
  }

  getAllAppointments(): Observable<AppointmentData[]> {
    return this.httpClient.get<AppointmentData[]>(`${this.baseUrl}/getappointments`);
  }

  deleteAppointment(id: number): Observable<object> {
    return this.httpClient.delete(`${this.baseUrl}/deleteappointments/${id}`);
  }
}
