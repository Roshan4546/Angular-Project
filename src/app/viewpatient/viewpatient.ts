import { Component } from '@angular/core';
import { Patients } from '../patients';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient';

@Component({
  selector: 'app-viewpatient',
  standalone: false,
  templateUrl: './viewpatient.html',
  styleUrl: './viewpatient.css'
})
export class Viewpatient {

  id: number = 0
  patient: Patient = new Patient()
  constructor(private patients: Patients, private route: ActivatedRoute) { }

  ngOnInit():void{
    this.id = this.route.snapshot.params['id']
    this.patients.getPatientById(this.id).subscribe(data => {
      this.patient=data
    })
  }
}
