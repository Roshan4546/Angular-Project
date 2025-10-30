// create-appointment.component.ts
import { Component } from '@angular/core';
import { Appointment } from '../appointment/appointment';
import { AppointmentData } from '../appointment-data';
import { Appointments } from '../appointments';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  standalone: false,
  templateUrl: './create-appointment.html',
  styleUrls: ['./create-appointment.css']
})
export class CreateAppointment {
    appointmentGen: AppointmentData = new AppointmentData();

  constructor(private appointments: Appointments, private router: Router) { }

  saveAppointment() {
    this.appointments.CreateAppointment(this.appointmentGen).subscribe(data => {
      console.log(data);
      this.goToAppointment();
    });
  }

  onSubmit() {
    this.saveAppointment();
  }

  goToAppointment() {
    this.router.navigate(['/appointment']);
  }
}