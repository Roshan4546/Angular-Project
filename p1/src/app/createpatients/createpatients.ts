import { Component } from '@angular/core';
import { Patient } from '../patient';
import { Patients } from '../patients';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpatients',
  standalone: false,
  templateUrl: './createpatients.html',
  styleUrl: './createpatients.css'
})
export class Createpatients {
  patient: Patient = new Patient();
  constructor(private patients: Patients, private router:Router) { }
  savePatient() {
    this.patients.CreatePatient(this.patient).subscribe(data => {
      console.log(data)
      this.goToPatientList()



    })
  }

  onSubmit() {
    this.savePatient()
  }
  goToPatientList() {
    this.router.navigate(['/docdash'])
  }
}
