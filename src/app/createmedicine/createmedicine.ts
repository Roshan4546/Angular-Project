import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { Medicines } from '../medicines';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createmedicine',
  standalone: false,
  templateUrl: './createmedicine.html',
  styleUrl: './createmedicine.css'
})
export class Createmedicine {

  medicinelist: Medicine = new Medicine()

  constructor(private medicines: Medicines, private router: Router){}
  saveMedicine() {
    this.medicines.createMedicine(this.medicinelist).subscribe(data => {
      console.log(data)
      this.goToViewMedicine()
    })
  }
  onSubmit() {
    this.saveMedicine()
  }
  goToViewMedicine() {
    this.router.navigate(['medicinelist'])
  }
}
