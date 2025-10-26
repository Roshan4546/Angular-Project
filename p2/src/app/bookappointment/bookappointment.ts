import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from '../header/header';
import { RouterModule, RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.html',
  styleUrls: ['./bookappointment.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class BookAppointment implements OnInit {
  specialities = [
    { title: 'Cardiology' }, { title: 'Neurology' }, { title: 'Orthopedics' },
    { title: 'Dentistry' }, { title: 'Pediatrics' }, { title: 'Oncology' },
    { title: 'Dermatology' }, { title: 'Emergency' }, { title: 'Radiology' },
    { title: 'Urology' }, { title: 'Gastroenterology' }, { title: 'Ophthalmology' },
    { title: 'ENT (Ear, Nose, Throat)' }, { title: 'Psychiatry' },
    { title: 'Physiotherapy' }, { title: 'Nephrology' },
    { title: 'Pulmonology' }, { title: 'Endocrinology' },
    { title: 'Rheumatology' }, { title: 'Plastic Surgery' },
    { title: 'Nutrition & Dietetics' }, { title: 'Vaccination Center' },
    { title: 'Laboratory Services' }
  ];

  appointment = {
    fullName: '',
    email: '',
    gender: '',
    age: '',
    contact: '',
    speciality: '',
    date: '',
    time: '',
    message: '',
    terms: false
  };

  showReceipt = false;

  private apiUrl = 'http://localhost:8080/api/bookappointments'; // Spring Boot API

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      const speciality = params['speciality'];
      if (speciality) this.appointment.speciality = speciality;
    });
  }

  submitAppointment() {
    // Validate required fields
    const { fullName, email, gender, age, contact, speciality, date, time, terms } = this.appointment;
    if (!(fullName && email && gender && age && contact && speciality && date && time && terms))
    {
      alert('⚠ Please fill all required fields and accept the terms.');
      return;
    }

    // Send to backend
    this.http.post(this.apiUrl, this.appointment).subscribe({
      next: (res) => {
        this.showReceipt = true;
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      },
      error: (err) => {
        console.error('Error booking appointment:', err);
        alert('❌ Failed to book appointment. Please try again.');
      }
    });
  }

  printReceipt() {
    const printContents = document.getElementById('receipt')?.innerHTML;
    if (printContents)
    {
      const popup = window.open('', '_blank');
      popup?.document.write(`
        <html>
          <head>
            <title>Appointment Receipt</title>
            <style>
              body { font-family: Arial, sans-serif; background: #f9f9f9; padding: 25px; }
              h3 { color: #d63345; text-align: center; }
              p { margin: 5px 0; font-size: 15px; }
              .footer { text-align: center; margin-top: 15px; color: #555; }
            </style>
          </head>
          <body>
            ${printContents}
            <div class="footer">Thank you for booking with HopeCare ❤</div>
          </body>
        </html>
      `);
      popup?.document.close();
      popup?.print();
    }
  }
}
