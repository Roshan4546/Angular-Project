import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from "../app-routing-module";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterLink], // remove AppRoutingModule
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class Signup {
  roles = [
    'DOCTOR', 'USER',
  ];

  selectedRole: string | null = null;
  showForm = false;

  signupData = {
    name: '',
    email: '',
    password: '',
    phone: '',
    gender: '',
    role: ''
  };

  constructor(private http: HttpClient) { }

  onSignup() {
    if (!this.signupData.name || !this.signupData.email || !this.signupData.password || !this.selectedRole) {
      alert('Please fill all required fields before submitting.');
      return;
    }

    this.signupData.role = this.selectedRole;

    this.http.post('http://localhost:8080/api/users/signup', this.signupData)
      .subscribe({
        next: (res) => {
          console.log('User registered:', res);
          alert(`${this.selectedRole} registered successfully!`)  // <-- Corrected here
        },
        error: (err) => {
          console.error('Registration error:', err);
          alert('Registration failed: ' + (err.error?.message || err.statusText));
        }
      });
  }
}