import { Component } from '@angular/core';
import { Medicines } from '../medicines';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicinelist',
  standalone: false,
  templateUrl: './medicinelist.html',
  styleUrl: './medicinelist.css'
})
export class Medicinelist {

  medicinedetail: Medicine[] = []
  constructor(private medicines: Medicines, private router: Router) { }

  ngOnInit(): void {
    this.getMedicine()
  }

  getMedicine() {
    this.medicines.getMedicines().subscribe(data => {
      this.medicinedetail = data
    })
  }
  update(id: number) {
    this.router.navigate(['updatemedicine',id])
  }

  delete(id: number) {
    this.medicines.delete(id).subscribe(data => {
      console.log(data)
      this.getMedicine()
    })
  }
}
