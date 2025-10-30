import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-patientlogin',
  standalone:false,
  templateUrl: './patientlogin.html',
  styleUrls: ['./patientlogin.css']
})
export class Patientlogin {
  loginData = { email: '', password: '' };
  private apiUrl = 'http://localhost:8080/api/users/login';

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {}

  onLogin() {
    if (!this.loginData.email || !this.loginData.password) {
      alert('Please fill in both email and password.');
      return;
    }

    this.http.post(this.apiUrl, this.loginData).subscribe({
      next: (response: any) => {
        if (response && response.name) {
          alert('Login successful!');
          this.userService.login(response);  // store user
          this.router.navigate(['/']);
        } else {
          alert('Invalid credentials!');
        }
      },
      error: (error) => {
        console.error('Error:', error);
        alert('Invalid credentials or server error!');
      }
    });
  }
}
