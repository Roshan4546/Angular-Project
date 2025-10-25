import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Docauths } from '../docauths';

@Component({
  selector: 'app-doclogin',
  standalone: false,
  templateUrl: './doclogin.html',
  styleUrl: './doclogin.css'
})
export class Doclogin {
  username: string = "";
  password: string = "";

  constructor(private router: Router, private docauths: Docauths) { }
  invalidLogin = false

  checkLogin() {
    if (this.docauths.authenticate(this.username, this.password))
    {
      this.router.navigate(['docdash'])
      this.invalidLogin = false
    } else
    {
      this.invalidLogin = true
      alert("Invalid informations")
      this.router.navigate(['home'])
    }
  }
}
