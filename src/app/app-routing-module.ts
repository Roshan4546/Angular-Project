import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { Admindash } from './admindash/admindash';
import { Appointment } from './appointment/appointment';
import { CreateAppointment } from './create-appointment/create-appointment';
import { Docdash } from './docdash/docdash';
import { Createpatients } from './createpatients/createpatients';
import { Medicinelist } from './medicinelist/medicinelist';
import { Createmedicine } from './createmedicine/createmedicine';
import { Viewpatient } from './viewpatient/viewpatient';
import { Adminauthguards } from './adminauthguards';
import { Doctauthguars } from './doctauthguars';
import { Home } from './home/home';
import { About } from './about/about';
import { Docters } from './docters/docters';
import { Blog } from './blog/blog';
import { Department } from './department/department';
import { Contact } from './contact/contact';
import { Chatbot } from './chatbot/chatbot';
import { Hospitalaccouts } from './hospitalaccouts/hospitalaccouts';
import { Maintanacestaff } from './maintanacestaff/maintanacestaff';
import { Ambulatory } from './ambulatory/ambulatory';
import { Pharmacy } from './pharmacy/pharmacy';
import { Signup } from './signup/signup';
import { Servicess } from './servicess/servicess';
import { BookAppointment } from './bookappointment/bookappointment';
import { DepartmentDetail } from './department-detail/department-detail';
import { Login } from './login/login'; // ✅ Login page import

const routes: Routes = [
  // Admin
  { path: "admin", component: Admindash, canActivate: [Adminauthguards] },
  { path: "appointment", component: Appointment, canActivate: [Adminauthguards] },
  { path: "create-appointment", component: CreateAppointment, canActivate: [Adminauthguards] },

  // Doctor
  { path: "home", component: Home },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "docdash", component: Docdash, canActivate: [Doctauthguars] },
  { path: "createpatient", component: Createpatients, canActivate: [Doctauthguars] },
  { path: "viewpatient/:id", component: Viewpatient, canActivate: [Doctauthguars] },
  { path: "medicinelist", component: Medicinelist, canActivate: [Doctauthguars] },
  { path: "createmedicine", component: Createmedicine, canActivate: [Doctauthguars] },

  // Departments
  { path: "departments", component: Department },
  { path: "departments/:name", component: DepartmentDetail },

  // Public Pages
  { path: "about", component: About },
  { path: "doctors", component: Docters },
  { path: "blog", component: Blog },
  { path: "contact", component: Contact },
  { path: "services", component: Servicess },
  { path: "bookappointment", component: BookAppointment },

  // Other Sections
  { path: "chatbot", component: Chatbot },
  { path: "hospitallogin", component: Hospitalaccouts },
  { path: "maintanacelogin", component: Maintanacestaff },
  { path: "ambulatorylogin", component: Ambulatory },
  { path: "pharmacylogin", component: Pharmacy },
  { path: "signup", component: Signup },

  // ✅ New Staff Login Page
  { path: "login", component: Login },

  // 404 fallback (optional)
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
