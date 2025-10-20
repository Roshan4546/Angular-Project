import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  standalone: false,
  templateUrl: './department-detail.html',
  styleUrls: ['./department-detail.css']
})
export class DepartmentDetail {
  

  bookAppointment() {
    this.router.navigate(['/bookappointment'], {
      queryParams: { speciality: this.department.title }
    });
  }
}
