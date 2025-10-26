import { Component, OnInit } from '@angular/core';
import { Medicines } from '../medicines';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicinelist',
  standalone: false,
  templateUrl: './medicinelist.html',
  styleUrls: ['./medicinelist.css']
})
export class Medicinelist implements OnInit {
  medicinedetail: Medicine[] = [];
  
  constructor(private medicines: Medicines, private router: Router) { }

  ngOnInit(): void {
    this.getMedicine();
  }

  getMedicine() {
    this.medicines.getMedicines().subscribe(data => {
      // Convert to number if the backend returns stock as a string
      this.medicinedetail = data.map((med: any) => ({
        ...med,
        stock: +med.stock   // force number (no TS error because type now matches)
      }));
    });
  }

  update(id: number) {
    this.router.navigate(['updatemedicine', id]);
  }

  delete(id: number) {
    this.medicines.delete(id).subscribe(data => {
      console.log(data);
      this.getMedicine();
    });
  }
}
