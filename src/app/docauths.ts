import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Docauths {
  constructor() { }
  username: string = ""
  password: string = ""

  invalidlogin = true

  authenticate(username: string, password: string) {
    if (username == "tabish" && password == "akhil@04")
    {
      sessionStorage.setItem('username', username)
      return true
    } else
    {

      return false
    }
  }
  isUserLoggedIn() {
    console.log("Docter login successfully.")
    let user = sessionStorage.getItem('username')
    return !(user == null)
  }

  logout() {
    console.log("Docter logout successfully.")
    sessionStorage.removeItem('username')
  }
}
