import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  standalone: false,
  templateUrl: './department-detail.html',
  styleUrls: ['./department-detail.css']
})


export class DepartmentDetail {
  departmentName: string = '';
  department: any;

  departments = [
    { title: 'Cardiology', desc: 'Specialized in heart and vascular care.', img: 'assets/img/cardiology.jpg' },
    { title: 'Neurology', desc: 'Advanced brain and nervous system care.', img: 'assets/img/neurology.jpg' },
    { title: 'Orthopedics', desc: 'Comprehensive bone and joint treatments.', img: 'assets/img/orthopedics.jpg' },
    { title: 'Oncology', desc: 'Dedicated cancer diagnosis and treatment.', img: 'assets/img/oncology.jpg' },
    { title: 'Radiology', desc: 'State-of-the-art imaging and diagnostics.', img: 'assets/img/radiology.jpg' },
    { title: 'Dermatology', desc: 'Expert skincare and dermatological solutions.', img: 'assets/img/dermatology.jpg' },
    { title: 'Emergency', desc: '24/7 emergency trauma and critical care.', img: 'assets/img/emergency.jpg' },
    { title: 'Laboratory Services', desc: 'Comprehensive pathology and testing facilities.', img: 'assets/img/laboratory.jpg' },
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.departmentName = this.route.snapshot.paramMap.get('name')!;
    this.department = this.departments.find(d =>
      d.title.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-') === this.departmentName
    );
  }

  bookAppointment() {
    this.router.navigate(['/bookappointment']);
  }
}
