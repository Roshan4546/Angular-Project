import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ✅ both form modules here
import { App } from './app';
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
import { Home } from './home/home';
import { About } from './about/about';
import { Docters } from './docters/docters';
import { Blog } from './blog/blog';
import { Contact } from './contact/contact';
import { Department } from './department/department';
import { DepartmentDetail } from './department-detail/department-detail';
import { Chatbot } from './chatbot/chatbot';
import { Nurse } from './nurse/nurse';
import { Hospitalaccouts } from './hospitalaccouts/hospitalaccouts';
import { Maintanacestaff } from './maintanacestaff/maintanacestaff';
import { Ambulatory } from './ambulatory/ambulatory';
import { Pharmacy } from './pharmacy/pharmacy';
import { Accounts } from './accounts/accounts';
import { Servicess } from './servicess/servicess';
import { Header } from './header/header';
import { BookAppointment } from './bookappointment/bookappointment';
import { Readmore } from './readmore/readmore';
import { Patientlogin } from './patientlogin/patientlogin';
@NgModule({
  declarations: [
    App,
    Admindash,
    Appointment,
    CreateAppointment,
    Docdash,
    Createpatients,
    Medicinelist,
    Createmedicine,
    Updatepatient,
    Viewpatient,
    Updatemedicine,
    Doclogin,
    Adminlogin,
    About,
    Docters,
    Blog,
    Contact,
    Department,
    Chatbot,
    Nurse,
    Hospitalaccouts,
    Maintanacestaff,
    Ambulatory,
    Pharmacy,
    Accounts,
    Servicess,
    DepartmentDetail,
    Patientlogin,


  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    RouterLinkActive,
    NgIf,
    NgFor,
    Header,
    Home,
    RouterLink,
    BookAppointment,
    Readmore
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
