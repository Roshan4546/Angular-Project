import { Component } from '@angular/core';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.html',
  styleUrls: ['./bookappointment.css'],
  standalone:false
})
export class BookAppointment {
  specialities = [
    { title: 'Cardiology' }, { title: 'Neurology' }, { title: 'Orthopedics' },
    { title: 'Dentistry' }, { title: 'Pediatrics' }, { title: 'Oncology' },
    { title: 'Dermatology' }, { title: 'Emergency' }, { title: 'Radiology' },
    { title: 'Urology' }, { title: 'Gastroenterology' }, { title: 'Ophthalmology' },
    { title: 'ENT (Ear, Nose, Throat)' }, { title: 'Psychiatry' }, { title: 'Physiotherapy' },
    { title: 'Nephrology' }, { title: 'Pulmonology' }, { title: 'Endocrinology' },
    { title: 'Rheumatology' }, { title: 'Plastic Surgery' }, { title: 'Nutrition & Dietetics' },
    { title: 'Vaccination Center' }, { title: 'Laboratory Services' }
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

  submitAppointment() {
    const { fullName, email, gender, age, contact, speciality, date, time, terms } = this.appointment;
    if (fullName && email && gender && age && contact && speciality && date && time && terms)
    {
      this.showReceipt = true;
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else
    {
      alert('⚠️ Please fill all required fields and accept the terms.');
    }
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
            <div class="footer">Thank you for booking with HopeCare ❤️</div>
          </body>
        </html>
      `);
      popup?.document.close();
      popup?.print();
    }
  }
}
