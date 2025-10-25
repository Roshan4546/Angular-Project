// appointment.component.ts
import { AppointmentData } from './../appointment-data';
import { Component } from '@angular/core';
import { Appointments } from '../appointments';

@Component({
  selector: 'app-appointment',
  standalone: false,
  templateUrl: './appointment.html',
  styleUrls: ['./appointment.css']
})
export class Appointment {
  appointmentDetail: AppointmentData[] = [];

  constructor(private appointments: Appointments) { }

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments() {
    this.appointments.getAllAppointments().subscribe(data => {
      this.appointmentDetail = data;
    });
  }

  delete(id: number) {
    const row = document.querySelector(`tr[data-id='${id}']`);
    if (row) {
      row.classList.add('fade-out');
      setTimeout(() => {
        this.appointments.deleteAppointment(id).subscribe(() => {
          this.getAppointments();
        });
      }, 400);
    } else {
      this.appointments.deleteAppointment(id).subscribe(() => {
        this.getAppointments();
      });
    }
  }
}