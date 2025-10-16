import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicines } from '../medicines';

@Component({
  selector: 'app-updatemedicine',
  standalone: false,
  templateUrl: './updatemedicine.html',
  styleUrl: './updatemedicine.css'
})
export class Updatemedicine {

  medicine: Medicine = new Medicine()
  id: number = 0
  constructor(private route: ActivatedRoute, private medicines: Medicines, private router: Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.medicines.getMedicineById(this.id).subscribe(data => {
      this.medicine = data
    })

  }
  onSubmit() {
    this.medicines.updateMedicine(this.id, this.medicine).subscribe(data => {
      console.log(data)
      this.goToMedicineList()
    })
  }
  goToMedicineList() {
    this.router.navigate(['medicinelist'])
  }
}
