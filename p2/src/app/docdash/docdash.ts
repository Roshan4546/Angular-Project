import { Component } from '@angular/core';
import { Patient } from '../patient';
import { Patients } from '../patients';
import { Router } from '@angular/router';
import { Docauths } from '../docauths';
import { BookAppointmentService, BookAppointment } from '../bookappointment/bookappointment.service';

@Component({
  selector: 'app-docdash',
  standalone: false,
  templateUrl: './docdash.html',
  styleUrls: ['./docdash.css']
})
export class Docdash {
  patientdetails: Patient[] = [];
  appointments: BookAppointment[] = [];

  constructor(
    private patients: Patients,
    private router: Router,
    private docauth: Docauths,
    private bookService: BookAppointmentService
  ) {}

  ngOnInit() {
    this.getPatients();
    this.getAppointments();
  }

  // ✅ Fetch all patients
  getPatients() {
    this.patients.getPatientList().subscribe(data => {
      this.patientdetails = data;
    });
  }

  // ✅ Fetch all booked appointments
  getAppointments() {
    this.bookService.getAppointments().subscribe(data => {
      this.appointments = data;
    });
  }

  // ✅ Patient Actions
  update(id: number) {
    this.router.navigate(['updatepatient', id]);
  }

  delete(id: number) {
    this.patients.delete(id).subscribe(() => {
      this.getPatients();
    });
  }

  ViewPatient(id: number) {
    this.router.navigate(['viewpatient', id]);
  }

  // ✅ Logout
  logout() {
    this.docauth.logout();
    this.router.navigate(['home']);
  }
}
