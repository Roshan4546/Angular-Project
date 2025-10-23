import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DoctorRoutingModule } from './doctor-routing.module';

// Components
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard';
import { Patients } from './patients/patients';
import { Appointments } from './appointments/appointments';
import { Reports } from './reports/reports';
import { Prescriptions } from './prescriptions/prescriptions';

@NgModule({
  declarations: [
    
    Patients,
    Appointments,
    Reports,
    Prescriptions
  ],
  imports: [
    DoctorDashboardComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }


