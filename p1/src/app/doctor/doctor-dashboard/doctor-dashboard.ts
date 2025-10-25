import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.html',
  styleUrls: ['./doctor-dashboard.css'],
  imports: [CommonModule]
})
export class DoctorDashboardComponent {
  patientdetails = [
    { id: 1, name: 'Rohan Das', age: 32, blood: 'A+', prescription: 'Paracetamol', dose: '500mg', urgency: 'Low' },
    { id: 2, name: 'Neha Patel', age: 29, blood: 'B+', prescription: 'Amoxicillin', dose: '250mg', urgency: 'Medium' },
  ];

  logout() {
    alert('Doctor logged out');
  }

  update(id: number) {
    alert('Update patient ' + id);
  }

  delete(id: number) {
    alert('Delete patient ' + id);
  }

  ViewPatient(id: number) {
    alert('Viewing patient ' + id);
  }
}
