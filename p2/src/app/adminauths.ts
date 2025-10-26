import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Adminauths {
  constructor() { }
  username2: string = ""
  password: string = ""

  invalidlogin = true
  authenticate(username2: string, password: string) {
    if (username2 == "Abhilipsa" && password == "Abhi")
    {
      sessionStorage.setItem('username2', username2)
      return true
    }
    else if (username2 == "Roshan" && password == "patra")
    {
      sessionStorage.setItem('username2', username2)
      return true
    }
    else
    {
      return false
    }
  }

  isUserLoggedIn() {
    console.log("User login successfully..")
    let user = sessionStorage.getItem('username2')
    return !(user == null)
  }
  logout() {
    console.log("Logout successfully..")
    sessionStorage.removeItem("username2")
  }
}
