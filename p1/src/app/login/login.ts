import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginData = { email: '', password: '' };
  errorMsg = '';

  constructor(private router: Router) { }

  onLogin() {
    // Demo staff credentials (replace with API or backend auth)
    const staffAccounts = [
      { email: 'doctor@citycare.com', password: 'doctor123', role: 'Doctor' },
      { email: 'nurse@citycare.com', password: 'nurse123', role: 'Nurse' },
      { email: 'admin@citycare.com', password: 'admin123', role: 'Admin' },
    ];

    const foundUser = staffAccounts.find(
      (user) =>
        user.email === this.loginData.email &&
        user.password === this.loginData.password
    );

    if (foundUser) {
      localStorage.setItem('staffUser', JSON.stringify(foundUser));
      this.router.navigate(['/dashboard']); // Redirect after login
    } else {
      this.errorMsg = 'Invalid email or password!';
    }
  }
}
