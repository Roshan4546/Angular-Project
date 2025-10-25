import { Patients } from './../patients';
import { Component } from '@angular/core';
import { Patient } from '../patient';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatepatient',
  standalone: false,
  templateUrl: './updatepatient.html',
  styleUrl: './updatepatient.css'
})
export class Updatepatient {
  id: number = 0;
  constructor(private route: ActivatedRoute, private patients: Patients, private router: Router) { }
  Updatepatient: Patient = new Patient();
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.patients.getPatientById(this.id).subscribe(data => {
      this.Updatepatient = data
    })
  }

  onSubmit() {
    this.patients.Updatepatient(this.id, this.Updatepatient).subscribe(data => {
      console.log(data)
      this.goToDocDash()
    })
  }

  goToDocDash() {
    this.router.navigate(['/docdash'])
  }
}
