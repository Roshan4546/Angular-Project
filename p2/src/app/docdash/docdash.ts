

import { Component } from '@angular/core';
import { Patient } from '../patient';
import { Patients } from '../patients';
import { Router } from '@angular/router';
import { Docauths } from '../docauths';

@Component({
  selector: 'app-docdash',
  standalone: false,
  templateUrl: './docdash.html',
  styleUrl: './docdash.css'
})
export class Docdash {
  constructor(private patients: Patients, private router: Router, private docauth: Docauths) { }
  patientdetails: Patient[] = []

  ngOnInit() {
    this.getPatients()
  }
  getPatients() {
    this.patients.getPatientList().subscribe(data => {
      this.patientdetails = data
    })
  }
  update(id: number) {
    this.router.navigate(['updatepatient', id])

  }
  delete(id: number) {
    this.patients.delete(id).subscribe(data => {
      console.log(data)
      this.getPatients()
    })
  }
  ViewPatient(id: number) {
    this.router.navigate([`viewpatient`, id])

  }
  logout() {
    this.docauth.logout()
    this.router.navigate(['home'])
  }
}
