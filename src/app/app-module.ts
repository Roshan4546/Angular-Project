import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';

// Components
import { App } from './app';
import { Admindash } from './admindash/admindash';
import { Appointment } from './appointment/appointment';
import { CreateAppointment } from './create-appointment/create-appointment';
import { Docdash } from './docdash/docdash';
import { Createpatients } from './createpatients/createpatients';
import { Medicinelist } from './medicinelist/medicinelist';
import { Createmedicine } from './createmedicine/createmedicine';
import { Viewpatient } from './viewpatient/viewpatient';
import { Home } from './home/home';
import { About } from './about/about';
import { Docters } from './docters/docters';
import { Blog } from './blog/blog';
import { Contact } from './contact/contact';
import { Department } from './department/department';
import { Chatbot } from './chatbot/chatbot';
import { Hospitalaccouts } from './hospitalaccouts/hospitalaccouts';
import { Maintanacestaff } from './maintanacestaff/maintanacestaff';
import { Ambulatory } from './ambulatory/ambulatory';
import { Pharmacy } from './pharmacy/pharmacy';
import { Accounts } from './accounts/accounts';
import { Servicess } from './servicess/servicess';
import { Header } from './header/header';
import { BookAppointment } from './bookappointment/bookappointment';
import { DepartmentDetail } from './department-detail/department-detail';
import { Login } from './login/login'; // ✅ Login added

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
    Viewpatient,
    About,
    Docters,
    Blog,
    Contact,
    Department,
    Chatbot,
    Hospitalaccouts,
    Maintanacestaff,
    Ambulatory,
    Pharmacy,
    Accounts,
    Servicess,
    Header,
    BookAppointment,
    DepartmentDetail,
    Login // ✅ Declared here
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    Home
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [App]
})
export class AppModule { }
