import { Component } from '@angular/core';
import { Adminauths } from '../adminauths';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  standalone: false,
  templateUrl: './adminlogin.html',
  styleUrl: './adminlogin.css'
})
export class Adminlogin {
  username2: string = ""
  password: string = ""

  invalidLogin = false

  constructor(private adminauths: Adminauths, private router: Router) { }
  checkLogin() {

    if (this.adminauths.authenticate(this.username2, this.password))
    {
      this.router.navigate(['admin'])
      this.invalidLogin = false
    }
    else
    {
      this.invalidLogin = true
      alert("Wrong informations")
      this.router.navigate(['home'])
    }
  }
}
