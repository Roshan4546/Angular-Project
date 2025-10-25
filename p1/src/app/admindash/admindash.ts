import { Patients } from './../patients';
import { Component } from '@angular/core';
import { Patient } from '../patient';
import { Adminauths } from '../adminauths';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admindash',
  standalone: false,
  templateUrl: './admindash.html',
  styleUrl: './admindash.css'
})
export class Admindash {

  patientdetails: Patient[] = [];
  constructor(private patients: Patients, private adminauths: Adminauths, private router: Router) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this.patients.getPatientList().subscribe(data => {
      this.patientdetails = data
    })
  }

  delete(id: number) {
    this.patients.delete(id).subscribe(data => {
      console.log(data)
      this.getPatients();
    })
  }
  logout() {
    this.adminauths.logout()
    this.router.navigate(['home'])
  }
}
