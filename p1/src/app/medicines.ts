import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class Medicines {
  private baseUrl = "http://localhost:8080/api/medicine";

  constructor(private httpclient: HttpClient) { }

  getMedicines(): Observable<Medicine[]> {
    return this.httpclient.get<Medicine[]>(`${this.baseUrl}/getmedicines`);
  }

  createMedicine(medicine: Medicine): Observable<Medicine> {
    return this.httpclient.post<Medicine>(`${this.baseUrl}/createmedicine`, medicine);
  }

  getMedicineById(id: number): Observable<Medicine> {
    return this.httpclient.get<Medicine>(`${this.baseUrl}/medicines/${id}`);
  }

  updateMedicine(id: number, medicine: Medicine): Observable<object> {
    return this.httpclient.put<Medicine>(`${this.baseUrl}/updatemedicines/${id}`, medicine);
  }
  delete(id: number) {
    return this.httpclient.delete<Medicine>(`${this.baseUrl}/deletemedicines/${id}`);

  }

}
