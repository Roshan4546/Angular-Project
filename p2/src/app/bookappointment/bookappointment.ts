import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from '../header/header';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.html',
  styleUrls: ['./bookappointment.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, Header]
})
export class BookAppointment implements OnInit {

  // ✅ Inject UserService publicly
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    public userService: UserService
  ) { }

  // List of specialities
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

  // Appointment model
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

  private apiUrl = 'http://localhost:8080/api/bookappointments';

  ngOnInit() {
    // Pre-fill speciality from query params
    this.route.queryParams.subscribe((params: any) => {
      const speciality = params['speciality'];
      if (speciality) this.appointment.speciality = speciality;
    });
  }

  // ✅ Getter for template
  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  // Submit appointment
  submitAppointment() {
    if (!this.userService.isLoggedIn()) {
      alert('⚠ You must login first to book an appointment!');
      this.router.navigate(['/patientlogin']);
      return;
    }

    const { fullName, email, gender, age, contact, speciality, date, time, terms } = this.appointment;
    if (!(fullName && email && gender && age && contact && speciality && date && time && terms)) {
      alert('⚠ Please fill all required fields and accept the terms.');
      return;
    }

    this.http.post(this.apiUrl, this.appointment).subscribe({
      next: () => {
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
    if (printContents) {
      const popup = window.open('', '_blank');
      popup?.document.write(`
        <html>
  <head>
    <title>Appointment Receipt</title>
    <style>
      body {
        font-family: "Segoe UI", Arial, sans-serif;
        background: linear-gradient(135deg, #f3f4f6, #ffffff);
        padding: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .receipt-container {
        background: #fff;
        width: 450px;
        border-radius: 15px;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }

      .header {
        background: linear-gradient(135deg, #e63946, #d63345);
        color: white;
        text-align: center;
        padding: 18px;
        font-size: 22px;
        font-weight: bold;
        letter-spacing: 1px;
      }

      .content {
        padding: 25px 30px;
      }

      h3 {
        color: #d63345;
        text-align: center;
        border-bottom: 2px solid #d63345;
        padding-bottom: 6px;
        margin-bottom: 15px;
        font-size: 20px;
      }

      p {
        margin: 8px 0;
        font-size: 16px;
        color: #333;
      }

      .highlight {
        font-weight: 600;
        color: #000;
      }

      .footer {
        text-align: center;
        background: #f8f9fa;
        padding: 12px;
        border-top: 1px solid #eee;
        color: #555;
        font-size: 14px;
      }

      .footer span {
        color: #d63345;
        font-weight: bold;
      }

      /* Optional print-friendly style */
      @media print {
        body {
          background: #fff;
          padding: 0;
        }
        .receipt-container {
          box-shadow: none;
          border: 1px solid #ccc;
        }
      }
    </style>
  </head>
  <body>
    <div class="receipt-container">
      <div class="header">City Care Hospital</div>
      <div class="content">
        <h3>Appointment Receipt</h3>
        ${printContents}
      </div>
      <div class="footer">
        Thank you for booking with <span>City Care ❤</span><br />
        Wishing you good health!
      </div>
    </div>
  </body>
</html>

      `);
      popup?.document.close();
      popup?.print();
    }
  }
}
