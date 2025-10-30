import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BookAppointment {
    id: number;
    fullName: string;
    email: string;
    gender: string;
    age: string;
    contact: string;
    speciality: string;
    date: string;
    time: string;
    message: string;
    status?: string;
}

@Injectable({
    providedIn: 'root'
})
export class BookAppointmentService {
    private apiUrl = 'http://localhost:8080/api/bookappointments'; // ✅ backend URL

    constructor(private http: HttpClient) { }

    getAppointments(): Observable<BookAppointment[]> {
        return this.http.get<BookAppointment[]>(this.apiUrl);
    }

    saveAppointment(data: BookAppointment): Observable<BookAppointment> {
        return this.http.post<BookAppointment>(this.apiUrl, data);
    }
}
