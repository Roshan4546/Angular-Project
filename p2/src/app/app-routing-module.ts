import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Admindash } from './admindash/admindash';
import { Appointment } from './appointment/appointment';
import { CreateAppointment } from './create-appointment/create-appointment';
import { Docdash } from './docdash/docdash';
import { Createpatients } from './createpatients/createpatients';
import { Medicinelist } from './medicinelist/medicinelist';
import { Createmedicine } from './createmedicine/createmedicine';
import { Updatepatient } from './updatepatient/updatepatient';
import { Viewpatient } from './viewpatient/viewpatient';
import { Updatemedicine } from './updatemedicine/updatemedicine';
import { Doclogin } from './doclogin/doclogin';
import { Adminlogin } from './adminlogin/adminlogin';
import { Adminauthguards } from './adminauthguards';
import { Doctauthguars } from './doctauthguars';
import { Home } from './home/home';
import { About } from './about/about';
import { Docters } from './docters/docters';
import { Blog } from './blog/blog';
import { Department } from './department/department';
import { Contact } from './contact/contact';
import { Chatbot } from './chatbot/chatbot';
import { Nurse } from './nurse/nurse';
import { Hospitalaccouts } from './hospitalaccouts/hospitalaccouts';
import { Maintanacestaff } from './maintanacestaff/maintanacestaff';
import { Ambulatory } from './ambulatory/ambulatory';
import { Pharmacy } from './pharmacy/pharmacy';
import { Signup } from './signup/signup';
import { Servicess } from './servicess/servicess';
import { BookAppointment } from './bookappointment/bookappointment';
import { Readmore } from './readmore/readmore';
import { DepartmentDetail } from './department-detail/department-detail';

const routes: Routes = [
  // Admin
  { path: 'adminlogin', component: Adminlogin },
  { path: 'admin', component: Admindash, canActivate: [Adminauthguards] },
  { path: 'appointment', component: Appointment, canActivate: [Adminauthguards] },
  { path: 'create-appointment', component: CreateAppointment, canActivate: [Adminauthguards] },

  // Doctor / public pages
  { path: 'home', component: Home },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'docdash', component: Docdash, canActivate: [Doctauthguars] },
  { path: 'doclogin', component: Doclogin },
  { path: 'createpatient', component: Createpatients, canActivate: [Doctauthguars] },
  { path: 'updatepatient/:id', component: Updatepatient, canActivate: [Doctauthguars] },
  { path: 'viewpatient/:id', component: Viewpatient, canActivate: [Doctauthguars] },
  { path: 'medicinelist', component: Medicinelist, canActivate: [Doctauthguars] },
  { path: 'createmedicine', component: Createmedicine, canActivate: [Doctauthguars] },
  { path: 'updatemedicine/:id', component: Updatemedicine, canActivate: [Doctauthguars] },

  { path: 'readmore/:title', component: Readmore },
  { path: 'about', component: About },
  { path: 'doctors', component: Docters },
  { path: 'blog', component: Blog },
  { path: 'departments', component: Department }, // list page
  { path: 'departments/:title', component: DepartmentDetail }, // detail page (uses :title)
  { path: 'contact', component: Contact },
  { path: 'chatbot', component: Chatbot },
  { path: 'nurselogin', component: Nurse },
  { path: 'hospitallogin', component: Hospitalaccouts },
  { path: 'maintanacelogin', component: Maintanacestaff },
  { path: 'ambulatorylogin', component: Ambulatory },
  { path: 'pharmacylogin', component: Pharmacy },
  { path: 'signup', component: Signup },
  { path: 'services', component: Servicess },
  { path: 'bookappointment', component: BookAppointment },

  // fallback
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
